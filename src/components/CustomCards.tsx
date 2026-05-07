import React, { useState } from 'react';
import { Edit2, Trash2, Layout, Plus, Check, X, Eye, EyeOff, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CustomCard as CustomCardType } from '../types';

interface CustomCardProps {
  card: CustomCardType;
  isAdmin?: boolean;
  onEdit?: (card: CustomCardType) => void;
  onDelete?: (id: number) => void;
}

export const CustomCard: React.FC<CustomCardProps> = ({ card, isAdmin, onEdit, onDelete }) => {
  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-50 border-blue-100 dark:bg-blue-900/20 dark:border-blue-800 text-blue-900 dark:text-blue-100',
    green: 'bg-green-50 border-green-100 dark:bg-green-900/20 dark:border-green-800 text-green-900 dark:text-green-100',
    purple: 'bg-purple-50 border-purple-100 dark:bg-purple-900/20 dark:border-purple-800 text-purple-900 dark:text-purple-100',
    yellow: 'bg-yellow-50 border-yellow-100 dark:bg-yellow-900/20 dark:border-yellow-800 text-yellow-900 dark:text-yellow-100',
    red: 'bg-red-50 border-red-100 dark:bg-red-900/20 dark:border-red-800 text-red-900 dark:text-red-100',
  };

  const iconClasses: Record<string, string> = {
    blue: 'text-blue-500',
    green: 'text-green-500',
    purple: 'text-purple-500',
    yellow: 'text-yellow-500',
    red: 'text-red-500',
  };

  const currentClasses = colorClasses[card.color] || colorClasses.blue;
  const currentIconColor = iconClasses[card.color] || iconClasses.blue;

  if (!card.isVisible && !isAdmin) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative p-6 rounded-3xl border-2 shadow-sm ${currentClasses} mb-6 transition-all hover:shadow-md ${!card.isVisible ? 'opacity-60 grayscale' : ''}`}
    >
      <div className="flex justify-between items-start mb-3 gap-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-xl bg-white dark:bg-gray-800 shadow-sm ${currentIconColor}`}>
            <Info size={20} />
          </div>
          <h3 className="text-lg font-black tracking-tight">{card.title} <span className="text-[10px] opacity-30">#{card.id}</span></h3>
          {!card.isVisible && (
            <span className="bg-gray-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">Hidden</span>
          )}
        </div>
        {isAdmin && (
          <div className="flex gap-2">
            <button 
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                console.log("Edit clicked for card:", card.id);
                onEdit?.(card);
              }}
              className="p-3 bg-white/50 dark:bg-black/20 rounded-xl hover:bg-white dark:hover:bg-black/40 transition-all text-gray-700 dark:text-gray-200 shadow-sm hover:shadow-md cursor-pointer"
              title="Edit Card"
            >
              <Edit2 size={18} />
            </button>
            <button 
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                console.log("Delete clicked for card:", card.id);
                if (typeof onDelete === 'function') {
                  onDelete(card.id);
                } else {
                  console.error("onDelete is not a function:", onDelete);
                }
              }}
              className="p-3 bg-rose-500/10 hover:bg-rose-500 text-rose-600 hover:text-white rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer"
              title="Delete Card"
            >
              <Trash2 size={18} />
            </button>
          </div>
        )}
      </div>
      <div className="prose prose-sm dark:prose-invert max-w-none font-bold text-sm leading-relaxed opacity-90">
        {card.content.split('\n').map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </motion.div>
  );
};

interface CustomCardManagerProps {
  cards: CustomCardType[];
  refreshCards: () => void;
  viewOptions: { id: string; label: string }[];
}

export const CustomCardManager: React.FC<CustomCardManagerProps> = ({ cards, refreshCards, viewOptions }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [editingCard, setEditingCard] = useState<CustomCardType | null>(null);
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [page, setPage] = useState('branches');
  const [color, setColor] = useState('blue');
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const resetForm = () => {
    setTitle('');
    setContent('');
    setPage('branches');
    setColor('blue');
    setIsVisible(true);
    setIsAdding(false);
    setEditingCard(null);
  };

  const handleEdit = (card: CustomCardType) => {
    setTitle(card.title);
    setContent(card.content);
    setPage(card.page);
    setColor(card.color);
    setIsVisible(card.isVisible);
    setEditingCard(card);
    setIsAdding(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const url = editingCard ? `/api/custom-cards/${editingCard.id}` : '/api/custom-cards';
      const method = editingCard ? 'PUT' : 'POST';
      
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ title, content, page, color, isVisible }),
      });
      
      if (res.ok) {
        refreshCards();
        resetForm();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (cardId: number) => {
    if (!cardId) {
      alert("Error: Card ID is missing");
      return;
    }
    if (!confirm('هل أنت متأكد من حذف هذا الكارت؟')) return;
    try {
      const res = await fetch(`/api/custom-cards/${cardId}`, { 
        method: 'DELETE',
        credentials: 'include'
      });
      if (res.ok) {
        alert("تم الحذف بنجاح");
        refreshCards();
      } else {
        const errorData = await res.json();
        alert(`Failed to delete: ${errorData.error || 'Unknown error'}`);
      }
    } catch (err: any) {
      alert(`Error: ${err.message}`);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center bg-white dark:bg-gray-900 p-8 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm transition-all hover:shadow-md">
        <div>
          <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight flex items-center gap-3">
            <Layout className="text-blue-500" />
            Custom Info Cards
          </h2>
          <p className="text-sm font-bold text-gray-400 dark:text-gray-500 mt-1 uppercase tracking-widest">
            Manage information cards displayed across the system
          </p>
        </div>
        <button
          onClick={() => setIsAdding(true)}
          className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black flex items-center gap-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 dark:shadow-none"
        >
          <Plus size={20} />
          New Card
        </button>
      </div>

      <AnimatePresence>
        {isAdding && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="bg-white dark:bg-gray-900 p-8 rounded-[2rem] border-2 border-blue-100 dark:border-blue-900/30 shadow-2xl shadow-blue-100/20 dark:shadow-none">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-black text-gray-900 dark:text-white uppercase tracking-tight">
                  {editingCard ? 'Edit Card' : 'Create New Card'}
                </h3>
                <button onClick={resetForm} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors">
                  <X />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-2">Title</label>
                    <input
                      type="text"
                      className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-2xl p-4 font-bold text-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-gray-400"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                      placeholder="e.g. Important Note"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-2">Page Selection</label>
                    <select
                      className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-2xl p-4 font-bold text-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      value={page}
                      onChange={(e) => setPage(e.target.value)}
                    >
                      <option value="all">All Pages</option>
                      {viewOptions.map(opt => (
                        <option key={opt.id} value={opt.id}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-2">Content</label>
                  <textarea
                    className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-2xl p-4 font-bold text-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-gray-400 min-h-[150px]"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    placeholder="Enter the information you want to display..."
                  />
                </div>

                <div className="flex flex-wrap gap-4 items-end">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-2">Color Theme</label>
                    <div className="flex gap-2">
                      {['blue', 'green', 'purple', 'yellow', 'red'].map(c => (
                        <button
                          key={c}
                          type="button"
                          onClick={() => setColor(c)}
                          className={`w-10 h-10 rounded-xl border-4 transition-all ${
                            color === c ? 'border-gray-900 dark:border-white scale-110 shadow-lg' : 'border-transparent'
                          } ${
                            c === 'blue' ? 'bg-blue-500' : 
                            c === 'green' ? 'bg-green-500' : 
                            c === 'purple' ? 'bg-purple-500' : 
                            c === 'yellow' ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex-1 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsVisible(!isVisible)}
                      className={`px-6 py-4 rounded-2xl font-black text-sm flex items-center gap-2 transition-all ${
                        isVisible 
                          ? 'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400' 
                          : 'bg-rose-50 text-rose-600'
                      }`}
                    >
                      {isVisible ? <Eye size={18} /> : <EyeOff size={18} />}
                      {isVisible ? 'Visible' : 'Hidden'}
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="px-10 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-950 rounded-2xl font-black text-sm hover:scale-105 active:scale-95 transition-all shadow-xl shadow-gray-200 dark:shadow-none"
                    >
                      {isLoading ? 'Saving...' : editingCard ? 'Update Card' : 'Create Card'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 gap-6">
        {cards.length === 0 ? (
          <div className="py-20 flex flex-col items-center justify-center bg-gray-50/50 dark:bg-gray-900/50 rounded-[2.5rem] border-2 border-dashed border-gray-200 dark:border-gray-800">
            <Layout size={48} className="text-gray-300 dark:text-gray-700 mb-4" />
            <p className="text-gray-400 dark:text-gray-500 font-black uppercase tracking-widest text-xs">No cards created yet</p>
          </div>
        ) : (
          cards.map(card => (
            <CustomCard 
              key={card.id} 
              card={card} 
              isAdmin={true} 
              onEdit={handleEdit} 
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};
