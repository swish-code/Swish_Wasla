import React, { useState } from 'react';
import { 
  PlusCircle, 
  Tag, 
  Package, 
  Settings, 
  EyeOff, 
  Wrench, 
  PhoneCall, 
  Clock, 
  MessageSquare, 
  FileText, 
  BarChart, 
  Users, 
  Layout,
  Moon,
  Sun,
  Globe, 
  LogOut,
  ChevronRight,
  Database,
  Search,
  X,
  ListChecks,
  Beef,
  Smartphone,
  AlertTriangle as Warning,
  HelpCircle,
  Beaker,
  ChevronDown,
  Info,
  Calendar,
  Truck,
  Skull,
  UserCircle,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ViewType, User } from '../types';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
  user: User | null;
  onLogout: () => void;
  isAdmin: boolean;
  setSelectedBrand: (brand: string | null) => void;
  selectedBrand: string | null;
  setSelectedAllergenBrand: (brand: 'yelo' | 'bbt' | 'just' | 'slice' | 'chili' | 'pattie') => void;
  selectedAllergenBrand: string;
  setSelectedIngerinesBrand: (brand: string) => void;
  selectedIngerinesBrand: string;
  pinnedViews: string[];
  togglePin: (view: string) => void;
  onSearchOpen: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

interface NavGroupProps {
  label: string;
  icon: any;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const NavGroup = ({ label, icon: Icon, isOpen, onToggle, children }: NavGroupProps) => {
  return (
    <div className="py-1">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-2.5 px-4 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all group"
      >
        <div className="flex items-center gap-3">
          <div className="p-1.5 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-400 group-hover:bg-gray-100 dark:group-hover:bg-gray-700 transition-colors">
            <Icon size={16} />
          </div>
          <span className="text-[13px] font-bold text-gray-700 dark:text-gray-300">{label}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={14} className="text-gray-400" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden ml-4 pl-4 border-l border-gray-100 mt-1"
          >
            <div className="py-1 space-y-1">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Sidebar({ 
  isOpen,
  onClose,
  currentView, 
  setCurrentView, 
  user, 
  onLogout, 
  isAdmin,
  setSelectedBrand,
  selectedBrand,
  setSelectedAllergenBrand,
  selectedAllergenBrand,
  setSelectedIngerinesBrand,
  selectedIngerinesBrand,
  pinnedViews,
  togglePin,
  onSearchOpen,
  isDarkMode,
  onToggleDarkMode
}: SidebarProps) {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    brands: true,
    process: true,
    favorites: true
  });

  const toggleGroup = (group: string) => {
    setOpenGroups(prev => ({ ...prev, [group]: !prev[group] }));
  };

  const navItem = (label: string, onClick: () => void, isActive: boolean, viewId?: string) => (
    <div key={viewId || label} className="group/item relative">
      <div
        className={`w-full flex items-center justify-between py-2 px-3 rounded-xl text-xs font-bold transition-all ${
          isActive 
            ? 'bg-[#00965e]/10 text-[#00965e]' 
            : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white group-hover/item:text-gray-900 dark:group-hover/item:text-white'
        }`}
      >
        <button 
          onClick={onClick}
          className="flex-1 text-left flex items-center h-full outline-none"
        >
          {label}
        </button>
        {viewId && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              togglePin(viewId);
            }}
            className={`p-1 rounded-md transition-all hover:bg-white flex items-center justify-center ${
              pinnedViews.includes(viewId) ? 'text-yellow-500' : 'text-gray-300 hover:text-yellow-500 opacity-0 group-hover/item:opacity-100'
            }`}
          >
            <Star size={12} fill={pinnedViews.includes(viewId) ? "currentColor" : "none"} />
          </button>
        )}
      </div>
    </div>
  );

  return (
    <aside 
      className={`fixed inset-y-0 left-0 lg:sticky lg:top-0 w-72 bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800 flex flex-col h-screen z-[80] transition-transform duration-300 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}
    >
      {/* Logo & Close Button */}
      <div className="p-8 flex items-center justify-between pb-6 border-b border-gray-50 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center text-[#00965e] font-black text-2xl shadow-xl shadow-green-100/20 dark:shadow-none border border-gray-100 dark:border-gray-700">
            W
          </div>
          <div>
            <h1 className="text-xl font-black text-gray-900 dark:text-white tracking-tighter leading-none">Swish Wasla</h1>
            <span className="text-[10px] font-black text-[#00965e] uppercase tracking-widest mt-1 block">Knowledge Base</span>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="lg:hidden p-2 text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-4 py-4 overflow-y-auto custom-scrollbar">
        {/* Search Trigger */}
        <button
          onClick={onSearchOpen}
          className="w-full flex items-center gap-3 py-3 px-4 rounded-2xl bg-gray-50 dark:bg-gray-800 text-gray-400 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-600 dark:hover:text-gray-300 transition-all group mb-6 border border-gray-100 dark:border-gray-800"
        >
          <Search size={18} />
          <span className="text-sm font-bold flex-1 text-left">Search anything...</span>
          <span className="text-[10px] font-black bg-white dark:bg-gray-900 px-2 py-1 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-400 group-hover:border-gray-300 dark:group-hover:border-gray-600">CTRL K</span>
        </button>

        {/* Favorites Section */}
        {pinnedViews.length > 0 && (
          <div className="mb-6">
            <NavGroup 
              label="Favorites" 
              icon={Star} 
              isOpen={openGroups.favorites} 
              onToggle={() => toggleGroup('favorites')}
            >
              {pinnedViews.map(viewId => {
                const item = ALL_NAV_ITEMS.find(i => i.id === viewId);
                if (!item) return null;
                return navItem(item.label, () => item.action(setCurrentView, setSelectedBrand, setSelectedAllergenBrand, setSelectedIngerinesBrand), currentView === item.view && (item.subBrand ? (selectedBrand === item.subBrand || selectedAllergenBrand === item.subBrand || selectedIngerinesBrand === item.subBrand) : true), viewId);
              })}
            </NavGroup>
            <div className="h-[1px] bg-gray-50 mx-4 my-2" />
          </div>
        )}

        {/* Dashboard / Home */}
        <button
          onClick={() => {
            setCurrentView('branches');
            setSelectedBrand(null);
          }}
          className={`w-full flex items-center justify-between py-2.5 px-4 rounded-xl transition-all group mb-2 ${
            currentView === 'branches' && !selectedBrand ? 'bg-[#00965e]/10 text-[#00965e]' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className={`p-1.5 rounded-lg transition-colors ${
              currentView === 'branches' && !selectedBrand ? 'bg-[#00965e] text-white' : 'bg-gray-50 dark:bg-gray-800 text-gray-400 group-hover:bg-gray-100 dark:group-hover:bg-gray-700'
            }`}>
              <Database size={16} />
            </div>
            <span className={`text-[13px] font-bold ${currentView === 'branches' && !selectedBrand ? 'text-[#00965e]' : ''}`}>General Dashboard</span>
          </div>
        </button>

        {/* Brand Details */}
        <NavGroup 
          label="Brand Details" 
          icon={Database} 
          isOpen={openGroups.brands} 
          onToggle={() => toggleGroup('brands')}
        >
          {navItem('Shakir Branches', () => { setSelectedBrand('Shawarma Shakir'); setCurrentView('branches'); }, currentView === 'branches' && selectedBrand === 'Shawarma Shakir', 'brand-shakir')}
          {navItem('Yelo Branches', () => { setSelectedBrand('Yelo Pizza'); setCurrentView('branches'); }, currentView === 'branches' && selectedBrand === 'Yelo Pizza', 'brand-yelo')}
          {navItem('BBT Branches', () => { setSelectedBrand('BBT'); setCurrentView('branches'); }, currentView === 'branches' && selectedBrand === 'BBT', 'brand-bbt')}
          {navItem('Slice Branches', () => { setSelectedBrand('Slice'); setCurrentView('branches'); }, currentView === 'branches' && selectedBrand === 'Slice', 'brand-slice')}
          {navItem('Pattie Branches', () => { setSelectedBrand('Pattie Pattie'); setCurrentView('branches'); }, currentView === 'branches' && selectedBrand === 'Pattie Pattie', 'brand-pattie')}
          {navItem('Just Branches', () => { setSelectedBrand('Just C'); setCurrentView('branches'); }, currentView === 'branches' && selectedBrand === 'Just C', 'brand-just')}
          {navItem('Chili Branches', () => { setSelectedBrand('Chili pepper'); setCurrentView('branches'); }, currentView === 'branches' && selectedBrand === 'Chili pepper', 'brand-chili')}
        </NavGroup>

        {/* Process */}
        <NavGroup 
          label="Process" 
          icon={PlusCircle} 
          isOpen={openGroups.process} 
          onToggle={() => toggleGroup('process')}
        >
          {navItem('New Order Process', () => setCurrentView('new-order'), currentView === 'new-order', 'proc-new')}
          {navItem('Follow Up Process', () => setCurrentView('follow-up'), currentView === 'follow-up', 'proc-follow')}
          {navItem('Complain Process', () => setCurrentView('complain'), currentView === 'complain', 'proc-complain')}
          {navItem('Complaint Status', () => setCurrentView('complaint-status'), currentView === 'complaint-status', 'proc-status')}
          {navItem('Additional', () => setCurrentView('additional'), currentView === 'additional', 'proc-additional')}
          {navItem('Special Requests', () => setCurrentView('special-requests'), currentView === 'special-requests', 'proc-special')}
        </NavGroup>

        {/* Services */}
        <NavGroup 
          label="Services" 
          icon={Beef} 
          isOpen={openGroups.services} 
          onToggle={() => toggleGroup('services')}
        >
          {navItem('Meat Sources', () => setCurrentView('meat-sources'), currentView === 'meat-sources', 'serv-meat')}
          {navItem('Talabat And Keeta', () => setCurrentView('talabat-keeta'), currentView === 'talabat-keeta', 'serv-talabat')}
          {navItem('Kuwaiti Terms', () => setCurrentView('kuwaiti-terms'), currentView === 'kuwaiti-terms', 'serv-terms')}
        </NavGroup>

        {/* Catering & Pre Order */}
        <NavGroup 
          label="Catering & Pre Order" 
          icon={Calendar} 
          isOpen={openGroups.catering} 
          onToggle={() => toggleGroup('catering')}
        >
          {navItem('Package (Catering)', () => setCurrentView('catering-packages'), currentView === 'catering-packages', 'cat-pkg')}
          {navItem('Pre Order', () => setCurrentView('pre-order'), currentView === 'pre-order', 'pre-order')}
          {navItem('Pre Order Pro', () => setCurrentView('pre-order-pro'), currentView === 'pre-order-pro', 'pre-order-pro')}
          {navItem('Remote Areas', () => setCurrentView('remote-areas'), currentView === 'remote-areas', 'remote-areas')}
        </NavGroup>

        {/* Cancellation */}
        <NavGroup 
          label="Cancellation" 
          icon={X} 
          isOpen={openGroups.cancellation} 
          onToggle={() => toggleGroup('cancellation')}
        >
          {navItem('Steps', () => setCurrentView('cancellation'), currentView === 'cancellation', 'canc-steps')}
        </NavGroup>

        {/* Contacts */}
        <NavGroup 
          label="Contacts" 
          icon={Users} 
          isOpen={openGroups.contacts} 
          onToggle={() => toggleGroup('contacts')}
        >
          {navItem('Shakir Contact', () => setCurrentView('shakir-contact'), currentView === 'shakir-contact', 'cont-shakir')}
          {navItem('Yelo Contact', () => setCurrentView('yelo-contact'), currentView === 'yelo-contact', 'cont-yelo')}
          {navItem('BBT Contact', () => setCurrentView('bbt-contact'), currentView === 'bbt-contact', 'cont-bbt')}
          {navItem('Users', () => setCurrentView('users-contact'), currentView === 'users-contact', 'cont-users')}
          {navItem('Extension', () => setCurrentView('extension-contact'), currentView === 'extension-contact', 'cont-ext')}
          {navItem('Employee Ex', () => setCurrentView('employee-ex-contact'), currentView === 'employee-ex-contact', 'cont-emp')}
        </NavGroup>

        {/* Allergens */}
        <NavGroup 
          label="Allergens" 
          icon={Warning} 
          isOpen={openGroups.allergens} 
          onToggle={() => toggleGroup('allergens')}
        >
          {navItem('Yelo Allergens', () => { setSelectedAllergenBrand('yelo'); setCurrentView('allergens'); }, currentView === 'allergens' && selectedAllergenBrand === 'yelo', 'all-yelo')}
          {navItem('Slice Allergens', () => { setSelectedAllergenBrand('slice'); setCurrentView('allergens'); }, currentView === 'allergens' && selectedAllergenBrand === 'slice', 'all-slice')}
          {navItem('Chili Allergens', () => { setSelectedAllergenBrand('chili'); setCurrentView('allergens'); }, currentView === 'allergens' && selectedAllergenBrand === 'chili', 'all-chili')}
          {navItem('Pattie Allergens', () => { setSelectedAllergenBrand('pattie'); setCurrentView('allergens'); }, currentView === 'allergens' && selectedAllergenBrand === 'pattie', 'all-pattie')}
          {navItem('BBT Allergens', () => { setSelectedAllergenBrand('bbt'); setCurrentView('allergens'); }, currentView === 'allergens' && selectedAllergenBrand === 'bbt', 'all-bbt')}
          {navItem('Just Allergens', () => { setSelectedAllergenBrand('just'); setCurrentView('allergens'); }, currentView === 'allergens' && selectedAllergenBrand === 'just', 'all-just')}
        </NavGroup>

        {/* Ingredients */}
        <NavGroup 
          label="Ingredients" 
          icon={Beaker} 
          isOpen={openGroups.ingredients} 
          onToggle={() => toggleGroup('ingredients')}
        >
          {navItem('Shakir Ingredients', () => { setSelectedIngerinesBrand('shakir'); setCurrentView('ingerines'); }, currentView === 'ingerines' && selectedIngerinesBrand === 'shakir', 'ing-shakir')}
          {navItem('Just Ingredients', () => { setSelectedIngerinesBrand('just'); setCurrentView('ingerines'); }, currentView === 'ingerines' && selectedIngerinesBrand === 'just', 'ing-just')}
          {navItem('Yelo SOP', () => { setSelectedIngerinesBrand('yelo-sop'); setCurrentView('ingerines'); }, currentView === 'ingerines' && selectedIngerinesBrand === 'yelo-sop', 'ing-yelo-sop')}
          {navItem('Chili Ingredients', () => { setSelectedIngerinesBrand('chili'); setCurrentView('ingerines'); }, currentView === 'ingerines' && selectedIngerinesBrand === 'chili', 'ing-chili')}
        </NavGroup>

        {/* Task Management */}
        <button
          onClick={() => setCurrentView('task')}
          className={`w-full flex items-center justify-between py-2.5 px-4 rounded-xl transition-all group mt-2 ${
            currentView === 'task' ? 'bg-[#00965e]/10 text-[#00965e]' : 'text-gray-500 hover:bg-gray-50'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className={`p-1.5 rounded-lg transition-colors ${
              currentView === 'task' ? 'bg-[#00965e] text-white' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100'
            }`}>
              <FileText size={16} />
            </div>
            <span className={`text-[13px] font-bold ${currentView === 'task' ? 'text-[#00965e]' : ''}`}>Task Management</span>
          </div>
        </button>

        {(isAdmin || user?.role === 'leader' || user?.role === 'manager') && (
          <div className="py-4 border-t border-gray-50 mt-4">
            <h3 className="px-4 mb-2 text-[10px] font-black text-purple-400 uppercase tracking-[0.2em]">
              {isAdmin ? 'Admin' : user?.role === 'leader' ? 'Leader' : 'Management'}
            </h3>
            <div className="space-y-1">
              {[
                ...(user?.role === 'admin' ? [
                  { id: 'user-mgmt' as any, label: 'Users', icon: Users },
                  { id: 'custom-cards' as any, label: 'Custom Cards', icon: Layout },
                  { id: 'audit-logs' as any, label: 'Logs', icon: ListChecks },
                ] : []),
                ...(user?.role === 'admin' || user?.role === 'leader' ? [
                  { id: 'reports' as any, label: 'Analytics', icon: BarChart },
                ] : []),
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setCurrentView(item.id as ViewType)}
                  className={`w-full flex items-center justify-between py-2 px-4 rounded-xl transition-all group ${
                    currentView === item.id ? 'bg-purple-50 text-purple-600' : 'text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-lg transition-colors ${
                      currentView === item.id ? 'bg-purple-500 text-white' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100'
                    }`}>
                      <item.icon size={16} />
                    </div>
                    <span className={`text-[13px] font-bold`}>{item.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Actions */}
      <div className="p-6 mt-auto space-y-2 border-t border-gray-50 dark:border-gray-800 bg-white dark:bg-gray-900">
        {/* Dark Mode Toggle */}
        <button 
          type="button"
          onClick={onToggleDarkMode}
          className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-all duration-200 group text-left outline-none border-none ring-offset-white dark:ring-offset-gray-900 focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm transition-all duration-500 ${
            isDarkMode 
              ? 'bg-blue-500/20 text-blue-400' 
              : 'bg-yellow-400/20 text-yellow-600'
          }`}>
            {isDarkMode ? <Moon size={20} fill="currentColor" /> : <Sun size={20} />}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-black text-gray-900 dark:text-white leading-tight">
              {isDarkMode ? 'Dark Mode' : 'Light Mode'}
            </span>
            <span className="text-[10px] font-bold text-gray-400 dark:text-gray-400 uppercase tracking-widest mt-0.5">
              {isDarkMode ? 'Switch to light' : 'Switch to dark'}
            </span>
          </div>
        </button>

        <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors group">
          <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 group-hover:bg-[#00965e]/10 group-hover:text-[#00965e] transition-colors">
            <Globe size={18} />
          </div>
          <span className="text-sm font-bold text-gray-600 dark:text-gray-400">العربية</span>
        </div>

        <button 
          onClick={onLogout}
          className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500 transition-colors group text-left"
        >
          <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center group-hover:bg-red-100 dark:group-hover:bg-red-900/40 transition-colors">
            <LogOut size={18} />
          </div>
          <span className="text-sm font-bold">Logout</span>
        </button>

        {/* User Profile */}
        <div className="mt-8 pt-6 border-t border-gray-50 dark:border-gray-800 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-900 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-white font-bold">
            {user?.name?.[0] || 'U'}
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-black text-gray-900 dark:text-white truncate tracking-tight">{user?.name}</p>
            <p className="text-[10px] font-bold text-gray-400 dark:text-gray-400 uppercase">{user?.role}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

const ALL_NAV_ITEMS = [
  { id: 'brand-shakir', label: 'Shakir Branches', view: 'branches', subBrand: 'Shawarma Shakir', action: (sV: any, sB: any, sA: any, sI: any) => { sB('Shawarma Shakir'); sV('branches'); } },
  { id: 'brand-yelo', label: 'Yelo Branches', view: 'branches', subBrand: 'Yelo Pizza', action: (sV: any, sB: any, sA: any, sI: any) => { sB('Yelo Pizza'); sV('branches'); } },
  { id: 'brand-bbt', label: 'BBT Branches', view: 'branches', subBrand: 'BBT', action: (sV: any, sB: any, sA: any, sI: any) => { sB('BBT'); sV('branches'); } },
  { id: 'brand-slice', label: 'Slice Branches', view: 'branches', subBrand: 'Slice', action: (sV: any, sB: any, sA: any, sI: any) => { sB('Slice'); sV('branches'); } },
  { id: 'brand-pattie', label: 'Pattie Branches', view: 'branches', subBrand: 'Pattie Pattie', action: (sV: any, sB: any, sA: any, sI: any) => { sB('Pattie Pattie'); sV('branches'); } },
  { id: 'brand-just', label: 'Just Branches', view: 'branches', subBrand: 'Just C', action: (sV: any, sB: any, sA: any, sI: any) => { sB('Just C'); sV('branches'); } },
  { id: 'brand-chili', label: 'Chili Branches', view: 'branches', subBrand: 'Chili pepper', action: (sV: any, sB: any, sA: any, sI: any) => { sB('Chili pepper'); sV('branches'); } },
  { id: 'proc-new', label: 'New Order Process', view: 'new-order', action: (sV: any) => sV('new-order') },
  { id: 'proc-follow', label: 'Follow Up Process', view: 'follow-up', action: (sV: any) => sV('follow-up') },
  { id: 'proc-complain', label: 'Complain Process', view: 'complain', action: (sV: any) => sV('complain') },
  { id: 'proc-status', label: 'Complaint Status', view: 'complaint-status', action: (sV: any) => sV('complaint-status') },
  { id: 'proc-additional', label: 'Additional Process', view: 'additional', action: (sV: any) => sV('additional') },
  { id: 'proc-special', label: 'Special Requests', view: 'special-requests', action: (sV: any) => sV('special-requests') },
  { id: 'serv-meat', label: 'Meat Sources', view: 'meat-sources', action: (sV: any) => sV('meat-sources') },
  { id: 'serv-talabat', label: 'Talabat & Keeta', view: 'talabat-keeta', action: (sV: any) => sV('talabat-keeta') },
  { id: 'serv-terms', label: 'Kuwaiti Terms', view: 'kuwaiti-terms', action: (sV: any) => sV('kuwaiti-terms') },
  { id: 'cat-pkg', label: 'Catering Packages', view: 'catering-packages', action: (sV: any) => sV('catering-packages') },
  { id: 'pre-order', label: 'Pre Order', view: 'pre-order', action: (sV: any) => sV('pre-order') },
  { id: 'pre-order-pro', label: 'Pre Order Pro', view: 'pre-order-pro', action: (sV: any) => sV('pre-order-pro') },
  { id: 'remote-areas', label: 'Remote Areas', view: 'remote-areas', action: (sV: any) => sV('remote-areas') },
  { id: 'canc-steps', label: 'Cancellation Steps', view: 'cancellation', action: (sV: any) => sV('cancellation') },
  { id: 'cont-shakir', label: 'Shakir Contacts', view: 'shakir-contact', action: (sV: any) => sV('shakir-contact') },
  { id: 'cont-yelo', label: 'Yelo Contacts', view: 'yelo-contact', action: (sV: any) => sV('yelo-contact') },
  { id: 'cont-bbt', label: 'BBT Contacts', view: 'bbt-contact', action: (sV: any) => sV('bbt-contact') },
  { id: 'cont-users', label: 'Users System Access', view: 'users-contact', action: (sV: any) => sV('users-contact') },
  { id: 'cont-ext', label: 'Branch Extensions', view: 'extension-contact', action: (sV: any) => sV('extension-contact') },
  { id: 'cont-emp', label: 'Employee Extensions', view: 'employee-ex-contact', action: (sV: any) => sV('employee-ex-contact') },
  { id: 'all-yelo', label: 'Yelo Allergens', view: 'allergens', subBrand: 'yelo', action: (sV: any, sB: any, sA: any) => { sA('yelo'); sV('allergens'); } },
  { id: 'all-slice', label: 'Slice Allergens', view: 'allergens', subBrand: 'slice', action: (sV: any, sB: any, sA: any) => { sA('slice'); sV('allergens'); } },
  { id: 'all-chili', label: 'Chili Allergens', view: 'allergens', subBrand: 'chili', action: (sV: any, sB: any, sA: any) => { sA('chili'); sV('allergens'); } },
  { id: 'all-pattie', label: 'Pattie Allergens', view: 'allergens', subBrand: 'pattie', action: (sV: any, sB: any, sA: any) => { sA('pattie'); sV('allergens'); } },
  { id: 'all-bbt', label: 'BBT Allergens', view: 'allergens', subBrand: 'bbt', action: (sV: any, sB: any, sA: any) => { sA('bbt'); sV('allergens'); } },
  { id: 'all-just', label: 'Just Allergens', view: 'allergens', subBrand: 'just', action: (sV: any, sB: any, sA: any) => { sA('just'); sV('allergens'); } },
  { id: 'ing-shakir', label: 'Shakir Ingredients', view: 'ingerines', subBrand: 'shakir', action: (sV: any, sB: any, sA: any, sI: any) => { sI('shakir'); sV('ingerines'); } },
  { id: 'ing-just', label: 'Just Ingredients', view: 'ingerines', subBrand: 'just', action: (sV: any, sB: any, sA: any, sI: any) => { sI('just'); sV('ingerines'); } },
  { id: 'ing-yelo-sop', label: 'Yelo SOP', view: 'ingerines', subBrand: 'yelo-sop', action: (sV: any, sB: any, sA: any, sI: any) => { sI('yelo-sop'); sV('ingerines'); } },
  { id: 'ing-chili', label: 'Chili Ingredients', view: 'ingerines', subBrand: 'chili', action: (sV: any, sB: any, sA: any, sI: any) => { sI('chili'); sV('ingerines'); } },
];

