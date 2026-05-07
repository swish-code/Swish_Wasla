import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { Bell, X, Check, Trash2, Info, AlertTriangle, AlertCircle, CheckCircle2, Volume2, VolumeX, History } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Notification {
  id: number;
  senderName: string;
  actionType: string;
  section: string;
  details: string;
  createdAt: string;
  isRead?: boolean;
}

export default function NotificationCenter() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [toasts, setToasts] = useState<Notification[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isSoundEnabled, setIsSoundEnabled] = useState(() => {
    const saved = localStorage.getItem('notif-sound');
    return saved === null ? true : saved === 'true';
  });
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const socketRef = useRef<any>(null);

  useEffect(() => {
    // Fetch initial notifications
    fetch('/api/notifications')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setNotifications(data);
        } else {
          console.error('Expected array for notifications, got:', data);
          setNotifications([]);
        }
      })
      .catch(err => {
        console.error('Failed to fetch notifications:', err);
        setNotifications([]);
      });

    // Initialize Socket.IO
    socketRef.current = io(window.location.origin);

    socketRef.current.on('notification', (notif: Notification) => {
      setNotifications(prev => {
        const current = Array.isArray(prev) ? prev : [];
        return [notif, ...current.slice(0, 49)];
      });
      setToasts(prev => [...(Array.isArray(prev) ? prev : []), notif]);
      
      if (isSoundEnabled && audioRef.current) {
        audioRef.current.play().catch(e => console.log('Sound blocked by browser'));
      }
    });

    return () => {
      if (socketRef.current) socketRef.current.disconnect();
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('notif-sound', isSoundEnabled.toString());
  }, [isSoundEnabled]);

  const removeToast = (id: number) => {
    setToasts(prev => (Array.isArray(prev) ? prev.filter(t => t.id !== id) : []));
  };

  const markAsRead = (id?: number) => {
    fetch('/api/notifications/mark-read', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ notificationId: id }),
    })
    .then(() => {
      setNotifications(prev => {
        const current = Array.isArray(prev) ? prev : [];
        if (id) {
          return current.map(n => n.id === id ? { ...n, isRead: true } : n);
        } else {
          return current.map(n => ({ ...n, isRead: true }));
        }
      });
    });
  };

  const getActionIcon = (type: string) => {
    switch (type) {
      case 'إضافة': return <CheckCircle2 className="text-green-500" size={18} />;
      case 'تعديل':
      case 'تحديث': return <Info className="text-blue-500" size={18} />;
      case 'حذف': return <AlertCircle className="text-red-500" size={18} />;
      default: return <AlertTriangle className="text-yellow-500" size={18} />;
    }
  };

  const unreadCount = Array.isArray(notifications) ? notifications.filter(n => !n.isRead).length : 0;
  const safeNotifications = Array.isArray(notifications) ? notifications : [];

  return (
    <>
      <audio ref={audioRef} src="https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3" />

      {/* Bell Trigger */}
      <div className="fixed bottom-6 left-6 z-[101]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative p-4 bg-white dark:bg-gray-900 rounded-full shadow-2xl hover:shadow-blue-500/20 border border-gray-100 dark:border-gray-800 transition-all hover:scale-110 group"
        >
          <Bell className={`text-gray-600 dark:text-gray-400 group-hover:text-blue-500 transition-colors ${unreadCount > 0 ? 'animate-bounce' : ''}`} />
          {unreadCount > 0 && (
            <span className="absolute top-2 right-2 w-5 h-5 bg-red-500 text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white dark:border-gray-900">
              {unreadCount > 9 ? '+9' : unreadCount}
            </span>
          )}
        </button>
      </div>

      {/* Floating Toasts */}
      <div className="fixed top-6 left-6 right-6 md:left-auto md:w-[400px] z-[150] space-y-4 pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, x: 50 }}
              className="pointer-events-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border-l-4 border-blue-500 overflow-hidden"
            >
              <div className="p-4 flex gap-4">
                <div className="mt-1 p-2 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex-shrink-0">
                  {getActionIcon(toast.actionType)}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-black text-sm text-gray-900 dark:text-gray-100 uppercase tracking-tight">
                        {toast.actionType} في {toast.section}
                      </h4>
                      <p className="text-xs font-bold text-gray-400 mt-0.5">بواسطة: {toast.senderName}</p>
                    </div>
                    <button 
                      onClick={() => removeToast(toast.id)}
                      className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors text-gray-400"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-medium line-clamp-2">
                    {toast.details}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[10px] text-gray-400 font-bold uppercase">{new Date(toast.createdAt).toLocaleTimeString()}</span>
                    <button 
                      onClick={() => {
                        markAsRead(toast.id);
                        removeToast(toast.id);
                      }}
                      className="text-[10px] font-black text-blue-500 hover:text-blue-600 uppercase tracking-widest"
                    >
                      فهمت
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* History Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[102]"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-full max-w-md bg-white dark:bg-gray-900 z-[103] shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50/50 dark:bg-gray-900/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-600 rounded-xl">
                    <History size={20} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">سجل الإشعارات</h2>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">تحديثات النظام الفورية</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsSoundEnabled(!isSoundEnabled)}
                    className={`p-2 rounded-xl transition-all ${isSoundEnabled ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/40' : 'bg-gray-100 text-gray-400 dark:bg-gray-800'}`}
                    title={isSoundEnabled ? 'تعطيل الصوت' : 'تفعيل الصوت'}
                  >
                    {isSoundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
                  </button>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors text-gray-400"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{unreadCount} غير مقروء</span>
                <button
                  onClick={() => markAsRead()}
                  className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-black rounded-lg hover:bg-blue-600 hover:text-white transition-all uppercase tracking-widest"
                >
                  تحديد الكل كمقروء
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {safeNotifications.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-50 space-y-4">
                    <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-full">
                      <Bell size={40} className="text-gray-400" />
                    </div>
                    <p className="font-bold text-gray-500">لا توجد إشعارات حتى الآن</p>
                  </div>
                ) : (
                  safeNotifications.map((n) => (
                    <div
                      key={n.id}
                      className={`p-4 rounded-2xl border transition-all ${n.isRead ? 'bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800' : 'bg-blue-50/30 dark:bg-blue-900/10 border-blue-100 dark:border-blue-900/30 ring-1 ring-blue-100 dark:ring-blue-900/30'}`}
                    >
                      <div className="flex gap-4">
                        <div className={`p-2 rounded-xl flex-shrink-0 ${n.isRead ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-900 shadow-sm'}`}>
                          {getActionIcon(n.actionType)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <h5 className="font-black text-xs text-gray-900 dark:text-gray-100 uppercase tracking-tight">
                              {n.actionType} في {n.section}
                            </h5>
                            {!n.isRead && (
                              <button 
                                onClick={() => markAsRead(n.id)}
                                className="p-1 hover:bg-white dark:hover:bg-gray-800 rounded-lg text-blue-500"
                              >
                                <Check size={14} />
                              </button>
                            )}
                          </div>
                          <p className="text-xs font-bold text-gray-400 mt-1 uppercase">بواسطة: {n.senderName}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-medium">
                            {n.details}
                          </p>
                          <p className="text-[10px] text-gray-400 mt-3 font-black uppercase">
                            {new Date(n.createdAt).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
