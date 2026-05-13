import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Plus, Edit, Trash2, Calendar, Tag, DollarSign, Building2, Info, AlertCircle, Check, X, ArrowRight, Image as ImageIcon, Upload } from 'lucide-react';
import { Offer, User } from '../types';

interface OffersViewProps {
  user: User | null;
}

export default function OffersView({ user }: OffersViewProps) {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingOffer, setEditingOffer] = useState<Offer | null>(null);
  const [selectedBrand, setSelectedBrand] = useState('All');
  
  // New Offer Form State
  const [formData, setFormData] = useState({
    brand: 'Shawarma Shakir',
    title: '',
    description: '',
    price: '',
    startDate: '',
    endDate: '',
    imageUrl: '',
    aggregators: [] as string[]
  });

  const AGGREGATORS = ['Keeta', 'Talabat', 'Call center', 'Deliveroo', 'Web site'];
  const BRANDS = ['All', 'Shawarma Shakir', 'Yelo Pizza', 'BBT', 'Slice', 'Pattie Pattie', 'Just C', 'Chili pepper', 'Tabel', 'Mishmash'];

  const isLeader = user?.role === 'leader' || user?.role === 'admin';

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return 'N/A';
    try {
      const date = new Date(dateStr);
      return new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        timeZone: 'Asia/Kuwait'
      }).format(date);
    } catch {
      return dateStr;
    }
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    try {
      setIsLoading(true);
      const res = await fetch('/api/offers', { credentials: 'include' });
      const data = await res.json();
      if (Array.isArray(data)) {
        setOffers(data);
      } else {
        console.error('Received non-array data for offers:', data);
        setOffers([]);
      }
    } catch (error) {
      console.error('Error fetching offers:', error);
      setOffers([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = editingOffer ? `/api/offers/${editingOffer.id}` : '/api/offers';
      const method = editingOffer ? 'PUT' : 'POST';
      
      const payload = {
        ...formData,
        aggregators: formData.aggregators.join(',')
      };

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        credentials: 'include'
      });

      if (res.ok) {
        setIsModalOpen(false);
        setEditingOffer(null);
        resetForm();
        fetchOffers();
      }
    } catch (error) {
      console.error('Error saving offer:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(`/api/offers/${id}`, {
        method: 'DELETE',
        credentials: 'include'
      });
      if (res.ok) {
        fetchOffers();
      } else {
        const errorData = await res.json();
        console.error('Delete failed:', errorData);
      }
    } catch (error) {
      console.error('Error deleting offer:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      brand: 'Shawarma Shakir',
      title: '',
      description: '',
      price: '',
      startDate: '',
      endDate: '',
      imageUrl: '',
      aggregators: []
    });
  };

  const toggleAggregator = (agg: string) => {
    setFormData(prev => ({
      ...prev,
      aggregators: prev.aggregators.includes(agg)
        ? prev.aggregators.filter(a => a !== agg)
        : [...prev.aggregators, agg]
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, imageUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const currentOffers = Array.isArray(offers) ? offers : [];

  const filteredOffers = currentOffers.filter(offer => {
    const matchesSearch = 
      offer.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      offer.brand?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      offer.description?.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesBrand = selectedBrand === 'All' || offer.brand === selectedBrand;

    return matchesSearch && matchesBrand;
  });

  return (
    <div className="p-4 sm:p-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 lg:mb-12">
        <div>
          <h1 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tighter uppercase">Current Offers</h1>
          <p className="text-gray-500 dark:text-gray-400 font-bold text-base lg:text-lg italic">View and manage marketing promotions across brands</p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <div className="relative group">
            <input
              type="text"
              placeholder="Search offers..."
              className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 pl-12 pr-4 py-4 rounded-2xl text-sm w-full sm:w-64 md:w-80 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500/40 transition-all font-bold text-gray-700 dark:text-gray-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors" size={20} />
          </div>

          {isLeader && (
            <button 
              onClick={() => {
                setEditingOffer(null);
                resetForm();
                setIsModalOpen(true);
              }}
              className="px-8 py-4 bg-orange-500 text-white rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 active:scale-95"
            >
              <Plus size={20} />
              ADD OFFER
            </button>
          )}
        </div>
      </div>

      {/* Brand Filters */}
      <div className="flex overflow-x-auto gap-3 pb-8 no-scrollbar scroll-smooth">
        {BRANDS.map((brand) => (
          <button
            key={brand}
            onClick={() => setSelectedBrand(brand)}
            className={`whitespace-nowrap px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all border ${
              selectedBrand === brand
                ? 'bg-orange-500 text-white border-orange-500 shadow-lg shadow-orange-500/20 active:scale-95'
                : 'bg-white dark:bg-gray-900 text-gray-400 dark:text-gray-500 border-gray-100 dark:border-gray-800 hover:border-orange-500/30 hover:text-orange-500'
            }`}
          >
            {brand}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-32 space-y-4">
          <div className="w-12 h-12 border-4 border-orange-500/20 border-t-orange-500 rounded-full animate-spin" />
          <p className="text-gray-400 font-black uppercase tracking-widest text-sm">Synchronizing Data...</p>
        </div>
      ) : filteredOffers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOffers.map((offer) => (
            <motion.div
              layout
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="group relative bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
              
              {offer.imageUrl && (
                <div className="absolute top-0 left-0 w-full h-52 overflow-hidden rounded-t-[2.5rem]">
                  <img 
                    src={offer.imageUrl} 
                    alt={offer.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}

              <div className={`relative z-10 ${offer.imageUrl ? 'mt-44' : ''}`}>
                <div className="flex items-start justify-between mb-6">
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 text-[10px] font-black uppercase tracking-widest">
                      <Building2 size={12} />
                      {offer.brand}
                    </span>
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight group-hover:text-orange-500 transition-colors uppercase">{offer.title}</h3>
                  </div>
                  {isLeader && (
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={() => {
                          setEditingOffer(offer);
                          setFormData({
                            brand: offer.brand,
                            title: offer.title,
                            description: offer.description,
                            price: offer.price,
                            startDate: offer.startDate || '',
                            endDate: offer.endDate || '',
                            imageUrl: offer.imageUrl || '',
                            aggregators: offer.aggregators ? offer.aggregators.split(',') : []
                          });
                          setIsModalOpen(true);
                        }}
                        className="p-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                      >
                        <Edit size={16} />
                      </button>
                      <button 
                        onClick={() => handleDelete(offer.id)}
                        className="p-2 bg-red-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-all shadow-sm"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {offer.aggregators?.split(',').map((agg, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-[9px] font-black uppercase text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                      {agg}
                    </span>
                  ))}
                </div>

                <p className="text-gray-500 dark:text-gray-400 font-bold mb-8 italic line-clamp-3 min-h-[4.5rem]">
                  "{offer.description}"
                </p>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white dark:bg-gray-700 flex items-center justify-center text-orange-500 shadow-sm">
                        <DollarSign size={20} />
                      </div>
                      <span className="text-sm font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Price</span>
                    </div>
                    <span className="text-2xl font-black text-gray-900 dark:text-white">{offer.price}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar size={14} className="text-gray-400" />
                        <span className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Starts</span>
                      </div>
                      <span className="text-sm font-bold text-gray-900 dark:text-gray-200">{formatDate(offer.startDate)}</span>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar size={14} className="text-gray-400" />
                        <span className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Ends</span>
                      </div>
                      <span className="text-sm font-bold text-gray-900 dark:text-gray-200">{formatDate(offer.endDate)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-32 space-y-6">
          <div className="w-24 h-24 bg-gray-50 dark:bg-gray-900 rounded-full flex items-center justify-center border-2 border-dashed border-gray-200 dark:border-gray-800">
            <Tag size={48} className="text-gray-200 dark:text-gray-700" />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-2">No active offers FOUND</h3>
            <p className="text-gray-400 font-bold italic">Try adjusting your search filters or add a new promotion.</p>
          </div>
        </div>
      )}

      {/* Offer Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-gray-900/40 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white dark:bg-gray-950 rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800"
            >
              <div className="p-8 sm:p-12">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tighter uppercase">
                      {editingOffer ? 'Edit Offer Details' : 'Create New Offer'}
                    </h2>
                    <p className="text-gray-400 font-bold italic">Fill in the promotion parameters below</p>
                  </div>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="p-3 bg-gray-50 dark:bg-gray-900 text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-2xl transition-all"
                  >
                    <X size={24} />
                  </button>
                </div>

                <form onSubmit={handleSave} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-[11px] font-black text-gray-400 dark:text-gray-600 uppercase tracking-[0.2em] ml-2">Brand Selection</label>
                      <select
                        required
                        className="w-full bg-gray-50 dark:bg-gray-900 border-none rounded-2xl px-6 py-4 font-bold text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500/20 transition-all outline-none"
                        value={formData.brand}
                        onChange={(e) => setFormData({...formData, brand: e.target.value})}
                      >
                        <option value="Shawarma Shakir">Shawarma Shakir</option>
                        <option value="Yelo Pizza">Yelo Pizza</option>
                        <option value="BBT">BBT</option>
                        <option value="Slice">Slice</option>
                        <option value="Pattie Pattie">Pattie Pattie</option>
                        <option value="Just C">Just C</option>
                        <option value="Chili pepper">Chili pepper</option>
                        <option value="Tabel">Tabel</option>
                        <option value="Mishmash">Mishmash</option>
                      </select>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[11px] font-black text-gray-400 dark:text-gray-600 uppercase tracking-[0.2em] ml-2">Offer Title</label>
                      <input
                        required
                        type="text"
                        className="w-full bg-gray-50 dark:bg-gray-900 border-none rounded-2xl px-6 py-4 font-bold text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500/20 transition-all outline-none placeholder:text-gray-300"
                        placeholder="e.g. BUY 1 GET 1 FREE"
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                      />
                    </div>

                    <div className="sm:col-span-2 space-y-3">
                      <label className="text-[11px] font-black text-gray-400 dark:text-gray-600 uppercase tracking-[0.2em] ml-2">Offer Image</label>
                      <div className="flex items-center gap-6">
                        <div className="relative group/upload w-32 h-32 bg-gray-50 dark:bg-gray-900 rounded-[2rem] overflow-hidden border-2 border-dashed border-gray-200 dark:border-gray-800 flex items-center justify-center">
                          {formData.imageUrl ? (
                            <>
                              <img src={formData.imageUrl} alt="Preview" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                              <button 
                                type="button"
                                onClick={() => setFormData(prev => ({ ...prev, imageUrl: '' }))}
                                className="absolute inset-0 bg-black/40 opacity-0 group-hover/upload:opacity-100 transition-opacity flex items-center justify-center text-white"
                              >
                                <X size={20} />
                              </button>
                            </>
                          ) : (
                            <ImageIcon size={32} className="text-gray-300" />
                          )}
                        </div>
                        
                        <div className="flex-1 space-y-2">
                          <label className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl font-black text-xs uppercase tracking-widest text-orange-500 cursor-pointer hover:bg-orange-50 dark:hover:bg-orange-500/5 transition-all shadow-sm">
                            <Upload size={16} />
                            Upload from device
                            <input 
                              type="file" 
                              className="hidden" 
                              accept="image/*"
                              onChange={handleFileChange}
                            />
                          </label>
                          <p className="text-[10px] text-gray-400 font-bold italic ml-2">Recommend square or landscape format.</p>
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-span-2 space-y-3">
                      <label className="text-[11px] font-black text-gray-400 dark:text-gray-600 uppercase tracking-[0.2em] ml-2">Available On (Aggregators)</label>
                      <div className="flex flex-wrap gap-3">
                        {AGGREGATORS.map(agg => (
                          <button
                            key={agg}
                            type="button"
                            onClick={() => toggleAggregator(agg)}
                            className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                              formData.aggregators.includes(agg)
                                ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                                : 'bg-gray-50 dark:bg-gray-900 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                            }`}
                          >
                            {agg}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="sm:col-span-2 space-y-3">
                      <label className="text-[11px] font-black text-gray-400 dark:text-gray-600 uppercase tracking-[0.2em] ml-2">Description</label>
                      <textarea
                        required
                        rows={3}
                        className="w-full bg-gray-50 dark:bg-gray-900 border-none rounded-2xl px-6 py-4 font-bold text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500/20 transition-all outline-none placeholder:text-gray-300 resize-none"
                        placeholder="Detail the offer mechanics..."
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-[11px] font-black text-gray-400 dark:text-gray-600 uppercase tracking-[0.2em] ml-2">Product Price</label>
                      <div className="relative">
                        <input
                          required
                          type="text"
                          className="w-full bg-gray-50 dark:bg-gray-900 border-none rounded-2xl px-6 py-4 font-bold text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500/20 transition-all outline-none placeholder:text-gray-300"
                          placeholder="e.g. 2.500 KD"
                          value={formData.price}
                          onChange={(e) => setFormData({...formData, price: e.target.value})}
                        />
                        <DollarSign className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:col-span-1">
                      <div className="space-y-3">
                        <label className="text-[11px] font-black text-gray-400 dark:text-gray-600 uppercase tracking-[0.2em] ml-2">Start Date</label>
                        <input
                          type="date"
                          className="w-full bg-gray-50 dark:bg-gray-900 border-none rounded-2xl px-4 py-4 font-bold text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500/20 transition-all outline-none"
                          value={formData.startDate}
                          onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[11px] font-black text-gray-400 dark:text-gray-600 uppercase tracking-[0.2em] ml-2">End Date</label>
                        <input
                          type="date"
                          className="w-full bg-gray-50 dark:bg-gray-900 border-none rounded-2xl px-4 py-4 font-bold text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500/20 transition-all outline-none"
                          value={formData.endDate}
                          onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="flex-1 px-8 py-5 bg-gray-50 dark:bg-gray-900 text-gray-500 rounded-2xl font-black uppercase tracking-widest hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-[2] px-8 py-5 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 flex items-center justify-center gap-3 active:scale-95"
                    >
                      {editingOffer ? 'Update Promotion' : 'Deploy offer'}
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
