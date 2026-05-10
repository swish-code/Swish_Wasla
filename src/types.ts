export interface BranchData {
  id: string | number;
  brand: string;
  branchName: string;
  address: string;
  delivery: string | boolean;
  pickup: string | boolean;
  dineIn: string | boolean;
  workingHours: string;
  weekendWorkingHours?: string;
  tgo: string | boolean;
  tmp: string | boolean;
  deliveroo: string | boolean;
  car: string | boolean;
  vthru: string | boolean;
  website: string | boolean;
  cari: string | boolean;
  jahez: string | boolean;
  callCenter: string | boolean;
  keeta: string | boolean;
  lastOrderDelivery?: string;
  lastOrderPickup?: string;
  customData?: string; // JSON string of Record<string, string>
}

export interface BranchColumn {
  id: number;
  name: string;
  label: string;
  createdAt: string;
}

export type Brand = 'Shawarma Shakir' | 'Yelo Pizza' | 'BBT' | 'Slice' | 'Pattie Pattie' | 'Just C' | 'Chili pepper';

export type UserRole = 'admin' | 'leader' | 'manager' | 'employee';

export interface User {
  id: number;
  email: string;
  name: string;
  role: UserRole;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export type ViewType = 'branches' | 'new-order' | 'follow-up' | 'complain' | 'complaint-status' | 'additional' | 'special-requests' | 'meat-sources' | 'talabat-keeta' | 'kuwaiti-terms' | 'catering-packages' | 'pre-order' | 'pre-order-pro' | 'remote-areas' | 'cancellation' | 'shakir-contact' | 'yelo-contact' | 'bbt-contact' | 'mishmash-contact' | 'tabel-contact' | 'users-contact' | 'extension-contact' | 'employee-ex-contact' | 'allergens' | 'ingerines' | 'task' | 'login' | 'user-mgmt' | 'reports' | 'audit-logs' | 'custom-cards';

export interface CustomCard {
  id: number;
  title: string;
  content: string;
  page: string;
  color: string;
  isVisible: boolean;
  createdAt: string;
}

export interface Log {
  id: number;
  userId: number | null;
  userName: string | null;
  action: string;
  details: string | null;
  createdAt: string;
}

export interface RequestItem {
  id: number;
  userId: number;
  userName: string;
  title: string;
  details: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}

export interface ProcessContent {
  title: string;
  icon: string;
  script: string[];
}
