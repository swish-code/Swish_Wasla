import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, ChevronDown, ChevronUp, ChevronRight, Phone, MapPin, Clock, Calendar, Globe, Star, Info, MessageSquare, AlertCircle, ShoppingBag, X, Beaker, User, Package, Skull, CalendarX, Frown, Wind, Waves, Flame, Archive, Repeat, Scale, Droplets, FlaskConical, Beef, AlertTriangle, Snowflake, Settings, PackageOpen, UserCircle, HelpCircle, ListChecks, Store, Smartphone, List, PencilLine, Image, Send, Bell, CreditCard, Truck, Users, Mail, Zap, Lock, LogOut, Plus, Trash2, Edit, Database, PhoneCall, XCircle, Activity, CloudRain, BarChart, ClipboardList, CheckCircle2, Check, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BRANCH_DATA, BRANDS, PROCESS_SCRIPTS, COMPLAINT_STATUSES, MEAT_SOURCES, CATERING_DATA, CANCELLATION_DATA, CONTACTS_DATA, ALLERGEN_DATA, INGERINES_DATA, TASK_DATA } from './data';
import { BranchData, ViewType, User as UserType, AuthState, UserRole, BranchColumn } from './types';
import Sidebar from './components/Sidebar';
import BranchModal from './components/BranchModal';
import TaskModal from './components/TaskModal';
import NotificationCenter from './components/NotificationCenter';
import { CustomCard, CustomCardManager } from './components/CustomCards';
import { CustomCard as CustomCardType } from './types';

const GlobalSearch = ({ 
  isOpen, 
  onClose, 
  onSelectResult 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  onSelectResult: (view: ViewType, brand?: string, allergenBrand?: any, ingerinesBrand?: string) => void;
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

    const searchResults = useMemo(() => {
    if (query.length < 2) return [];
    const results: any[] = [];
    const q = query.toLowerCase();

    // 1. Search Navigation Items (Keywords)
    const navItems = [
      { id: 'brand-shakir', label: 'Shakir Branches', view: 'branches', brand: 'Shawarma Shakir', keywords: 'shakir shakira شاكر شاورما' },
      { id: 'brand-yelo', label: 'Yelo Branches', view: 'branches', brand: 'Yelo Pizza', keywords: 'yelo pizza يلو بيتزا' },
      { id: 'brand-bbt', label: 'BBT Branches', view: 'branches', brand: 'BBT', keywords: 'bbt burger بي بي تي برجر' },
      { id: 'brand-slice', label: 'Slice Branches', view: 'branches', brand: 'Slice', keywords: 'slice سلايس' },
      { id: 'brand-pattie', label: 'Pattie Branches', view: 'branches', brand: 'Pattie Pattie', keywords: 'pattie باتي' },
      { id: 'brand-just', label: 'Just Branches', view: 'branches', brand: 'Just C', keywords: 'just جست' },
      { id: 'brand-chili', label: 'Chili Branches', view: 'branches', brand: 'Chili pepper', keywords: 'chili تشيلي فلفل' },
      { id: 'proc-new', label: 'New Order Process', view: 'new-order', keywords: 'new order طلب جديد سكريبت' },
      { id: 'proc-follow', label: 'Follow Up Process', view: 'follow-up', keywords: 'follow up متابعة استلام' },
      { id: 'proc-complain', label: 'Complain Process', view: 'complain', keywords: 'complain شكوى مشكلة' },
      { id: 'proc-status', label: 'Complaint Status', view: 'complaint-status', keywords: 'status حالة شكوى' },
      { id: 'proc-additional', label: 'Additional Process', view: 'additional', keywords: 'additional اضافة زيادة' },
      { id: 'serv-meat', label: 'Meat Sources', view: 'meat-sources', keywords: 'meat sources مصادر اللحوم' },
      { id: 'serv-talabat', label: 'Talabat & Keeta', view: 'talabat-keeta', keywords: 'talabat keeta طلبات كيتا' },
      { id: 'serv-terms', label: 'Kuwaiti Terms', view: 'kuwaiti-terms', keywords: 'terms kuwait كلام كويتي كويتي' },
      { id: 'all-yelo', label: 'Yelo Allergens', view: 'allergens', allergenBrand: 'yelo', keywords: 'allergen yelo حساسية' },
      { id: 'all-slice', label: 'Slice Allergens', view: 'allergens', allergenBrand: 'slice', keywords: 'allergen slice حساسية' },
      { id: 'all-chili', label: 'Chili Allergens', view: 'allergens', allergenBrand: 'chili', keywords: 'allergen chili حساسية' },
      { id: 'all-pattie', label: 'Pattie Allergens', view: 'allergens', allergenBrand: 'pattie', keywords: 'allergen pattie حساسية' },
      { id: 'all-bbt', label: 'BBT Allergens', view: 'allergens', allergenBrand: 'bbt', keywords: 'allergen bbt حساسية' },
      { id: 'ing-shakir', label: 'Shakir Ingredients', view: 'ingerines', ingerinesBrand: 'shakir', keywords: 'ingredients shakir مكونات شاكر' },
      { id: 'ing-just', label: 'Just Ingredients', view: 'ingerines', ingerinesBrand: 'just', keywords: 'ingredients just مكونات جست' },
    ];

    navItems.forEach(item => {
      if (item.label.toLowerCase().includes(q) || item.keywords.toLowerCase().includes(q)) {
        results.push({
          type: 'Page',
          title: item.label,
          subtitle: 'Navigation',
          view: item.view,
          brand: item.brand,
          allergenBrand: item.allergenBrand,
          ingerinesBrand: item.ingerinesBrand
        });
      }
    });

    // 2. Search Branches
    BRANCH_DATA.forEach(branch => {
      const bName = branch.branchName || '';
      const bBrand = branch.brand || '';
      if (bName.toLowerCase().includes(q) || bBrand.toLowerCase().includes(q)) {
        results.push({
          type: 'Branch',
          title: `${branch.brand} - ${branch.branchName}`,
          subtitle: branch.address,
          view: 'branches',
          brand: branch.brand
        });
      }
    });

    // 3. Search Extensions
    CONTACTS_DATA.extensions.branches.forEach(ext => {
      const eName = ext.name || '';
      const eExt = ext.ext || '';
      if (eName.toLowerCase().includes(q) || eExt.toLowerCase().includes(q)) {
        results.push({
          type: 'Extension',
          title: `${ext.name}`,
          subtitle: `Extension: ${ext.ext}`,
          view: 'extension-contact'
        });
      }
    });

    CONTACTS_DATA.extensions.employees.forEach(emp => {
      const empName = emp.name || '';
      const empExt = emp.ext || '';
      if (empName.toLowerCase().includes(q) || empExt.toLowerCase().includes(q)) {
        results.push({
          type: 'Employee',
          title: `${emp.name}`,
          subtitle: `Extension: ${emp.ext}`,
          view: 'employee-ex-contact'
        });
      }
    });

    // 4. Search Process Scripts
    Object.entries(PROCESS_SCRIPTS).forEach(([key, sections]: [string, any]) => {
      if (!sections || typeof sections !== 'object') return;
      
      if (Array.isArray(sections)) {
        if (key === 'kuwaitiTerms') {
          sections.forEach((term: any) => {
            const word = term.word || '';
            const meaning = term.meaning || '';
            if (word.toLowerCase().includes(q) || meaning.toLowerCase().includes(q)) {
              results.push({
                type: 'Term',
                title: word,
                subtitle: meaning,
                view: 'kuwaiti-terms'
              });
            }
          });
        }
        return;
      }

      Object.entries(sections).forEach(([secKey, section]: [string, any]) => {
        if (section && section.title && typeof section.title === 'string' && section.title.toLowerCase().includes(q)) {
          results.push({
            type: 'Script',
            title: section.title,
            subtitle: `In: ${key.replace(/([A-Z])/g, ' $1').trim()}`,
            view: key.replace(/([A-Z])/g, '-$1').toLowerCase()
          });
        }
      });
    });

    return results.slice(0, 8);
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-gray-900/40 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.2)] dark:shadow-none overflow-hidden border border-gray-100 dark:border-gray-800"
          >
            <div className="px-6 py-5 flex items-center gap-4 bg-white dark:bg-gray-900">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Search size={22} className="stroke-[2.5]" />
              </div>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search anything... (branches, scripts, extensions)"
                className="flex-1 bg-transparent border-none outline-none text-xl font-bold text-gray-800 dark:text-gray-200 placeholder:text-gray-300 dark:placeholder:text-gray-600 py-2"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <div className="flex items-center gap-2">
                <span className="hidden sm:block text-[10px] font-black bg-gray-50 dark:bg-gray-800 text-gray-400 dark:text-gray-500 px-2 py-1 rounded-lg border border-gray-100 dark:border-gray-700">ESC</span>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl text-gray-400 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            
            <div className="max-h-[70vh] overflow-y-auto p-2 pb-4 custom-scrollbar bg-gray-50/50 dark:bg-gray-950/50">
              {query.length < 2 ? (
                <div className="py-16 text-center">
                  <div className="w-20 h-20 bg-white dark:bg-gray-900 rounded-[2rem] shadow-sm flex items-center justify-center mx-auto mb-4 border border-gray-100/50 dark:border-gray-800/50">
                    <Zap className="text-blue-500 animate-pulse" size={40} />
                  </div>
                  <h3 className="text-gray-900 dark:text-white font-black text-lg mb-1">Wasla Search</h3>
                  <p className="text-gray-400 dark:text-gray-400 font-medium text-sm px-10">Start typing to find branches, scripts, or employees instantly.</p>
                </div>
              ) : searchResults.length > 0 ? (
                <div className="space-y-1">
                  {searchResults.map((result, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        onSelectResult(result.view, result.brand, result.allergenBrand, result.ingerinesBrand);
                        onClose();
                      }}
                      className="w-full text-left p-4 rounded-2xl bg-transparent hover:bg-white dark:hover:bg-gray-800 hover:shadow-md dark:hover:shadow-none hover:border-gray-100 dark:hover:border-gray-700 border border-transparent transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm border border-white dark:border-gray-800 transition-transform group-hover:scale-110 ${
                          result.type === 'Page' ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400' :
                          result.type === 'Branch' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' :
                          result.type === 'Extension' ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400' :
                          result.type === 'Employee' ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400' : 
                          result.type === 'Script' ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400' : 'bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400'
                        }`}>
                          {result.type === 'Page' ? <Globe size={20} /> :
                           result.type === 'Branch' ? <Store size={20} /> :
                           result.type === 'Extension' ? <PhoneCall size={20} /> :
                           result.type === 'Employee' ? <Users size={20} /> :
                           result.type === 'Script' ? <PencilLine size={20} /> : <MessageSquare size={20} />}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className={`text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-md ${
                              result.type === 'Page' ? 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300' :
                              result.type === 'Branch' ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300' :
                              result.type === 'Extension' ? 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300' :
                              result.type === 'Employee' ? 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300' :
                              result.type === 'Script' ? 'bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300' : 'bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300'
                            }`}>
                              {result.type}
                            </span>
                          </div>
                          <p className="font-black text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors uppercase tracking-tight">{result.title}</p>
                          <p className="text-xs font-bold text-gray-400 dark:text-gray-400 line-clamp-1">{result.subtitle}</p>
                        </div>
                      </div>
                      <ChevronRight size={18} className="text-gray-200 dark:text-gray-700 group-hover:text-blue-500 transition-all transform group-hover:translate-x-1" />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="py-16 text-center">
                  <div className="w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="text-gray-300 dark:text-gray-600" size={30} />
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 font-bold">No results found for "{query}"</p>
                  <p className="text-xs text-gray-400 dark:text-gray-600 mt-1 uppercase tracking-widest font-black">Try searching for a brand or process name</p>
                </div>
              )}
            </div>
            
            <div className="bg-white dark:bg-gray-900 px-6 py-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center text-[10px] font-black text-gray-400 uppercase tracking-widest">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
                  Quick Navigation Ready
                </span>
              </div>
              <div className="flex gap-4">
                <span className="hidden sm:block">ENTER to select</span>
                <span>ESC to close</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const EditableText = ({ 
  contentKey, 
  defaultValue, 
  canEdit, 
  onSave, 
  onDelete, 
  isTextArea = false,
  className = "" 
}: {
  contentKey: string;
  defaultValue: string;
  canEdit: boolean;
  onSave: (key: string, value: string) => void;
  onDelete: (key: string) => void;
  isTextArea?: boolean;
  className?: string;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(defaultValue || '');

  useEffect(() => {
    setValue(defaultValue || '');
  }, [defaultValue]);

  if (!canEdit) return <span className={className} dir="auto">{defaultValue}</span>;

  if (isEditing) {
    return (
      <div className="relative group/edit-box bg-white/10 dark:bg-black/10 backdrop-blur-sm p-4 rounded-2xl border-2 border-blue-500/50 w-full my-2 shadow-2xl z-50">
        {isTextArea ? (
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={`w-full p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:outline-none min-h-[120px] text-sm font-medium ${className}`}
            dir="auto"
            autoFocus
          />
        ) : (
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={`w-full p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:outline-none text-sm font-bold ${className}`}
            dir="auto"
            autoFocus
          />
        )}
        <div className="flex gap-2 mt-4 justify-end">
          <button 
            type="button"
            onClick={() => { onSave(contentKey, value); setIsEditing(false); }}
            className="px-6 py-2 bg-blue-600 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-blue-700 transition-all"
          >
            Save
          </button>
          <button 
            type="button"
            onClick={() => { setIsEditing(false); setValue(defaultValue); }}
            className="px-6 py-2 bg-gray-500 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-gray-600 transition-all"
          >
            Cancel
          </button>
          {defaultValue !== value && (
             <button 
              type="button"
              onClick={() => { if(window.confirm('Revert to original?')){ onDelete(contentKey); setIsEditing(false); } }}
              className="px-6 py-2 bg-red-500 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-red-600 transition-all ml-auto"
            >
              Reset
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <span className="group/editable relative inline-flex items-center gap-2 transition-all hover:ring-2 hover:ring-blue-400/50 rounded-md px-1 -mx-1 cursor-default">
      <span className={className} dir="auto">{defaultValue}</span>
      <button 
        type="button"
        onClick={(e) => { e.stopPropagation(); setIsEditing(true); }}
        className="p-1.5 bg-blue-600 text-white rounded-lg opacity-0 group-hover/editable:opacity-100 transition-all transform scale-90 group-hover/editable:scale-100 shadow-lg"
        title="تعديل النص"
      >
        <PencilLine size={12} />
      </button>
    </span>
  );
};

const RequestSubmissionPanel = ({ onSubmit }: { onSubmit: (title: string, details: string) => Promise<boolean> }) => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !details) return;
    setIsSubmitting(true);
    const success = await onSubmit(title, details);
    if (success) {
      setTitle('');
      setDetails('');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 shadow-xl dark:shadow-none border border-gray-100 dark:border-gray-800">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center">
          <Send size={24} />
        </div>
        <div>
          <h3 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">Submit Information</h3>
          <p className="text-gray-500 dark:text-gray-400 font-bold text-xs uppercase tracking-widest ">Send data to leadership</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-[10px] font-black text-gray-400 dark:text-gray-400 uppercase tracking-widest mb-1 ml-4">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What is this about?"
            className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-2xl p-4 font-bold text-sm focus:ring-2 focus:ring-blue-500/20 transition-all text-gray-900 dark:text-white dark:placeholder:text-gray-600"
            required
          />
        </div>
        <div>
          <label className="block text-[10px] font-black text-gray-400 dark:text-gray-400 uppercase tracking-widest mb-1 ml-4">Details</label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Provide all necessary information..."
            className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-2xl p-4 font-bold text-sm focus:ring-2 focus:ring-blue-500/20 transition-all h-32 resize-none text-gray-900 dark:text-white dark:placeholder:text-gray-600"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#00965e] hover:bg-[#007a4d] text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-lg shadow-green-100 dark:shadow-none disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {isSubmitting ? 'Sending...' : (
            <>
              Send Request
              <Send size={16} />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

const LeaderRequestsList = ({ requests, isLoading, onUpdateStatus }: {
  requests: any[],
  isLoading: boolean,
  onUpdateStatus: (id: number, status: string) => void
}) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 shadow-xl dark:shadow-none border border-gray-100 dark:border-gray-800">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center">
            <ClipboardList size={24} />
          </div>
          <div>
            <h3 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">Incoming Requests</h3>
            <p className="text-gray-500 dark:text-gray-400 font-bold text-xs uppercase tracking-widest ">Review employee submissions</p>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="py-20 flex flex-col items-center">
          <div className="w-10 h-10 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-400 dark:text-gray-400 font-bold uppercase tracking-widest text-[10px]">Loading requests...</p>
        </div>
      ) : requests.length === 0 ? (
        <div className="py-20 flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center text-gray-200 dark:text-gray-700 mb-4">
            <CheckCircle2 size={32} />
          </div>
          <p className="text-gray-400 dark:text-gray-400 font-bold uppercase tracking-widest text-[10px]">No pending requests</p>
        </div>
      ) : (
        <div className="space-y-4">
          {requests.map(req => (
            <div key={req.id} className="bg-gray-50/50 dark:bg-gray-800/50 rounded-3xl p-6 border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-900 transition-all group">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-purple-600 dark:text-purple-400 font-black text-xs uppercase tracking-tighter">{req.userName}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                    <span className="text-gray-400 dark:text-gray-500 font-bold text-[10px] uppercase">{new Date(req.createdAt).toLocaleString('en-GB')}</span>
                  </div>
                  <h4 className="text-lg font-black text-gray-900 dark:text-white mb-2">{req.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium leading-relaxed mb-4">{req.details}</p>
                  
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                      req.status === 'pending' ? 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300' :
                      req.status === 'approved' ? 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300' :
                      'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300'
                    }`}>
                      {req.status}
                    </span>
                  </div>
                </div>
                
                {req.status === 'pending' && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onUpdateStatus(req.id, 'approved')}
                      className="p-3 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-all shadow-lg shadow-green-100 dark:shadow-none"
                      title="Approve"
                    >
                      <Check size={18} />
                    </button>
                    <button
                      onClick={() => onUpdateStatus(req.id, 'rejected')}
                      className="p-3 bg-red-500 hover:bg-red-600 text-white rounded-xl transition-all shadow-lg shadow-red-100 dark:shadow-none"
                      title="Reject"
                    >
                      <X size={18} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const LogsView = ({ logs, isLoading, searchTerm, onSearch }: { 
  logs: any[], 
  isLoading: boolean, 
  searchTerm: string, 
  onSearch: (val: string) => void 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-7xl mx-auto px-4 pb-12 pt-8"
    >
      <div className="bg-[#2d2942] rounded-[2.5rem] p-10 text-white shadow-2xl mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-10">
          <ListChecks size={140} />
        </div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">System Activity Logs</h2>
              <p className="text-blue-100 max-w-xl font-medium opacity-80">
                Detailed audit trail of all system operations. Track additions, modifications, and security events with full context and timestamps.
              </p>
            </div>
            <div className="flex bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/10 flex-1 max-w-md">
              <Search className="text-white/40 ml-3 mt-2.5" size={20} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Search logs (users, actions)..."
                className="bg-transparent border-none outline-none text-white placeholder:text-white/30 p-2 w-full font-bold"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-[2rem] shadow-xl dark:shadow-none border border-gray-100 dark:border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 dark:bg-gray-800/50">
                <th className="px-8 py-5 text-[10px] font-black text-gray-400 dark:text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-gray-800">Timestamp</th>
                <th className="px-8 py-5 text-[10px] font-black text-gray-400 dark:text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-gray-800">User</th>
                <th className="px-8 py-5 text-[10px] font-black text-gray-400 dark:text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-gray-800">Action</th>
                <th className="px-8 py-5 text-[10px] font-black text-gray-400 dark:text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-gray-800">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
              {isLoading ? (
                <tr>
                  <td colSpan={4} className="px-8 py-20 text-center">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                      <p className="text-gray-400 dark:text-gray-500 font-bold uppercase tracking-widest text-[10px]">Loading Audit Trail...</p>
                    </div>
                  </td>
                </tr>
              ) : logs.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-8 py-20 text-center">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center text-gray-200 dark:text-gray-700">
                        <Database size={32} />
                      </div>
                      <p className="text-gray-400 dark:text-gray-500 font-bold">No activity logs found for your search.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                logs.map((log) => (
                  <tr key={log.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="px-8 py-5">
                      <div className="flex flex-col">
                        <span className="text-gray-900 dark:text-white font-black text-xs">
                          {new Date(log.createdAt).toLocaleDateString('en-GB')}
                        </span>
                        <span className="text-gray-400 dark:text-gray-500 font-bold text-[10px] uppercase">
                          {new Date(log.createdAt).toLocaleTimeString('en-GB')}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-black">
                          {log.userName?.charAt(0).toUpperCase()}
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-bold text-xs">{log.userName}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${
                        log.action.includes('Delete') ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400' :
                        log.action.includes('Create') ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400' :
                        log.action.includes('Login') ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                      }`}>
                        {log.action}
                      </span>
                    </td>
                    <td className="px-8 py-5">
                      <p className="text-gray-500 dark:text-gray-400 font-medium text-xs leading-relaxed max-w-md">
                        {log.details}
                      </p>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('branches');
  const [selectedBrand, setSelectedBrand] = useState<string | null>(BRANDS[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isBrandDropdownOpen, setIsBrandDropdownOpen] = useState(false);
  const [isProcessDropdownOpen, setIsProcessDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [selectedProcessSubtype, setSelectedProcessSubtype] = useState<'pickup' | 'delivery'>('pickup');
  const [selectedFollowUpSubtype, setSelectedFollowUpSubtype] = useState<string>('talabat');
  const [selectedComplainType, setSelectedComplainType] = useState<string>('');
  const [selectedAdditionalSubtype, setSelectedAdditionalSubtype] = useState<string>('aggregators');
  const [selectedSpecialRequestsSubtype, setSelectedSpecialRequestsSubtype] = useState<string>('aggregators');
  const [selectedTalabatKeetaSubtype, setSelectedTalabatKeetaSubtype] = useState<'talabat' | 'keeta'>('talabat');
  const [selectedCateringBrand, setSelectedCateringBrand] = useState<'Pattie' | 'Slice' | 'Just C'>('Pattie');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('myFatoora');
  const [isCateringDropdownOpen, setIsCateringDropdownOpen] = useState(false);
  const [isCancellationDropdownOpen, setIsCancellationDropdownOpen] = useState(false);
  const [isContactsDropdownOpen, setIsContactsDropdownOpen] = useState(false);
  const [isAllergensDropdownOpen, setIsAllergensDropdownOpen] = useState(false);
  const [selectedAllergenBrand, setSelectedAllergenBrand] = useState<'yelo' | 'bbt' | 'just' | 'slice' | 'chili' | 'pattie'>('yelo');
  const [selectedAllergenCategory, setSelectedAllergenCategory] = useState<string>('');
  const [isIngerinesDropdownOpen, setIsIngerinesDropdownOpen] = useState(false);
  const [selectedIngerinesBrand, setSelectedIngerinesBrand] = useState<string>('shakir');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const [pinnedViews, setPinnedViews] = useState<string[]>(() => {
    const saved = localStorage.getItem('pinnedViews');
    return saved ? JSON.parse(saved) : [];
  });
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const togglePin = (view: string) => {
    setPinnedViews(prev => {
      const next = prev.includes(view) ? prev.filter(v => v !== view) : [...prev, view];
      localStorage.setItem('pinnedViews', JSON.stringify(next));
      return next;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    fetchDynamicColumns();
  }, []);

  const [taskBrandFilter, setTaskBrandFilter] = useState<string>('');
  const [taskStatusFilter, setTaskStatusFilter] = useState<string>('');
  const [taskSearchQuery, setTaskSearchQuery] = useState<string>('');
  const [copiedLocation, setCopiedLocation] = useState<string | null>(null);

  const [customCardsData, setCustomCardsData] = useState<CustomCardType[]>([]);
  const [isCardsLoading, setIsCardsLoading] = useState(false);

  const fetchCustomCards = async () => {
    setIsCardsLoading(true);
    try {
      const res = await fetch('/api/custom-cards', { credentials: 'include' });
      if (res.ok) {
        const data = await res.json();
        setCustomCardsData(data);
      }
    } catch (err) {
      console.error("Failed to fetch custom cards", err);
    } finally {
      setIsCardsLoading(false);
    }
  };

  const navOptions = useMemo(() => [
    { id: 'branches', label: 'Dashboard' },
    { id: 'new-order', label: 'New Order' },
    { id: 'follow-up', label: 'Follow Up' },
    { id: 'complain', label: 'Complain' },
    { id: 'complaint-status', label: 'Complaint Status' },
    { id: 'additional', label: 'Additional' },
    { id: 'special-requests', label: 'Special Requests' },
    { id: 'meat-sources', label: 'Meat Sources' },
    { id: 'talabat-keeta', label: 'Talabat & Keeta' },
    { id: 'kuwaiti-terms', label: 'Kuwaiti Terms' },
    { id: 'catering-packages', label: 'Catering Packages' },
    { id: 'pre-order', label: 'Pre Order' },
    { id: 'remote-areas', label: 'Remote Areas' },
    { id: 'cancellation', label: 'Cancellation' },
    { id: 'allergens', label: 'Allergens' },
    { id: 'ingerines', label: 'Ingredients' },
    { id: 'task', label: 'Tasks' },
  ], []);

  const handleDeleteCard = async (id: number) => {
    if (!id) {
      alert('Error: ID missing');
      return;
    }
    if (!confirm('هل أنت متأكد من حذف هذا الكارت؟')) return;
    try {
      const res = await fetch(`/api/custom-cards/${id}`, { 
        method: 'DELETE', 
        credentials: 'include' 
      });
      if (res.ok) {
        fetchCustomCards();
      } else {
        const err = await res.json();
        alert(`Failed to delete from server: ${err.error || 'Unknown error'}`);
      }
    } catch (err: any) {
      console.error(err);
      alert(`Network error: ${err.message}`);
    }
  };

  const renderCustomCards = (viewId: string) => {
    const cards = customCardsData.filter(c => (c.isVisible || isAdmin) && (c.page === viewId || c.page === 'all'));
    if (cards.length === 0) return null;

    return (
      <div className="space-y-4 mb-8">
        {cards.map(card => (
          <CustomCard 
            key={card.id} 
            card={card} 
            isAdmin={isAdmin} 
            onEdit={() => setCurrentView('custom-cards')}
            onDelete={isAdmin ? handleDeleteCard : undefined}
          />
        ))}
      </div>
    );
  };

  const [branchesData, setBranchesData] = useState<BranchData[]>([]);
  const [tasksData, setTasksData] = useState<any[]>([]);

  const [auth, setAuth] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true
  });

  const isAdmin = auth.user?.role === 'admin';
  const isLeader = auth.user?.role === 'leader';
  const isAdminOrLeader = isAdmin || isLeader;
  const canEdit = isAdminOrLeader || auth.user?.role === 'manager';
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [isBranchModalOpen, setIsBranchModalOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<any | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('wasla-theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (isDarkMode) {
      root.classList.add('dark');
      body.classList.add('dark');
      root.style.colorScheme = 'dark';
      localStorage.setItem('wasla-theme', 'dark');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
      root.style.colorScheme = 'light';
      localStorage.setItem('wasla-theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const [dynamicColumns, setDynamicColumns] = useState<BranchColumn[]>([]);
  const [isAddingColumn, setIsAddingColumn] = useState(false);
  const [newColumnName, setNewColumnName] = useState('');
  const [newColumnLabel, setNewColumnLabel] = useState('');
  const [editingBranch, setEditingBranch] = useState<BranchData | null>(null);
  const [isReordering, setIsReordering] = useState(false);

  const [contentOverrides, setContentOverrides] = useState<Record<string, string>>({});

  const [usersData, setUsersData] = useState<UserType[]>([]);
  const [isUsersLoading, setIsUsersLoading] = useState(false);
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserPassword, setNewUserPassword] = useState('');
  const [newUserName, setNewUserName] = useState('');
  const [newUserRole, setNewUserRole] = useState<UserRole>('employee');
  const [userMgmtError, setUserMgmtError] = useState('');
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [logsData, setLogsData] = useState<any[]>([]);
  const [logsSearch, setLogsSearch] = useState('');
  const [isLogsLoading, setIsLogsLoading] = useState(false);

  // Fetch logs function
  const fetchLogs = async (search = '') => {
    setIsLogsLoading(true);
    try {
      const url = search ? `/api/logs?search=${encodeURIComponent(search)}` : '/api/logs';
      const res = await fetch(url, { credentials: 'include' });
      if (res.ok) {
        const data = await res.json();
        setLogsData(data);
      }
    } catch (err) {
      console.error("Failed to fetch logs", err);
    } finally {
      setIsLogsLoading(false);
    }
  };

  const [requestsData, setRequestsData] = useState<any[]>([]);
  const [isRequestsLoading, setIsRequestsLoading] = useState(false);

  const fetchRequests = async () => {
    if (!isAdmin && !isLeader) return;
    setIsRequestsLoading(true);
    try {
      const res = await fetch('/api/requests', { credentials: 'include' });
      if (res.ok) {
        const data = await res.json();
        setRequestsData(Array.isArray(data) ? data : []);
      }
    } catch (err) {
      console.error("Failed to fetch requests", err);
    } finally {
      setIsRequestsLoading(false);
    }
  };

  const fetchDynamicColumns = async () => {
    try {
      const res = await fetch('/api/branch-columns');
      if (res.ok) {
        const data = await res.json();
        setDynamicColumns(data);
      }
    } catch (err) {
      console.error("Failed to fetch dynamic columns", err);
    }
  };

  const addDynamicColumn = async () => {
    if (!newColumnLabel) return;
    try {
      const res = await fetch('/api/branch-columns', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name: newColumnLabel.toLowerCase().replace(/\s+/g, '_'), 
          label: newColumnLabel 
        }),
        credentials: 'include'
      });
      if (res.ok) {
        setNewColumnName('');
        setNewColumnLabel('');
        setIsAddingColumn(false);
        fetchDynamicColumns();
        showNotification('Column added successfully', 'success');
      } else {
        const err = await res.json();
        showNotification(err.error || 'Failed to add column', 'error');
      }
    } catch (err) {
      showNotification('Failed to add column', 'error');
    }
  };

  const submitRequest = async (title: string, details: string) => {
    try {
      const res = await fetch('/api/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, details }),
        credentials: 'include'
      });
      if (res.ok) {
        showNotification('Request submitted successfully');
        return true;
      } else {
        const err = await res.json();
        showNotification(err.error || 'Failed to submit request', 'error');
        return false;
      }
    } catch (err) {
      console.error("Failed to submit request", err);
      showNotification('Network error', 'error');
      return false;
    }
  };

  const updateRequestStatus = async (id: number, status: string) => {
    try {
      const res = await fetch(`/api/requests/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
        credentials: 'include'
      });
      if (res.ok) {
        showNotification(`Request ${status} successfully`);
        fetchRequests();
      }
    } catch (err) {
      console.error("Failed to update request", err);
    }
  };

  // Effect to fetch logs when viewing audit-logs
  useEffect(() => {
    if (currentView === 'audit-logs' && isAdmin) {
      fetchLogs(logsSearch);
    }
    if (currentView === 'branches' && !selectedBrand && (isAdmin || isLeader)) {
      fetchRequests();
    }
  }, [currentView, logsSearch, isAdmin, isLeader, selectedBrand]);

  // Fetch initial auth status
  useEffect(() => {
    fetch('/api/auth/me', { credentials: 'include' })
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (data && data.user) {
          setAuth({ user: data.user, isAuthenticated: true, isLoading: false });
          // Fetch data if authenticated
          fetchData(data.user);
        } else {
          setAuth({ user: null, isAuthenticated: false, isLoading: false });
          setCurrentView('login');
        }
      })
      .catch(() => {
        setAuth({ user: null, isAuthenticated: false, isLoading: false });
        setCurrentView('login');
      });
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await fetch('/api/tasks');
      if (res.ok) {
        const data = await res.json();
        setTasksData(data);
      }
    } catch (err) {
      console.error("Failed to fetch tasks:", err);
    }
  };

  const fetchData = async (userOverride?: any) => {
    const currentUser = userOverride || auth.user;
    try {
      const branchesRes = await fetch('/api/branches');
      if (branchesRes.ok) {
        const data = await branchesRes.json();
        setBranchesData(data);
      }

      await fetchTasks();

      fetchCustomCards();

      // Fetch users if admin
      if (currentUser?.role === 'admin') {
        const usersRes = await fetch('/api/users', { credentials: 'include' });
        if (usersRes.ok) {
          const data = await usersRes.json();
          setUsersData(data);
        }
      }

      // Fetch content overrides
      const overridesRes = await fetch('/api/content-overrides');
      if (overridesRes.ok) {
        const data = await overridesRes.json();
        const mapping = data.reduce((acc: any, item: any) => {
            acc[item.contentKey] = item.content;
            return acc;
        }, {});
        setContentOverrides(mapping);
      }
    } catch (err) {
      console.error("Failed to fetch data", err);
    }
  };

  const handleReorder = async (direction: 'up' | 'down', index: number) => {
    const brandBranches = filteredData;
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    
    if (targetIndex < 0 || targetIndex >= brandBranches.length) return;

    const newBrandBranches = [...brandBranches];
    // Swap locally
    [newBrandBranches[index], newBrandBranches[targetIndex]] = [newBrandBranches[targetIndex], newBrandBranches[index]];
    
    setIsReordering(true);
    // Optimistic update
    setBranchesData(prev => {
        const otherBrands = prev.filter(b => b.brand !== selectedBrand);
        return [...otherBrands, ...newBrandBranches];
    });

    try {
      const orders = newBrandBranches.map((b, i) => ({ id: b.id, sortOrder: i + 1 }));
      const res = await fetch('/api/branches/reorder', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orders }),
        credentials: 'include'
      });
      if (!res.ok) throw new Error('Reorder failed');
      showNotification('تم تحديث الترتيب');
    } catch (err) {
      showNotification('فشل في تحديث الترتيب', 'error');
      fetchData();
    } finally {
      setIsReordering(false);
    }
  };

  const handleSaveBranch = async (data: Partial<BranchData>) => {
    const url = editingBranch ? `/api/branches/${editingBranch.id}` : '/api/branches';
    const method = editingBranch ? 'PUT' : 'POST';
    
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      credentials: 'include'
    });
    
    if (res.ok) {
      await fetchData();
      setIsBranchModalOpen(false);
      showNotification('تم حفظ بيانات الفرع بنجاح');
    } else {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to save branch');
    }
  };

  const handleDeleteBranch = async (id: string | number) => {
    const res = await fetch(`/api/branches/${id}`, { 
      method: 'DELETE',
      credentials: 'include'
    });
    if (res.ok) {
      await fetchData();
      setIsBranchModalOpen(false);
      showNotification('تم حذف الفرع بنجاح');
    } else {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to delete branch');
    }
  };

  const handleSaveTask = async (data: any) => {
    const url = editingTask ? `/api/tasks/${editingTask.id}` : '/api/tasks';
    const method = editingTask ? 'PUT' : 'POST';
    
    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        credentials: 'include'
      });
      if (res.ok) {
        await fetchTasks();
        setIsTaskModalOpen(false);
        showNotification(editingTask ? 'تم تحديث التاسك بنجاح' : 'تم إضافة التاسك بنجاح');
      } else {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to save task');
      }
    } catch (err: any) {
      console.error("Failed to save task:", err);
      throw err;
    }
  };

  const handleDeleteTask = async (id: string | number) => {
    if (!confirm('هل أنت متأكد من حذف هذا التاسك؟')) return;
    try {
      const res = await fetch(`/api/tasks/${id}`, { 
        method: 'DELETE',
        credentials: 'include'
      });
      if (res.ok) {
        await fetchTasks();
        setIsTaskModalOpen(false);
        showNotification('تم حذف التاسك بنجاح');
      } else {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to delete task');
      }
    } catch (err: any) {
      console.error("Failed to delete task:", err);
      throw err;
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail, password: loginPassword })
      });
      if (res.ok) {
        const data = await res.json();
        setAuth({ user: data.user, isAuthenticated: true, isLoading: false });
        fetchData(data.user);
        setCurrentView('branches');
      } else {
        const err = await res.json();
        setLoginError(err.error || 'Login failed');
      }
    } catch (err) {
      setLoginError('Server error');
    }
  };

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setUserMgmtError('');
    setIsCreatingUser(true);
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: newUserEmail,
          password: newUserPassword,
          name: newUserName,
          role: newUserRole
        }),
        credentials: 'include'
      });
      if (res.ok) {
        setNewUserEmail('');
        setNewUserPassword('');
        setNewUserName('');
        setNewUserRole('employee');
        fetchData();
      } else {
        const err = await res.json();
        setUserMgmtError(err.error || 'Failed to create user');
      }
    } catch (err) {
      setUserMgmtError('Server error');
    } finally {
      setIsCreatingUser(false);
    }
  };

  const handleDeleteUser = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    try {
      const res = await fetch(`/api/users/${id}`, { 
        method: 'DELETE',
        credentials: 'include'
      });
      if (res.ok) {
        fetchData();
      }
    } catch (err) {
      console.error("Failed to delete user", err);
    }
  };

  const [notification, setNotification] = useState<{message: string, type: 'success' | 'error'} | null>(null);

  const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleSaveOverride = async (key: string, content: string) => {
    // Optimistic UI update
    const previous = contentOverrides[key];
    setContentOverrides(prev => ({ ...prev, [key]: content }));

    try {
      const res = await fetch('/api/content-overrides', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contentKey: key, content }),
        credentials: 'include'
      });
      
      if (!res.ok) {
        let errorMessage = 'Failed to save override';
        try {
          const errorData = await res.json();
          errorMessage = errorData.error || errorMessage;
        } catch (e) {
          // If response is not JSON, get the text instead
          const text = await res.text().catch(() => '');
          console.error("Server returned non-JSON error:", text);
          errorMessage = `Server Error (${res.status})`;
        }
        throw new Error(errorMessage);
      }
      
      const savedItem = await res.json().catch(async () => {
        const text = await res.text().catch(() => '');
        console.error("Success response was not JSON:", text);
        throw new Error("Invalid response format from server");
      });
      setContentOverrides(prev => ({ ...prev, [savedItem.contentKey]: savedItem.content }));
      showNotification('تم حفظ التعديل بنجاح');
    } catch (err: any) {
      console.error("Failed to save override", err);
      setContentOverrides(prev => ({ ...prev, [key]: previous })); // Rollback
      showNotification(err.message || 'فشل في حفظ التعديل', 'error');
    }
  };

  const handleDeleteOverride = async (key: string) => {
    const previous = contentOverrides[key];
    const newOverrides = { ...contentOverrides };
    delete newOverrides[key];
    setContentOverrides(newOverrides);

    try {
      const res = await fetch(`/api/content-overrides/${key}`, { 
        method: 'DELETE',
        credentials: 'include'
      });
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to delete override');
      }
      showNotification('تم استعادة النص الأصلي');
    } catch (err: any) {
      console.error("Failed to delete override", err);
      setContentOverrides(prev => ({ ...prev, [key]: previous }));
      showNotification(err.message || 'فشل في حذف التعديل', 'error');
    }
  };

  const t = (key: string, defaultValue: any) => {
    if (typeof defaultValue !== 'string' && defaultValue !== undefined) return defaultValue;
    const val = contentOverrides[key] !== undefined ? contentOverrides[key] : defaultValue;
    return val || '';
  };

  // --- Translatable Helper ---
  const Trans = ({ k, d, isTextArea = false, className = "" }: { k: string, d: string, isTextArea?: boolean, className?: string }) => (
    <EditableText 
      contentKey={k} 
      defaultValue={t(k, d)} 
      canEdit={canEdit} 
      onSave={handleSaveOverride} 
      onDelete={handleDeleteOverride} 
      isTextArea={isTextArea}
      className={className}
    />
  );

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { 
      method: 'POST',
      credentials: 'include'
    });
    setAuth({ user: null, isAuthenticated: false, isLoading: false });
    setCurrentView('login');
  };

  const brandDropdownRef = useRef<HTMLDivElement>(null);
  const processDropdownRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const cateringDropdownRef = useRef<HTMLDivElement>(null);
  const cancellationDropdownRef = useRef<HTMLDivElement>(null);
  const contactsDropdownRef = useRef<HTMLDivElement>(null);
  const allergensDropdownRef = useRef<HTMLDivElement>(null);
  const ingerinesDropdownRef = useRef<HTMLDivElement>(null);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCircle': return <UserCircle className="text-blue-500" size={24} />;
      case 'HelpCircle': return <HelpCircle className="text-blue-500" size={24} />;
      case 'ListChecks': return <ListChecks className="text-blue-500" size={24} />;
      case 'Store': return <Store className="text-blue-500" size={24} />;
      case 'ChatDots': return <MessageSquare className="text-blue-500" size={24} />;
      case 'Smartphone': return <Smartphone className="text-blue-500" size={24} />;
      case 'List': return <List className="text-blue-500" size={24} />;
      case 'ShoppingBag': return <ShoppingBag className="text-blue-500" size={24} />;
      case 'AlertTriangle': return <AlertTriangle className="text-blue-500" size={24} />;
      case 'PencilLine': return <PencilLine className="text-blue-500" size={24} />;
      case 'Image': return <Image className="text-blue-500" size={24} />;
      case 'Send': return <Send className="text-blue-500" size={24} />;
      case 'Bell': return <Bell className="text-blue-500" size={24} />;
      default: return <Info className="text-blue-500" size={24} />;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (brandDropdownRef.current && !brandDropdownRef.current.contains(event.target as Node)) {
        setIsBrandDropdownOpen(false);
      }
      if (processDropdownRef.current && !processDropdownRef.current.contains(event.target as Node)) {
        setIsProcessDropdownOpen(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
      if (cateringDropdownRef.current && !cateringDropdownRef.current.contains(event.target as Node)) {
        setIsCateringDropdownOpen(false);
      }
      if (cancellationDropdownRef.current && !cancellationDropdownRef.current.contains(event.target as Node)) {
        setIsCancellationDropdownOpen(false);
      }
      if (contactsDropdownRef.current && !contactsDropdownRef.current.contains(event.target as Node)) {
        setIsContactsDropdownOpen(false);
      }
      if (allergensDropdownRef.current && !allergensDropdownRef.current.contains(event.target as Node)) {
        setIsAllergensDropdownOpen(false);
      }
      if (ingerinesDropdownRef.current && !ingerinesDropdownRef.current.contains(event.target as Node)) {
        setIsIngerinesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredData = useMemo(() => {
    let data = branchesData.length > 0 ? branchesData : BRANCH_DATA;
    return data.filter(branch => {
      const matchesBrand = branch.brand === selectedBrand;
      const matchesSearch =
        branch.branchName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        branch.address.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesBrand && matchesSearch;
    });
  }, [selectedBrand, searchQuery, branchesData]);

  const getStatusColor = (value: string | boolean | undefined) => {
    if (!value) return ''; 
    const val = String(value).toLowerCase();
    if (val === 'yes' || val === 'true' || val === 'available') return 'bg-[#28a745] text-white'; // Green
    if (val === 'no' || val === 'false' || val === 'not available') return 'bg-[#c9302c] text-white'; // Red
    if (val.includes('24 hours') || val.includes('till')) return 'bg-blue-50 text-blue-700 border border-blue-100'; // Modern Blue instead of Yellow
    if (val.includes('no until')) return 'bg-red-50 text-red-600 border border-red-100';
    if (val.includes('yes only')) return 'bg-blue-50 text-blue-700 border border-blue-100';
    if (val.includes('n/a')) return 'bg-gray-100 text-gray-500 border border-gray-200';
    return '';
  };

  const menuItems = [
    { label: 'Home', view: 'branches' },
    { label: 'Brand Details', view: 'branches', hasDropdown: true, type: 'brand' },
    { label: 'process', view: 'new-order', hasDropdown: true, type: 'process' },
    { label: 'Services', view: 'meat-sources', hasDropdown: true, type: 'services' },
    { label: 'Catering & Pre Order', view: 'catering-packages', hasDropdown: true, type: 'catering' },
    { label: 'Cancellation', view: 'cancellation', hasDropdown: true, type: 'cancellation' },
    { label: 'Contacts', view: 'shakir-contact', hasDropdown: true, type: 'contacts' },
    { label: 'Allergens', view: 'allergens', hasDropdown: true, type: 'allergens' },
    { label: 'ingerines', view: 'ingerines', hasDropdown: true, type: 'ingerines' },
    { label: 'TASK', view: 'task' }
  ];

  const processOptions = [
    { label: 'New Order Process', view: 'new-order' },
    { label: 'Follow Up Process', view: 'follow-up' },
    { label: 'Complain Process', view: 'complain' },
    { label: 'Complaint Status', view: 'complaint-status' },
    { label: 'Additional', view: 'additional' },
    { label: 'Special Requests', view: 'special-requests' }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-gray-950 font-sans text-[#333] dark:text-gray-300 selection:bg-blue-100 flex overflow-hidden transition-colors duration-500">
      {/* Sidebar Navigation */}
      <AnimatePresence>
        {auth.isAuthenticated && (
          <>
            {/* Mobile Overlay */}
            {isSidebarOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsSidebarOpen(false)}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[70] lg:hidden"
              />
            )}
            
            <Sidebar 
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
              currentView={currentView} 
              setCurrentView={(view) => {
                setCurrentView(view);
                setIsSidebarOpen(false);
              }} 
              user={auth.user} 
              onLogout={handleLogout} 
              isAdmin={isAdmin}
              setSelectedBrand={setSelectedBrand}
              selectedBrand={selectedBrand}
              setSelectedAllergenBrand={setSelectedAllergenBrand}
              selectedAllergenBrand={selectedAllergenBrand}
              setSelectedIngerinesBrand={setSelectedIngerinesBrand}
              selectedIngerinesBrand={selectedIngerinesBrand}
              pinnedViews={pinnedViews}
              togglePin={togglePin}
              onSearchOpen={() => setIsSearchOpen(true)}
              isDarkMode={isDarkMode}
              onToggleDarkMode={toggleDarkMode}
            />
          </>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative bg-[#f8f9fa] dark:bg-gray-950 transition-colors duration-500">
        {/* Mobile Header */}
        {auth.isAuthenticated && (
          <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 -ml-2 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors"
              >
                <List size={24} />
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#00965e] rounded-lg flex items-center justify-center text-white font-black text-sm">W</div>
                <h1 className="text-sm font-black text-gray-900 dark:text-white tracking-tighter">WASLA</h1>
              </div>
            </div>
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
            >
              <Search size={20} />
            </button>
          </div>
        )}
        
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <GlobalSearch 
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
            onSelectResult={(view, brand, allergenBrand, ingerinesBrand) => {
              setCurrentView(view);
              if (brand) setSelectedBrand(brand);
              if (allergenBrand) setSelectedAllergenBrand(allergenBrand);
              if (ingerinesBrand) setSelectedIngerinesBrand(ingerinesBrand);
            }}
          />
          <div className="max-w-[1600px] mx-auto w-full px-3 sm:px-8 pt-4 lg:pt-8">
            {auth.isAuthenticated && currentView !== 'login' && renderCustomCards(currentView)}
          </div>
        <AnimatePresence mode="wait">
          {currentView === 'login' ? (
            <motion.div
              key="login"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex min-h-screen"
            >
              {/* Left Side - Welcome Panel */}
              <div className="hidden lg:flex w-1/2 bg-[#111111] dark:bg-black p-16 flex-col justify-between text-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-16">
                    <div className="w-10 h-10 bg-[#00965e] rounded-xl flex items-center justify-center font-black text-xl shadow-lg shadow-green-900/40">W</div>
                    <span className="text-xl font-black tracking-tight italic">Wasla Knowledge Base</span>
                  </div>
                  
                  <div className="space-y-4">
                    <h1 className="text-7xl font-black tracking-tighter leading-[0.9] uppercase">
                      WASLA<br/>
                      KNOWLEDGE<br/>
                      <span className="text-[#059669]">BASE</span>
                    </h1>
                    <p className="text-xl text-gray-400 dark:text-gray-500 max-w-md font-medium leading-relaxed opacity-80">
                      A professional platform designed for efficient handling and tracking of menu items, brands, and product configurations.
                    </p>
                  </div>
                </div>

                <div className="relative z-10 flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 dark:text-gray-600">
                  <span>EST. 2026</span>
                  <div className="w-12 h-[1px] bg-gray-800 dark:bg-gray-900" />
                  <span>PROFESSIONAL GRADE</span>
                </div>

                {/* Subtle Background Elements */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-900/5 rounded-full blur-[120px] -mr-40 -mt-40" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/5 rounded-full blur-[100px] -ml-20 -mb-20" />
              </div>

              {/* Right Side - Login Panel */}
              <div className="w-full lg:w-1/2 bg-white dark:bg-gray-950 flex flex-col justify-center items-center p-6 sm:p-12 md:p-24 relative min-h-screen lg:min-h-0 overflow-y-auto">
                <div className="w-full max-w-md">
                  <div className="lg:hidden flex items-center justify-center gap-3 mb-10">
                    <div className="w-10 h-10 bg-[#00965e] rounded-xl flex items-center justify-center font-black text-xl text-white shadow-lg shadow-green-900/20">W</div>
                    <span className="text-xl font-black tracking-tight dark:text-white">Wasla Knowledge Base</span>
                  </div>
                  
                  <div className="mb-10 text-center lg:text-left">
                    <h2 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white tracking-tighter mb-2 uppercase">Welcome Back</h2>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">Please enter your details to sign in</p>
                  </div>

                  <form onSubmit={handleLogin} className="space-y-8">
                    {loginError && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 text-red-700 dark:text-red-400 text-sm font-bold flex items-center gap-3 rounded-r-xl"
                      >
                         <AlertCircle size={20} />
                         {loginError}
                      </motion.div>
                    )}

                    <div className="space-y-6">
                      <div className="group">
                        <label className="block text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3 group-focus-within:text-[#00965e] transition-colors">Username</label>
                        <div className="relative">
                          <input 
                            type="email" 
                            required
                            value={loginEmail}
                            onChange={(e) => setLoginEmail(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-[#f0f4f8] dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-[#00965e]/30 outline-none font-bold text-gray-700 dark:text-gray-200 transition-all placeholder:text-gray-300 dark:placeholder:text-gray-600"
                            placeholder="admin"
                          />
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#00965e] transition-colors" size={20} />
                        </div>
                      </div>

                      <div className="group">
                        <label className="block text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3 group-focus-within:text-[#00965e] transition-colors">Password</label>
                        <div className="relative">
                          <input 
                            type="password" 
                            required
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-[#f0f4f8] dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-[#00965e]/30 outline-none font-bold text-gray-700 dark:text-gray-200 transition-all placeholder:text-gray-300 dark:placeholder:text-gray-600"
                            placeholder="••••••••"
                          />
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#00965e] transition-colors" size={20} />
                        </div>
                      </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-5 bg-[#00965e] text-white rounded-2xl font-bold text-lg hover:bg-[#008150] transition-all shadow-xl shadow-green-200 dark:shadow-none hover:shadow-green-300 active:scale-[0.98] flex items-center justify-center gap-3"
                    >
                      Sign In to Dashboard
                    </button>
                  </form>

                  <div className="mt-20 pt-8 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                    <p className="text-[10px] font-bold text-gray-400 dark:text-gray-600 uppercase tracking-wider max-w-[200px] leading-loose">
                      © 2026 WASLA KNOWLEDGE BASE. ALL RIGHTS RESERVED.
                    </p>
                    <button className="text-[10px] font-black text-[#00965e] uppercase tracking-widest hover:underline">
                      العربية
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : currentView === 'branches' ? (
            <motion.div
              key="branches"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-4 sm:p-8"
            >
              {/* Top Bar for Dashboard View */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 lg:mb-12">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white tracking-tighter">Knowledge Base</h1>
                  <p className="text-gray-500 dark:text-gray-400 font-medium text-sm lg:text-base">Manage and track all restaurant branch information</p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search branches..."
                      className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 pl-12 pr-4 py-4 rounded-2xl text-sm w-full sm:w-64 md:w-80 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00965e]/20 focus:border-[#00965e]/40 transition-all font-bold text-gray-700 dark:text-gray-200"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  </div>

                  {canEdit && (
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      {isAdmin && (
                        <div className="flex items-center gap-2">
                          {isAddingColumn ? (
                            <div className="flex items-center gap-2 bg-blue-50 p-2 rounded-xl border border-blue-100">
                              <input 
                                type="text"
                                placeholder="Col Name (e.g. Talabat)"
                                className="px-3 py-2 text-xs font-bold rounded-lg border-none focus:ring-0 w-40"
                                value={newColumnLabel}
                                onChange={(e) => setNewColumnLabel(e.target.value)}
                              />
                              <button 
                                onClick={addDynamicColumn}
                                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                              >
                                <Check size={16} />
                              </button>
                              <button 
                                onClick={() => setIsAddingColumn(false)}
                                className="p-2 bg-gray-200 text-gray-600 rounded-lg"
                              >
                                <X size={16} />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => setIsAddingColumn(true)}
                              className="px-6 py-4 bg-blue-50 text-blue-600 rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-100 transition-all border border-blue-100"
                            >
                              <Plus size={20} />
                              Add Column
                            </button>
                          )}
                        </div>
                      )}
                      <button 
                        onClick={() => {
                          setEditingBranch(null);
                          setIsBranchModalOpen(true);
                        }}
                        className="px-8 py-4 bg-[#00965e] text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-[#008150] transition-all shadow-xl shadow-green-100"
                      >
                        <Plus size={20} />
                        Add Branch
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Brand Selector */}
              {selectedBrand && (
                <div className="mb-8 flex flex-wrap gap-2 lg:gap-3">
                  {BRANDS.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => setSelectedBrand(brand)}
                      className={`px-4 lg:px-8 py-2.5 lg:py-3 rounded-xl lg:rounded-2xl text-xs lg:text-sm font-bold transition-all shadow-sm ${
                        selectedBrand === brand
                          ? 'bg-[#00965e] text-white shadow-xl shadow-green-100 scale-105'
                          : 'bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              )}

              {/* Request System - General Dashboard Only */}
              {!selectedBrand && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
                  <div className={`${auth.user?.role === 'employee' ? 'lg:col-span-12' : 'lg:col-span-12'}`}>
                    {auth.user?.role === 'employee' && (
                      <RequestSubmissionPanel onSubmit={submitRequest} />
                    )}
                    {(isAdmin || isLeader) && (
                      <LeaderRequestsList 
                        requests={requestsData} 
                        isLoading={isRequestsLoading} 
                        onUpdateStatus={updateRequestStatus} 
                      />
                    )}
                  </div>
                </div>
              )}

              {selectedBrand && (
                <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 dark:shadow-none overflow-hidden border border-gray-50 dark:border-gray-800">
                  <div className="overflow-x-auto">
                    <table className="w-full text-center border-collapse">
                      <thead>
                        <tr className="bg-gray-50/50 dark:bg-gray-800/50 text-gray-400 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800">
                          <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest border-r border-gray-50 dark:border-gray-800">Brand</th>
                          <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest border-r border-gray-50 dark:border-gray-800 min-w-[150px]">Branch Name</th>
                          <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest border-r border-gray-50 dark:border-gray-800 min-w-[250px]">Address</th>
                          {canEdit && (
                              <th className="px-2 py-5 text-[10px] font-black uppercase tracking-widest border-r border-gray-50 dark:border-gray-800">Order</th>
                          )}
                          <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest border-r border-gray-50 dark:border-gray-800">Delivery</th>
                          <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest border-r border-gray-50 dark:border-gray-800">Pickup</th>
                          <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest border-r border-gray-50 dark:border-gray-800">Dine In</th>
                          <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest border-r border-gray-50 dark:border-gray-800 min-w-[150px]">Hours</th>
                          <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest border-r border-gray-50 dark:border-gray-800 min-w-[130px]">Last Delivery</th>
                          <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest border-r border-gray-50 dark:border-gray-800 min-w-[130px]">Last Pickup</th>
                          <th className="px-4 py-5 text-[10px] font-black uppercase tracking-widest border-r border-gray-50 dark:border-gray-800">TGO</th>
                          <th className="px-4 py-5 text-[10px] font-black uppercase tracking-widest border-r border-gray-50 dark:border-gray-800">TMP</th>
                          <th className="px-4 py-5 text-[10px] font-black uppercase tracking-widest border-r border-gray-50 dark:border-gray-800">Deliveroo</th>
                          <th className="px-4 py-5 text-[10px] font-black uppercase tracking-widest border-r border-gray-50 dark:border-gray-800">V-Thru</th>
                          <th className="px-4 py-5 text-[10px] font-black uppercase tracking-widest border-r border-gray-50 dark:border-gray-800">Cari</th>
                          <th className="px-4 py-5 text-[10px] font-black uppercase tracking-widest border-r border-gray-50 dark:border-gray-800">Jahez</th>
                          <th className="px-4 py-5 text-[10px] font-black uppercase tracking-widest border-r border-gray-50 dark:border-gray-800">Keeta</th>
                          {dynamicColumns.map(col => (
                            <th key={col.id} className="px-4 py-5 text-[10px] font-black uppercase tracking-widest border-r border-gray-50 dark:border-gray-800 bg-blue-50/30 dark:bg-blue-900/10 dark:text-blue-300">
                              {col.label}
                              {isAdmin && (
                                <button 
                                  onClick={async (e) => {
                                    e.stopPropagation();
                                    if(confirm(`Delete column ${col.label}?`)) {
                                      await fetch(`/api/branch-columns/${col.id}`, { method: 'DELETE', credentials: 'include' });
                                      fetchDynamicColumns();
                                    }
                                  }}
                                  className="ml-1 text-red-400 hover:text-red-600"
                                >
                                  ×
                                </button>
                              )}
                            </th>
                          ))}
                          {canEdit && (
                            <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest">Actions</th>
                          )}
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        {filteredData.length > 0 ? (
                          filteredData.map((branch, index) => (
                            <tr key={branch.id} className={`group hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors border-b border-gray-50 dark:border-gray-800 last:border-0`}>
                              <td className="px-6 py-6 font-bold text-gray-400 dark:text-gray-400 border-r border-gray-50/50 dark:border-gray-800">{branch.brand}</td>
                              <td className="px-6 py-6 font-black text-gray-900 dark:text-white border-r border-gray-50/50 dark:border-gray-800">{branch.branchName}</td>
                              <td className="px-6 py-6 text-left text-[11px] font-bold text-gray-500 dark:text-gray-400 border-r border-gray-50/50 dark:border-gray-800 max-w-xs">{branch.address}</td>
                              {canEdit && (
                                <td className="px-2 py-4 border-r border-gray-50/50 dark:border-gray-800">
                                  <div className="flex flex-col items-center gap-1">
                                    <button 
                                      disabled={index === 0 || isReordering}
                                      onClick={() => handleReorder('up', index)}
                                      className={`p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${index === 0 ? 'text-gray-200 dark:text-gray-800 cursor-not-allowed' : 'text-gray-400 hover:text-blue-600'}`}
                                    >
                                      <ChevronUp size={16} />
                                    </button>
                                    <button 
                                      disabled={index === filteredData.length - 1 || isReordering}
                                      onClick={() => handleReorder('down', index)}
                                      className={`p-1 rounded hover:bg-gray-200 transition-colors ${index === filteredData.length - 1 ? 'text-gray-200 cursor-not-allowed' : 'text-gray-400 hover:text-blue-600'}`}
                                    >
                                      <ChevronDown size={16} />
                                    </button>
                                  </div>
                                </td>
                              )}
                              <td className={`px-6 py-6 border-r border-gray-50/50 dark:border-gray-800`}>
                                <span className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest ${getStatusColor(branch.delivery)} shadow-sm`}>
                                  {branch.delivery}
                                </span>
                              </td>
                              <td className={`px-6 py-6 border-r border-gray-50/50 dark:border-gray-800`}>
                                <span className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest ${getStatusColor(branch.pickup)} shadow-sm`}>
                                  {branch.pickup}
                                </span>
                              </td>
                              <td className={`px-6 py-6 border-r border-gray-50/50 dark:border-gray-800`}>
                                <span className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest ${getStatusColor(branch.dineIn)} shadow-sm`}>
                                  {branch.dineIn}
                                </span>
                              </td>
                              <td className="px-6 py-6 font-bold text-gray-700 dark:text-gray-300 text-[11px] border-r border-gray-50/50 dark:border-gray-800">{branch.workingHours}</td>
                              <td className="px-6 py-6 font-bold text-blue-600 dark:text-blue-400 text-[11px] border-r border-gray-50/50 dark:border-gray-800 bg-blue-50/20 dark:bg-blue-900/10">{branch.lastOrderDelivery || '-'}</td>
                              <td className="px-6 py-6 font-bold text-green-600 dark:text-green-400 text-[11px] border-r border-gray-50/50 dark:border-gray-800 bg-green-50/20 dark:bg-green-900/10">{branch.lastOrderPickup || '-'}</td>
                              
                              <td className={`px-4 py-6 border-r border-gray-50/50 dark:border-gray-800`}>
                                <div className={`w-8 h-8 mx-auto rounded-lg flex items-center justify-center ${getStatusColor(branch.tgo)} shadow-sm`}>
                                  {String(branch.tgo).toLowerCase() === 'yes' ? 'Y' : 'N'}
                                </div>
                              </td>
                              <td className={`px-4 py-6 border-r border-gray-50/50 dark:border-gray-800`}>
                                <div className={`w-8 h-8 mx-auto rounded-lg flex items-center justify-center ${getStatusColor(branch.tmp)} shadow-sm`}>
                                  {String(branch.tmp).toLowerCase() === 'yes' ? 'Y' : 'N'}
                                </div>
                              </td>
                              <td className={`px-4 py-6 border-r border-gray-50/50 dark:border-gray-800`}>
                                <div className={`w-8 h-8 mx-auto rounded-lg flex items-center justify-center ${getStatusColor(branch.deliveroo)} shadow-sm`}>
                                  {String(branch.deliveroo).toLowerCase() === 'yes' ? 'Y' : 'N'}
                                </div>
                              </td>
                              <td className={`px-4 py-6 border-r border-gray-50/50 dark:border-gray-800`}>
                                <div className={`w-8 h-8 mx-auto rounded-lg flex items-center justify-center ${getStatusColor(branch.vthru)} shadow-sm`}>
                                  {String(branch.vthru).toLowerCase() === 'yes' ? 'Y' : 'N'}
                                </div>
                              </td>
                              <td className={`px-4 py-6 border-r border-gray-50/50 dark:border-gray-800`}>
                                <div className={`w-8 h-8 mx-auto rounded-lg flex items-center justify-center ${getStatusColor(branch.cari)} shadow-sm`}>
                                  {String(branch.cari).toLowerCase() === 'yes' ? 'Y' : 'N'}
                                </div>
                              </td>
                              <td className={`px-4 py-6 border-r border-gray-50/50 dark:border-gray-800`}>
                                <div className={`w-8 h-8 mx-auto rounded-lg flex items-center justify-center ${getStatusColor(branch.jahez)} shadow-sm`}>
                                  {String(branch.jahez).toLowerCase() === 'yes' ? 'Y' : 'N'}
                                </div>
                              </td>
                              <td className={`px-4 py-6 border-r border-gray-50/50 dark:border-gray-800`}>
                                <div className={`w-8 h-8 mx-auto rounded-lg flex items-center justify-center ${getStatusColor(branch.keeta)} shadow-sm`}>
                                  {String(branch.keeta).toLowerCase() === 'yes' ? 'Y' : 'N'}
                                </div>
                              </td>
                              {dynamicColumns.map(col => {
                                const customData = JSON.parse(branch.customData || '{}');
                                const val = customData[col.name] || 'No';
                                return (
                                  <td key={col.id} className={`px-4 py-6 border-r border-gray-50/50 dark:border-gray-800 bg-blue-50/10 dark:bg-blue-900/5`}>
                                    <div className={`w-8 h-8 mx-auto rounded-lg flex items-center justify-center ${getStatusColor(val)} shadow-sm font-black text-[10px]`}>
                                      {val.toLowerCase() === 'yes' ? 'Y' : val.toLowerCase() === 'no' ? 'N' : '?' }
                                    </div>
                                  </td>
                                );
                              })}
  
                              {canEdit && (
                                <td className="px-6 py-6">
                                  <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button 
                                      onClick={() => {
                                        setEditingBranch(branch);
                                        setIsBranchModalOpen(true);
                                      }}
                                      className="p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                                    >
                                      <Edit size={16} />
                                    </button>
                                    <button 
                                      onClick={() => handleDeleteBranch(branch.id)}
                                      className="p-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-all shadow-sm"
                                    >
                                      <Trash2 size={16} />
                                    </button>
                                  </div>
                                </td>
                              )}
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={15} className="py-24 text-center">
                              <div className="flex flex-col items-center justify-center space-y-4">
                                <div className="w-20 h-20 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center">
                                  <AlertCircle size={40} className="text-gray-200 dark:text-gray-700" />
                                </div>
                                <p className="text-xl font-black text-gray-300 dark:text-gray-700 uppercase tracking-widest">No matching records</p>
                              </div>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Brand Specific Logic (BBT) */}
              {selectedBrand === 'BBT' && (
                <div className="mt-12 max-w-2xl mx-auto space-y-4">
                  <div className="bg-[#cfe2ff] border border-blue-200 rounded-lg p-6 text-center shadow-lg">
                    <p className="font-bold text-blue-900 text-lg">Exists in Yard Branch ( BBT, Fahad Al Ahmed )</p>
                    <div className="h-0.5 bg-blue-200 my-3"></div>
                    <p className="font-bold text-blue-900 text-lg">Exists in Shuhada Branch ( BBT, Rumaithiya )</p>
                    <div className="h-0.5 bg-blue-200 my-3"></div>
                    <p className="font-bold text-blue-900 text-lg">Exists in Adailiya Branch ( BBT, Faiha )</p>
                  </div>
                  <div className="bg-[#7b7bff] text-white font-bold py-4 rounded-lg text-center shadow-xl text-xl animate-pulse">
                    Call Center orders
                  </div>
                  <div className="bg-white border-2 border-blue-100 rounded-xl overflow-hidden shadow-lg">
                    <div className="p-4 border-b-2 border-blue-50 text-center font-bold bg-[#f0f0ff] text-blue-900">Pickup last 1:15 AM</div>
                    <div className="p-4 border-b-2 border-blue-50 text-center font-bold text-blue-800">Delivery Last order **2:00 AM** (only Branches Close **4:30 AM**)</div>
                    <div className="p-4 text-center font-bold bg-[#f0f0ff] text-blue-900">Delivery last order **1:15 AM** (For Branches Close **1:30 AM**)</div>
                  </div>

                  <div className="bg-white border-2 border-blue-100 rounded-xl overflow-hidden shadow-lg mt-8">
                    <div className="grid grid-cols-[1fr_120px]">
                      <div className="flex flex-col">
                        <div className="bg-[#fff9c4] p-4 border-b-2 border-blue-50 text-xs font-bold">
                          • (BBT Shuhada - BBT Adiliya - BBT Shamiya) - Car Service - Dine in - **Pickup last order 12:00 AM**
                        </div>
                        <div className="bg-[#fff9c4] p-4 border-b-2 border-blue-50 text-xs font-bold">
                          • BBT Hilltop - Drive Thru - Dine in - **Pickup last order 1:15 AM**
                        </div>
                        <div className="bg-[#fff9c4] p-4 border-b-2 border-blue-50 text-xs font-bold">
                          • BBT Bayan has drive thru **Drive thru last order 12:00 AM**
                        </div>
                        <div className="bg-[#c8e6c9] p-4 border-b-2 border-blue-50 text-xs font-bold">
                          • Adiliya - **Pickup last order 11:45 PM**
                        </div>
                        <div className="bg-[#fff9c4] p-4 text-xs font-bold">
                          • BBT Shamiya - Car Service - **from 12:00 PM to 5:00 PM by QR code then from 5:00 PM to 11:45 PM normal car service**
                        </div>
                      </div>
                      <div className="flex flex-col border-l-2 border-blue-50">
                        <div className="flex-1 bg-[#fff9c4] border-b-2 border-blue-50 flex items-center justify-center text-center font-bold p-2 text-xs">
                          Only Knet
                        </div>
                        <div className="h-[60px] bg-[#c8e6c9] flex items-center justify-center text-center font-bold p-2 text-xs">
                          Cash - Knet
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ) : currentView === 'new-order' ? (
            <motion.div
              key="new-order"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="max-w-5xl mx-auto px-4"
            >
              <div className="text-center mb-10">
                <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Sales Cycle</span>
                <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
                  New Order Process
                </h1>
                <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
              </div>

              <div className="flex justify-center mb-10">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative">
                    <select
                      className="w-80 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl px-6 py-4 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 font-bold text-center text-gray-800 dark:text-gray-200 shadow-sm transition-all hover:border-blue-400 cursor-pointer pr-12"
                      value={selectedProcessSubtype}
                      onChange={(e) => setSelectedProcessSubtype(e.target.value as any)}
                    >
                      <option value="pickup" className="dark:bg-gray-900">Pick up</option>
                      <option value="delivery" className="dark:bg-gray-900">Delivery</option>
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 transition-colors group-hover:text-blue-500" size={20} />
                  </div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProcessSubtype}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-xl shadow-blue-500/5 dark:shadow-none p-10 border border-gray-100 dark:border-gray-800 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 dark:bg-blue-900/10 rounded-full -mr-32 -mt-32 opacity-30 group-hover:scale-110 transition-transform duration-700"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-center gap-4 mb-10">
                      <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-2xl shadow-lg shadow-blue-600/20">
                        {PROCESS_SCRIPTS.newOrder[selectedProcessSubtype].icon}
                      </div>
                      <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                        <Trans k={`process_newOrder_${selectedProcessSubtype}_title`} d={PROCESS_SCRIPTS.newOrder[selectedProcessSubtype].title} />
                      </h2>
                    </div>

                    <div className="space-y-8 text-right leading-[1.8] text-gray-600 dark:text-gray-400 font-medium text-lg max-w-3xl mx-auto" dir="rtl">
                      {PROCESS_SCRIPTS.newOrder[selectedProcessSubtype].script.map((line, idx) => (
                        <div key={idx} className="pb-6 border-b border-gray-50 dark:border-gray-800 last:border-b-0 group/line">
                          <div className="bg-gray-50/0 dark:bg-gray-800/0 group-hover/line:bg-gray-50/50 dark:group-hover/line:bg-gray-800/50 rounded-2xl p-4 -mx-4 transition-colors">
                            <Trans 
                              k={`process_newOrder_${selectedProcessSubtype}_script_${idx}`}
                              d={line}
                              isTextArea
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Notes Section */}
              <div className="mt-12 mb-16">
                <div className="bg-[#1a1c23] rounded-[2.5rem] overflow-hidden shadow-2xl relative border border-white/5">
                  <div className="p-10 relative z-10 flex flex-col items-center">
                    <div className="flex items-center gap-4 mb-8">
                       <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
                        <Info size={24} />
                      </div>
                       <h3 className="text-2xl font-black text-white tracking-tight flex items-center gap-3">
                         <EditableText 
                           contentKey="process_newOrder_notes_title"
                           defaultValue={t("process_newOrder_notes_title", PROCESS_SCRIPTS.newOrder.notes.title)}
                           canEdit={canEdit}
                           onSave={handleSaveOverride}
                           onDelete={handleDeleteOverride}
                         />
                       </h3>
                    </div>
                    <div className="max-w-3xl w-full text-blue-100/80 text-center leading-[2] text-[15px] font-medium space-y-6" dir="rtl">
                      <div className="bg-white/5 rounded-3xl p-8 border border-white/5">
                        <EditableText 
                          contentKey="process_newOrder_notes_text"
                          defaultValue={t("process_newOrder_notes_text", PROCESS_SCRIPTS.newOrder.notes.text)}
                          canEdit={canEdit}
                          onSave={handleSaveOverride}
                          onDelete={handleDeleteOverride}
                          isTextArea
                        />
                      </div>
                    </div>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>
                </div>
              </div>
            </motion.div>
          ) : currentView === 'follow-up' ? (
            <motion.div
              key="follow-up"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="max-w-5xl mx-auto px-4"
            >
              <div className="text-center mb-10">
                <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Status Monitoring</span>
                <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
                  Follow Up Process
                </h1>
                <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
              </div>

              <div className="flex justify-center mb-10">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative">
                    <select
                      className="w-80 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl px-6 py-4 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 font-bold text-center text-gray-800 dark:text-gray-200 shadow-sm transition-all hover:border-blue-400 cursor-pointer pr-12"
                      value={selectedFollowUpSubtype}
                      onChange={(e) => setSelectedFollowUpSubtype(e.target.value)}
                    >
                      <option value="talabat" className="dark:bg-gray-900">Talabat</option>
                      <option value="deliveroo" className="dark:bg-gray-900">Deliveroo</option>
                      <option value="cari" className="dark:bg-gray-900">Cari</option>
                      <option value="jahez" className="dark:bg-gray-900">Jahez</option>
                      <option value="callCenterPickup" className="dark:bg-gray-900">Call Center (Pick up)</option>
                      <option value="callCenterDelivery" className="dark:bg-gray-900">Call Center (Delivery)</option>
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 transition-colors group-hover:text-blue-500" size={20} />
                  </div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedFollowUpSubtype}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-xl shadow-blue-500/5 dark:shadow-none p-10 border border-gray-100 dark:border-gray-800 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 dark:bg-blue-900/10 rounded-full -mr-32 -mt-32 opacity-30 group-hover:scale-110 transition-transform duration-700"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-center gap-4 mb-10">
                      <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-2xl shadow-lg shadow-blue-600/20">
                        {PROCESS_SCRIPTS.followUp[selectedFollowUpSubtype as keyof typeof PROCESS_SCRIPTS.followUp].icon}
                      </div>
                      <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                        {PROCESS_SCRIPTS.followUp[selectedFollowUpSubtype as keyof typeof PROCESS_SCRIPTS.followUp].title}
                      </h2>
                    </div>

                    <div className="space-y-8 text-right leading-[1.8] text-gray-600 dark:text-gray-400 font-medium text-lg max-w-3xl mx-auto" dir="rtl">
                      {(PROCESS_SCRIPTS.followUp[selectedFollowUpSubtype as keyof typeof PROCESS_SCRIPTS.followUp] as any).script.map((line: string, idx: number) => (
                        <div key={idx} className="pb-6 border-b border-gray-50 dark:border-gray-800 last:border-b-0 group/line">
                          <div className="bg-gray-50/0 dark:bg-gray-800/0 group-hover/line:bg-gray-50/50 dark:group-hover/line:bg-gray-800/50 rounded-2xl p-4 -mx-4 transition-colors">
                            <EditableText 
                              contentKey={`process_followUp_${selectedFollowUpSubtype}_script_${idx}`}
                              defaultValue={t(`process_followUp_${selectedFollowUpSubtype}_script_${idx}`, line)}
                              canEdit={canEdit}
                              onSave={handleSaveOverride}
                              onDelete={handleDeleteOverride}
                              isTextArea
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Notes Section */}
              <div className="mt-12 mb-16">
                <div className="bg-[#1a1c23] rounded-[2.5rem] overflow-hidden shadow-2xl relative border border-white/5">
                  <div className="p-10 relative z-10 flex flex-col items-center">
                    <div className="flex items-center gap-4 mb-8">
                       <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
                        <Info size={24} />
                      </div>
                       <h3 className="text-2xl font-black text-white tracking-tight flex items-center gap-3">
                         <EditableText 
                           contentKey="process_followUp_notes_title"
                           defaultValue={t("process_followUp_notes_title", PROCESS_SCRIPTS.followUp.notes.title)}
                           canEdit={canEdit}
                           onSave={handleSaveOverride}
                           onDelete={handleDeleteOverride}
                         />
                       </h3>
                    </div>
                    <div className="max-w-3xl w-full text-blue-100/80 text-center leading-[2] text-[15px] font-medium space-y-6" dir="rtl">
                      {PROCESS_SCRIPTS.followUp.notes.items.map((item, idx) => (
                        <div key={idx} className="bg-white/5 rounded-2xl p-6 border border-white/5 hover:bg-white/[0.07] transition-all group/note">
                          <div className="flex items-start gap-4">
                            <div className="mt-2 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                            <div className="flex-1 text-right">
                              <EditableText 
                                contentKey={`process_followUp_notes_item_${idx}`}
                                defaultValue={t(`process_followUp_notes_item_${idx}`, item)}
                                canEdit={canEdit}
                                onSave={handleSaveOverride}
                                onDelete={handleDeleteOverride}
                                isTextArea
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>
                </div>
              </div>
            </motion.div>
          ) : currentView === 'complain' ? (
            <motion.div
              key="complain"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="max-w-5xl mx-auto px-4"
            >
              <div className="text-center mb-10">
                <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Process Workflow</span>
                <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
                  Complain Process
                </h1>
                <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
              </div>

              <div className="flex justify-center mb-10">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative">
                    <select
                      className="w-80 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl px-6 py-4 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 font-bold text-center text-gray-800 dark:text-gray-200 shadow-sm transition-all hover:border-blue-400 capitalize cursor-pointer pr-12"
                      value={selectedComplainType}
                      onChange={(e) => setSelectedComplainType(e.target.value)}
                    >
                      <option value="" className="dark:bg-gray-900">Type OF Complain</option>
                      {Object.keys(PROCESS_SCRIPTS.complain.types).map(type => (
                        <option key={type} value={type} className="capitalize py-2 dark:bg-gray-900">
                          {type.replace(/-/g, ' ')}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 transition-colors group-hover:text-blue-500" size={20} />
                  </div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {selectedComplainType && (
                  <motion.div
                    key={selectedComplainType}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
                  >
                    <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-[2rem] p-8 shadow-xl shadow-blue-500/5 dark:shadow-none relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 dark:bg-blue-900/10 rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                            <Phone size={20} />
                          </div>
                          <h3 className="text-xl font-black text-gray-900 dark:text-white">Call Center</h3>
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed font-medium">
                          <EditableText 
                            contentKey={`process_complain_${selectedComplainType}_call`}
                            defaultValue={t(`process_complain_${selectedComplainType}_call`, PROCESS_SCRIPTS.complain.types[selectedComplainType as keyof typeof PROCESS_SCRIPTS.complain.types].call)}
                            canEdit={canEdit}
                            onSave={handleSaveOverride}
                            onDelete={handleDeleteOverride}
                            isTextArea
                          />
                        </div>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-[2rem] p-8 shadow-xl shadow-indigo-500/5 dark:shadow-none relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 dark:bg-indigo-900/10 rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-600/20">
                            <Globe size={20} />
                          </div>
                          <h3 className="text-xl font-black text-gray-900 dark:text-white">Aggregators</h3>
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed font-medium">
                          <EditableText 
                            contentKey={`process_complain_${selectedComplainType}_platform`}
                            defaultValue={t(`process_complain_${selectedComplainType}_platform`, PROCESS_SCRIPTS.complain.types[selectedComplainType as keyof typeof PROCESS_SCRIPTS.complain.types].platform)}
                            canEdit={canEdit}
                            onSave={handleSaveOverride}
                            onDelete={handleDeleteOverride}
                            isTextArea
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Notes Section */}
              <div className="mt-8">
                <div className="bg-[#1a1c23] rounded-[2.5rem] overflow-hidden shadow-2xl relative border border-white/5">
                  <div className="p-10 relative z-10 flex flex-col items-center">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
                        <Info size={24} />
                      </div>
                      <h3 className="text-2xl font-black text-white tracking-tight">
                        <EditableText 
                          contentKey="process_complain_notes_title"
                          defaultValue={t("process_complain_notes_title", PROCESS_SCRIPTS.complain.notes.title)}
                          canEdit={canEdit}
                          onSave={handleSaveOverride}
                          onDelete={handleDeleteOverride}
                        />
                      </h3>
                    </div>
                    
                    <div className="max-w-3xl w-full text-blue-100/80 text-center leading-[2] text-[15px] font-medium space-y-6" dir="rtl">
                      <div className="bg-white/5 rounded-3xl p-8 border border-white/5">
                        <ul className="space-y-3">
                          {PROCESS_SCRIPTS.complain.notes.items.slice(0, 8).map((item, idx) => (
                            <div key={idx} className={idx === 0 ? "text-xl font-bold text-white mb-6 pb-4 border-b border-white/10" : "hover:text-white transition-colors"}>
                              <EditableText 
                                contentKey={`process_complain_notes_item_l1_${idx}`}
                                defaultValue={t(`process_complain_notes_item_l1_${idx}`, item)}
                                canEdit={canEdit}
                                onSave={handleSaveOverride}
                                onDelete={handleDeleteOverride}
                                isTextArea
                              />
                            </div>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 gap-6">
                        {PROCESS_SCRIPTS.complain.notes.items.slice(8).map((item, idx) => (
                          <div key={idx} className="bg-white/5 rounded-2xl p-6 border border-white/5 hover:bg-white/[0.07] transition-all">
                            <EditableText 
                              contentKey={`process_complain_notes_item_l2_${idx}`}
                              defaultValue={t(`process_complain_notes_item_l2_${idx}`, item)}
                              canEdit={canEdit}
                              onSave={handleSaveOverride}
                              onDelete={handleDeleteOverride}
                              isTextArea
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="h-1 text-center font-bold relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>
                  </div>
                </div>
                <div className="text-center mt-12 mb-16">
                  <p className="text-gray-400 font-bold text-sm tracking-widest uppercase opacity-50">Always show care to the customer</p>
                </div>
              </div>
            </motion.div>
          ) : currentView === 'complaint-status' ? (
            <motion.div
              key="complaint-status"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="max-w-7xl mx-auto px-4"
            >
              <div className="text-center mb-16">
                <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Resolution Hub</span>
                <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
                  Complaint Status
                </h1>
                <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mb-24">
                {COMPLAINT_STATUSES.map((item, idx) => {
                  const IconComponent = {
                    Beaker, User, Package, Skull, CalendarX, Frown, Wind, Waves, Flame, Archive, Repeat, Scale, Droplets, FlaskConical, Beef, AlertTriangle, Snowflake, Settings, Clock, PackageOpen
                  }[item.iconName] || Info;

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ y: -8, transition: { duration: 0.2 } }}
                      className="bg-white dark:bg-gray-900 rounded-[2rem] p-10 shadow-2xl shadow-gray-500/5 dark:shadow-none border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center transition-all group hover:border-blue-100 dark:hover:border-blue-900 hover:shadow-blue-500/10"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-8 text-blue-600 dark:text-blue-400 shadow-sm border border-blue-50 dark:border-blue-900/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <IconComponent size={28} />
                      </div>
                      <h3 className="font-black text-gray-900 dark:text-white mb-6 text-sm tracking-tight leading-tight min-h-[40px] flex items-center justify-center">{item.title}</h3>
                      <span className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.15em] transition-all ${
                        item.status === 'Open' 
                          ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900/30 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-red-600/30' 
                          : 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border border-green-100 dark:border-green-900/30 group-hover:bg-teal-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-teal-600/30'
                      }`}>
                        {item.status}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ) : currentView === 'additional' ? (
            <motion.div
              key="additional"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="max-w-5xl mx-auto px-4"
            >
              <div className="text-center mb-10">
                <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Extended Guidelines</span>
                <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
                  Additional Info
                </h1>
                <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
              </div>

              <div className="flex justify-center mb-10">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative">
                    <select
                      className="w-80 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl px-6 py-4 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 font-bold text-center text-gray-800 dark:text-gray-200 shadow-sm transition-all hover:border-blue-400 cursor-pointer pr-12"
                      value={selectedAdditionalSubtype}
                      onChange={(e) => setSelectedAdditionalSubtype(e.target.value)}
                    >
                      <option value="aggregators" className="dark:bg-gray-900">Aggregators</option>
                      <option value="pickup" className="dark:bg-gray-900">Call Center (Pick up)</option>
                      <option value="delivery" className="dark:bg-gray-900">Call Center (Delivery)</option>
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 transition-colors group-hover:text-blue-500" size={20} />
                  </div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedAdditionalSubtype}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-xl shadow-blue-500/5 dark:shadow-none p-10 border border-gray-100 dark:border-gray-800 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 dark:bg-blue-900/10 rounded-full -mr-32 -mt-32 opacity-30 group-hover:scale-110 transition-transform duration-700"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-center gap-4 mb-10">
                      <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-2xl shadow-lg shadow-blue-600/20">
                        {PROCESS_SCRIPTS.additional[selectedAdditionalSubtype as keyof typeof PROCESS_SCRIPTS.additional].icon}
                      </div>
                      <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                        {PROCESS_SCRIPTS.additional[selectedAdditionalSubtype as keyof typeof PROCESS_SCRIPTS.additional].title}
                      </h2>
                    </div>

                    <div className="space-y-8 text-right leading-[1.8] text-gray-600 dark:text-gray-400 font-medium text-lg max-w-3xl mx-auto" dir="rtl">
                      {PROCESS_SCRIPTS.additional[selectedAdditionalSubtype as keyof typeof PROCESS_SCRIPTS.additional].content.map((para: string, idx: number) => (
                        <div key={idx} className="pb-6 border-b border-gray-50 dark:border-gray-800 last:border-b-0 whitespace-pre-line text-lg hover:text-gray-900 dark:hover:text-white transition-colors">
                          <EditableText 
                            contentKey={`process_additional_${selectedAdditionalSubtype}_content_${idx}`}
                            defaultValue={t(`process_additional_${selectedAdditionalSubtype}_content_${idx}`, para)}
                            canEdit={canEdit}
                            onSave={handleSaveOverride}
                            onDelete={handleDeleteOverride}
                            isTextArea
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          ) : currentView === 'special-requests' ? (
            <motion.div
              key="special-requests"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="max-w-5xl mx-auto px-4"
            >
              <div className="text-center mb-10">
                <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Custom Requirements</span>
                <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
                  Special Requests
                </h1>
                <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
              </div>

              <div className="flex justify-center mb-10">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative">
                    <select
                      className="w-80 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl px-6 py-4 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 font-bold text-center text-gray-800 dark:text-gray-200 shadow-sm transition-all hover:border-blue-400 cursor-pointer pr-12"
                      value={selectedSpecialRequestsSubtype}
                      onChange={(e) => setSelectedSpecialRequestsSubtype(e.target.value)}
                    >
                      <option value="aggregators" className="dark:bg-gray-900">Aggregators</option>
                      <option value="pickup" className="dark:bg-gray-900">Call Center (Pick up)</option>
                      <option value="delivery" className="dark:bg-gray-900">Call Center (Delivery)</option>
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 transition-colors group-hover:text-blue-500" size={20} />
                  </div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedSpecialRequestsSubtype}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-xl shadow-blue-500/5 dark:shadow-none p-10 border border-gray-100 dark:border-gray-800 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 dark:bg-blue-900/10 rounded-full -mr-32 -mt-32 opacity-30 group-hover:scale-110 transition-transform duration-700"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-center gap-4 mb-10">
                      <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-2xl shadow-lg shadow-blue-600/20">
                        {PROCESS_SCRIPTS.specialRequests[selectedSpecialRequestsSubtype as keyof typeof PROCESS_SCRIPTS.specialRequests].icon}
                      </div>
                      <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                        {PROCESS_SCRIPTS.specialRequests[selectedSpecialRequestsSubtype as keyof typeof PROCESS_SCRIPTS.specialRequests].title}
                      </h2>
                    </div>

                    <div className="space-y-8 text-right leading-[1.8] text-gray-600 dark:text-gray-400 font-medium text-lg max-w-3xl mx-auto" dir="rtl">
                      {PROCESS_SCRIPTS.specialRequests[selectedSpecialRequestsSubtype as keyof typeof PROCESS_SCRIPTS.specialRequests].content.map((para: string, idx: number) => (
                        <div key={idx} className="pb-6 border-b border-gray-50 dark:border-gray-800 last:border-b-0 whitespace-pre-line text-lg hover:text-gray-900 dark:hover:text-white transition-colors">
                          <EditableText 
                            contentKey={`process_specialRequests_${selectedSpecialRequestsSubtype}_content_${idx}`}
                            defaultValue={t(`process_specialRequests_${selectedSpecialRequestsSubtype}_content_${idx}`, para)}
                            canEdit={canEdit}
                            onSave={handleSaveOverride}
                            onDelete={handleDeleteOverride}
                            isTextArea
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          ) : currentView === 'talabat-keeta' ? (
            <motion.div
              key="talabat-keeta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="max-w-5xl mx-auto px-4"
            >
              <div className="text-center mb-10">
                <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Platform Integration</span>
                <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
                  Aggregator Support
                </h1>
                <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
              </div>

              <div className="flex justify-center mb-12">
                <div className="inline-flex bg-white dark:bg-gray-900 p-1.5 rounded-2xl shadow-xl shadow-blue-500/5 dark:shadow-none border border-gray-100 dark:border-gray-800">
                  <button
                    onClick={() => setSelectedTalabatKeetaSubtype('talabat')}
                    className={`px-10 py-3 rounded-xl font-black transition-all text-sm tracking-wide ${selectedTalabatKeetaSubtype === 'talabat' ? 'bg-red-600 text-white shadow-lg shadow-red-600/30' : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                  >
                    Talabat
                  </button>
                  <button
                    onClick={() => setSelectedTalabatKeetaSubtype('keeta')}
                    className={`px-10 py-3 rounded-xl font-black transition-all text-sm tracking-wide ${selectedTalabatKeetaSubtype === 'keeta' ? 'bg-[#ff6b00] text-white shadow-lg shadow-orange-600/30' : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                  >
                    Keeta
                  </button>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {selectedTalabatKeetaSubtype === 'talabat' ? (
                  <motion.div
                    key="talabat-content"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-12"
                  >
                    <div className="text-center group">
                       <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2 relative inline-block" dir="rtl">
                         طريقة التواصل مع المحادثة المباشرة لخدمة العملاء (طلبات) 💬
                         <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600/20 group-hover:w-full transition-all duration-500"></div>
                       </h2>
                    </div>

                    <div className="relative max-w-4xl mx-auto" dir="rtl">
                      <div className="absolute top-0 right-[25px] bottom-0 w-[2px] bg-gradient-to-b from-red-600/50 via-gray-100 dark:via-gray-800 to-gray-100 dark:to-gray-800"></div>
                      <div className="space-y-8">
                        {(PROCESS_SCRIPTS as any).talabatKeeta.talabat.steps.map((step: any, idx: number) => (
                          <div key={idx} className="relative pr-16 group/step">
                            <div className="absolute right-0 top-0 w-[52px] h-[52px] bg-white dark:bg-gray-900 border-2 border-red-600 rounded-2xl flex items-center justify-center z-10 shadow-lg group-hover/step:scale-110 transition-transform duration-300">
                              <span className="text-red-600">{getStepIcon(step.icon)}</span>
                            </div>
                            <div className="bg-white dark:bg-gray-900 p-8 rounded-[2rem] shadow-xl shadow-gray-500/5 dark:shadow-none border border-gray-100 dark:border-gray-800 group-hover/step:translate-x-2 transition-transform duration-300">
                              <h3 className="font-black text-gray-900 dark:text-white mb-3 text-xl">
                                <EditableText 
                                  contentKey={`process_talabat_step_${idx}_title`}
                                  defaultValue={t(`process_talabat_step_${idx}_title`, step.title)}
                                  canEdit={canEdit}
                                  onSave={handleSaveOverride}
                                  onDelete={handleDeleteOverride}
                                />
                              </h3>
                              <div className="text-gray-600 dark:text-gray-400 leading-relaxed text-right font-medium text-lg">
                                <EditableText 
                                  contentKey={`process_talabat_step_${idx}_text`}
                                  defaultValue={t(`process_talabat_step_${idx}_text`, step.text)}
                                  canEdit={canEdit}
                                  onSave={handleSaveOverride}
                                  onDelete={handleDeleteOverride}
                                  isTextArea
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-yellow-400/10 border-2 border-yellow-400 p-8 rounded-[2.5rem] text-center mt-16 max-w-2xl mx-auto shadow-xl shadow-yellow-400/5 dark:shadow-none group">
                      <div className="text-gray-900 dark:text-gray-100 font-black text-xl flex items-center justify-center gap-3" dir="rtl">
                        <div className="w-10 h-10 rounded-full bg-yellow-400 dark:bg-yellow-500 flex items-center justify-center group-hover:rotate-12 transition-transform">💡</div>
                        <EditableText 
                          contentKey="process_talabat_note"
                          defaultValue={t("process_talabat_note", (PROCESS_SCRIPTS as any).talabatKeeta.talabat.note)}
                          canEdit={canEdit}
                          onSave={handleSaveOverride}
                          onDelete={handleDeleteOverride}
                          isTextArea
                        />
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="keeta-content"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-20 max-w-4xl mx-auto"
                  >
                    <div>
                      <div className="text-center group mb-12">
                         <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2 relative inline-block" dir="rtl">
                           طريقة رفع شكوي لخدمة العملاء ( كيتا ) 💬
                           <div className="absolute bottom-0 left-0 w-0 h-1 bg-orange-600/20 group-hover:w-full transition-all duration-500"></div>
                         </h2>
                      </div>
                      
                      <div className="relative" dir="rtl">
                        <div className="absolute top-0 right-[25px] bottom-0 w-[2px] bg-gradient-to-b from-orange-600/50 via-gray-100 dark:via-gray-800 to-gray-100 dark:to-gray-800"></div>
                        <div className="space-y-8">
                          {(PROCESS_SCRIPTS as any).talabatKeeta.keeta.reportIssue.steps.map((step: any, idx: number) => (
                            <div key={idx} className="relative pr-16 group/step">
                              <div className="absolute right-0 top-0 w-[52px] h-[52px] bg-white dark:bg-gray-900 border-2 border-orange-600 rounded-2xl flex items-center justify-center z-10 shadow-lg group-hover/step:scale-110 transition-transform duration-300">
                                <span className="text-orange-600">{getStepIcon(step.icon)}</span>
                              </div>
                              <div className="bg-white dark:bg-gray-900 p-8 rounded-[2rem] shadow-xl shadow-gray-500/5 dark:shadow-none border border-gray-100 dark:border-gray-800 group-hover/step:translate-x-2 transition-transform duration-300">
                                <h3 className="font-black text-gray-900 dark:text-white mb-3 text-xl text-right">
                                  <EditableText 
                                    contentKey={`process_keeta_report_step_${idx}_title`}
                                    defaultValue={t(`process_keeta_report_step_${idx}_title`, step.title)}
                                    canEdit={canEdit}
                                    onSave={handleSaveOverride}
                                    onDelete={handleDeleteOverride}
                                  />
                                </h3>
                                <div className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line text-right font-medium text-lg">
                                  <EditableText 
                                    contentKey={`process_keeta_report_step_${idx}_text`}
                                    defaultValue={t(`process_keeta_report_step_${idx}_text`, step.text)}
                                    canEdit={canEdit}
                                    onSave={handleSaveOverride}
                                    onDelete={handleDeleteOverride}
                                    isTextArea
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-20 border-t border-gray-100">
                      <div className="text-center group mb-12">
                         <h2 className="text-2xl font-black text-gray-900 mb-2 relative inline-block" dir="rtl">
                           🔵 التواصل المباشر مع خدمة العملاء داخل كيتا (Live Support)
                           <div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600/20 group-hover:w-full transition-all duration-500"></div>
                         </h2>
                      </div>

                      <div className="relative" dir="rtl">
                        <div className="absolute top-0 right-[25px] bottom-0 w-[2px] bg-gradient-to-b from-blue-600/50 via-gray-100 to-gray-100"></div>
                        <div className="space-y-8">
                          {(PROCESS_SCRIPTS as any).talabatKeeta.keeta.liveSupport.steps.map((step: any, idx: number) => (
                            <div key={idx} className="relative pr-16 group/step">
                              <div className="absolute right-0 top-0 w-[52px] h-[52px] bg-white border-2 border-blue-600 rounded-2xl flex items-center justify-center z-10 shadow-lg group-hover/step:scale-110 transition-transform duration-300">
                                <span className="text-blue-600">{getStepIcon(step.icon)}</span>
                              </div>
                              <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-gray-500/5 border border-gray-100 group-hover/step:translate-x-2 transition-transform duration-300">
                                <h3 className="font-black text-gray-900 mb-3 text-xl text-right">
                                  <EditableText 
                                    contentKey={`process_keeta_live_step_${idx}_title`}
                                    defaultValue={t(`process_keeta_live_step_${idx}_title`, step.title)}
                                    canEdit={canEdit}
                                    onSave={handleSaveOverride}
                                    onDelete={handleDeleteOverride}
                                  />
                                </h3>
                                <div className="text-gray-600 leading-relaxed text-right font-medium text-lg">
                                  <EditableText 
                                    contentKey={`process_keeta_live_step_${idx}_text`}
                                    defaultValue={t(`process_keeta_live_step_${idx}_text`, step.text)}
                                    canEdit={canEdit}
                                    onSave={handleSaveOverride}
                                    onDelete={handleDeleteOverride}
                                    isTextArea
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="h-20"></div>
            </motion.div>
          ) : currentView === 'kuwaiti-terms' ? (
            <motion.div
              key="kuwaiti-terms"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="max-w-5xl mx-auto px-4"
            >
              <div className="text-center mb-10">
                <span className="text-blue-600 dark:text-blue-400 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Cultural Context</span>
                <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
                  Kuwaiti Terms
                </h1>
                <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-2xl dark:shadow-none shadow-blue-500/5 overflow-hidden border border-gray-100 dark:border-gray-800 mb-20">
                <div className="overflow-x-auto">
                  <table className="w-full text-right" dir="rtl">
                    <thead>
                      <tr className="bg-[#1a1c23] dark:bg-black text-white">
                        <th className="px-10 py-6 font-black text-lg text-center tracking-wide border-l border-white/5 uppercase">الكلمات الكويتية</th>
                        <th className="px-10 py-6 font-black text-lg text-center tracking-wide uppercase">المعنى</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                      {(PROCESS_SCRIPTS as any).kuwaitiTerms.map((term: any, idx: number) => (
                        <motion.tr 
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.01, duration: 0.3 }}
                          className="hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors group"
                        >
                          <td className="px-10 py-6 font-black text-blue-600 dark:text-blue-400 text-center border-l border-gray-50 dark:border-gray-800 text-xl group-hover:scale-105 transition-transform duration-300">
                            <EditableText 
                              contentKey={`kuwaiti_term_${idx}_word`}
                              defaultValue={t(`kuwaiti_term_${idx}_word`, term.word)}
                              canEdit={canEdit}
                              onSave={handleSaveOverride}
                              onDelete={handleDeleteOverride}
                            />
                          </td>
                          <td className="px-10 py-6 text-gray-600 dark:text-gray-400 font-medium text-center text-lg">
                            <EditableText 
                              contentKey={`kuwaiti_term_${idx}_meaning`}
                              defaultValue={t(`kuwaiti_term_${idx}_meaning`, term.meaning)}
                              canEdit={canEdit}
                              onSave={handleSaveOverride}
                              onDelete={handleDeleteOverride}
                              isTextArea
                            />
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          ) : currentView === 'catering-packages' ? (
            <motion.div
              key="catering-packages"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="max-w-7xl mx-auto px-4"
            >
              <div className="text-center mb-10">
                <span className="text-blue-600 dark:text-blue-400 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Outdoor Events</span>
                <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
                  Catering Packages
                </h1>
                <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
              </div>

              <div className="flex justify-center mb-16">
                <div className="inline-flex bg-white dark:bg-gray-900 p-1.5 rounded-2xl shadow-xl shadow-blue-500/5 dark:shadow-none border border-gray-100 dark:border-gray-800">
                  {(['Pattie', 'Slice', 'Just C'] as const).map((brand) => (
                    <button
                      key={brand}
                      onClick={() => setSelectedCateringBrand(brand)}
                      className={`px-10 py-3 rounded-xl font-black transition-all text-sm tracking-wide ${selectedCateringBrand === brand ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30 dark:shadow-none' : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCateringBrand}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-20 justify-center">
                    {(CATERING_DATA as any)[selectedCateringBrand].packages.map((pkg: any) => (
                      <motion.div
                        key={pkg.id}
                        whileHover={{ y: -8 }}
                        className="bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-xl shadow-gray-500/5 dark:shadow-none overflow-hidden border border-gray-100 dark:border-gray-800 flex flex-col text-center group transition-all hover:shadow-2xl hover:shadow-orange-500/10"
                      >
                        <div className="bg-orange-600 py-8 px-4 relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-125 transition-transform duration-700"></div>
                          <h3 className="text-white font-black text-2xl tracking-tight relative z-10">{pkg.title}</h3>
                        </div>
                        <div className="p-10 flex-grow flex flex-col justify-between">
                          <div className="text-gray-500 dark:text-gray-400 text-base mb-10 whitespace-pre-line leading-relaxed font-medium">
                            <EditableText 
                              contentKey={`catering_${selectedCateringBrand}_pkg_${pkg.id}_desc`}
                              defaultValue={t(`catering_${selectedCateringBrand}_pkg_${pkg.id}_desc`, pkg.desc)}
                              canEdit={canEdit}
                              onSave={handleSaveOverride}
                              onDelete={handleDeleteOverride}
                              isTextArea
                            />
                          </div>
                          <div className="text-3xl font-black text-orange-600 tracking-tighter">
                            <EditableText 
                              contentKey={`catering_${selectedCateringBrand}_pkg_${pkg.id}_price`}
                              defaultValue={t(`catering_${selectedCateringBrand}_pkg_${pkg.id}_price`, pkg.price)}
                              canEdit={canEdit}
                              onSave={handleSaveOverride}
                              onDelete={handleDeleteOverride}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-24">
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-[3rem] p-12 border border-gray-100 dark:border-gray-700">
                      <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 rounded-2xl bg-orange-600 flex items-center justify-center text-white shadow-lg shadow-orange-600/30">
                          <Info size={24} />
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">Terms & Conditions</h3>
                      </div>
                      <div className="space-y-6">
                        {(CATERING_DATA as any)[selectedCateringBrand].terms.map((term: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-5 group/term">
                            <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-xl bg-white dark:bg-gray-900 flex items-center justify-center shadow-sm text-orange-600 border border-orange-100 dark:border-orange-900/30 group-hover/term:scale-110 transition-transform">
                              {term.includes('Service hours') ? <Clock size={20} /> :
                               term.includes('bookings') ? <Clock size={20} /> :
                               term.includes('employees') ? <User size={20} /> :
                               term.includes('Setup') ? <Settings size={20} /> :
                               term.includes('Electricity') ? <Flame size={20} /> :
                               term.includes('payment') ? <ShoppingBag size={20} /> :
                               <Info size={20} />}
                            </div>
                            <div className="text-gray-600 dark:text-gray-400 font-medium text-lg pt-1 leading-relaxed">
                               <EditableText 
                                 contentKey={`catering_${selectedCateringBrand}_term_${idx}`}
                                 defaultValue={t(`catering_${selectedCateringBrand}_term_${idx}`, term)}
                                 canEdit={canEdit}
                                 onSave={handleSaveOverride}
                                 onDelete={handleDeleteOverride}
                               />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-[#1a1c23] dark:bg-[#0d0e12] rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl border border-white/5">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full -mr-32 -mt-32"></div>
                      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                        <div className="w-20 h-20 rounded-full bg-orange-600 flex items-center justify-center mb-8 shadow-2xl shadow-orange-600/50 scale-110">
                          <Phone size={32} className="text-white" />
                        </div>
                        <h3 className="text-3xl font-black mb-6 tracking-tight">Ready to book?</h3>
                        <p className="text-gray-400 dark:text-gray-500 font-medium text-lg mb-8 leading-relaxed max-w-sm">Contact our events team to customize your perfect catering experience.</p>
                        <div className="bg-white/10 hover:bg-white/[0.15] transition-colors px-10 py-5 rounded-3xl border border-white/10 decoration-0 text-2xl font-black tracking-tighter">
                          9729 4441
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          ) : currentView === 'remote-areas' ? (
            <motion.div
              key="remote-areas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto px-4"
            >
              <div className="text-center mb-12">
                 <h1 className="text-3xl font-bold text-blue-900 dark:text-blue-400 mb-2">Remote Areas</h1>
                 <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl dark:shadow-none overflow-hidden border border-gray-100 dark:border-gray-800 p-8">
                <div className="relative mb-8 max-w-md mx-auto">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="text-gray-400 dark:text-gray-600" size={18} />
                  </div>
                  <input
                    type="text"
                    placeholder="ابحث عن المنطقة..."
                    className="block w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-right text-gray-900 dark:text-white dark:placeholder:text-gray-600"
                    dir="rtl"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm dark:shadow-none">
                  <table className="w-full text-left" dir="rtl">
                    <thead>
                      <tr className="bg-[#2d2942] dark:bg-[#1a172a] text-white">
                        <th className="px-6 py-4 font-bold text-right">Location</th>
                        <th className="px-6 py-4 font-bold text-left">Price (KWD)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50 dark:divide-gray-800 bg-white dark:bg-gray-900">
                      {(CATERING_DATA as any).remoteAreas
                        .filter((area: any) => area.location.toLowerCase().includes(searchQuery.toLowerCase()))
                        .map((area: any, idx: number) => (
                          <motion.tr 
                            key={idx}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors"
                          >
                            <td className="px-6 py-4 text-gray-700 dark:text-gray-300 font-medium text-right">{area.location}</td>
                            <td className="px-6 py-4 text-blue-600 dark:text-blue-400 font-bold text-left">{area.price}</td>
                          </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          ) : currentView === 'cancellation' ? (
            <motion.div
              key="cancellation"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="max-w-4xl mx-auto px-4"
            >
              <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl dark:shadow-none overflow-hidden border border-gray-100 dark:border-gray-800">
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <div className="flex items-center space-x-3 text-blue-900 dark:text-blue-400">
                      <div className="bg-blue-900 dark:bg-blue-800 p-2 rounded-lg">
                        <ListChecks className="text-white" size={24} />
                      </div>
                      <h2 className="text-2xl font-bold">
                        <EditableText 
                          contentKey="cancel_policy_title"
                          defaultValue={t("cancel_policy_title", CANCELLATION_DATA.policy.title)}
                          canEdit={canEdit}
                          onSave={handleSaveOverride}
                          onDelete={handleDeleteOverride}
                        />
                      </h2>
                    </div>
                    <button className="bg-blue-400 hover:bg-blue-500 text-white px-10 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-xl dark:shadow-none transform hover:-translate-y-1">
                      العربية SA
                    </button>
                  </div>

                  <div className="text-gray-500 dark:text-gray-400 mb-12 leading-relaxed text-center max-w-2xl mx-auto">
                    <EditableText 
                      contentKey="cancel_policy_desc"
                      defaultValue={t("cancel_policy_desc", CANCELLATION_DATA.policy.description)}
                      canEdit={canEdit}
                      onSave={handleSaveOverride}
                      onDelete={handleDeleteOverride}
                      isTextArea
                    />
                  </div>

                  <div className="space-y-10 mb-16 px-4">
                    {CANCELLATION_DATA.policy.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start space-x-6 group">
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl group-hover:bg-blue-600 dark:group-hover:bg-blue-500 transition-all shadow-sm dark:shadow-none flex-shrink-0">
                          {step.icon === 'Send' && <Mail className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" size={24} />}
                          {step.icon === 'MessageSquare' && <Users className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" size={24} />}
                          {step.icon === 'Truck' && <Truck className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" size={24} />}
                        </div>
                        <div className="pt-2 flex-grow">
                          <div className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                            <EditableText 
                              contentKey={`cancel_policy_step_${idx}_text`}
                              defaultValue={t(`cancel_policy_step_${idx}_text`, step.text)}
                              canEdit={canEdit}
                              onSave={handleSaveOverride}
                              onDelete={handleDeleteOverride}
                              isTextArea
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-blue-50/50 dark:bg-blue-900/20 rounded-[40px] p-8 md:p-12 border border-blue-100 dark:border-blue-900/30 flex flex-col items-center">
                    <div className="flex items-center justify-center space-x-3 text-blue-900 dark:text-blue-400 mb-10">
                      <Repeat className="text-blue-600 dark:text-blue-400" size={28} />
                      <h3 className="text-2xl font-bold italic">
                        <EditableText 
                          contentKey="cancel_policy_refund_title"
                          defaultValue={t("cancel_policy_refund_title", CANCELLATION_DATA.policy.refund.title)}
                          canEdit={canEdit}
                          onSave={handleSaveOverride}
                          onDelete={handleDeleteOverride}
                        />
                      </h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                      {CANCELLATION_DATA.policy.refund.methods.map((method, idx) => (
                        <div key={idx} className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm dark:shadow-none border border-gray-100 dark:border-gray-700 flex items-center space-x-6 hover:shadow-md dark:hover:bg-gray-700/50 transition-all">
                          <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-2xl">
                             {method.name.includes('Visa') ? <Image size={32} className="dark:text-white" /> : <CreditCard className="text-gray-900 dark:text-white" size={32} />}
                          </div>
                          <div>
                            <div className="font-black text-gray-900 dark:text-white text-lg uppercase">
                              <EditableText 
                                contentKey={`cancel_policy_refund_method_${idx}_name`}
                                defaultValue={t(`cancel_policy_refund_method_${idx}_name`, method.name)}
                                canEdit={canEdit}
                                onSave={handleSaveOverride}
                                onDelete={handleDeleteOverride}
                              />: <span className="font-normal text-gray-600 dark:text-gray-400 lowercase">
                                <EditableText 
                                  contentKey={`cancel_policy_refund_method_${idx}_time`}
                                  defaultValue={t(`cancel_policy_refund_method_${idx}_time`, method.time)}
                                  canEdit={canEdit}
                                  onSave={handleSaveOverride}
                                  onDelete={handleDeleteOverride}
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : currentView === 'yelo-contact' ? (
            <motion.div
              key="yelo-contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-6xl mx-auto px-4 pb-20"
            >
              <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100">
                <div className="p-8 md:p-12">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-black text-blue-900 mb-2">
                       <EditableText 
                        contentKey="contact_yelo_title"
                        defaultValue={t("contact_yelo_title", "Yelo Branch Contacts")}
                        canEdit={canEdit}
                        onSave={handleSaveOverride}
                        onDelete={handleDeleteOverride}
                      />
                    </h2>
                    <div className="h-1 w-20 bg-yellow-400 mx-auto rounded-full"></div>
                  </div>

                  <div className="overflow-hidden rounded-2xl border border-gray-200 mb-16 shadow-sm">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                          <th className="px-6 py-4 text-xs font-black uppercase text-gray-500 tracking-wider">Branch</th>
                          <th className="px-6 py-4 text-xs font-black uppercase text-gray-500 tracking-wider">Staff</th>
                          <th className="px-6 py-4 text-xs font-black uppercase text-gray-500 tracking-wider">Contact Number</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {CONTACTS_DATA.yelo.branches.map((item, idx) => (
                          <tr key={idx} className="hover:bg-yellow-50/30 transition-colors">
                            <td className="px-6 py-4 text-sm font-bold text-gray-900">
                              <EditableText 
                                contentKey={`contact_yelo_branch_${idx}_name`}
                                defaultValue={t(`contact_yelo_branch_${idx}_name`, item.branch)}
                                canEdit={canEdit}
                                onSave={handleSaveOverride}
                                onDelete={handleDeleteOverride}
                              />
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600">
                              <EditableText 
                                contentKey={`contact_yelo_branch_${idx}_staff`}
                                defaultValue={t(`contact_yelo_branch_${idx}_staff`, item.staff)}
                                canEdit={canEdit}
                                onSave={handleSaveOverride}
                                onDelete={handleDeleteOverride}
                              />
                            </td>
                            <td className="px-6 py-4 text-sm">
                              <a href={`tel:${item.phone}`} className="flex items-center space-x-2 text-blue-600 font-bold hover:underline">
                                <Phone size={14} />
                                <span>
                                  <EditableText 
                                    contentKey={`contact_yelo_branch_${idx}_phone`}
                                    defaultValue={t(`contact_yelo_branch_${idx}_phone`, item.phone)}
                                    canEdit={canEdit}
                                    onSave={handleSaveOverride}
                                    onDelete={handleDeleteOverride}
                                  />
                                </span>
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12 border border-gray-100">
                    <h3 className="text-2xl font-black text-center text-blue-900 mb-10">Area Coverage</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {CONTACTS_DATA.yelo.areaCoverage.map((agent, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                          <div className="font-black text-blue-900 text-lg mb-2">
                            <EditableText 
                              contentKey={`contact_yelo_area_agent_${idx}_name`}
                              defaultValue={t(`contact_yelo_area_agent_${idx}_name`, agent.name)}
                              canEdit={canEdit}
                              onSave={handleSaveOverride}
                              onDelete={handleDeleteOverride}
                            />
                          </div>
                          <a href={`tel:${agent.phone}`} className="inline-flex items-center space-x-2 text-blue-600 text-sm font-bold mb-4 hover:underline">
                            <Phone size={14} />
                            <span>
                              <EditableText 
                                contentKey={`contact_yelo_area_agent_${idx}_phone`}
                                defaultValue={t(`contact_yelo_area_agent_${idx}_phone`, agent.phone)}
                                canEdit={canEdit}
                                onSave={handleSaveOverride}
                                onDelete={handleDeleteOverride}
                              />
                            </span>
                          </a>
                          <ul className="space-y-1">
                            {agent.areas.map((area, aidx) => (
                              <li key={aidx} className="text-gray-500 text-xs flex items-center space-x-2">
                                <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                                <span>
                                  <EditableText 
                                    contentKey={`contact_yelo_area_agent_${idx}_area_${aidx}`}
                                    defaultValue={t(`contact_yelo_area_agent_${idx}_area_${aidx}`, area)}
                                    canEdit={canEdit}
                                    onSave={handleSaveOverride}
                                    onDelete={handleDeleteOverride}
                                  />
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : currentView === 'shakir-contact' ? (
            <motion.div
              key="shakir-contact"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              className="max-w-7xl mx-auto px-4"
            >
              <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl dark:shadow-none overflow-hidden border border-gray-100 dark:border-gray-800 p-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 py-4 px-8 rounded-2xl mb-12 text-center border border-blue-100 dark:border-blue-900/30 italic">
                  <h2 className="text-3xl font-black text-blue-900 dark:text-blue-400">
                    <EditableText 
                      contentKey="contact_shakir_title"
                      defaultValue={t("contact_shakir_title", "Shaker's contact list 📋")}
                      canEdit={canEdit}
                      onSave={handleSaveOverride}
                      onDelete={handleDeleteOverride}
                    />
                  </h2>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
                    <tbody>
                      {CONTACTS_DATA.shakir.map((row, rowIdx) => (
                        <tr key={rowIdx}>
                          {/* Left column: Managers */}
                          <td className="p-0 border border-gray-300 dark:border-gray-700 w-1/3">
                            <div className="flex">
                              {row.managers.map((mgr, mgrIdx) => (
                                <div key={mgrIdx} className="flex-1 bg-blue-600 dark:bg-blue-700 p-6 text-white text-center border-r last:border-r-0 border-blue-700 dark:border-blue-800">
                                  <h4 className="font-black text-lg uppercase mb-1">
                                    <EditableText 
                                      contentKey={`contact_shakir_row_${rowIdx}_mgr_${mgrIdx}_name`}
                                      defaultValue={t(`contact_shakir_row_${rowIdx}_mgr_${mgrIdx}_name`, mgr.name)}
                                      canEdit={canEdit}
                                      onSave={handleSaveOverride}
                                      onDelete={handleDeleteOverride}
                                    />
                                  </h4>
                                  <p className="text-blue-200 dark:text-blue-300 text-xs font-bold uppercase mb-2">
                                    <EditableText 
                                      contentKey={`contact_shakir_row_${rowIdx}_mgr_${mgrIdx}_role`}
                                      defaultValue={t(`contact_shakir_row_${rowIdx}_mgr_${mgrIdx}_role`, mgr.role)}
                                      canEdit={canEdit}
                                      onSave={handleSaveOverride}
                                      onDelete={handleDeleteOverride}
                                    />
                                  </p>
                                  {mgr.phone && (
                                    <a href={`tel:${mgr.phone}`} className="text-white hover:underline text-lg font-bold">
                                      <EditableText 
                                        contentKey={`contact_shakir_row_${rowIdx}_mgr_${mgrIdx}_phone`}
                                        defaultValue={t(`contact_shakir_row_${rowIdx}_mgr_${mgrIdx}_phone`, mgr.phone)}
                                        canEdit={canEdit}
                                        onSave={handleSaveOverride}
                                        onDelete={handleDeleteOverride}
                                      />
                                    </a>
                                  )}
                                </div>
                              ))}
                            </div>
                            <div className="h-64 bg-white dark:bg-gray-900"></div>
                          </td>

                          {/* Middle & Right columns: Branches */}
                          {row.branches.map((branch, brIdx) => (
                            <td key={brIdx} className="p-0 border border-gray-300 dark:border-gray-700 w-1/6 align-top">
                              <div className="bg-blue-600 dark:bg-blue-800 p-4 text-white text-center border-b border-blue-700 dark:border-blue-900 h-32 flex flex-col justify-center">
                                <h4 className="font-black text-sm uppercase mb-1">
                                  <EditableText 
                                    contentKey={`contact_shakir_row_${rowIdx}_branch_${brIdx}_name`}
                                    defaultValue={t(`contact_shakir_row_${rowIdx}_branch_${brIdx}_name`, branch.name)}
                                    canEdit={canEdit}
                                    onSave={handleSaveOverride}
                                    onDelete={handleDeleteOverride}
                                  />
                                </h4>
                                <p className="text-blue-200 dark:text-blue-300 text-xs font-bold uppercase mb-2">
                                  <EditableText 
                                    contentKey={`contact_shakir_row_${rowIdx}_branch_${brIdx}_lead_name`}
                                    defaultValue={t(`contact_shakir_row_${rowIdx}_branch_${brIdx}_lead_name`, branch.lead.name)}
                                    canEdit={canEdit}
                                    onSave={handleSaveOverride}
                                    onDelete={handleDeleteOverride}
                                  />
                                </p>
                                <a href={`tel:${branch.lead.phone}`} className="text-white hover:underline text-xs font-bold">
                                  <EditableText 
                                    contentKey={`contact_shakir_row_${rowIdx}_branch_${brIdx}_lead_phone`}
                                    defaultValue={t(`contact_shakir_row_${rowIdx}_branch_${brIdx}_lead_phone`, branch.lead.phone)}
                                    canEdit={canEdit}
                                    onSave={handleSaveOverride}
                                    onDelete={handleDeleteOverride}
                                  />
                                </a>
                              </div>
                              <div className="p-4 bg-white dark:bg-gray-900 min-h-[16rem]">
                                {branch.members.map((member, mIdx) => (
                                  <div key={mIdx} className="flex justify-between items-center mb-3 text-xs border-b border-dashed border-gray-200 dark:border-gray-800 pb-2 last:border-0 last:mb-0">
                                    <span className="text-gray-800 dark:text-gray-200 font-bold">
                                      <EditableText 
                                        contentKey={`contact_shakir_row_${rowIdx}_branch_${brIdx}_member_${mIdx}_name`}
                                        defaultValue={t(`contact_shakir_row_${rowIdx}_branch_${brIdx}_member_${mIdx}_name`, member.name)}
                                        canEdit={canEdit}
                                        onSave={handleSaveOverride}
                                        onDelete={handleDeleteOverride}
                                      />
                                    </span>
                                    <a href={`tel:${member.phone}`} className="text-blue-500 dark:text-blue-400 hover:underline">
                                      <EditableText 
                                        contentKey={`contact_shakir_row_${rowIdx}_branch_${brIdx}_member_${mIdx}_phone`}
                                        defaultValue={t(`contact_shakir_row_${rowIdx}_branch_${brIdx}_member_${mIdx}_phone`, member.phone)}
                                        canEdit={canEdit}
                                        onSave={handleSaveOverride}
                                        onDelete={handleDeleteOverride}
                                      />
                                    </a>
                                  </div>
                                ))}
                              </div>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          ) : currentView === 'bbt-contact' ? (
            <motion.div
              key="bbt-contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-6xl mx-auto px-4 space-y-8 pb-12"
            >
              <div className="text-center mb-8">
                <h2 className="text-4xl font-black text-blue-900 dark:text-blue-400 mb-2">
                  <EditableText 
                    contentKey="contact_bbt_title"
                    defaultValue={t("contact_bbt_title", "BBT Contacts")}
                    canEdit={canEdit}
                    onSave={handleSaveOverride}
                    onDelete={handleDeleteOverride}
                  />
                </h2>
                <p className="text-gray-500 dark:text-gray-400 font-medium">
                  <EditableText 
                    contentKey="contact_bbt_desc"
                    defaultValue={t("contact_bbt_desc", "Branch manager contacts for BBT locations")}
                    canEdit={canEdit}
                    onSave={handleSaveOverride}
                    onDelete={handleDeleteOverride}
                    isTextArea
                  />
                </p>
                <div className="h-1.5 w-24 bg-blue-500 mx-auto rounded-full mt-4"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {CONTACTS_DATA.bbt.map((branch: any, bIdx: number) => (
                  <div key={branch.name} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-none border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl dark:hover:bg-gray-750 transition-shadow">
                    <div className="bg-blue-600 dark:bg-blue-700 px-6 py-4">
                      <h3 className="text-white font-bold text-lg">
                        <EditableText 
                          contentKey={`contact_bbt_branch_${bIdx}_name`}
                          defaultValue={t(`contact_bbt_branch_${bIdx}_name`, branch.name)}
                          canEdit={canEdit}
                          onSave={handleSaveOverride}
                          onDelete={handleDeleteOverride}
                        />
                      </h3>
                    </div>
                    <div className="p-0">
                      <table className="w-full">
                        <thead className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-100 dark:border-gray-700">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Mobile No.</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                          {branch.contacts.map((contact: any, idx: number) => (
                            <tr key={idx} className="hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700 dark:text-gray-300">
                                <EditableText 
                                  contentKey={`contact_bbt_branch_${bIdx}_contact_${idx}_name`}
                                  defaultValue={t(`contact_bbt_branch_${bIdx}_contact_${idx}_name`, contact.name)}
                                  canEdit={canEdit}
                                  onSave={handleSaveOverride}
                                  onDelete={handleDeleteOverride}
                                />
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <a 
                                  href={`tel:${contact.phone}`} 
                                  className="text-blue-600 dark:text-blue-400 font-bold hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-2"
                                >
                                  <Phone size={14} />
                                  <EditableText 
                                    contentKey={`contact_bbt_branch_${bIdx}_contact_${idx}_phone`}
                                    defaultValue={t(`contact_bbt_branch_${bIdx}_contact_${idx}_phone`, contact.phone)}
                                    canEdit={canEdit}
                                    onSave={handleSaveOverride}
                                    onDelete={handleDeleteOverride}
                                  />
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : currentView === 'users-contact' ? (
            <motion.div
              key="users-contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-6xl mx-auto px-4 pb-12"
            >
              <div className="bg-[#1e1b2e] dark:bg-[#110e1f] rounded-3xl p-8 text-white shadow-2xl dark:shadow-none mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Database size={120} />
                </div>
                <div className="relative z-10">
                  <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">
                    <EditableText 
                      contentKey="users_title"
                      defaultValue={t("users_title", "System Access Directory")}
                      canEdit={canEdit}
                      onSave={handleSaveOverride}
                      onDelete={handleDeleteOverride}
                    />
                  </h2>
                  <p className="max-w-xl font-medium opacity-80 text-blue-100 dark:text-blue-200">
                    <EditableText 
                      contentKey="users_desc"
                      defaultValue={t("users_desc", "Platform login credentials and technical service access for all brand accounts.")}
                      canEdit={canEdit}
                      onSave={handleSaveOverride}
                      onDelete={handleDeleteOverride}
                      isTextArea
                    />
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(CONTACTS_DATA as any).platforms.map((platform: any, idx: number) => (
                  <div key={idx} className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl dark:shadow-none border border-gray-100 dark:border-gray-700 overflow-hidden group hover:border-blue-200 dark:hover:border-blue-900/30 transition-all flex flex-col">
                    <div className="bg-gray-50 dark:bg-gray-900/50 p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                      <h3 className="text-lg font-black text-blue-900 dark:text-blue-400 uppercase tracking-tight">
                        <EditableText 
                          contentKey={`platform_${idx}_name`}
                          defaultValue={t(`platform_${idx}_name`, platform.name)}
                          canEdit={canEdit}
                          onSave={handleSaveOverride}
                          onDelete={handleDeleteOverride}
                        />
                      </h3>
                      <div className="p-2 bg-white dark:bg-gray-900 rounded-xl shadow-sm dark:shadow-none text-blue-600 dark:text-blue-400">
                        {React.createElement({
                          CreditCard: CreditCard,
                          Users: Users,
                          Box: Package,
                          Truck: Truck,
                          ShoppingBag: ShoppingBag,
                          Store: Store,
                          Zap: Zap,
                          Menu: Info
                        }[platform.icon] || Info, { size: 18 })}
                      </div>
                    </div>
                    <div className="p-6 space-y-4 flex-grow overflow-y-auto max-h-[400px] custom-scrollbar">
                      {platform.url && (
                         <a 
                           href={platform.url} 
                           target="_blank" 
                           rel="noreferrer" 
                           className="w-full py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 rounded-xl flex items-center justify-center font-bold text-xs gap-2 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all mb-4"
                         >
                           <Globe size={12} />
                           Open Platform
                         </a>
                      )}
                      {(platform.brands || platform.branches || platform.categories || (platform.items ? [{ name: '', items: platform.items }] : []))?.map((group: any, gIdx: number) => (
                        <div key={gIdx} className="space-y-4">
                          {group.name && (
                            <h4 className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest border-l-2 border-blue-500 pl-2">
                              <EditableText 
                                contentKey={`platform_${idx}_group_${gIdx}_name`}
                                defaultValue={t(`platform_${idx}_group_${gIdx}_name`, group.name)}
                                canEdit={canEdit}
                                onSave={handleSaveOverride}
                                onDelete={handleDeleteOverride}
                              />
                            </h4>
                          )}
                          {group.items ? (
                            <div className="grid grid-cols-1 gap-3">
                              {group.items.map((item: any, iIdx: number) => (
                                <div key={iIdx} className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 p-4 rounded-2xl space-y-2 hover:shadow-md dark:hover:shadow-none transition-shadow group/item">
                                  <div className="flex justify-between items-start">
                                    <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                                      <EditableText 
                                        contentKey={`platform_${idx}_group_${gIdx}_item_${iIdx}_name`}
                                        defaultValue={t(`platform_${idx}_group_${gIdx}_item_${iIdx}_name`, item.name)}
                                        canEdit={canEdit}
                                        onSave={handleSaveOverride}
                                        onDelete={handleDeleteOverride}
                                      />
                                    </p>
                                    {item.url && !item.user && !item.pass && (
                                       <a 
                                         href={item.url} 
                                         target="_blank" 
                                         rel="noreferrer" 
                                         className="p-2 bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-lg opacity-0 group-hover/item:opacity-100 transition-opacity hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white"
                                       >
                                         <Globe size={14} />
                                       </a>
                                    )}
                                  </div>
                                  {(item.user || item.pass) ? (
                                    <div className="space-y-1">
                                      <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-bold text-blue-500 dark:text-blue-400 w-12 text-left">USER:</span>
                                        <span className="text-sm font-bold text-gray-700 dark:text-gray-300 select-all">
                                          <EditableText 
                                            contentKey={`platform_${idx}_group_${gIdx}_item_${iIdx}_user`}
                                            defaultValue={t(`platform_${idx}_group_${gIdx}_item_${iIdx}_user`, item.user)}
                                            canEdit={canEdit}
                                            onSave={handleSaveOverride}
                                            onDelete={handleDeleteOverride}
                                          />
                                        </span>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-bold text-red-500 dark:text-red-400 w-12 text-left">PASS:</span>
                                        <span className="text-sm font-bold text-gray-700 dark:text-gray-300 font-mono tracking-tight select-all">
                                          <EditableText 
                                            contentKey={`platform_${idx}_group_${gIdx}_item_${iIdx}_pass`}
                                            defaultValue={t(`platform_${idx}_group_${gIdx}_item_${iIdx}_pass`, item.pass)}
                                            canEdit={canEdit}
                                            onSave={handleSaveOverride}
                                            onDelete={handleDeleteOverride}
                                          />
                                        </span>
                                      </div>
                                    </div>
                                  ) : item.url ? (
                                    <a 
                                      href={item.url} 
                                      target="_blank" 
                                      rel="noreferrer" 
                                      className="block text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 break-all"
                                    >
                                      {item.url}
                                    </a>
                                  ) : null}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 p-4 rounded-2xl space-y-2 hover:shadow-md dark:hover:shadow-none transition-shadow">
                              <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                                <EditableText 
                                  contentKey={`platform_${idx}_group_${gIdx}_simple_name`}
                                  defaultValue={t(`platform_${idx}_group_${gIdx}_simple_name`, group.name || platform.name)}
                                  canEdit={canEdit}
                                  onSave={handleSaveOverride}
                                  onDelete={handleDeleteOverride}
                                />
                              </p>
                              <div className="space-y-1">
                                {group.user && (
                                  <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-bold text-blue-500 dark:text-blue-400 w-12 text-left">USER:</span>
                                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300 select-all">
                                      <EditableText 
                                        contentKey={`platform_${idx}_group_${gIdx}_user`}
                                        defaultValue={t(`platform_${idx}_group_${gIdx}_user`, group.user)}
                                        canEdit={canEdit}
                                        onSave={handleSaveOverride}
                                        onDelete={handleDeleteOverride}
                                      />
                                    </span>
                                  </div>
                                )}
                                {group.pass && (
                                  <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-bold text-red-500 dark:text-red-400 w-12 text-left">PASS:</span>
                                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300 font-mono tracking-tight select-all">
                                      <EditableText 
                                        contentKey={`platform_${idx}_group_${gIdx}_pass`}
                                        defaultValue={t(`platform_${idx}_group_${gIdx}_pass`, group.pass)}
                                        canEdit={canEdit}
                                        onSave={handleSaveOverride}
                                        onDelete={handleDeleteOverride}
                                      />
                                    </span>
                                  </div>
                                )}
                                {group.url && (
                                   <div className="text-[10px] text-blue-500 dark:text-blue-400 flex items-center gap-1 pt-1 truncate">
                                     <span>Link:</span>
                                     <EditableText 
                                        contentKey={`platform_${idx}_group_${gIdx}_url`}
                                        defaultValue={t(`platform_${idx}_group_${gIdx}_url`, group.url)}
                                        canEdit={canEdit}
                                        onSave={handleSaveOverride}
                                        onDelete={handleDeleteOverride}
                                     />
                                   </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : currentView === 'shakir-contact' || currentView === 'yelo-contact' || currentView === 'bbt-contact' ? (
            <motion.div
              key="brand-contacts"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-7xl mx-auto px-4 pb-12"
            >
              <div className={`rounded-3xl p-8 text-white shadow-2xl mb-8 overflow-hidden relative ${
                currentView === 'shakir-contact' ? 'bg-[#a81c1c]' : 
                currentView === 'yelo-contact' ? 'bg-blue-600' : 'bg-[#2d2942]'
              }`}>
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <PhoneCall size={120} />
                </div>
                <div className="relative z-10">
                  <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">
                    {currentView.split('-')[0]} Contact Directory
                  </h2>
                  <p className="max-w-2xl font-medium opacity-80">
                    Direct access to branch leads, area managers, and operations staff.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(currentView === 'shakir-contact' ? CONTACTS_DATA.shakir : 
                  currentView === 'yelo-contact' ? [CONTACTS_DATA.yelo] : 
                  [CONTACTS_DATA.bbt]).map((group: any, gIdx: number) => (
                  <React.Fragment key={gIdx}>
                    {group.managers && (
                      <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
                        {group.managers.map((mgr: any, mIdx: number) => (
                          <div key={mIdx} className="bg-white border-2 border-blue-50 p-6 rounded-3xl shadow-sm flex items-center justify-between">
                            <div>
                              <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1">{mgr.role}</p>
                              <h3 className="text-xl font-black text-gray-800">{mgr.name}</h3>
                            </div>
                            <a href={`tel:${mgr.phone}`} className="p-4 bg-blue-600 text-white rounded-2xl shadow-lg hover:bg-blue-700 transition-colors">
                              <Phone size={20} />
                            </a>
                          </div>
                        ))}
                      </div>
                    )}
                    {group.branches && group.branches.map((branch: any, bIdx: number) => (
                      <div key={bIdx} className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col">
                        <div className="bg-gray-50 p-6 border-b border-gray-100">
                          <h3 className="text-lg font-black text-blue-900 uppercase tracking-tight">{branch.name}</h3>
                        </div>
                        <div className="p-6 flex-grow space-y-4">
                          {branch.lead && (
                            <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100/50">
                              <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">Branch Lead</p>
                              <div className="flex justify-between items-center">
                                <span className="font-bold text-gray-700">{branch.lead.name}</span>
                                <a href={`tel:${branch.lead.phone}`} className="flex items-center gap-2 text-blue-600 font-black hover:text-blue-800 transition-colors">
                                  <Phone size={14} />
                                  {branch.lead.phone}
                                </a>
                              </div>
                            </div>
                          )}
                          <div className="space-y-2">
                            {branch.members && branch.members.map((member: any, mIdx: number) => (
                              <div key={mIdx} className="flex justify-between items-center p-3 rounded-xl hover:bg-gray-50 transition-colors">
                                <span className="text-sm font-medium text-gray-600">{member.name}</span>
                                <a href={`tel:${member.phone}`} className="text-xs font-bold text-blue-500 hover:text-blue-700">
                                  {member.phone}
                                </a>
                              </div>
                            ))}
                          </div>
                          {branch.staff && (
                            <div className="flex justify-between items-center">
                              <span className="font-bold text-gray-700">{branch.staff}</span>
                              <a href={`tel:${branch.phone}`} className="flex items-center gap-2 text-blue-600 font-bold">
                                <Phone size={14} />
                                {branch.phone}
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    {!group.branches && currentView === 'bbt-contact' && group.map((b: any, bi: number) => (
                      <div key={bi} className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                        <div className="bg-blue-900 p-4">
                          <h3 className="text-white font-black text-sm uppercase tracking-wider">{b.name}</h3>
                        </div>
                        <div className="p-4 space-y-2">
                          {b.contacts.map((c: any, ci: number) => (
                            <div key={ci} className="flex justify-between items-center">
                              <span className="text-sm font-medium text-gray-600">{c.name}</span>
                              <a href={`tel:${c.phone}`} className="text-sm font-bold text-blue-600">{c.phone}</a>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          ) : currentView === 'cancellation' ? (
            <motion.div
              key="cancellation"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto px-4 pb-12"
            >
              <div className="bg-[#a81c1c] rounded-3xl p-8 text-white shadow-2xl mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <XCircle size={120} />
                </div>
                <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">{CANCELLATION_DATA.policy.title}</h2>
                <p className="max-w-2xl font-medium opacity-80 leading-relaxed">
                  {CANCELLATION_DATA.policy.description}
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                  <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
                    <div className="w-2 h-8 bg-red-500 rounded-full"></div>
                    Standard Procedure
                  </h3>
                  <div className="space-y-12 relative">
                    <div className="absolute left-6 top-10 bottom-10 w-0.5 bg-gray-100 ml-[-1px]"></div>
                    {CANCELLATION_DATA.policy.steps.map((step: any, idx: number) => {
                      const StepIcon = {
                        Send: Send,
                        MessageSquare: MessageSquare,
                        Truck: Truck
                      }[step.icon] || Info;
                      
                      return (
                        <div key={idx} className="relative flex items-start gap-8 z-10">
                          <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-100 flex-shrink-0">
                            <StepIcon size={20} />
                          </div>
                          <div>
                            <p className="text-xl font-bold text-gray-800 leading-relaxed pt-1">{step.text}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                  <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
                    <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
                    Refund Timeline
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {CANCELLATION_DATA.policy.refund.methods.map((method: any, idx: number) => (
                      <div key={idx} className="p-6 bg-blue-50 rounded-2xl border border-blue-100 flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                          <CreditCard size={24} />
                        </div>
                        <div>
                          <p className="text-sm text-blue-400 font-black uppercase tracking-widest">{method.name}</p>
                          <p className="text-xl font-black text-blue-900">{method.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : currentView === 'talabat-keeta' ? (
            <motion.div
              key="talabat-keeta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-6xl mx-auto px-4 pb-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Talabat Section */}
                <div className="space-y-6">
                  <div className="bg-[#ff5a00] rounded-3xl p-8 text-white shadow-xl dark:shadow-none relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-20">
                      <ShoppingBag size={80} />
                    </div>
                    <h2 className="text-3xl font-black mb-2 tracking-tight uppercase">Talabat Support</h2>
                    <p className="text-orange-100 dark:text-orange-200 font-medium">Step-by-step guide for customer assistance</p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl dark:shadow-none p-6">
                    <h3 className="text-lg font-black text-gray-800 dark:text-gray-200 mb-6 uppercase tracking-tight border-b border-gray-50 dark:border-gray-800 pb-4">
                      {PROCESS_SCRIPTS.talabatKeeta.talabat.title}
                    </h3>
                    <div className="space-y-4">
                      {PROCESS_SCRIPTS.talabatKeeta.talabat.steps.map((step: any, i: number) => {
                        const Icon = {
                          UserCircle: Users,
                          HelpCircle: HelpCircle,
                          ListChecks: ListChecks,
                          Store: Store,
                          ChatDots: MessageSquare
                        }[step.icon] || Info;

                        return (
                          <div key={i} className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-orange-200 dark:hover:border-orange-900 transition-colors">
                            <div className="w-10 h-10 bg-[#ff5a00] text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-orange-100 dark:shadow-none">
                              <Icon size={20} />
                            </div>
                            <div>
                             <h4 className="font-black text-[#ff5a00] dark:text-orange-400 text-sm mb-1">{step.title}</h4>
                             <p className="text-sm font-bold text-gray-600 dark:text-gray-400 leading-relaxed" dir="auto">{step.text}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="mt-8 p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-900/30 rounded-2xl text-orange-800 dark:text-orange-300 text-sm font-bold flex items-start gap-2">
                       <Info size={18} className="shrink-0 mt-0.5" />
                       <p>{PROCESS_SCRIPTS.talabatKeeta.talabat.note}</p>
                    </div>
                  </div>
                </div>

                {/* Keeta Section */}
                <div className="space-y-6">
                  <div className="bg-[#00c9c8] rounded-3xl p-8 text-white shadow-xl dark:shadow-none relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-20">
                      <Zap size={80} />
                    </div>
                    <h2 className="text-3xl font-black mb-2 tracking-tight uppercase">Keeta Support</h2>
                    <p className="text-teal-50 dark:text-teal-100 font-medium">Filing complaints and contacting support</p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl dark:shadow-none p-6">
                    <h3 className="text-lg font-black text-gray-800 dark:text-gray-200 mb-6 uppercase tracking-tight border-b border-gray-50 dark:border-gray-800 pb-4">
                      {PROCESS_SCRIPTS.talabatKeeta.keeta.reportIssue.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {PROCESS_SCRIPTS.talabatKeeta.keeta.reportIssue.steps.map((step: any, i: number) => {
                         const Icon = {
                          Smartphone: Smartphone,
                          List: List,
                          ShoppingBag: ShoppingBag,
                          AlertTriangle: AlertTriangle,
                          ListChecks: ListChecks,
                          PencilLine: Edit,
                          Image: Image,
                          Send: Send,
                          Bell: Bell
                        }[step.icon] || Info;

                        return (
                          <div key={i} className="flex gap-3 p-3 bg-teal-50/30 dark:bg-teal-900/20 rounded-xl border border-teal-100/50 dark:border-teal-900/30">
                            <Icon size={16} className="text-[#00c9c8] shrink-0 mt-1" />
                            <div>
                              <h4 className="font-bold text-teal-800 dark:text-teal-400 text-[10px] uppercase tracking-wider">{step.title}</h4>
                              <p className="text-xs font-bold text-gray-600 dark:text-gray-400 break-words" dir="auto">{step.text}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-800">
                       <h3 className="text-lg font-black text-gray-800 dark:text-gray-200 mb-6 uppercase tracking-tight">
                        {PROCESS_SCRIPTS.talabatKeeta.keeta.liveSupport.title}
                      </h3>
                      <div className="space-y-3">
                        {PROCESS_SCRIPTS.talabatKeeta.keeta.liveSupport.steps.map((step: any, i: number) => (
                           <div key={i} className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                              <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-black text-xs">{i+1}</div>
                              <div>
                                <span className="text-xs font-black text-teal-700 dark:text-teal-400 block uppercase">{step.title}</span>
                                <span className="text-xs font-bold text-gray-500 dark:text-gray-400" dir="auto">{step.text}</span>
                              </div>
                           </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : currentView === 'new-order' || currentView === 'follow-up' || currentView === 'complain' || currentView === 'additional' || currentView === 'special-requests' ? (
            <motion.div
              key="process-views"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-7xl mx-auto px-4 pb-12"
            >
              <div className="bg-[#2d2942] dark:bg-[#110e1f] rounded-3xl p-8 text-white shadow-2xl dark:shadow-none mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Activity size={120} />
                </div>
                <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">{currentView.replace('-', ' ')}</h2>
                <p className="max-w-2xl font-medium opacity-80 leading-relaxed text-blue-100 dark:text-blue-200">
                  Standard operating procedures and scripts for managing {currentView.replace('-', ' ')} efficiently.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {currentView === 'new-order' && Object.entries(PROCESS_SCRIPTS.newOrder).map(([key, section]: [string, any]) => (
                  key !== 'notes' && (
                    <div key={key} className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl dark:shadow-none border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col">
                      <div className="bg-blue-600 p-6 flex items-center gap-4">
                        <span className="text-3xl">{section.icon}</span>
                        <div>
                          <h3 className="text-white font-black text-xl uppercase tracking-tight">{section.title}</h3>
                        </div>
                      </div>
                      <div className="p-8 space-y-4 flex-grow">
                        {section.script.map((step: string, i: number) => (
                          <div key={i} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-750 hover:border-blue-200 dark:hover:border-blue-900/50 transition-all shadow-sm dark:shadow-none" dir="rtl">
                            <p className="text-gray-800 dark:text-gray-200 font-bold leading-relaxed">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                ))}
                
                {currentView === 'follow-up' && Object.entries(PROCESS_SCRIPTS.followUp).map(([key, section]: [string, any]) => (
                  key !== 'notes' && (
                    <div key={key} className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl dark:shadow-none border border-gray-100 dark:border-gray-800 p-6">
                       <div className="flex items-center gap-3 mb-6">
                        <span className="text-2xl">{section.icon}</span>
                        <h3 className="text-xl font-black text-blue-900 dark:text-blue-400 uppercase tracking-tight">{section.title}</h3>
                      </div>
                      <div className="space-y-3">
                        {section.script.map((step: string, i: number) => (
                           <div key={i} className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30 rounded-2xl" dir="auto">
                             <p className="text-sm font-bold text-blue-800 dark:text-blue-300 leading-relaxed">{step}</p>
                           </div>
                        ))}
                      </div>
                    </div>
                  )
                ))}

                {currentView === 'complain' && (
                  <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-3xl shadow-xl dark:shadow-none border border-gray-100 dark:border-gray-800 overflow-hidden">
                    <div className="bg-red-600 dark:bg-red-700 p-6 flex items-center justify-between">
                      <h3 className="text-white font-black text-2xl uppercase tracking-tight">Complaint Protocol Matrix</h3>
                      <div className="flex gap-4">
                        <span className="px-4 py-1 bg-white/20 rounded-full text-xs font-black text-white uppercase backdrop-blur-sm">Action Guide</span>
                      </div>
                    </div>
                    <div className="p-8 overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b-2 border-gray-100 dark:border-gray-800">
                            <th className="px-6 py-4 text-left text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Complaint Type</th>
                            <th className="px-6 py-4 text-left text-xs font-black text-blue-500 dark:text-blue-400 uppercase tracking-widest">Call Center / Delivery</th>
                            <th className="px-6 py-4 text-left text-xs font-black text-orange-500 dark:text-orange-400 uppercase tracking-widest">Aggregator Platforms</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                          {Object.entries(PROCESS_SCRIPTS.complain.types).map(([type, actions]: [string, any]) => (
                            <tr key={type} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                              <td className="px-6 py-6 font-black text-gray-800 dark:text-gray-200 uppercase text-xs tracking-wider bg-gray-50/50 dark:bg-gray-800/30">{type.replace(/-/g, ' ')}</td>
                              <td className="px-6 py-6 text-sm font-bold text-gray-600 dark:text-gray-400 leading-relaxed max-w-md border-x border-gray-50 dark:border-gray-800">{actions.call}</td>
                              <td className="px-6 py-6 text-sm font-bold text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">{actions.platform}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {currentView === 'additional' && Object.entries(PROCESS_SCRIPTS.additional).map(([key, section]: [string, any]) => (
                  <div key={key} className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl dark:shadow-none border border-gray-100 dark:border-gray-800 p-8 flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center">
                        {key === 'aggregators' ? <Package size={28} /> : key === 'pickup' ? <Store size={28} /> : <Truck size={28} />}
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-blue-900 dark:text-blue-400 tracking-tight uppercase">{section.title}</h3>
                        <p className="text-xs text-gray-400 dark:text-gray-500 font-bold uppercase tracking-widest">Protocol Override</p>
                      </div>
                    </div>
                    <div className="space-y-4" dir="rtl">
                      {section.content.map((text: string, i: number) => (
                        <p key={i} className="text-gray-700 dark:text-gray-300 font-bold leading-relaxed p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                          {text}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}

                {currentView === 'special-requests' && Object.entries(PROCESS_SCRIPTS.specialRequests).map(([key, section]: [string, any]) => (
                   <div key={key} className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl dark:shadow-none border border-gray-100 dark:border-gray-800 p-8 flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center">
                      {key === 'aggregators' ? <Package size={28} /> : key === 'pickup' ? <Store size={28} /> : <Truck size={28} />}
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-purple-900 dark:text-purple-400 tracking-tight uppercase">{section.title}</h3>
                        <p className="text-xs text-gray-400 dark:text-gray-500 font-bold uppercase tracking-widest">Modification Protocol</p>
                      </div>
                    </div>
                    <div className="space-y-4" dir="rtl">
                      {section.content.map((text: string, i: number) => (
                        <p key={i} className="text-gray-700 dark:text-gray-300 font-bold leading-relaxed p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                          {text}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Notes Sidebar shared for processes */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                 {currentView === 'new-order' && (
                   <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30 rounded-[2rem] p-8 flex items-start gap-4 shadow-sm dark:shadow-none md:col-span-2">
                     <span className="text-4xl shrink-0">{PROCESS_SCRIPTS.newOrder.notes.icon}</span>
                     <div>
                       <h4 className="text-xl font-black text-blue-900 dark:text-blue-400 mb-2 uppercase tracking-tight">{PROCESS_SCRIPTS.newOrder.notes.title}</h4>
                       <p className="text-blue-800 dark:text-blue-300 font-bold leading-relaxed" dir="auto">{PROCESS_SCRIPTS.newOrder.notes.text}</p>
                     </div>
                   </div>
                 )}
                 {currentView === 'follow-up' && (
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30 rounded-[2rem] p-8 md:col-span-2">
                       <div className="flex items-center gap-3 mb-6">
                        <span className="text-3xl">{PROCESS_SCRIPTS.followUp.notes.icon}</span>
                        <h4 className="text-xl font-black text-blue-900 dark:text-blue-400 uppercase tracking-tight">{PROCESS_SCRIPTS.followUp.notes.title}</h4>
                       </div>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         {PROCESS_SCRIPTS.followUp.notes.items.map((item: string, i: number) => (
                            <div key={i} className="flex items-start gap-3 p-4 bg-white/60 dark:bg-gray-900/40 backdrop-blur-sm rounded-2xl border border-blue-100 dark:border-blue-900/30">
                              <span className="text-blue-500 dark:text-blue-400 shrink-0 mt-1"><Info size={16} /></span>
                              <p className="text-sm font-bold text-blue-800 dark:text-blue-300" dir="auto">{item}</p>
                            </div>
                         ))}
                       </div>
                    </div>
                 )}
                 {currentView === 'complain' && (
                   <div className="bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 rounded-[2rem] p-8 md:col-span-2">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-3xl">{PROCESS_SCRIPTS.complain.notes.icon}</span>
                        <h4 className="text-xl font-black text-red-900 dark:text-red-400 uppercase tracking-tight">{PROCESS_SCRIPTS.complain.notes.title}</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {PROCESS_SCRIPTS.complain.notes.items.map((item: string, i: number) => (
                          <div key={i} className="flex items-start gap-3 p-4 bg-white/60 dark:bg-gray-900/40 backdrop-blur-sm rounded-2xl border border-red-100 dark:border-red-900/30">
                            <span className="text-red-500 dark:text-red-400 shrink-0 mt-1"><Info size={16} /></span>
                            <p className="text-xs font-bold text-red-800 dark:text-red-300" dir="auto">{item}</p>
                          </div>
                        ))}
                      </div>
                   </div>
                 )}
              </div>
            </motion.div>
          ) : currentView === 'remote-areas' ? (
            <motion.div
              key="remote-areas"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-5xl mx-auto px-4 pb-12"
            >
              <div className="bg-[#1e1b2e] dark:bg-[#110e1f] rounded-3xl p-10 text-white shadow-2xl dark:shadow-none mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-10">
                   <Globe size={150} />
                </div>
                <div className="relative z-10">
                  <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Remote Delivery Zones</h2>
                  <p className="text-blue-100 dark:text-blue-200 max-w-xl font-medium opacity-80 leading-relaxed">
                    Surcharge matrix for suburban and remote areas. Standard delivery applies a flat fee for these designated zones.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl dark:shadow-none border border-gray-100 dark:border-gray-800 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x divide-y divide-gray-50 dark:divide-gray-800">
                  {(PROCESS_SCRIPTS as any).remoteAreas.map((area: any, idx: number) => (
                    <div key={idx} className="p-6 flex justify-between items-center hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group">
                      <div className="flex items-center gap-3">
                        <MapPin size={18} className="text-blue-300 dark:text-blue-600 group-hover:text-blue-500 transition-colors" />
                        <span className="font-bold text-gray-700 dark:text-gray-300 group-hover:text-blue-900 dark:group-hover:text-blue-400">{area.location}</span>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-xs font-black text-blue-400 dark:text-blue-500 uppercase tracking-widest">Fee</span>
                        <span className="text-lg font-black text-blue-600 dark:text-blue-400">{area.price} KD</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : currentView === 'complaint-status' ? (
             <motion.div
              key="complaint-status"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-6xl mx-auto px-4 pb-12"
            >
               <div className="bg-[#2d2942] dark:bg-[#110e1f] rounded-[2.5rem] p-10 text-white shadow-2xl dark:shadow-none mb-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-10">
                   <ListChecks size={180} />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">Issue Category Matrix</h2>
                    <p className="text-blue-100 dark:text-blue-200 text-lg font-medium opacity-80 max-w-md">Reference guide for categorizing and labeling customer complaints in the reporting system.</p>
                  </div>
                  <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 dark:border-white/5 shrink-0">
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <p className="text-3xl font-black">{COMPLAINT_STATUSES.filter(s => s.status === 'Open').length}</p>
                        <p className="text-[10px] font-black uppercase text-blue-300 dark:text-blue-400 tracking-widest">Active Categories</p>
                      </div>
                      <div className="w-px h-10 bg-white/20"></div>
                      <div className="text-center">
                        <p className="text-3xl font-black">{COMPLAINT_STATUSES.length}</p>
                        <p className="text-[10px] font-black uppercase text-blue-300 dark:text-blue-400 tracking-widest">Total Types</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {COMPLAINT_STATUSES.map((status) => (
                  <motion.div
                    key={status.id}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-xl dark:shadow-none border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center group cursor-default transition-all hover:border-blue-200 dark:hover:border-blue-900/50"
                  >
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg transform group-hover:rotate-6 transition-all ${
                      status.status === 'Open' 
                        ? 'bg-orange-50 dark:bg-orange-950/20 text-orange-600 dark:text-orange-400 shadow-orange-100 dark:shadow-none' 
                        : 'bg-green-50 dark:bg-green-950/20 text-green-600 dark:text-green-400 shadow-green-100 dark:shadow-none'
                    }`}>
                      {React.createElement({
                        Beaker: Beaker, User: User, Package: Package, Skull: Skull, CalendarX: CalendarX,
                        Frown: Frown, Wind: Wind, Waves: Waves, Flame: Flame, Archive: Archive,
                        Repeat: Repeat, Scale: Scale, Droplets: Droplets, CloudRain: CloudRain, 
                        Beef: Beef, AlertTriangle: AlertTriangle, Snowflake: Snowflake, Settings: Settings, 
                        Clock: Clock, PackageOpen: PackageOpen
                      }[status.iconName] || Info, { size: 32 })}
                    </div>
                    <h3 className="text-lg font-black text-gray-800 dark:text-gray-200 mb-2 leading-tight uppercase tracking-tight">{status.title}</h3>
                    <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                      status.status === 'Open' ? 'bg-orange-600 text-white' : 'bg-green-600 text-white'
                    }`}>
                      {status.status}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : currentView === 'pre-order' || currentView === 'pre-order-pro' ? (
             <motion.div
              key="pre-order-views"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-4xl mx-auto px-4 py-20 text-center"
            >
              <div className="bg-white dark:bg-gray-900 p-12 rounded-[3rem] shadow-2xl dark:shadow-none border border-gray-100 dark:border-gray-800">
                <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner">
                  <Clock size={48} />
                </div>
                <h2 className="text-3xl font-black text-blue-900 dark:text-blue-400 mb-4 uppercase tracking-tighter">
                  {currentView.replace('-', ' ')} Implementation
                </h2>
                <div className="space-y-6 text-gray-600 dark:text-gray-400 font-medium">
                  <p className="text-lg leading-relaxed">
                    This module is currently being calibrated for our next system update. 
                    It will handle advanced reservation logic and scheduled batch preparations.
                  </p>
                  <div className="flex flex-col md:flex-row justify-center gap-4">
                     <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                        <span className="text-sm font-bold uppercase tracking-wider">Defining Logic</span>
                     </div>
                     <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 flex items-center gap-3 opacity-50">
                        <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                        <span className="text-sm font-bold uppercase tracking-wider">Database Sync</span>
                     </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : currentView === 'user-mgmt' && isAdmin ? (
            <motion.div
              key="user-mgmt"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="max-w-7xl mx-auto px-4 pb-12 pt-8"
            >
              <div className="bg-[#2d2942] dark:bg-[#110e1f] rounded-3xl p-8 text-white shadow-2xl dark:shadow-none mb-8 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Users size={120} />
                </div>
                <div className="relative z-10 text-center md:text-left">
                  <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">System Access Control</h2>
                  <p className="text-blue-100 dark:text-blue-200 max-w-2xl font-medium opacity-80 mx-auto md:mx-0">
                    Manage administrative access and roles. Create new accounts for Managers (Full Control) 
                    and Employees (Read-Only access).
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* User Creation Form */}
                <div className="lg:col-span-1">
                  <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl dark:shadow-none border border-gray-100 dark:border-gray-800 overflow-hidden">
                    <div className="bg-blue-600 dark:bg-blue-700 p-6">
                      <h3 className="text-white font-black text-xl uppercase tracking-tight flex items-center gap-2">
                        <Plus size={20} />
                        Create New User
                      </h3>
                    </div>
                    <form onSubmit={handleCreateUser} className="p-8 space-y-4">
                      {userMgmtError && (
                        <div className="p-4 bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 rounded-2xl text-xs font-bold border border-red-100 dark:border-red-900/30 flex items-center gap-2">
                          <AlertCircle size={14} />
                          {userMgmtError}
                        </div>
                      )}
                      
                      <div className="space-y-1">
                        <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest pl-2">Full Name</label>
                        <input
                          type="text"
                          required
                          value={newUserName}
                          onChange={(e) => setNewUserName(e.target.value)}
                          className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-4 rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:text-gray-200"
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest pl-2">Email Address</label>
                        <input
                          type="email"
                          required
                          value={newUserEmail}
                          onChange={(e) => setNewUserEmail(e.target.value)}
                          className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-4 rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:text-gray-200"
                          placeholder="john@wasla.com"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest pl-2">Password</label>
                        <input
                          type="password"
                          required
                          value={newUserPassword}
                          onChange={(e) => setNewUserPassword(e.target.value)}
                          className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-4 rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:text-gray-200"
                          placeholder="••••••••"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest pl-2">Account Role</label>
                        <div className="grid grid-cols-3 gap-2">
                          <button
                            type="button"
                            onClick={() => setNewUserRole('employee')}
                            className={`p-3 rounded-2xl border font-bold text-[10px] transition-all ${
                              newUserRole === 'employee' 
                              ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-100 dark:shadow-none' 
                              : 'bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-750 hover:shadow-md'
                            }`}
                          >
                            Employee
                          </button>
                          <button
                            type="button"
                            onClick={() => setNewUserRole('leader')}
                            className={`p-3 rounded-2xl border font-bold text-[10px] transition-all ${
                              newUserRole === 'leader' 
                              ? 'bg-purple-600 text-white border-purple-600 shadow-lg shadow-purple-100 dark:shadow-none' 
                              : 'bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-750 hover:shadow-md'
                            }`}
                          >
                            Leader
                          </button>
                          <button
                            type="button"
                            onClick={() => setNewUserRole('manager')}
                            className={`p-3 rounded-2xl border font-bold text-[10px] transition-all ${
                              newUserRole === 'manager' 
                              ? 'bg-[#2d2942] dark:bg-[#110e1f] text-white border-[#2d2942] dark:border-gray-700 shadow-lg shadow-blue-100 dark:shadow-none' 
                              : 'bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-750 hover:shadow-md'
                            }`}
                          >
                            Manager
                          </button>
                        </div>
                        <p className="text-[10px] text-gray-400 dark:text-gray-500 font-medium px-2 pt-2">
                          {newUserRole === 'manager' 
                            ? 'Full permissions: Add, Edit, and Delete system data.' 
                            : newUserRole === 'leader'
                            ? 'Admin permissions: Same as Admin but no User Management access.'
                            : 'Read-only access: View all data without modification rights.'}
                        </p>
                      </div>

                      <button
                        type="submit"
                        disabled={isCreatingUser}
                        className="w-full bg-blue-600 text-white p-4 rounded-2xl font-black uppercase text-sm tracking-tighter hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 dark:shadow-none disabled:opacity-50"
                      >
                        {isCreatingUser ? 'Processing...' : 'Generate New Account'}
                      </button>
                    </form>
                  </div>
                </div>

                {/* Users List */}
                <div className="lg:col-span-2">
                  <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl dark:shadow-none border border-gray-100 dark:border-gray-800 overflow-hidden">
                    <div className="p-6 border-b border-gray-50 dark:border-gray-800 flex justify-between items-center bg-gray-50/50 dark:bg-gray-800/30">
                      <h3 className="text-xl font-black text-blue-900 dark:text-blue-400 uppercase tracking-tight">Active Accounts</h3>
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => {
                            setIsUsersLoading(true);
                            fetch('/api/users', { credentials: 'include' })
                              .then(res => res.json())
                              .then(data => {
                                setUsersData(data);
                                setIsUsersLoading(false);
                              })
                              .catch(() => setIsUsersLoading(false));
                          }}
                          className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                          title="Refresh users list"
                        >
                          <RefreshCw size={16} className={isUsersLoading ? 'animate-spin' : ''} />
                        </button>
                        <span className="text-[10px] font-black text-blue-400 bg-blue-50 dark:bg-blue-950/30 px-3 py-1 rounded-full uppercase tracking-widest">
                          {usersData.length} Users
                        </span>
                      </div>
                    </div>
                    <div className="divide-y divide-gray-50 dark:divide-gray-800 max-h-[600px] overflow-y-auto">
                      {usersData.length === 0 ? (
                        <div className="p-12 text-center text-gray-400 font-bold uppercase tracking-widest text-xs">No entries found</div>
                      ) : usersData.map((user) => (
                        <div key={user.id} className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
                          <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-black text-sm sm:text-lg shrink-0 ${
                              user.role === 'admin' ? 'bg-[#2d2942] dark:bg-[#110e1f]' : user.role === 'leader' ? 'bg-purple-600' : user.role === 'manager' ? 'bg-blue-600' : 'bg-gray-400'
                            }`}>
                              {user.name.charAt(0).toUpperCase()}
                            </div>
                            <div className="min-w-0">
                              <h4 className="font-black text-gray-800 dark:text-gray-200 uppercase tracking-tight text-sm truncate">
                                {user.name}
                                {user.id === auth.user?.id && <span className="ml-2 text-[10px] text-blue-500 dark:text-blue-400 font-bold">(You)</span>}
                              </h4>
                              <p className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-500 font-medium truncate">{user.email}</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
                            <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                              user.role === 'admin' ? 'bg-[#2d2942] dark:bg-[#110e1f] text-white' : user.role === 'leader' ? 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400' : user.role === 'manager' ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
                            }`}>
                              {user.role}
                            </span>
                            {user.role !== 'admin' && (
                              <button 
                                onClick={() => handleDeleteUser(user.id)}
                                className="p-3 text-red-100 dark:text-red-900 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors hover:bg-red-50 dark:hover:bg-red-900/10 rounded-xl"
                              >
                                <Trash2 size={18} />
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : currentView === 'audit-logs' && isAdmin ? (
            <LogsView 
              logs={logsData} 
              isLoading={isLogsLoading} 
              searchTerm={logsSearch} 
              onSearch={setLogsSearch} 
            />
          ) : currentView === 'custom-cards' && isAdmin ? (
            <motion.div
              key="custom-cards"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-5xl mx-auto px-4 pb-12 pt-8"
            >
              <CustomCardManager 
                cards={customCardsData} 
                refreshCards={fetchCustomCards} 
                viewOptions={navOptions} 
              />
            </motion.div>
          ) : (currentView === 'reports') && isAdminOrLeader ? (
            <motion.div
              key="admin-views"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-4xl mx-auto px-4 py-20 text-center"
            >
               <div className="bg-[#2d2942] dark:bg-[#110e1f] p-12 rounded-[3rem] shadow-2xl dark:shadow-none border border-white/10 dark:border-white/5 text-white">
                <div className="w-24 h-24 bg-white/10 dark:bg-white/5 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
                  {currentView === 'user-mgmt' ? <Users size={48} /> : currentView === 'reports' ? <BarChart size={48} /> : <Settings size={48} />}
                </div>
                <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter">
                  {currentView.replace('-', ' ')}
                </h2>
                <p className="text-blue-100/60 dark:text-blue-200/60 font-medium text-lg max-w-md mx-auto leading-relaxed mb-10">
                  Restricted Administrator Access. You are currently viewing a technical placeholder for the management dashboard.
                </p>
                <div className="pt-8 border-t border-white/5 flex justify-center gap-8">
                   <div className="flex flex-col items-center">
                     <div className="w-3 h-3 bg-red-500 rounded-full mb-2"></div>
                     <span className="text-[10px] font-black uppercase text-white/30 tracking-widest">Security Level 4</span>
                   </div>
                   <div className="flex flex-col items-center">
                     <div className="w-3 h-3 bg-blue-500 rounded-full mb-2"></div>
                     <span className="text-[10px] font-black uppercase text-white/30 tracking-widest">Admin Verified</span>
                   </div>
                </div>
              </div>
            </motion.div>
          ) : currentView === 'extension-contact' ? (
            <motion.div
              key="extension"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              className="max-w-6xl mx-auto px-4 pb-20 space-y-8"
            >
              <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl dark:shadow-none overflow-hidden border border-gray-100 dark:border-gray-800">
                <div className="bg-blue-600 dark:bg-blue-700 p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Phone size={120} />
                  </div>
                  <div className="relative z-10">
                    <h2 className="text-3xl font-black mb-2 uppercase tracking-tight text-white dark:text-gray-100">
                      <EditableText 
                        contentKey="extension_title"
                        defaultValue={t("extension_title", "Branches Extension")}
                        canEdit={canEdit}
                        onSave={handleSaveOverride}
                        onDelete={handleDeleteOverride}
                      />
                    </h2>
                    <p className="text-blue-100 dark:text-blue-200 font-medium">
                      <EditableText 
                        contentKey="extension_desc"
                        defaultValue={t("extension_desc", "Internal internal phone system directory")}
                        canEdit={canEdit}
                        onSave={handleSaveOverride}
                        onDelete={handleDeleteOverride}
                        isTextArea
                      />
                    </p>
                  </div>
                </div>
                
                <div className="p-8">
                  {/* Search and Table for Branches */}
                  <div className="mb-8">
                    <div className="relative max-w-md mb-6">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500" size={20} />
                      <input 
                        type="text" 
                        placeholder="Search by Extension or Name..." 
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none font-bold text-gray-700 dark:text-gray-200"
                        onChange={(e) => {
                          const val = e.target.value.toLowerCase();
                          const rows = document.querySelectorAll('.branch-row');
                          rows.forEach((row: any) => {
                            const text = row.innerText.toLowerCase();
                            row.style.display = text.includes(val) ? '' : 'none';
                          });
                        }}
                      />
                    </div>

                    <div className="overflow-hidden border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm dark:shadow-none">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800">
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Ext</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Name</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                          {CONTACTS_DATA.extensions.branches.map((item: any, idx: number) => (
                            <tr key={idx} className="branch-row hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors group">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <a href={`tel:${item.ext}`} className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-lg font-black text-sm group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                  <Phone size={12} />
                                  {item.ext}
                                </a>
                              </td>
                              <td className="px-6 py-4 font-bold text-gray-700 dark:text-gray-300 group-hover:text-blue-900 dark:group-hover:text-blue-400">
                                <EditableText 
                                  contentKey={`extension_branch_${idx}_name`}
                                  defaultValue={t(`extension_branch_${idx}_name`, item.name)}
                                  canEdit={canEdit}
                                  onSave={handleSaveOverride}
                                  onDelete={handleDeleteOverride}
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Brand Lines Table */}
                  <div className="mt-12">
                    <h3 className="text-2xl font-black text-blue-900 mb-6 flex items-center gap-3">
                      <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
                      Hotlines & Brand Lines
                    </h3>
                    <div className="overflow-hidden border border-gray-100 rounded-3xl shadow-lg">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-blue-900 text-white">
                            <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Brand Name</th>
                            <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-center">Line EXT</th>
                            <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Hotline</th>
                            <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Land Line</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {CONTACTS_DATA.extensions.brands.map((brand: any, idx: number) => (
                            <tr key={idx} className="hover:bg-gray-50 transition-colors">
                              <td className="px-6 py-4 font-black text-gray-800">
                                <EditableText 
                                  contentKey={`extension_brand_${idx}_name`}
                                  defaultValue={t(`extension_brand_${idx}_name`, brand.name)}
                                  canEdit={canEdit}
                                  onSave={handleSaveOverride}
                                  onDelete={handleDeleteOverride}
                                />
                              </td>
                              <td className="px-6 py-4 text-center">
                                {brand.ext && (
                                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-bold text-xs">
                                    <EditableText 
                                      contentKey={`extension_brand_${idx}_ext`}
                                      defaultValue={t(`extension_brand_${idx}_ext`, brand.ext)}
                                      canEdit={canEdit}
                                      onSave={handleSaveOverride}
                                      onDelete={handleDeleteOverride}
                                    />
                                  </span>
                                )}
                              </td>
                              <td className="px-6 py-4">
                                {brand.hotline && (
                                  <a href={`tel:${brand.hotline}`} className="text-blue-600 font-bold hover:underline flex items-center gap-2">
                                    <Phone size={14} />
                                    <EditableText 
                                      contentKey={`extension_brand_${idx}_hotline`}
                                      defaultValue={t(`extension_brand_${idx}_hotline`, brand.hotline)}
                                      canEdit={canEdit}
                                      onSave={handleSaveOverride}
                                      onDelete={handleDeleteOverride}
                                    />
                                  </a>
                                )}
                              </td>
                              <td className="px-6 py-4 font-medium text-gray-500 text-sm">
                                <EditableText 
                                  contentKey={`extension_brand_${idx}_landline`}
                                  defaultValue={t(`extension_brand_${idx}_landline`, brand.landline)}
                                  canEdit={canEdit}
                                  onSave={handleSaveOverride}
                                  onDelete={handleDeleteOverride}
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : currentView === 'employee-ex-contact' ? (
            <motion.div
              key="employee-ex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto px-4 pb-20"
            >
                <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-2xl dark:shadow-none overflow-hidden border border-gray-100 dark:border-gray-800">
                  <div className="bg-[#2d2942] dark:bg-[#110e1f] p-10 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-10 opacity-10">
                      <Users size={120} />
                    </div>
                    <div className="relative z-10">
                      <h2 className="text-3xl font-black mb-2 uppercase tracking-tight">
                        <EditableText 
                          contentKey="employee_ex_title"
                          defaultValue={t("employee_ex_title", "Employee Extensions Directory")}
                          canEdit={canEdit}
                          onSave={handleSaveOverride}
                          onDelete={handleDeleteOverride}
                        />
                      </h2>
                      <p className="text-blue-100 dark:text-blue-200 font-medium opacity-80">
                        <EditableText 
                          contentKey="employee_ex_desc"
                          defaultValue={t("employee_ex_desc", "Internal staff directory for quick communication")}
                          canEdit={canEdit}
                          onSave={handleSaveOverride}
                          onDelete={handleDeleteOverride}
                          isTextArea
                        />
                      </p>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="relative max-w-md mb-8">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input 
                        type="text" 
                        placeholder="✍️ Search Employee Name..." 
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none font-bold text-gray-700 dark:text-gray-300 dark:placeholder:text-gray-600"
                        onChange={(e) => {
                          const val = e.target.value.toLowerCase();
                          const rows = document.querySelectorAll('.emp-row');
                          rows.forEach((row: any) => {
                            const text = row.innerText.toLowerCase();
                            row.style.display = text.includes(val) ? '' : 'none';
                          });
                        }}
                      />
                    </div>

                    <div className="overflow-hidden border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm dark:shadow-none">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-800">
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest w-16">#</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Name</th>
                            <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Extension</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                            {CONTACTS_DATA.extensions.employees.map((emp: any, idx: number) => (
                              <tr key={emp.id} className="emp-row hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors group">
                                <td className="px-6 py-4 text-sm font-bold text-gray-400 dark:text-gray-600">{emp.id}</td>
                                <td className="px-6 py-4 font-bold text-gray-700 dark:text-gray-300 group-hover:text-blue-900 dark:group-hover:text-blue-400">
                                  <EditableText 
                                    contentKey={`employee_ex_${idx}_name`}
                                    defaultValue={t(`employee_ex_${idx}_name`, emp.name)}
                                    canEdit={canEdit}
                                    onSave={handleSaveOverride}
                                    onDelete={handleDeleteOverride}
                                  />
                                </td>
                                <td className="px-6 py-4 text-right">
                                  <a 
                                    href={`tel:${emp.ext}`} 
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-xl font-black text-sm hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105"
                                  >
                                    <Phone size={14} />
                                    <EditableText 
                                      contentKey={`employee_ex_${idx}_ext`}
                                      defaultValue={t(`employee_ex_${idx}_ext`, emp.ext)}
                                      canEdit={canEdit}
                                      onSave={handleSaveOverride}
                                      onDelete={handleDeleteOverride}
                                    />
                                  </a>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-2xl p-6 flex items-start gap-4">
                  <Info className="text-blue-600 dark:text-blue-400 mt-1" size={24} />
                  <div>
                    <p className="text-blue-900 dark:text-blue-300 font-bold mb-1">
                      <EditableText 
                        contentKey="employee_ex_note_title"
                        defaultValue={t("employee_ex_note_title", "Confidential Information")}
                        canEdit={canEdit}
                        onSave={handleSaveOverride}
                        onDelete={handleDeleteOverride}
                      />
                    </p>
                    <p className="text-sm text-blue-700 dark:text-blue-400/80">
                    <EditableText 
                      contentKey="employee_ex_note_desc"
                      defaultValue={t("employee_ex_note_desc", "This directory is for internal use only. Do not share these extensions with external parties.")}
                      canEdit={canEdit}
                      onSave={handleSaveOverride}
                      onDelete={handleDeleteOverride}
                      isTextArea
                    />
                  </p>
                </div>
              </div>
            </motion.div>
          ) : currentView === 'task' ? (
            <motion.div
              key="task"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-6xl mx-auto px-4 pb-20"
            >
              <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-2xl dark:shadow-none overflow-hidden border border-gray-100 dark:border-gray-800">
                <div className="bg-[#2d2942] dark:bg-[#1a172a] p-8 md:p-12 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12">
                    <ListChecks size={180} />
                  </div>
                  <div className="relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter leading-none">Branch Tasks</h2>
                    <p className="text-blue-200 dark:text-blue-300 text-lg font-medium opacity-90 max-w-xl">
                      Real-time branch availability and locations across all portfolio brands.
                    </p>
                  </div>
                </div>

                <div className="p-6 md:p-10 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1 group">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600 group-focus-within:text-blue-500 transition-colors" size={20} />
                      <input 
                        type="text" 
                        placeholder="Search branch name..."
                        className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 rounded-2xl focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50/50 dark:focus:ring-blue-900/20 transition-all font-bold text-gray-700 dark:text-gray-300 shadow-sm dark:shadow-none"
                        value={taskSearchQuery}
                        onChange={(e) => setTaskSearchQuery(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-wrap gap-2">
                       <select 
                        className="px-6 py-4 bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 rounded-2xl focus:outline-none focus:border-blue-400 font-bold text-gray-700 dark:text-gray-300 shadow-sm dark:shadow-none appearance-none"
                        value={taskBrandFilter}
                        onChange={(e) => setTaskBrandFilter(e.target.value)}
                      >
                        <option value="">All Brands</option>
                        {[...new Set(TASK_DATA.map(d => d.brand))].map(brand => (
                          <option key={brand} value={brand}>{brand}</option>
                        ))}
                      </select>
                      <select 
                        className="px-6 py-4 bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 rounded-2xl focus:outline-none focus:border-blue-400 font-bold text-gray-700 dark:text-gray-300 shadow-sm dark:shadow-none appearance-none"
                        value={taskStatusFilter}
                        onChange={(e) => setTaskStatusFilter(e.target.value)}
                      >
                        <option value="">All Status</option>
                        <option value="Available">Available</option>
                        <option value="Only for Drivers">Only for Drivers</option>
                      </select>

                      {canEdit && (
                        <button 
                          onClick={() => {
                            setEditingTask(null);
                            setIsTaskModalOpen(true);
                          }}
                          className="px-6 py-2 bg-blue-600 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-200 dark:shadow-none"
                        >
                          <Plus size={20} />
                          Add Task
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-12 h-[calc(100vh-450px)] overflow-y-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(tasksData.length > 0 ? tasksData : TASK_DATA).filter((item: any) => {
                      const matchesBrand = !taskBrandFilter || item.brand === taskBrandFilter;
                      const matchesStatus = !taskStatusFilter || item.status === taskStatusFilter;
                      const matchesSearch = !taskSearchQuery || item.branch.toLowerCase().includes(taskSearchQuery.toLowerCase()) || item.brand.toLowerCase().includes(taskSearchQuery.toLowerCase());
                      return matchesBrand && matchesStatus && matchesSearch;
                    }).map((item: any, idx: number) => (
                      <motion.div
                        key={idx}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-[2rem] p-6 shadow-lg dark:shadow-none hover:shadow-2xl dark:hover:bg-gray-750 hover:-translate-y-1 transition-all border-b-4 border-b-gray-200 dark:border-b-gray-600 group relative overflow-hidden"
                      >
                        {canEdit && (
                          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                             <button 
                               onClick={() => {
                                 setEditingTask(item);
                                 setIsTaskModalOpen(true);
                               }}
                               className="p-2 bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all shadow-sm"
                             >
                               <Edit size={14} />
                             </button>
                             <button 
                               onClick={() => handleDeleteTask(item.id)}
                               className="p-2 bg-red-50 dark:bg-red-900/40 text-red-600 dark:text-red-400 rounded-xl hover:bg-red-600 dark:hover:bg-red-500 hover:text-white transition-all shadow-sm"
                             >
                               <Trash2 size={14} />
                             </button>
                          </div>
                        )}
                        {item.status === 'Available' ? (
                          <div className="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 bg-green-50 dark:bg-green-900/10 rounded-full group-hover:scale-150 transition-transform duration-500 opacity-50" />
                        ) : (
                          <div className="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 bg-orange-50 dark:bg-orange-900/10 rounded-full group-hover:scale-150 transition-transform duration-500 opacity-50" />
                        )}

                        <div className="relative z-10">
                          <div className="flex justify-between items-start mb-4">
                            <span className="text-[10px] font-black uppercase tracking-widest text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/40 px-3 py-1 rounded-full">{item.brand}</span>
                            <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase flex items-center gap-1.5 ${
                              item.status === 'Available' ? 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300' : 'bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300'
                            }`}>
                              <div className={`w-1.5 h-1.5 rounded-full ${item.status === 'Available' ? 'bg-green-500 animate-pulse' : 'bg-orange-500'}`} />
                              {item.status}
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-black text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                             <MapPin size={18} className="text-red-400" />
                             {item.branch}
                          </h3>
                          
                          <div className="space-y-3">
                            <a 
                              href={item.location} 
                              target="_blank" 
                              rel="noreferrer"
                              className="w-full py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-xl flex items-center justify-center font-bold text-sm gap-2 hover:bg-blue-600 dark:hover:bg-blue-500 transition-all shadow-md dark:shadow-none group/btn"
                            >
                              <Globe size={16} className="group-hover/btn:rotate-12 transition-transform" />
                              Google Maps
                            </a>
                            <button 
                              onClick={() => {
                                navigator.clipboard.writeText(item.location);
                                setCopiedLocation(item.location);
                                setTimeout(() => setCopiedLocation(null), 2000);
                              }}
                              className="w-full py-3 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border border-blue-100 dark:border-blue-900/30 rounded-xl flex items-center justify-center font-bold text-sm gap-2 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-all"
                            >
                              {copiedLocation === item.location ? (
                                <>
                                  <ListChecks size={16} />
                                  Copied!
                                </>
                              ) : (
                                <>
                                  <Repeat size={16} />
                                  Copy Link
                                </>
                              )}
                            </button>
                            <div className="text-[10px] text-gray-400 dark:text-gray-600 font-mono break-all line-clamp-1 opacity-50 px-1">
                              {item.location}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : currentView === 'ingerines' ? (
            <motion.div
              key="ingerines"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-6xl mx-auto px-4 pb-20"
            >
              <div className="bg-white dark:bg-gray-900 rounded-[2rem] shadow-2xl dark:shadow-none overflow-hidden border border-gray-100 dark:border-gray-800">
                <div className="bg-[#2d2942] dark:bg-[#1a172a] p-8 text-white relative">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <ShoppingBag size={100} />
                  </div>
                  <div className="relative z-10">
                    <h2 className="text-3xl font-black mb-1 uppercase tracking-tight">
                      {INGERINES_DATA[selectedIngerinesBrand as keyof typeof INGERINES_DATA].title}
                    </h2>
                    <p className="opacity-80 font-medium text-blue-200 dark:text-blue-300">Platter compositions and special instructions</p>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {INGERINES_DATA[selectedIngerinesBrand as keyof typeof INGERINES_DATA].items.map((item: any, idx: number) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-3xl p-6 hover:shadow-xl dark:hover:bg-gray-800 hover:bg-white hover:border-blue-200 dark:hover:border-blue-900/30 transition-all group"
                      >
                        <h3 className="text-lg font-black text-blue-900 dark:text-blue-400 mb-3 flex items-center gap-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 text-sm">
                            {idx + 1}
                          </div>
                          {item.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-bold leading-relaxed mb-4" dir="auto">
                          {item.content}
                        </p>
                        {item.details && (
                          <div className="text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-3 rounded-xl italic">
                            {item.details}
                          </div>
                        )}
                        {item.list && (
                          <ul className="mt-4 space-y-2">
                            {item.list.map((listItem: string, lIdx: number) => (
                              <li key={lIdx} className="flex items-center gap-2 text-sm font-bold text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-2 rounded-lg">
                                <ChevronDown className="text-blue-400 rotate-[-90deg]" size={14} />
                                {listItem}
                              </li>
                            ))}
                          </ul>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : currentView === 'allergens' ? (
            <motion.div
              key="allergens"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-6xl mx-auto px-4 pb-20"
            >
              <div className="bg-white dark:bg-gray-900 rounded-[2rem] shadow-2xl dark:shadow-none overflow-hidden border border-gray-100 dark:border-gray-800">
                <div className="bg-[#a81c1c] dark:bg-[#7a1414] p-8 text-white relative">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <AlertTriangle size={100} />
                  </div>
                  <div className="relative z-10">
                    <h2 className="text-3xl font-black mb-1 uppercase tracking-tight">
                      {ALLERGEN_DATA[selectedAllergenBrand as keyof typeof ALLERGEN_DATA].title}
                    </h2>
                    <p className="opacity-80 font-medium">Important dietary information for our customers</p>
                  </div>
                </div>

                <div className="p-8">
                  {/* Category Tabs */}
                  <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-100 dark:border-gray-800 pb-6">
                    {ALLERGEN_DATA[selectedAllergenBrand as keyof typeof ALLERGEN_DATA].categories.map((cat: any) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedAllergenCategory(cat.id)}
                        className={`px-5 py-3 rounded-xl font-black text-xs uppercase transition-all ${
                          (selectedAllergenCategory === cat.id || (!selectedAllergenCategory && cat.id === ALLERGEN_DATA[selectedAllergenBrand as keyof typeof ALLERGEN_DATA].categories[0].id))
                            ? 'bg-[#a81c1c] dark:bg-[#7a1414] text-white shadow-lg scale-105 dark:shadow-none'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-750'
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>

                  {/* Search bar specifically for allergens */}
                  <div className="relative max-w-md mb-6">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600" size={20} />
                    <input 
                      type="text" 
                      placeholder="🔍 Search items or allergens..." 
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all outline-none font-bold text-gray-700 dark:text-gray-300 dark:placeholder:text-gray-600"
                      onChange={(e) => {
                        const val = e.target.value.toLowerCase();
                        const rows = document.querySelectorAll('.allergen-row');
                        rows.forEach((row: any) => {
                          const text = row.innerText.toLowerCase();
                          row.style.display = text.includes(val) ? '' : 'none';
                        });
                      }}
                    />
                  </div>

                  {/* Allergen Table */}
                  <div className="overflow-hidden border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm dark:shadow-none">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-800">
                          <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest w-16">#</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Item Name</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Allergens</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                        {ALLERGEN_DATA[selectedAllergenBrand as keyof typeof ALLERGEN_DATA].categories
                          .find(c => c.id === (selectedAllergenCategory || ALLERGEN_DATA[selectedAllergenBrand as keyof typeof ALLERGEN_DATA].categories[0].id))
                          ?.items.map((item: any) => (
                          <tr key={item.id} className="allergen-row hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors group">
                            <td className="px-6 py-4 text-sm font-bold text-gray-400 dark:text-gray-600">{item.id}</td>
                            <td className="px-6 py-4 font-bold text-gray-700 dark:text-gray-300 group-hover:text-red-900 dark:group-hover:text-red-400">{item.name}</td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                              <div className="flex flex-wrap gap-1">
                                {item.allergens.split(/,\s*/).map((allergen: string) => (
                                  <span key={allergen} className="px-2 py-0.5 bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 rounded text-[10px] font-black uppercase">
                                    {allergen}
                                  </span>
                                ))}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/30 rounded-2xl p-6 flex items-start gap-4">
                <AlertTriangle className="text-orange-600 dark:text-orange-400 mt-1" size={24} />
                <div>
                  <p className="text-orange-900 dark:text-white font-bold mb-1">Allergy Warning</p>
                  <p className="text-sm text-orange-700 dark:text-gray-400 leading-relaxed font-medium">
                    While we take steps to minimize the risk of cross-contamination, we cannot guarantee that any of our products are safe to consume for people with specific allergies. Please inform our staff about any allergies before ordering.
                  </p>
                </div>
              </div>
            </motion.div>
          ) : currentView === 'meat-sources' ? (
            <motion.div
              key="meat-sources"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-7xl mx-auto px-4"
            >
              <div className="text-center mb-12">
                 <h1 className="text-3xl font-bold text-blue-900 dark:text-blue-400 mb-2">Meat Sources</h1>
                 <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {(Object.entries(MEAT_SOURCES) as any).map(([brandName, data]: [string, any]) => (
                  <motion.div
                    key={brandName}
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl dark:shadow-none overflow-hidden border border-gray-100 dark:border-gray-800 flex flex-col"
                  >
                    <div className="bg-[#2d2942] dark:bg-[#1a172a] py-4 px-6 text-center">
                      <h2 className="text-white font-bold text-xl">{brandName}</h2>
                    </div>
                    <div className="p-6 flex-grow">
                      <div className="space-y-4 text-right" dir="rtl">
                        {data.items.map((item: any, idx: number) => (
                          <div key={idx} className="flex flex-col gap-1 border-b border-gray-50 dark:border-gray-800 pb-2 last:border-0">
                            <span className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider">{item.label}</span>
                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                              <EditableText 
                                contentKey={`meat_source_${brandName.replace(/\s+/g, '_')}_item_${idx}`}
                                defaultValue={t(`meat_source_${brandName.replace(/\s+/g, '_')}_item_${idx}`, item.value)}
                                canEdit={canEdit}
                                onSave={handleSaveOverride}
                                onDelete={handleDeleteOverride}
                              />
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800/50 py-3 px-6 border-t border-gray-100 dark:border-gray-800 text-center">
                      <div className="text-xs text-blue-600 dark:text-blue-400 font-bold" dir="rtl">
                        <EditableText 
                          contentKey={`meat_source_${brandName.replace(/\s+/g, '_')}_footer`}
                          defaultValue={t(`meat_source_${brandName.replace(/\s+/g, '_')}_footer`, data.footer)}
                          canEdit={canEdit}
                          onSave={handleSaveOverride}
                          onDelete={handleDeleteOverride}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center"
            >
              <div className="max-w-md mx-auto bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
                <Info size={64} className="mx-auto text-blue-200 mb-6" />
                <h2 className="text-2xl font-bold text-[#2d2942] mb-2 uppercase tracking-wide">
                  {currentView.replace('-', ' ')}
                </h2>
                <p className="text-gray-500">This section is under development.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {auth.isAuthenticated && (
          <>
            <BranchModal 
              isOpen={isBranchModalOpen}
              onClose={() => setIsBranchModalOpen(false)}
              onSave={handleSaveBranch}
              onDelete={handleDeleteBranch}
              editingBranch={editingBranch}
              dynamicColumns={dynamicColumns}
            />
            <TaskModal
              isOpen={isTaskModalOpen}
              onClose={() => setIsTaskModalOpen(false)}
              onSave={handleSaveTask}
              onDelete={handleDeleteTask}
              editingTask={editingTask}
            />
            <NotificationCenter />
          </>
        )}
      </div>
    </div>
    <AnimatePresence>
      {notification && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] px-6 py-3 rounded-2xl shadow-2xl font-bold flex items-center gap-3 border ${
              notification.type === 'success' 
                ? 'bg-blue-600 text-white border-blue-400' 
                : 'bg-red-600 text-white border-red-400'
            }`}
          >
            {notification.type === 'success' ? <Zap className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
