import React, { useState, useEffect } from 'react';
import { X, Save, Trash2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BranchData, Brand, BranchColumn } from '../types';
import { BRANDS } from '../data';

interface BranchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (branch: Partial<BranchData>) => Promise<void>;
  onDelete?: (id: string | number) => Promise<void>;
  editingBranch: BranchData | null;
  dynamicColumns: BranchColumn[];
}

export default function BranchModal({ isOpen, onClose, onSave, onDelete, editingBranch, dynamicColumns }: BranchModalProps) {
  const [formData, setFormData] = useState<Partial<BranchData>>({
    brand: BRANDS[0],
    branchName: '',
    address: '',
    delivery: 'No',
    pickup: 'No',
    dineIn: 'No',
    workingHours: '',
    lastOrderDelivery: '',
    lastOrderPickup: '',
    tgo: 'No',
    tmp: 'No',
    deliveroo: 'No',
    car: 'No',
    vthru: 'No',
    website: 'No',
    cari: 'No',
    jahez: 'No',
    callCenter: 'No',
    keeta: 'No',
    customData: '{}',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (editingBranch) {
      setFormData({
        ...editingBranch,
        lastOrderDelivery: editingBranch.lastOrderDelivery || '',
        lastOrderPickup: editingBranch.lastOrderPickup || '',
        customData: editingBranch.customData || '{}'
      });
    } else {
      setFormData({
        brand: BRANDS[0],
        branchName: '',
        address: '',
        delivery: 'No',
        pickup: 'No',
        dineIn: 'No',
        workingHours: '',
        lastOrderDelivery: '',
        lastOrderPickup: '',
        tgo: 'No',
        tmp: 'No',
        deliveroo: 'No',
        car: 'No',
        vthru: 'No',
        website: 'No',
        cari: 'No',
        jahez: 'No',
        callCenter: 'No',
        keeta: 'No',
        customData: '{}'
      });
    }
  }, [editingBranch, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      await onSave(formData);
      onClose();
    } catch (err) {
      setError('Failed to save branch information');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (editingBranch?.id === undefined || !onDelete) return;
    if (!confirm('Are you sure you want to delete this branch?')) return;
    
    setIsSubmitting(true);
    try {
      await onDelete(editingBranch.id);
      onClose();
    } catch (err) {
      setError('Failed to delete branch');
    } finally {
      setIsSubmitting(false);
    }
  };

  const statusOptions = ['Yes', 'No', '24 Hours', 'Yes Only Pickup', 'No Until Further time'];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
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
            className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl relative w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50 dark:bg-gray-900/50">
              <div>
                <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                  {editingBranch ? 'Edit Branch' : 'Add New Branch'}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Configure branch settings and availability</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white dark:hover:bg-gray-800 hover:shadow-lg rounded-full transition-all text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <form onSubmit={handleSubmit} className="overflow-y-auto flex-1 p-8">
              {error && (
                <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 text-red-700 text-sm font-bold flex items-center gap-3">
                  <AlertCircle size={20} />
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Basic Info */}
                <div className="space-y-6">
                  <h3 className="text-xs font-black text-blue-600 uppercase tracking-widest pb-2 border-b border-blue-50">Basic Information</h3>
                  
                  <div>
                    <label className="block text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">Brand</label>
                    <select
                      className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl py-3 px-4 font-bold text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                      value={formData.brand}
                      onChange={e => setFormData({ ...formData, brand: e.target.value as Brand })}
                    >
                      {BRANDS.map(b => <option key={b} value={b} className="dark:bg-gray-800">{b}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">Branch Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-100 dark:bg-gray-800 border-none rounded-xl py-3 px-4 font-bold text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                      value={formData.branchName || ''}
                      onChange={e => setFormData({ ...formData, branchName: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">Address</label>
                    <textarea
                      className="w-full bg-gray-100 dark:bg-gray-800 border-none rounded-xl py-3 px-4 font-bold text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 transition-all outline-none min-h-[100px]"
                      value={formData.address || ''}
                      onChange={e => setFormData({ ...formData, address: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">Working Hours</label>
                    <input
                      type="text"
                      className="w-full bg-gray-100 dark:bg-gray-800 border-none rounded-xl py-3 px-4 font-bold text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                      value={formData.workingHours || ''}
                      onChange={e => setFormData({ ...formData, workingHours: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">Last Delivery Order</label>
                      <input
                        type="text"
                        className="w-full bg-gray-100 dark:bg-gray-800 border-none rounded-xl py-3 px-4 font-bold text-blue-600 dark:text-blue-400 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                        value={formData.lastOrderDelivery || ''}
                        onChange={e => setFormData({ ...formData, lastOrderDelivery: e.target.value })}
                        placeholder="e.g. 1:30 AM"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">Last Pickup Order</label>
                      <input
                        type="text"
                        className="w-full bg-gray-100 dark:bg-gray-800 border-none rounded-xl py-3 px-4 font-bold text-green-600 dark:text-green-400 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                        value={formData.lastOrderPickup || ''}
                        onChange={e => setFormData({ ...formData, lastOrderPickup: e.target.value })}
                        placeholder="e.g. 1:15 AM"
                      />
                    </div>
                  </div>
                </div>

                {/* Status/Availability */}
                <div className="space-y-6">
                  <h3 className="text-xs font-black text-green-600 uppercase tracking-widest pb-2 border-b border-green-50">Availability & Platforms</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      'delivery', 'pickup', 'dineIn', 'tgo', 'tmp', 'deliveroo', 
                      'car', 'vthru', 'website', 'cari', 'jahez', 'callCenter', 'keeta'
                    ].map(field => (
                      <div key={field}>
                        <label className="block text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1.5 truncate">
                          {field.replace(/([A-Z])/g, ' $1').trim()}
                        </label>
                        <select
                          className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-lg py-2 px-3 text-xs font-bold text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                          value={formData[field as keyof BranchData] as string}
                          onChange={e => setFormData({ ...formData, [field]: e.target.value })}
                        >
                          {statusOptions.map(opt => <option key={opt} value={opt} className="dark:bg-gray-800">{opt}</option>)}
                          <option value="Available" className="dark:bg-gray-800">Available</option>
                          <option value="Not Available" className="dark:bg-gray-800">Not Available</option>
                        </select>
                      </div>
                    ))}

                    {/* Dynamic Columns */}
                    {dynamicColumns.map(col => {
                      const customValues = JSON.parse(formData.customData || '{}');
                      return (
                        <div key={col.name}>
                          <label className="block text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1.5 truncate">
                            {col.label}
                          </label>
                          <select
                            className="w-full bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 rounded-lg py-2 px-3 text-xs font-bold text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                            value={customValues[col.name] || 'No'}
                            onChange={e => {
                              const newVal = e.target.value;
                              const updatedCustom = { ...customValues, [col.name]: newVal };
                              setFormData({ ...formData, customData: JSON.stringify(updatedCustom) });
                            }}
                          >
                            {statusOptions.map(opt => <option key={opt} value={opt} className="dark:bg-gray-800">{opt}</option>)}
                            <option value="Available" className="dark:bg-gray-800">Available</option>
                            <option value="Not Available" className="dark:bg-gray-800">Not Available</option>
                          </select>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </form>

            {/* Footer */}
            <div className="p-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50 dark:bg-gray-900/50">
              {editingBranch ? (
                <button
                  type="button"
                  onClick={handleDelete}
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-red-50 dark:bg-red-900 text-red-500 dark:text-red-400 rounded-xl font-bold hover:bg-red-500 dark:hover:bg-red-600 hover:text-white transition-all flex items-center gap-2"
                >
                  <Trash2 size={18} />
                  Delete Branch
                </button>
              ) : <div />}

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 rounded-xl font-bold hover:bg-white dark:hover:bg-gray-800 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-100 flex items-center gap-2 active:scale-95 disabled:opacity-50"
                >
                  <Save size={18} />
                  {editingBranch ? 'Update Changes' : 'Create Branch'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
