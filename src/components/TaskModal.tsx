import React, { useState, useEffect } from 'react';
import { X, Save, Trash2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BRANDS } from '../data';

interface Task {
  id?: number | string;
  status: string;
  brand: string;
  branch: string;
  location: string;
}

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: Partial<Task>) => Promise<void>;
  onDelete?: (id: string | number) => Promise<void>;
  editingTask: Task | null;
}

export default function TaskModal({ isOpen, onClose, onSave, onDelete, editingTask }: TaskModalProps) {
  const [formData, setFormData] = useState<Partial<Task>>({
    status: 'Available',
    brand: BRANDS[0],
    branch: '',
    location: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (editingTask) {
      setFormData(editingTask);
    } else {
      setFormData({
        status: 'Available',
        brand: BRANDS[0],
        branch: '',
        location: '',
      });
    }
  }, [editingTask, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      await onSave(formData);
      onClose();
    } catch (err: any) {
      setError(err.message || 'حدث خطأ أثناء حفظ المهمة');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800"
        >
          {/* Header */}
          <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                {editingTask ? 'تعديل مهمة' : 'إضافة مهمة جديدة'}
              </h2>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">
                إدارة مهام الفروع والتوفر
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors text-gray-400"
            >
              <X size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {error && (
              <div className="p-4 bg-red-50 dark:bg-red-900/30 border border-red-100 dark:border-red-900/50 rounded-2xl flex items-center gap-3 text-red-600 dark:text-red-400">
                <AlertCircle size={20} />
                <p className="text-sm font-bold">{error}</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Status */}
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">
                  الحالة
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full h-12 bg-gray-50 dark:bg-gray-800 border-none rounded-xl px-4 text-sm font-bold focus:ring-2 focus:ring-blue-500 transition-all dark:text-white"
                >
                  <option value="Available">Available</option>
                  <option value="Only for Drivers">Only for Drivers</option>
                  <option value="Busy">Busy</option>
                  <option value="Closing Soon">Closing Soon</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>

              {/* Brand */}
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">
                  البراند
                </label>
                <select
                  value={formData.brand}
                  onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                  className="w-full h-12 bg-gray-50 dark:bg-gray-800 border-none rounded-xl px-4 text-sm font-bold focus:ring-2 focus:ring-blue-500 transition-all dark:text-white"
                >
                  {BRANDS.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Branch Name */}
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">
                اسم الفرع
              </label>
              <input
                type="text"
                required
                value={formData.branch}
                onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                placeholder="مثال: Salmiya"
                className="w-full h-12 bg-gray-50 dark:bg-gray-800 border-none rounded-xl px-4 text-sm font-bold focus:ring-2 focus:ring-blue-500 transition-all dark:text-white placeholder:text-gray-400"
              />
            </div>

            {/* Location URL */}
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">
                رابط الموقع (Google Maps)
              </label>
              <input
                type="url"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="https://maps.app.goo.gl/..."
                className="w-full h-12 bg-gray-50 dark:bg-gray-800 border-none rounded-xl px-4 text-sm font-bold focus:ring-2 focus:ring-blue-500 transition-all dark:text-white placeholder:text-gray-400"
              />
            </div>

            {/* Footer Buttons */}
            <div className="pt-4 flex gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 h-14 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-600/20"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Save size={20} />
                    حفظ البيانات
                  </>
                )}
              </button>

              {editingTask && onDelete && (
                <button
                  type="button"
                  onClick={() => {
                    if (confirm('هل أنت متأكد من حذف هذه المهمة؟')) {
                      onDelete(editingTask.id as number);
                      onClose();
                    }
                  }}
                  className="w-14 h-14 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-2xl flex items-center justify-center hover:bg-red-600 hover:text-white transition-all shadow-xl shadow-red-600/5 group"
                >
                  <Trash2 size={24} className="group-hover:scale-110 transition-transform" />
                </button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
