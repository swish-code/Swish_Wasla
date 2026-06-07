import React, { useState, useRef, useEffect } from 'react';
import {
  PlusCircle,
  Settings,
  FileText,
  BarChart,
  Users,
  Layout,
  Moon,
  Sun,
  Globe,
  LogOut,
  Database,
  Search,
  X,
  ListChecks,
  Beef,
  AlertTriangle as Warning,
  Beaker,
  ChevronDown,
  Calendar,
  Star,
  Menu,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ViewType, User } from '../types';

interface TopNavbarProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
  user: User | null;
  onLogout: () => void;
  isAdmin: boolean;
  setSelectedBrand: (brand: string | null) => void;
  selectedBrand: string | null;
  setSelectedAllergenBrand: (brand: 'yelo' | 'bbt' | 'just' | 'slice' | 'chili' | 'pattie' | 'mishmash') => void;
  selectedAllergenBrand: string;
  setSelectedIngerinesBrand: (brand: string) => void;
  selectedIngerinesBrand: string;
  selectedComplainBrand: string | null;
  setSelectedComplainBrand: (brand: string | null) => void;
  pinnedViews: string[];
  togglePin: (view: string) => void;
  onSearchOpen: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

interface MenuItem {
  label: string;
  onClick: () => void;
  isActive: boolean;
  viewId?: string;
}

interface MenuGroup {
  key: string;
  label: string;
  icon: any;
  items: MenuItem[];
}

export default function TopNavbar({
  isOpen,
  onOpen,
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
  setSelectedComplainBrand,
  selectedComplainBrand,
  pinnedViews,
  togglePin,
  onSearchOpen,
  isDarkMode,
  onToggleDarkMode,
}: TopNavbarProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Close any open dropdown when clicking outside the navbar
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const go = (fn: () => void) => {
    fn();
    setOpenMenu(null);
    onClose();
  };

  // ---- Navigation groups (same logic/actions as the old Sidebar) ----
  const groups: MenuGroup[] = [
    {
      key: 'brands',
      label: 'Brand Details',
      icon: Database,
      items: [
        { label: 'Shakir Branches', onClick: () => { setSelectedBrand('Shawarma Shakir'); setCurrentView('branches'); }, isActive: currentView === 'branches' && selectedBrand === 'Shawarma Shakir', viewId: 'brand-shakir' },
        { label: 'Yelo Branches', onClick: () => { setSelectedBrand('Yelo Pizza'); setCurrentView('branches'); }, isActive: currentView === 'branches' && selectedBrand === 'Yelo Pizza', viewId: 'brand-yelo' },
        { label: 'BBT Branches', onClick: () => { setSelectedBrand('BBT'); setCurrentView('branches'); }, isActive: currentView === 'branches' && selectedBrand === 'BBT', viewId: 'brand-bbt' },
        { label: 'Slice Branches', onClick: () => { setSelectedBrand('Slice'); setCurrentView('branches'); }, isActive: currentView === 'branches' && selectedBrand === 'Slice', viewId: 'brand-slice' },
        { label: 'Pattie Branches', onClick: () => { setSelectedBrand('Pattie Pattie'); setCurrentView('branches'); }, isActive: currentView === 'branches' && selectedBrand === 'Pattie Pattie', viewId: 'brand-pattie' },
        { label: 'Just Branches', onClick: () => { setSelectedBrand('Just C'); setCurrentView('branches'); }, isActive: currentView === 'branches' && selectedBrand === 'Just C', viewId: 'brand-just' },
        { label: 'Chili Branches', onClick: () => { setSelectedBrand('Chili pepper'); setCurrentView('branches'); }, isActive: currentView === 'branches' && selectedBrand === 'Chili pepper', viewId: 'brand-chili' },
        { label: 'Tabel Branches', onClick: () => { setSelectedBrand('Tabel'); setCurrentView('branches'); }, isActive: currentView === 'branches' && selectedBrand === 'Tabel', viewId: 'brand-tabel' },
        { label: 'Mishmash Branches', onClick: () => { setSelectedBrand('Mishmash'); setCurrentView('branches'); }, isActive: currentView === 'branches' && selectedBrand === 'Mishmash', viewId: 'brand-mishmash' },
      ],
    },
    {
      key: 'process',
      label: 'Process',
      icon: PlusCircle,
      items: [
        { label: 'New Order Process', onClick: () => setCurrentView('new-order'), isActive: currentView === 'new-order', viewId: 'proc-new' },
        { label: 'Follow Up Process', onClick: () => setCurrentView('follow-up'), isActive: currentView === 'follow-up', viewId: 'proc-follow' },
        { label: 'Offer', onClick: () => setCurrentView('offers'), isActive: currentView === 'offers', viewId: 'proc-offer' },
        { label: 'Complain Process', onClick: () => setCurrentView('complain'), isActive: currentView === 'complain', viewId: 'proc-complain' },
        { label: 'Complaint Status', onClick: () => setCurrentView('complaint-status'), isActive: currentView === 'complaint-status', viewId: 'proc-status' },
        { label: 'Additional', onClick: () => setCurrentView('additional'), isActive: currentView === 'additional', viewId: 'proc-additional' },
        { label: 'Special Requests', onClick: () => setCurrentView('special-requests'), isActive: currentView === 'special-requests', viewId: 'proc-special' },
      ],
    },
    {
      key: 'services',
      label: 'Services',
      icon: Beef,
      items: [
        { label: 'Meat Sources', onClick: () => setCurrentView('meat-sources'), isActive: currentView === 'meat-sources', viewId: 'serv-meat' },
        { label: 'Talabat And Keeta', onClick: () => setCurrentView('talabat-keeta'), isActive: currentView === 'talabat-keeta', viewId: 'serv-talabat' },
        { label: 'Kuwaiti Terms', onClick: () => setCurrentView('kuwaiti-terms'), isActive: currentView === 'kuwaiti-terms', viewId: 'serv-terms' },
      ],
    },
    {
      key: 'catering',
      label: 'Catering & Pre Order',
      icon: Calendar,
      items: [
        { label: 'Package (Catering)', onClick: () => setCurrentView('catering-packages'), isActive: currentView === 'catering-packages', viewId: 'cat-pkg' },
        { label: 'Pre Order', onClick: () => setCurrentView('pre-order'), isActive: currentView === 'pre-order', viewId: 'pre-order' },
        { label: 'Pre Order Pro', onClick: () => setCurrentView('pre-order-pro'), isActive: currentView === 'pre-order-pro', viewId: 'pre-order-pro' },
        { label: 'Remote Areas', onClick: () => setCurrentView('remote-areas'), isActive: currentView === 'remote-areas', viewId: 'remote-areas' },
      ],
    },
    {
      key: 'cancellation',
      label: 'Cancellation',
      icon: X,
      items: [
        { label: 'Steps', onClick: () => setCurrentView('cancellation'), isActive: currentView === 'cancellation', viewId: 'canc-steps' },
      ],
    },
    {
      key: 'contacts',
      label: 'Contacts',
      icon: Users,
      items: [
        { label: 'Shakir Contact', onClick: () => setCurrentView('shakir-contact'), isActive: currentView === 'shakir-contact', viewId: 'cont-shakir' },
        { label: 'Yelo Contact', onClick: () => setCurrentView('yelo-contact'), isActive: currentView === 'yelo-contact', viewId: 'cont-yelo' },
        { label: 'BBT Contact', onClick: () => setCurrentView('bbt-contact'), isActive: currentView === 'bbt-contact', viewId: 'cont-bbt' },
        { label: 'Mishmash Contact', onClick: () => setCurrentView('mishmash-contact'), isActive: currentView === 'mishmash-contact', viewId: 'cont-mishmash' },
        { label: 'Tabel Contact', onClick: () => setCurrentView('tabel-contact'), isActive: currentView === 'tabel-contact', viewId: 'cont-tabel' },
        { label: 'Users', onClick: () => setCurrentView('users-contact'), isActive: currentView === 'users-contact', viewId: 'cont-users' },
        { label: 'Employee Ex', onClick: () => setCurrentView('employee-ex-contact'), isActive: currentView === 'employee-ex-contact', viewId: 'cont-emp' },
      ],
    },
    {
      key: 'allergens',
      label: 'Allergens',
      icon: Warning,
      items: [
        { label: 'Yelo Allergens', onClick: () => { setSelectedAllergenBrand('yelo'); setCurrentView('allergens'); }, isActive: currentView === 'allergens' && selectedAllergenBrand === 'yelo', viewId: 'all-yelo' },
        { label: 'Slice Allergens', onClick: () => { setSelectedAllergenBrand('slice'); setCurrentView('allergens'); }, isActive: currentView === 'allergens' && selectedAllergenBrand === 'slice', viewId: 'all-slice' },
        { label: 'Chili Allergens', onClick: () => { setSelectedAllergenBrand('chili'); setCurrentView('allergens'); }, isActive: currentView === 'allergens' && selectedAllergenBrand === 'chili', viewId: 'all-chili' },
        { label: 'Pattie Allergens', onClick: () => { setSelectedAllergenBrand('pattie'); setCurrentView('allergens'); }, isActive: currentView === 'allergens' && selectedAllergenBrand === 'pattie', viewId: 'all-pattie' },
        { label: 'BBT Allergens', onClick: () => { setSelectedAllergenBrand('bbt'); setCurrentView('allergens'); }, isActive: currentView === 'allergens' && selectedAllergenBrand === 'bbt', viewId: 'all-bbt' },
        { label: 'Just Allergens', onClick: () => { setSelectedAllergenBrand('just'); setCurrentView('allergens'); }, isActive: currentView === 'allergens' && selectedAllergenBrand === 'just', viewId: 'all-just' },
        { label: 'Mishmash Allergens', onClick: () => { setSelectedAllergenBrand('mishmash'); setCurrentView('allergens'); }, isActive: currentView === 'allergens' && selectedAllergenBrand === 'mishmash', viewId: 'all-mishmash' },
      ],
    },
    {
      key: 'ingredients',
      label: 'Ingredients',
      icon: Beaker,
      items: [
        { label: 'Shakir Ingredients', onClick: () => { setSelectedIngerinesBrand('shakir'); setCurrentView('ingerines'); }, isActive: currentView === 'ingerines' && selectedIngerinesBrand === 'shakir', viewId: 'ing-shakir' },
        { label: 'Just Ingredients', onClick: () => { setSelectedIngerinesBrand('just'); setCurrentView('ingerines'); }, isActive: currentView === 'ingerines' && selectedIngerinesBrand === 'just', viewId: 'ing-just' },
        { label: 'Yelo SOP', onClick: () => { setSelectedIngerinesBrand('yelo-sop'); setCurrentView('ingerines'); }, isActive: currentView === 'ingerines' && selectedIngerinesBrand === 'yelo-sop', viewId: 'ing-yelo-sop' },
        { label: 'Chili Ingredients', onClick: () => { setSelectedIngerinesBrand('chili'); setCurrentView('ingerines'); }, isActive: currentView === 'ingerines' && selectedIngerinesBrand === 'chili', viewId: 'ing-chili' },
      ],
    },
  ];

  // Admin / role-based items rendered as a dropdown group
  const adminItems: MenuItem[] = [
    ...(user?.role === 'admin' ? [
      { label: 'Users', onClick: () => setCurrentView('user-mgmt' as ViewType), isActive: currentView === ('user-mgmt' as ViewType) },
      { label: 'Custom Cards', onClick: () => setCurrentView('custom-cards' as ViewType), isActive: currentView === ('custom-cards' as ViewType) },
      { label: 'Logs', onClick: () => setCurrentView('audit-logs' as ViewType), isActive: currentView === ('audit-logs' as ViewType) },
    ] : []),
    ...(user?.role === 'admin' || user?.role === 'leader' ? [
      { label: 'Analytics', onClick: () => setCurrentView('reports' as ViewType), isActive: currentView === ('reports' as ViewType) },
    ] : []),
  ];

  const isDashboardActive = currentView === 'branches' && !selectedBrand;

  return (
    <header className="sticky top-0 z-[80] bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-sm" ref={navRef}>
      <div className="max-w-[1920px] mx-auto flex items-center gap-2 h-[68px] px-3 lg:px-4">
        {/* Logo */}
        <button
          onClick={() => go(() => { setCurrentView('branches'); setSelectedBrand(null); })}
          className="flex items-center gap-2 flex-shrink-0"
        >
          <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center text-[#00965e] font-black text-lg shadow-lg shadow-green-100/30 dark:shadow-none border border-gray-100 dark:border-gray-700">
            W
          </div>
          <div className="hidden 2xl:block text-left leading-none">
            <h1 className="text-base font-black text-gray-900 dark:text-white tracking-tighter whitespace-nowrap">WASLA ENTERPRISE</h1>
            <span className="text-[10px] font-black text-[#00965e] uppercase tracking-widest">Swish Knowledge Base</span>
          </div>
        </button>

        {/* Search (compact icon on desktop) */}
        <button
          onClick={onSearchOpen}
          title="Search (Ctrl+K)"
          className="hidden lg:flex items-center justify-center w-9 h-9 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-600 transition-all border border-gray-100 dark:border-gray-800 flex-shrink-0"
        >
          <Search size={17} />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center justify-center gap-0 flex-1 min-w-0">
          {/* General Dashboard */}
          <button
            onClick={() => go(() => { setCurrentView('branches'); setSelectedBrand(null); })}
            className={`px-1.5 py-2 rounded-lg text-[13px] font-bold whitespace-nowrap transition-all ${
              isDashboardActive
                ? 'text-[#00965e] bg-[#00965e]/10'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Dashboard
          </button>

          {groups.map((group) => (
            <React.Fragment key={group.key}>
              <DesktopDropdown
                group={group}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
                go={go}
                pinnedViews={pinnedViews}
                togglePin={togglePin}
              />
            </React.Fragment>
          ))}

          {/* Task Management (direct link) */}
          <button
            onClick={() => go(() => setCurrentView('task'))}
            className={`px-1.5 py-2 rounded-lg text-[13px] font-bold whitespace-nowrap transition-all ${
              currentView === 'task'
                ? 'text-[#00965e] bg-[#00965e]/10'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Task
          </button>

          {/* Admin dropdown */}
          {adminItems.length > 0 && (
            <DesktopDropdown
              group={{ key: 'admin', label: isAdmin ? 'Admin' : user?.role === 'leader' ? 'Leader' : 'Management', icon: Settings, items: adminItems }}
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
              go={go}
              pinnedViews={pinnedViews}
              togglePin={togglePin}
            />
          )}
        </nav>

        {/* Spacer for tablet (search hidden but nav hidden too) */}
        <div className="flex-1 lg:hidden" />

        {/* Right actions */}
        <div className="flex items-center gap-0.5 flex-shrink-0">
          <button
            onClick={onSearchOpen}
            className="md:hidden p-2 rounded-xl text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            title="Search"
          >
            <Search size={20} />
          </button>

          <button
            onClick={onToggleDarkMode}
            className={`p-2 rounded-xl transition-colors ${isDarkMode ? 'text-blue-400 hover:bg-blue-500/10' : 'text-yellow-600 hover:bg-yellow-400/10'}`}
            title={isDarkMode ? 'Switch to Light' : 'Switch to Dark'}
          >
            {isDarkMode ? <Moon size={18} fill="currentColor" /> : <Sun size={18} />}
          </button>

          <button
            className="hidden sm:flex p-2 rounded-xl text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            title="العربية"
          >
            <Globe size={18} />
          </button>

          <button
            onClick={onLogout}
            className="p-2 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
            title="Logout"
          >
            <LogOut size={18} />
          </button>

          {/* User avatar */}
          <div className="hidden sm:flex items-center gap-2 pl-2 ml-1 border-l border-gray-100 dark:border-gray-800">
            <div className="w-9 h-9 rounded-full bg-gray-900 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-white font-bold text-sm">
              {user?.name?.[0] || 'U'}
            </div>
            <div className="hidden 2xl:block leading-none">
              <p className="text-[13px] font-black text-gray-900 dark:text-white tracking-tight">{user?.name}</p>
              <p className="text-[9px] font-bold text-gray-400 uppercase">{user?.role}</p>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => { setOpenMenu(null); isOpen ? onClose() : onOpen(); }}
            className="lg:hidden p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            title="Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Favorites bar (desktop) */}
      {pinnedViews.length > 0 && (
        <FavoritesBar
          pinnedViews={pinnedViews}
          togglePin={togglePin}
          go={go}
          currentView={currentView}
          selectedBrand={selectedBrand}
          selectedAllergenBrand={selectedAllergenBrand}
          selectedIngerinesBrand={selectedIngerinesBrand}
          selectedComplainBrand={selectedComplainBrand}
          setCurrentView={setCurrentView}
          setSelectedBrand={setSelectedBrand}
          setSelectedAllergenBrand={setSelectedAllergenBrand}
          setSelectedIngerinesBrand={setSelectedIngerinesBrand}
          setSelectedComplainBrand={setSelectedComplainBrand}
        />
      )}

      {/* Mobile menu panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900"
          >
            <div className="max-h-[70vh] overflow-y-auto custom-scrollbar px-4 py-4 space-y-1">
              <button
                onClick={() => go(() => { setCurrentView('branches'); setSelectedBrand(null); })}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-[14px] font-bold ${isDashboardActive ? 'bg-[#00965e]/10 text-[#00965e]' : 'text-gray-700 dark:text-gray-300'}`}
              >
                General Dashboard
              </button>

              {groups.map((group) => (
                <React.Fragment key={group.key}>
                  <MobileGroup group={group} openMenu={openMenu} setOpenMenu={setOpenMenu} go={go} />
                </React.Fragment>
              ))}

              <button
                onClick={() => go(() => setCurrentView('task'))}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-[14px] font-bold ${currentView === 'task' ? 'bg-[#00965e]/10 text-[#00965e]' : 'text-gray-700 dark:text-gray-300'}`}
              >
                Task Management
              </button>

              {adminItems.length > 0 && (
                <MobileGroup
                  group={{ key: 'admin', label: isAdmin ? 'Admin' : user?.role === 'leader' ? 'Leader' : 'Management', icon: Settings, items: adminItems }}
                  openMenu={openMenu}
                  setOpenMenu={setOpenMenu}
                  go={go}
                />
              )}

              <div className="flex items-center gap-2 pt-3 mt-2 border-t border-gray-100 dark:border-gray-800">
                <div className="w-9 h-9 rounded-full bg-gray-900 dark:bg-gray-800 flex items-center justify-center text-white font-bold text-sm">
                  {user?.name?.[0] || 'U'}
                </div>
                <div className="leading-none flex-1">
                  <p className="text-[13px] font-black text-gray-900 dark:text-white">{user?.name}</p>
                  <p className="text-[9px] font-bold text-gray-400 uppercase">{user?.role}</p>
                </div>
                <button onClick={onToggleDarkMode} className="p-2 rounded-xl text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800">
                  {isDarkMode ? <Moon size={18} fill="currentColor" /> : <Sun size={18} />}
                </button>
                <button onClick={onLogout} className="p-2 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20">
                  <LogOut size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ---- Desktop dropdown (fixed-positioned so it is never clipped by the
//      horizontally-scrollable nav container; dark themed panel) ----
function DesktopDropdown({
  group,
  openMenu,
  setOpenMenu,
  go,
  pinnedViews,
  togglePin,
}: {
  group: MenuGroup;
  openMenu: string | null;
  setOpenMenu: (v: string | null) => void;
  go: (fn: () => void) => void;
  pinnedViews: string[];
  togglePin: (view: string) => void;
}) {
  const hasActive = group.items.some((i) => i.isActive);
  const open = openMenu === group.key;
  const btnRef = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState<{ left: number; top: number }>({ left: 0, top: 0 });

  const openNow = () => {
    const el = btnRef.current;
    if (el) {
      const r = el.getBoundingClientRect();
      const PANEL_WIDTH = 256; // w-64
      const left = Math.max(8, Math.min(r.left, window.innerWidth - PANEL_WIDTH - 8));
      setPos({ left, top: r.bottom });
    }
    setOpenMenu(group.key);
  };

  return (
    <div
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <button
        ref={btnRef}
        onClick={() => (open ? setOpenMenu(null) : openNow())}
        className={`flex items-center gap-0.5 px-1.5 py-2 rounded-lg text-[13px] font-bold whitespace-nowrap transition-all ${
          hasActive || open
            ? 'text-[#00965e] bg-[#00965e]/10'
            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
        }`}
      >
        <span>{group.label}</span>
        <ChevronDown size={12} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.14 }}
            style={{ position: 'fixed', left: pos.left, top: pos.top }}
            className="w-64 origin-top bg-[#2b2f3b] rounded-2xl shadow-2xl ring-1 ring-white/10 py-2 z-[200]"
          >
            {group.items.map((item) => (
              <div key={item.viewId || item.label} className="group/item relative flex items-center px-2">
                <button
                  onClick={() => go(item.onClick)}
                  className={`flex-1 text-left px-4 py-2.5 rounded-xl text-[14px] font-semibold transition-colors ${
                    item.isActive
                      ? 'text-[#00d27a] bg-white/5'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
                {item.viewId && (
                  <button
                    onClick={(e) => { e.stopPropagation(); togglePin(item.viewId!); }}
                    className={`p-1.5 rounded-md transition-all ${
                      pinnedViews.includes(item.viewId)
                        ? 'text-yellow-400'
                        : 'text-gray-500 hover:text-yellow-400 opacity-0 group-hover/item:opacity-100'
                    }`}
                  >
                    <Star size={13} fill={pinnedViews.includes(item.viewId) ? 'currentColor' : 'none'} />
                  </button>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ---- Mobile collapsible group ----
function MobileGroup({
  group,
  openMenu,
  setOpenMenu,
  go,
}: {
  group: MenuGroup;
  openMenu: string | null;
  setOpenMenu: (v: string | null) => void;
  go: (fn: () => void) => void;
}) {
  const open = openMenu === group.key;
  const hasActive = group.items.some((i) => i.isActive);
  return (
    <div>
      <button
        onClick={() => setOpenMenu(open ? null : group.key)}
        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-[14px] font-bold ${hasActive ? 'text-[#00965e]' : 'text-gray-700 dark:text-gray-300'}`}
      >
        <span className="flex items-center gap-2">
          <group.icon size={16} className={hasActive ? 'text-[#00965e]' : 'text-gray-400'} />
          {group.label}
        </span>
        <ChevronDown size={15} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden ml-4 pl-3 border-l border-gray-100 dark:border-gray-800"
          >
            {group.items.map((item) => (
              <button
                key={item.viewId || item.label}
                onClick={() => go(item.onClick)}
                className={`w-full text-left px-3 py-2 rounded-xl text-[13px] font-bold ${item.isActive ? 'bg-[#00965e]/10 text-[#00965e]' : 'text-gray-500 dark:text-gray-400'}`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ---- Favorites quick-access bar ----
function FavoritesBar({
  pinnedViews,
  togglePin,
  go,
  currentView,
  selectedBrand,
  selectedAllergenBrand,
  selectedIngerinesBrand,
  selectedComplainBrand,
  setCurrentView,
  setSelectedBrand,
  setSelectedAllergenBrand,
  setSelectedIngerinesBrand,
  setSelectedComplainBrand,
}: {
  pinnedViews: string[];
  togglePin: (view: string) => void;
  go: (fn: () => void) => void;
  currentView: ViewType;
  selectedBrand: string | null;
  selectedAllergenBrand: string;
  selectedIngerinesBrand: string;
  selectedComplainBrand: string | null;
  setCurrentView: (v: ViewType) => void;
  setSelectedBrand: (b: string | null) => void;
  setSelectedAllergenBrand: (b: any) => void;
  setSelectedIngerinesBrand: (b: string) => void;
  setSelectedComplainBrand: (b: string | null) => void;
}) {
  return (
    <div className="hidden lg:block border-t border-gray-50 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-[1800px] mx-auto flex items-center gap-2 px-6 py-1.5 overflow-x-auto custom-scrollbar">
        <span className="flex items-center gap-1 text-[10px] font-black text-yellow-500 uppercase tracking-widest flex-shrink-0">
          <Star size={12} fill="currentColor" /> Favorites
        </span>
        {pinnedViews.map((viewId) => {
          const item = ALL_NAV_ITEMS.find((i) => i.id === viewId);
          if (!item) return null;
          const isActive =
            currentView === item.view &&
            (item.subBrand
              ? selectedBrand === item.subBrand ||
                selectedAllergenBrand === item.subBrand ||
                selectedIngerinesBrand === item.subBrand ||
                selectedComplainBrand === item.subBrand
              : true);
          return (
            <button
              key={viewId}
              onClick={() =>
                go(() =>
                  (item as any).action(
                    setCurrentView,
                    setSelectedBrand,
                    setSelectedAllergenBrand,
                    setSelectedIngerinesBrand,
                    setSelectedComplainBrand,
                  ),
                )
              }
              className={`text-[12px] font-bold px-2.5 py-1 rounded-lg whitespace-nowrap transition-all flex-shrink-0 ${
                isActive ? 'bg-[#00965e]/10 text-[#00965e]' : 'text-gray-500 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-800'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

const ALL_NAV_ITEMS = [
  { id: 'brand-shakir', label: 'Shakir Branches', view: 'branches', subBrand: 'Shawarma Shakir', action: (sV: any, sB: any) => { sB('Shawarma Shakir'); sV('branches'); } },
  { id: 'brand-yelo', label: 'Yelo Branches', view: 'branches', subBrand: 'Yelo Pizza', action: (sV: any, sB: any) => { sB('Yelo Pizza'); sV('branches'); } },
  { id: 'brand-bbt', label: 'BBT Branches', view: 'branches', subBrand: 'BBT', action: (sV: any, sB: any) => { sB('BBT'); sV('branches'); } },
  { id: 'brand-slice', label: 'Slice Branches', view: 'branches', subBrand: 'Slice', action: (sV: any, sB: any) => { sB('Slice'); sV('branches'); } },
  { id: 'brand-pattie', label: 'Pattie Branches', view: 'branches', subBrand: 'Pattie Pattie', action: (sV: any, sB: any) => { sB('Pattie Pattie'); sV('branches'); } },
  { id: 'brand-just', label: 'Just Branches', view: 'branches', subBrand: 'Just C', action: (sV: any, sB: any) => { sB('Just C'); sV('branches'); } },
  { id: 'brand-chili', label: 'Chili Branches', view: 'branches', subBrand: 'Chili pepper', action: (sV: any, sB: any) => { sB('Chili pepper'); sV('branches'); } },
  { id: 'brand-tabel', label: 'Tabel Branches', view: 'branches', subBrand: 'Tabel', action: (sV: any, sB: any) => { sB('Tabel'); sV('branches'); } },
  { id: 'brand-mishmash', label: 'Mishmash Branches', view: 'branches', subBrand: 'Mishmash', action: (sV: any, sB: any) => { sB('Mishmash'); sV('branches'); } },
  { id: 'proc-new', label: 'New Order Process', view: 'new-order', action: (sV: any) => sV('new-order') },
  { id: 'proc-follow', label: 'Follow Up Process', view: 'follow-up', action: (sV: any) => sV('follow-up') },
  { id: 'proc-offer', label: 'Offers', view: 'offers', action: (sV: any) => sV('offers') },
  { id: 'proc-complain', label: 'Complain Process', view: 'complain', action: (sV: any, sB: any, sA: any, sI: any, sCB: any) => { sCB(null); sV('complain'); } },
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
  { id: 'cont-mishmash', label: 'Mishmash Contacts', view: 'mishmash-contact', action: (sV: any) => sV('mishmash-contact') },
  { id: 'cont-tabel', label: 'Tabel Contacts', view: 'tabel-contact', action: (sV: any) => sV('tabel-contact') },
  { id: 'cont-users', label: 'Users System Access', view: 'users-contact', action: (sV: any) => sV('users-contact') },
  { id: 'cont-emp', label: 'Employee Extensions', view: 'employee-ex-contact', action: (sV: any) => sV('employee-ex-contact') },
  { id: 'all-yelo', label: 'Yelo Allergens', view: 'allergens', subBrand: 'yelo', action: (sV: any, sB: any, sA: any) => { sA('yelo'); sV('allergens'); } },
  { id: 'all-slice', label: 'Slice Allergens', view: 'allergens', subBrand: 'slice', action: (sV: any, sB: any, sA: any) => { sA('slice'); sV('allergens'); } },
  { id: 'all-chili', label: 'Chili Allergens', view: 'allergens', subBrand: 'chili', action: (sV: any, sB: any, sA: any) => { sA('chili'); sV('allergens'); } },
  { id: 'all-pattie', label: 'Pattie Allergens', view: 'allergens', subBrand: 'pattie', action: (sV: any, sB: any, sA: any) => { sA('pattie'); sV('allergens'); } },
  { id: 'all-bbt', label: 'BBT Allergens', view: 'allergens', subBrand: 'bbt', action: (sV: any, sB: any, sA: any) => { sA('bbt'); sV('allergens'); } },
  { id: 'all-just', label: 'Just Allergens', view: 'allergens', subBrand: 'just', action: (sV: any, sB: any, sA: any) => { sA('just'); sV('allergens'); } },
  { id: 'all-mishmash', label: 'Mishmash Allergens', view: 'allergens', subBrand: 'mishmash', action: (sV: any, sB: any, sA: any) => { sA('mishmash'); sV('allergens'); } },
  { id: 'ing-shakir', label: 'Shakir Ingredients', view: 'ingerines', subBrand: 'shakir', action: (sV: any, sB: any, sA: any, sI: any) => { sI('shakir'); sV('ingerines'); } },
  { id: 'ing-just', label: 'Just Ingredients', view: 'ingerines', subBrand: 'just', action: (sV: any, sB: any, sA: any, sI: any) => { sI('just'); sV('ingerines'); } },
  { id: 'ing-yelo-sop', label: 'Yelo SOP', view: 'ingerines', subBrand: 'yelo-sop', action: (sV: any, sB: any, sA: any, sI: any) => { sI('yelo-sop'); sV('ingerines'); } },
  { id: 'ing-chili', label: 'Chili Ingredients', view: 'ingerines', subBrand: 'chili', action: (sV: any, sB: any, sA: any, sI: any) => { sI('chili'); sV('ingerines'); } },
];
