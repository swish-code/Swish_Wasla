import type { BranchData } from './types.ts';

export const BRANDS = [
  'Shawarma Shakir',
  'Yelo Pizza',
  'BBT',
  'Slice',
  'Pattie Pattie',
  'Just C',
  'Chili pepper'
] as const;

export const BRANCH_DATA: BranchData[] = ([
  // Shawarma Shakir
  {
    id: 1,
    brand: 'Shawarma Shakir',
    branchName: 'Hawally',
    address: 'Hawally - Block 4 - Al Muthanna St',
    delivery: 'Yes',
    pickup: 'Yes',
    dineIn: 'No',
    workingHours: '24 Hours',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'No',
    car: 'Yes',
    vthru: 'Yes',
    website: 'Yes',
    cari: 'No',
    jahez: 'No',
    callCenter: 'Yes',
    keeta: 'Yes',
    lastOrderDelivery: '24 Hours',
    lastOrderPickup: '24 Hours'
  },
  {
    id: 'ss-2',
    brand: 'Shawarma Shakir',
    branchName: 'Ardiya',
    address: 'Ardiya - Block 4',
    delivery: 'Yes',
    pickup: 'Yes',
    dineIn: 'No',
    workingHours: '24 Hours',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'No',
    car: 'Yes',
    vthru: 'Yes',
    website: 'Yes',
    cari: 'No',
    jahez: 'No',
    callCenter: 'Yes',
    keeta: 'Yes',
    lastOrderDelivery: '24 Hours',
    lastOrderPickup: '24 Hours'
  },
  {
    id: 'ss-3',
    brand: 'Shawarma Shakir',
    branchName: 'Jahra',
    address: 'Jahra - Block 3',
    delivery: 'Yes',
    pickup: 'Yes',
    dineIn: 'No',
    workingHours: '24 Hours',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'No',
    car: 'Yes',
    vthru: 'Yes',
    website: 'Yes',
    cari: 'No',
    jahez: 'No',
    callCenter: 'Yes',
    keeta: 'Yes',
    lastOrderDelivery: '24 Hours',
    lastOrderPickup: '24 Hours'
  },
  {
    id: 'ss-4',
    brand: 'Shawarma Shakir',
    branchName: 'Egaila',
    address: 'Egaila - Block 5',
    delivery: 'Yes',
    pickup: 'Yes',
    dineIn: 'No',
    workingHours: '24 Hours',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'No',
    car: 'Yes',
    vthru: 'Yes',
    website: 'Yes',
    cari: 'No',
    jahez: 'No',
    callCenter: 'Yes',
    keeta: 'Yes',
    lastOrderDelivery: '24 Hours',
    lastOrderPickup: '24 Hours'
  },
  {
    id: 'ss-5',
    brand: 'Shawarma Shakir',
    branchName: 'Al-Rai',
    address: 'Al Rai',
    delivery: 'Yes',
    pickup: 'Yes',
    dineIn: 'No',
    workingHours: '12:00 PM - 4:00 AM',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'No',
    car: 'Yes',
    vthru: 'Yes',
    website: 'Yes',
    cari: 'No',
    jahez: 'No',
    callCenter: 'Yes',
    keeta: 'Yes',
    lastOrderDelivery: '2:30 AM',
    lastOrderPickup: '4:00 AM'
  },
  {
    id: 'ss-6',
    brand: 'Shawarma Shakir',
    branchName: 'Al-Qurain',
    address: 'Qurain',
    delivery: 'Yes',
    pickup: 'Yes',
    dineIn: 'No',
    workingHours: '12:00 PM - 4:00 AM',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'No',
    car: 'Yes',
    vthru: 'Yes',
    website: 'Yes',
    cari: 'No',
    jahez: 'No',
    callCenter: 'Yes',
    keeta: 'Yes',
    lastOrderDelivery: '2:30 AM',
    lastOrderPickup: '4:00 AM'
  },
  {
    id: 'ss-7',
    brand: 'Shawarma Shakir',
    branchName: 'Bayan',
    address: 'Bayan - Block 2 - Street 13',
    delivery: 'Yes',
    pickup: 'Yes',
    dineIn: 'No',
    workingHours: '12:00 PM - 1:30 AM',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'No',
    car: 'Yes',
    vthru: 'Yes',
    website: 'Yes',
    cari: 'No',
    jahez: 'No',
    callCenter: 'Yes',
    keeta: 'Yes',
    lastOrderDelivery: '1:30 AM',
    lastOrderPickup: '1:30 AM'
  },
  {
    id: 'ss-8',
    brand: 'Shawarma Shakir',
    branchName: 'City',
    address: 'Kuwait City',
    delivery: 'Yes',
    pickup: 'Yes',
    dineIn: 'No',
    workingHours: '11:30 AM - 1:30 AM',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'No',
    car: 'Yes',
    vthru: 'Yes',
    website: 'Yes',
    cari: 'No',
    jahez: 'No',
    callCenter: 'Yes',
    keeta: 'Yes',
    lastOrderDelivery: '1:30 AM',
    lastOrderPickup: '1:30 AM'
  },
  {
    id: 'ss-9',
    brand: 'Shawarma Shakir',
    branchName: 'Salmiya',
    address: 'Salmiya',
    delivery: 'Yes',
    pickup: 'Yes',
    dineIn: 'YES',
    workingHours: '11:00 AM - 4:00 AM',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'No',
    car: 'Yes',
    vthru: 'Yes',
    website: 'Yes',
    cari: 'No',
    jahez: 'No',
    callCenter: 'Yes',
    keeta: 'Yes',
    lastOrderDelivery: '2:30 AM',
    lastOrderPickup: '4:00 AM'
  },
  {
    id: 'ss-10',
    brand: 'Shawarma Shakir',
    branchName: 'Sabah Al Ahmad',
    address: 'Sabah Al Ahmad',
    delivery: 'Yes',
    pickup: 'Yes',
    dineIn: 'No',
    workingHours: '12:00 PM - 4:30 AM',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'No',
    car: 'No',
    vthru: 'No',
    website: 'Yes',
    cari: 'No',
    jahez: 'No',
    callCenter: 'Yes',
    keeta: 'Yes',
    lastOrderDelivery: '4:30 AM',
    lastOrderPickup: '4:30 AM'
  },

  // Yelo Pizza
  {
    brand: 'Yelo Pizza',
    branchName: 'Adailiya',
    address: 'Adailiya Block 3 Street Abu Al Aswad Al Duail Coop 3',
    delivery: 'Yes',
    pickup: 'Yes',
    dineIn: 'YES Outside',
    workingHours: '12:00 PM - 1:30 AM',
    weekendWorkingHours: '4:00 PM - 4:00 AM',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'Yes',
    car: 'Yes',
    vthru: 'Yes',
    website: 'Yes',
    cari: 'No Untll Further time',
    jahez: 'No',
    callCenter: 'Yes',
    lastOrderDelivery: '12:00 PM - 1:30 AM',
    lastOrderPickup: '12:00 PM - 1:30 AM'
  },
  {
    brand: 'Yelo Pizza',
    branchName: 'Khairan',
    address: 'Khairan - Road 278 - OIA Khairan',
    delivery: 'Yes',
    pickup: 'Yes',
    dineIn: 'YES Outside',
    workingHours: '12:00 PM - 4:00 AM',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'Yes',
    car: 'No',
    vthru: 'No',
    website: 'Yes Only Pickup',
    cari: 'No Untll Further time',
    jahez: 'Yes',
    callCenter: 'No',
    lastOrderDelivery: '12:00 PM - 4:00 AM',
    lastOrderPickup: '12:00 PM - 1:30 AM'
  },
  {
    brand: 'Yelo Pizza',
    branchName: 'Jaber Al-Ahmad',
    address: 'Jaber Al-Ahmad - Block 6 - Co-op',
    delivery: 'Yes',
    pickup: 'Yes',
    dineIn: 'YES Outside',
    workingHours: '24 Hours',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'Yes',
    car: 'No',
    vthru: 'No',
    website: 'Yes',
    cari: 'No Untll Further time',
    jahez: 'Yes',
    callCenter: 'Yes',
    lastOrderDelivery: '24H',
    lastOrderPickup: '24H'
  },
  {
    brand: 'Yelo Pizza',
    branchName: 'Sabah Al-Salem',
    address: 'Sabah Al-Salem - Block 2 - Street Mohamed Bin Hamada Al-Ajmi',
    delivery: 'Yes',
    pickup: 'Yes',
    dineIn: 'YES Outside',
    workingHours: '24 Hours',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'Yes',
    car: 'No',
    vthru: 'No',
    website: 'Yes',
    cari: 'No Untll Further time',
    jahez: 'Yes',
    callCenter: 'Yes',
    lastOrderDelivery: '24H',
    lastOrderPickup: '24H'
  },
  {
    brand: 'Yelo Pizza',
    branchName: 'Vibes',
    address: 'Abu Hassaniya -Vibes Mall - Road 30 - Next to Al Dahiya Juice',
    delivery: 'Yes',
    pickup: 'Yes',
    dineIn: 'Yes',
    workingHours: '12:00 PM - 1:30 AM',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'Yes',
    car: 'No',
    vthru: 'No',
    website: 'Yes',
    cari: 'No Untll Further time',
    jahez: 'Yes',
    callCenter: 'Yes',
    lastOrderDelivery: '12:00 PM - 1:30 AM',
    lastOrderPickup: '12:00 PM - 1:30 AM'
  },
  {
    brand: 'Yelo Pizza',
    branchName: 'Qortuba',
    address: 'Qortuba Block 5 Qortuba Mall',
    delivery: 'Yes',
    pickup: 'Yes',
    dineIn: 'No',
    workingHours: '24 Hours',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'Yes',
    car: 'No',
    vthru: 'No',
    website: 'Yes',
    cari: 'No Untll Further time',
    jahez: 'Yes',
    callCenter: 'Yes',
    lastOrderDelivery: '24H',
    lastOrderPickup: '24H'
  },
  {
    brand: 'Yelo Pizza',
    branchName: 'Dahiya Abdulla Salem',
    address: 'Dahiya abdulla salem block 3 beside dahiya Co Op and subway',
    delivery: 'Yes',
    pickup: 'Yes',
    dineIn: 'No',
    workingHours: '12:00 PM - 1:30 AM',
    weekendWorkingHours: '4:00 PM - 4:00 AM',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'Yes',
    car: 'No',
    vthru: 'Yes',
    website: 'Yes',
    cari: 'No Untll Further time',
    jahez: 'Yes',
    callCenter: 'Yes',
    lastOrderDelivery: '12:00 PM - 1:30 AM',
    lastOrderPickup: '12:00 PM - 1:30 AM'
  },
  {
    brand: 'Yelo Pizza',
    branchName: 'Fahaheel',
    address: 'Fahaheel - Block 4 - Street Mohamed Abdulla Al Qutaibi',
    delivery: 'Yes',
    pickup: 'Yes',
    dineIn: 'No',
    workingHours: '24 Hours',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'Yes',
    car: 'No',
    vthru: 'Yes',
    website: 'Yes',
    cari: 'No Untll Further time',
    jahez: 'Yes',
    callCenter: 'Yes',
    lastOrderDelivery: '3:00 AM',
    lastOrderPickup: '4:00 AM'
  },
  {
    brand: 'Yelo Pizza',
    branchName: 'Jleeb Al-Shuyoukh',
    address: 'Jleeb-Al-Shuyoukh - Block 1 - Street 10',
    delivery: 'Yes',
    pickup: 'Yes',
    dineIn: 'No',
    workingHours: '12:00 PM - 1:30 AM',
    weekendWorkingHours: '4:00 PM - 4:00 AM',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'Yes',
    car: 'No',
    vthru: 'Yes',
    website: 'Yes',
    cari: 'No Untll Further time',
    jahez: 'Yes',
    callCenter: 'Yes',
    lastOrderDelivery: '12:00 PM - 1:30 AM',
    lastOrderPickup: '12:00 PM - 1:30 AM'
  },
  {
    brand: 'Yelo Pizza',
    branchName: 'Egaila',
    address: 'Egaila - Block 5 - Al Ghous St - Beside Dalal Mall',
    delivery: 'Yes',
    pickup: 'Yes',
    dineIn: 'No',
    workingHours: '24 Hours',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'Yes',
    car: 'No',
    vthru: 'Yes',
    website: 'Yes',
    cari: 'No Untll Further time',
    jahez: 'Yes',
    callCenter: 'Yes',
    lastOrderDelivery: '24H',
    lastOrderPickup: '24H'
  },
  {
    brand: 'Yelo Pizza',
    branchName: 'Salmiya',
    address: 'Salmiya - Block 2 - Street 2',
    delivery: 'Yes',
    pickup: 'Yes',
    dineIn: 'No',
    workingHours: '12:00 PM - 4:00 AM',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'Yes',
    car: 'No',
    vthru: 'Yes',
    website: 'Yes',
    cari: 'No Untll Further time',
    jahez: 'Yes',
    callCenter: 'Yes',
    lastOrderDelivery: '12:00 PM - 4:00 AM',
    lastOrderPickup: '12:00 PM - 1:30 AM'
  },
  {
    brand: 'Yelo Pizza',
    branchName: 'Jabriya (New)',
    address: 'Jabriya - Block 1B - St 9 - Yelo Pizza',
    delivery: 'Yes',
    pickup: 'Yes',
    dineIn: 'No',
    workingHours: '12:00 PM - 4:00 AM',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'Yes',
    car: 'No',
    vthru: 'Yes',
    website: 'Yes',
    cari: 'No Untll Further time',
    jahez: 'Yes',
    callCenter: 'Yes',
    lastOrderDelivery: '12:00 PM - 4:00 AM',
    lastOrderPickup: '12:00 PM - 1:30 AM'
  },
  {
    brand: 'Yelo Pizza',
    branchName: 'Ishbiliya (New)',
    address: 'Ishbiliya - Block 3 - 315 St - Yelo Pizza',
    delivery: 'Yes',
    pickup: 'Yes',
    dineIn: 'No',
    workingHours: '12:00 PM - 4:00 AM',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'Yes',
    car: 'No',
    vthru: 'Yes',
    website: 'Yes',
    cari: 'No Untll Further time',
    jahez: 'Yes',
    callCenter: 'Yes',
    lastOrderDelivery: '12:00 PM - 4:00 AM',
    lastOrderPickup: '12:00 PM - 1:30 AM'
  },
  {
    brand: 'Yelo Pizza',
    branchName: 'Sabah Al Ahmad (New)',
    address: 'Sabah Al Ahmad - Block 6 - Street 20 - Bldg 20',
    delivery: 'Yes',
    pickup: 'Yes',
    dineIn: 'No',
    workingHours: '24 Hours',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'Yes',
    car: 'No',
    vthru: 'No',
    website: 'Yes only Pick up',
    cari: 'No Untll Further time',
    jahez: 'Yes',
    callCenter: 'Yes only Pick up',
    lastOrderDelivery: '3:00 AM',
    lastOrderPickup: '4:00 PM'
  },
  {
    brand: 'Yelo Pizza',
    branchName: 'Ardiya',
    address: 'Adriya Herfahey Block 2 Mohamed Nazal Al Me3seb Behinde Dandosah',
    delivery: 'Yes',
    pickup: 'Yes',
    dineIn: 'No',
    workingHours: '24 Hours',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'Yes',
    car: 'No',
    vthru: 'No',
    website: 'Yes',
    cari: 'No Untll Further time',
    jahez: 'Yes',
    callCenter: 'Yes',
    lastOrderDelivery: '24H',
    lastOrderPickup: '24H'
  },
  {
    brand: 'Yelo Pizza',
    branchName: 'Midan Hawally',
    address: 'Salmiya - Block 11 - Hmoud Al-Nasser St - Building 35 - Yelo! Pizza',
    delivery: 'Yes',
    pickup: 'Yes',
    dineIn: 'No',
    workingHours: '24 Hours',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'Yes',
    car: 'No',
    vthru: 'No',
    website: 'Yes',
    cari: 'No Untll Further time',
    jahez: 'Yes',
    callCenter: 'Yes',
    lastOrderDelivery: '24H',
    lastOrderPickup: '24H'
  },
  {
    brand: 'Yelo Pizza',
    branchName: 'Qurain',
    address: 'Same Building Of Mubarak Al-Kabeer and Al-Qurain Co-op',
    delivery: 'Yes',
    pickup: 'Yes',
    dineIn: 'No',
    workingHours: '12:00 PM - 4:00 AM',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'Yes',
    car: 'No',
    vthru: 'No',
    website: 'Yes',
    cari: 'No Untll Further time',
    jahez: 'Yes',
    callCenter: 'Yes',
    lastOrderDelivery: '12:00 PM - 4:00 AM',
    lastOrderPickup: '12:00 PM - 1:30 AM'
  },
  {
    brand: 'Yelo Pizza',
    branchName: 'Jahra',
    address: 'Kitchen',
    delivery: 'Yes',
    pickup: 'No',
    dineIn: 'No',
    workingHours: '11:30 AM - 3:30 AM',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'Yes',
    car: 'No',
    vthru: 'No',
    website: 'Yes',
    cari: 'No Untll Further time',
    jahez: 'Yes',
    callCenter: 'Yes',
    lastOrderDelivery: '11:30 AM - 3:30 AM',
    lastOrderPickup: 'No'
  },
  {
    brand: 'Yelo Pizza',
    branchName: 'Salwa',
    address: 'Kitchen',
    delivery: 'Yes',
    pickup: 'No',
    dineIn: 'No',
    workingHours: '12:00 PM - 1:30 AM',
    weekendWorkingHours: '4:00 PM - 4:00 AM',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'Yes',
    car: 'No',
    vthru: 'No',
    website: 'Yes',
    cari: 'No Untll Further time',
    jahez: 'Yes',
    callCenter: 'Yes',
    lastOrderDelivery: '12:00 PM - 1:30 AM',
    lastOrderPickup: 'No'
  },
  {
    brand: 'Yelo Pizza',
    branchName: 'Zahra',
    address: 'Zahra - Block 8 - Street 829 - Zahra Co-op Next to Naif',
    delivery: 'Yes',
    pickup: 'Yes',
    dineIn: 'No',
    workingHours: '12:00 AM - 3:00 AM',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'Yes',
    car: 'No',
    vthru: 'No',
    website: 'Yes',
    cari: 'No Untll Further time',
    jahez: 'Yes',
    callCenter: 'Yes',
    lastOrderDelivery: '12:00 PM - 3:00 AM',
    lastOrderPickup: '12:00 PM - 1:30 AM'
  },
  {
    brand: 'Yelo Pizza',
    branchName: 'Andalous',
    address: 'https://www.google.com/maps?q=29.3013928,47.8836207&z=17&hl=en',
    delivery: 'Yes',
    pickup: 'No',
    dineIn: 'No',
    workingHours: '12:00 PM - 1:00 AM',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'Yes',
    car: 'No',
    vthru: 'No',
    website: 'Yes',
    cari: 'No Untll Further time',
    jahez: 'Yes',
    callCenter: 'Yes',
    lastOrderDelivery: '12:00 PM - 1:00 AM',
    lastOrderPickup: '12:00 PM - 1:00 AM'
  },

  // BBT
  {
    brand: 'BBT',
    branchName: 'Shamiya',
    address: 'Shamiya block 9 Street 90 beside small Co Op',
    delivery: 'Yes',
    pickup: 'Yes',
    dineIn: '12:00 PM Till 12:00 AM',
    workingHours: '12:00 PM Till 1:30 AM',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'No',
    car: 'Yes',
    vthru: 'No',
    website: 'Yes',
    cari: 'No Until Further time',
    jahez: 'No',
    callCenter: 'Yes',
    keeta: 'Yes',
    lastOrderDelivery: '12:00 PM Till 1:30 AM',
    lastOrderPickup: '12:00 PM Till 12:00 AM'
  },
  {
    brand: 'BBT',
    branchName: 'Hilltop',
    address: 'Kuwait City Street 141',
    delivery: 'Yes',
    pickup: 'Yes',
    dineIn: '12:00 PM Till 1:30 AM',
    workingHours: '12:00 PM Till 1:30 AM',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'No',
    car: 'Yes',
    vthru: 'No',
    website: 'Yes',
    cari: 'No Until Further time',
    jahez: 'No',
    callCenter: 'Yes',
    keeta: 'Yes',
    lastOrderDelivery: '12:00 PM Till 1:30 AM',
    lastOrderPickup: '12:00 PM Till 1:30 AM'
  },
  {
    brand: 'BBT',
    branchName: 'Bayan',
    address: 'Bayan - Block 2 - Street 13',
    delivery: 'Yes',
    pickup: 'Yes',
    dineIn: '1:00 PM Till 1:30 AM',
    workingHours: '1:00 PM Till 1:30 AM',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'No',
    car: 'No',
    vthru: 'No',
    website: 'Yes',
    cari: 'No Until Further time',
    jahez: 'No',
    callCenter: 'Yes',
    keeta: 'Yes',
    lastOrderDelivery: '1:00 PM Till 1:30 AM',
    lastOrderPickup: '1:00 PM Till 1:30 AM'
  },
  {
    brand: 'BBT',
    branchName: 'Yard (Vibes)',
    address: 'Fnaitees - Block 5 Yard Mall',
    delivery: 'Yes',
    pickup: 'N/A',
    dineIn: 'N/A',
    workingHours: '24 Hours',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'No',
    car: 'No',
    vthru: 'No',
    website: 'Yes',
    cari: 'No Until Further time',
    jahez: 'No',
    callCenter: 'Yes',
    keeta: 'Yes',
    lastOrderDelivery: '24 Hours',
    lastOrderPickup: 'N/A'
  },
  {
    brand: 'BBT',
    branchName: 'Salmiya',
    address: 'Shamiya block 9 Street 90 beside small Co Op',
    delivery: 'Yes',
    pickup: 'N/A',
    dineIn: 'N/A',
    workingHours: '12:00 PM Till 1:30 AM',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'No',
    car: 'No',
    vthru: 'No',
    website: 'Yes',
    cari: 'No Until Further time',
    jahez: 'No',
    callCenter: 'Yes',
    keeta: 'Yes',
    lastOrderDelivery: '12:00 PM Till 1:30 AM',
    lastOrderPickup: 'N/A'
  },
  {
    brand: 'BBT',
    branchName: 'Adriya',
    address: 'Ardiya 6 - Block 2 - Street 104',
    delivery: 'Yes',
    pickup: 'N/A',
    dineIn: 'N/A',
    workingHours: '24 Hours',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'No',
    car: 'No',
    vthru: 'No',
    website: 'Yes',
    cari: 'No Until Further time',
    jahez: 'No',
    callCenter: 'Yes',
    keeta: 'Yes',
    lastOrderDelivery: '24 Hours',
    lastOrderPickup: 'N/A'
  },
  {
    brand: 'BBT',
    branchName: 'Saad AlAbdallah',
    address: 'Jahra - Saad AlAbdallah - Block 8 - Street 24',
    delivery: 'Yes',
    pickup: 'N/A',
    dineIn: 'N/A',
    workingHours: '12:00 PM Till 4:30 AM',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'No',
    car: 'No',
    vthru: 'No',
    website: 'Yes',
    cari: 'No Until Further time',
    jahez: 'No',
    callCenter: 'Yes',
    keeta: 'Yes',
    lastOrderDelivery: '12:00 PM Till 4:30 AM',
    lastOrderPickup: 'N/A'
  },
  {
    brand: 'BBT',
    branchName: 'Adailiya',
    address: 'Al-Adailiya – Block 3 – Abu Al-Aswad Al-Du’ali Street - Co-op Branch 3',
    delivery: 'Yes',
    pickup: 'Yes',
    dineIn: '24 Hours',
    workingHours: '24 Hours',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'No',
    car: 'Yes',
    vthru: 'No',
    website: 'Yes',
    cari: 'No Until Further time',
    jahez: 'No',
    callCenter: 'Yes',
    keeta: 'Yes',
    lastOrderDelivery: '24 Hours',
    lastOrderPickup: '24 Hours'
  },
  {
    brand: 'BBT',
    branchName: 'Shuhada',
    address: 'Shuhada - Block 4 - Street Sulieman Allahaib',
    delivery: 'Yes',
    pickup: 'Yes',
    dineIn: '12:00 PM Till 1:30 AM',
    workingHours: '24 Hours',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'No',
    car: 'Yes',
    vthru: 'No',
    website: 'Yes',
    cari: 'No Until Further time',
    jahez: 'No',
    callCenter: 'Yes',
    keeta: 'Yes',
    lastOrderDelivery: '24 Hours',
    lastOrderPickup: '24 Hours'
  },
  {
    brand: 'BBT',
    branchName: 'Mangaf',
    address: 'Mangaf, Block 4, Street: Fahad Hamlan Al Hamlan, Building: Mangaf CO-OP',
    delivery: 'Yes',
    pickup: 'Yes',
    dineIn: 'No',
    workingHours: '12:00 PM Till 4:30 AM',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'No',
    car: 'No',
    vthru: 'No',
    website: 'Yes',
    cari: 'No Until Further time',
    jahez: 'No',
    callCenter: 'Yes',
    keeta: 'Yes',
    lastOrderDelivery: '12:00 PM Till 4:30 AM',
    lastOrderPickup: '12:00 PM Till 4:30 AM'
  },
  {
    brand: 'BBT',
    branchName: 'Sabah Al-Ahmed',
    address: 'Sabah Al-Ahmad CO-OP beside PICK',
    delivery: 'Yes',
    pickup: 'Yes',
    dineIn: '1:00 PM Till 1:00 AM',
    workingHours: '12:00 PM Till 4:30 AM',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'No',
    car: 'Yes',
    vthru: 'No',
    website: 'Yes',
    cari: 'No Until Further time',
    jahez: 'No',
    callCenter: 'Yes',
    keeta: 'Yes',
    lastOrderDelivery: '12:00 PM Till 4:30 AM',
    lastOrderPickup: '1:00 PM Till 1:00 AM'
  },
  // Slice
  {
    brand: 'Slice',
    branchName: 'Mishref',
    address: 'Mubarak Al Abdulla Block 2',
    delivery: 'Yes',
    pickup: '12:00 PM Till 4:30 AM',
    dineIn: 'No',
    workingHours: '12:00 PM Till 4:30 AM',
    tgo: 'Yes',
    tmp: 'Yes',
    deliveroo: 'Yes',
    car: 'No',
    vthru: 'No',
    website: 'Yes',
    cari: 'No Until Further time',
    jahez: 'Yes',
    callCenter: 'Yes',
    keeta: 'Yes',
    lastOrderDelivery: '12:00 PM Till 4:30 AM'
  },
  {
    brand: 'Slice',
    branchName: 'City',
    address: 'Abdulla Al salem st.',
    delivery: 'Yes',
    pickup: '12:00 PM Till 1:30 AM',
    dineIn: 'No',
    workingHours: '12:00 PM Till 1:30 AM',
    tgo: 'Yes',
    tmp: 'Yes',
    deliveroo: 'Yes',
    car: 'No',
    vthru: 'No',
    website: 'Yes',
    cari: 'No Until Further time',
    jahez: 'Yes',
    callCenter: 'Yes',
    keeta: 'Yes',
    lastOrderDelivery: '12:00 PM Till 1:30 AM'
  },
  {
    brand: 'Slice',
    branchName: 'Yard Mall',
    address: 'Fnaitees - Yard Mall',
    delivery: 'Yes',
    pickup: 'N/A',
    dineIn: 'No',
    workingHours: '12:00 PM Till 4:30 AM',
    tgo: 'Yes',
    tmp: 'Yes',
    deliveroo: 'Yes',
    car: 'No',
    vthru: 'No',
    website: 'Yes',
    cari: 'No Until Further time',
    jahez: 'Yes',
    callCenter: 'Yes',
    keeta: 'Yes',
    lastOrderDelivery: '12:00 PM Till 1:30 AM'
  },
  {
    brand: 'Slice',
    branchName: 'Adailiya',
    address: 'Adailiya Block 2',
    delivery: 'Yes',
    pickup: '12:00 PM Till 1:30 AM',
    dineIn: 'No',
    workingHours: '12:00 PM Till 1:30 AM',
    tgo: 'Yes',
    tmp: 'Yes',
    deliveroo: 'Yes',
    car: 'No',
    vthru: 'No',
    website: 'Yes',
    cari: 'No Until Further time',
    jahez: 'Yes',
    callCenter: 'Yes',
    keeta: 'Yes',
    lastOrderDelivery: '12:00 PM Till 1:30 AM'
  },
  {
    brand: 'Slice',
    branchName: 'Salmiya',
    address: 'Salmiya - Block 5',
    delivery: 'Yes',
    pickup: 'N/A',
    dineIn: 'No',
    workingHours: '12:00 PM Till 1:30 AM',
    tgo: 'Yes',
    tmp: 'Yes',
    deliveroo: 'Yes',
    car: 'No',
    vthru: 'No',
    website: 'Yes',
    cari: 'No Until Further time',
    jahez: 'Yes',
    callCenter: 'Yes',
    keeta: 'Yes',
    lastOrderDelivery: '12:00 PM Till 1:30 AM'
  },
  {
    brand: 'Slice',
    branchName: 'Ardiya',
    address: 'Ardiya Herafiya',
    delivery: 'Yes',
    pickup: 'N/A',
    dineIn: 'No',
    workingHours: '12:00 PM Till 1:30 AM',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'Yes',
    car: 'No',
    vthru: 'No',
    website: 'Yes',
    cari: 'No Until Further time',
    jahez: 'Yes',
    callCenter: 'Yes',
    keeta: 'Yes',
    lastOrderDelivery: '12:00 PM Till 1:30 AM'
  },
  {
    brand: 'Slice',
    branchName: 'Jahra',
    address: 'Jahra - Block 2',
    delivery: 'Yes',
    pickup: 'N/A',
    dineIn: 'No',
    workingHours: '12:00 PM Till 1:30 AM',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'Yes',
    car: 'No',
    vthru: 'No',
    website: 'Yes',
    cari: 'No Until Further time',
    jahez: 'Yes',
    callCenter: 'Yes',
    keeta: 'Yes',
    lastOrderDelivery: '12:00 PM Till 1:30 AM'
  },
  // Pattie Pattie
  {
    brand: 'Pattie Pattie',
    branchName: 'Adailiya',
    address: 'Adailiya - Block 4',
    delivery: 'Yes',
    pickup: '12:00 PM Till 1:00 AM',
    dineIn: '12:00 PM Till 1:00 AM',
    workingHours: '12:00 PM Till 1:00 AM',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'No',
    car: 'Yes',
    vthru: 'No',
    website: 'Yes',
    cari: 'No',
    jahez: 'No',
    callCenter: 'Yes',
    keeta: 'No',
    lastOrderDelivery: '1:00 AM'
  },
  {
    brand: 'Pattie Pattie',
    branchName: 'Mishref',
    address: 'West Mishref',
    delivery: 'Yes',
    pickup: 'N/A',
    dineIn: 'N/A',
    workingHours: '24 Hours',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'No',
    car: 'No',
    vthru: 'No',
    website: 'Yes',
    cari: 'No',
    jahez: 'No',
    callCenter: 'Yes',
    keeta: 'No',
    lastOrderDelivery: '12:00 PM Till 4:30 AM'
  },
  {
    brand: 'Pattie Pattie',
    branchName: 'Ardiya',
    address: 'Ardiya - Block 2',
    delivery: 'Yes',
    pickup: 'N/A',
    dineIn: 'N/A',
    workingHours: '12:00 PM Till 4:30 AM',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'No',
    car: 'No',
    vthru: 'No',
    website: 'Yes',
    cari: 'No',
    jahez: 'No',
    callCenter: 'Yes',
    keeta: 'No',
    lastOrderDelivery: '12:00 PM Till 4:30 AM'
  },
  {
    brand: 'Pattie Pattie',
    branchName: 'Jahra',
    address: 'Jahra - Block 2',
    delivery: 'Yes',
    pickup: 'N/A',
    dineIn: 'N/A',
    workingHours: '12:00 PM Till 4:30 AM',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'No',
    car: 'No',
    vthru: 'No',
    website: 'Yes',
    cari: 'No',
    jahez: 'No',
    callCenter: 'Yes',
    keeta: 'No',
    lastOrderDelivery: '12:00 PM Till 4:30 AM'
  },
  {
    brand: 'Pattie Pattie',
    branchName: 'Salmiya',
    address: 'Salmiya - Block 5',
    delivery: 'Yes',
    pickup: 'N/A',
    dineIn: 'N/A',
    workingHours: '24 Hours',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'No',
    car: 'No',
    vthru: 'No',
    website: 'Yes',
    cari: 'No',
    jahez: 'No',
    callCenter: 'Yes',
    keeta: 'No',
    lastOrderDelivery: '24 Hours'
  },
  {
    brand: 'Pattie Pattie',
    branchName: 'Yard',
    address: 'Fnaitees - Yard Mall',
    delivery: 'Yes',
    pickup: 'N/A',
    dineIn: 'N/A',
    workingHours: '12:00 PM Till 4:30 AM',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'No',
    car: 'No',
    vthru: 'No',
    website: 'Yes',
    cari: 'No',
    jahez: 'No',
    callCenter: 'Yes',
    keeta: 'No',
    lastOrderDelivery: '12:00 PM Till 4:30 AM'
  },
  {
    brand: 'Pattie Pattie',
    branchName: 'Hawally',
    address: 'Hawally - Block 4',
    delivery: 'Yes',
    pickup: 'N/A',
    dineIn: 'N/A',
    workingHours: '24 Hours',
    tgo: 'Yes',
    tmp: 'No',
    deliveroo: 'No',
    car: 'No',
    vthru: 'No',
    website: 'Yes',
    cari: 'No',
    jahez: 'No',
    callCenter: 'Yes',
    keeta: 'No',
    lastOrderDelivery: '24 Hours'
  },
  // Just C
  {
    brand: 'Just C',
    branchName: 'Qortuba',
    address: 'Qortuba - Block 5 - Street 1 - Qortuba Mall',
    delivery: 'Yes',
    pickup: 'No',
    dineIn: 'No',
    workingHours: '12:00 PM Till 1:30 AM',
    tgo: 'Yes',
    tmp: 'Yes',
    deliveroo: 'Yes',
    car: 'No',
    vthru: 'No',
    website: 'Yes',
    cari: 'No Until Further time',
    jahez: 'Yes',
    keeta: 'Yes',
    callCenter: 'Yes',
    lastOrderDelivery: '2:30 AM'
  },
  {
    brand: 'Just C',
    branchName: 'Yard - BBQ Box Only',
    address: 'Fnaitees - Block 5 Yard Mall',
    delivery: 'Yes',
    pickup: 'No',
    dineIn: 'No',
    workingHours: '12:00 PM Till 1:30 AM',
    tgo: 'Yes',
    tmp: 'Yes',
    deliveroo: 'Yes',
    car: 'No',
    vthru: 'No',
    website: 'Yes',
    cari: 'No Until Further time',
    jahez: 'Yes',
    keeta: 'Yes',
    callCenter: 'Yes',
    lastOrderDelivery: '2:30 AM'
  },
  // Chili pepper
  {
    brand: 'Chili pepper',
    branchName: 'Qortuba',
    address: 'Kitchen',
    delivery: 'Yes',
    pickup: 'No',
    dineIn: 'No',
    workingHours: '1:00 PM Till 1:30 AM',
    tgo: 'Yes',
    tmp: 'Yes',
    deliveroo: 'Yes',
    car: 'No',
    vthru: 'No',
    website: 'Yes',
    cari: 'No Until Further time',
    jahez: 'Yes',
    cc: 'No',
    keeta: 'Yes',
  },
  {
    brand: 'Chili pepper',
    branchName: 'Yard',
    address: 'Kitchen',
    delivery: 'Yes',
    pickup: 'No',
    dineIn: 'No',
    workingHours: '1:00 PM Till 1:30 AM',
    tgo: 'Yes',
    tmp: 'Yes',
    deliveroo: 'Yes',
    car: 'No',
    vthru: 'No',
    website: 'Yes',
    cari: 'No Until Further time',
    jahez: 'Yes',
    cc: 'No',
    keeta: 'Yes',
  },
  {
    brand: 'Chili pepper',
    branchName: 'Hawally',
    address: 'Kitchen',
    delivery: 'Yes',
    pickup: 'No',
    dineIn: 'No',
    workingHours: '1:00 PM Till 1:30 AM',
    tgo: 'Yes',
    tmp: 'Yes',
    deliveroo: 'Yes',
    car: 'No',
    vthru: 'Yes',
    website: 'Yes',
    cari: 'No Until Further time',
    jahez: 'Yes',
    cc: 'No',
    keeta: 'Yes',
  }
] as Omit<BranchData, 'id'>[]).map((d, i) => ({ ...d, id: i + 1 } as BranchData));

export const PROCESS_SCRIPTS = {
  newOrder: {
    pickup: {
      title: 'Pick up',
      icon: '📦',
      script: [
        'صباح الخير/ مساء الخير، شكراً لاختيارك اسم المطعم معاك (الاسم) شلون أقدر أساعدك؟',
        'الطلب على نفس الرقم ولا رقم آخر؟',
        'بعد إضافة رقم العميل في سيستم الميكوت أو إذا الاسم مسجل نتشرف باسم العميل، نرد وننعم فيه.',
        'اسأل العميل عن طريقة الدفع قبل ما تبدأ معاه الطلب (كاش - كي نت من داخل COT-MF أو My Fatoorah من خلال الكول سنتر).',
        'نبدأ نأخذ تفاصيل الطلب من العميل (ممكن توضح لي طلبك؟)',
        'في حال لو العميل يطلب أكثر من عرض، اعرض عليه العروض المتاحة من خلال الكول سنتر فقط.',
        'أول ما العميل يكون انتهى من الطلب، لازم نسأل العميل إذا حاب يضيف أي شيء (إذا أضاف نكمل طلبه وننعم عليه بشكل كامل).',
        'نبدأ بمراجعة الطلب مع العميل بكل التفاصيل و حتى الكومنت الي قاله العميل و ضروري نبلغه بسعر الطلب الإجمالي و نعرف العميل الطلب يكون جاهز من 15 الى 20 دقيقة او حسب وقت التجهيز لكل براند و طبعا لو كان طلب كبير الوقت يزيد و لازم نكون معرفين العميل الاستلام من داخل الفرع - أستاذي الكريم شرفنا المطعم في خلال --- و تسلم طلبكم.'
      ]
    },
    delivery: {
      title: 'Delivery',
      icon: '🚚',
      script: [
        'صباح الخير/ مساء الخير، شكراً لاختيارك اسم المطعم معاك (الاسم) شلون أقدر أساعدك؟',
        'الطلب على نفس الرقم ولا رقم آخر؟',
        'بعد إضافة رقم العميل في سيستم الميكوت أو إذا الاسم مسجل نتشرف باسم العميل، نرد وننعم فيه.',
        'الطلب توصيل أو استلام؟',
        'لو الطلب توصيل نوضح أن الدفع فقط من خلال رابط، في حالة العميل مصمم يدفع كاش نطلب منه من خلال الـ aggregators.',
        'اسأل عن تفاصيل العنوان (المنطقة، القطعة، الشارع، المنزل، الجادة، الدور والشقة لو في بناية)، راجع العنوان بشكل سريع مرة ثانية مع العميل.',
        'قبل ما نبدأ نعرفه مدة التوصيل خلال 45 إلى 60 دقيقة، مهم جداً نتأكد من الرابط وطبعاً نعرفه نعرف خير جداً ممكن يأخذ وقت أطول شويه.',
        'نبدأ نأخذ تفاصيل الطلب من العميل (ممكن توضح لي طلبك؟)',
        'في حال لو العميل يطلب أكثر من عرض، اعرض عليه العروض المتاحة من خلال الكول سنتر فقط.',
        'أول ما العميل يكون انتهى من الطلب، لازم نسأل العميل إذا حاب يضيف أي شيء (إذا أضاف نكمل طلبه وننعم عليه بشكل كامل).',
        'نبدأ بمراجعة الطلب مع العميل بكل التفاصيل و حتى الكومنت الي قاله العميل و ضروري نبلغه بسعر الطلب الإجمالي مضاف إليه رسوم التوصيل و ضروري نبلغه بسعر الطلب الاجمالي يعني مثلا حسابه 10 دينار و توصيل 1 دينار يعني 11 بنقول للعميل حسابك مع التوصيل 11 دينار - فقط لو العميل سأل توصيلكم كم ؟ بتقله التوصيل 1 دينار',
        'بخصوص رسوم التوصيل اذا العميل سألكم لية قيمتها دينار واحنا نفس المنطقة وحسب قانون وزارة التجارة التوصيل داخل المنطقة 0.250 دينار وخارجها 0.500 دينار الرد بيكون كالتالي :- صحيح اخوي ولكن للتوضيح هذة الضوابط خاصة بالمطاعم الي عندهم سائقين خاصين فيهم لكن احنا كمطعم شاكر مثلا متعاقدين مع شركة توصيل خاصة فيكون قيمة رسوم التوصيل طبقا للتعاقد معانا في حالة اذا العميل بلغكم طلبات او كاري او ديليفرو توصيلهم اقل منكم بنوضح للعميل انة التطبيقات دي بتوصل بسائقين خاصين فيهم في حالة بعض العملاء اي حابة تطلب توصيل وهوة مكانة قريب من المطعم في العمارة او المجمع او الكافية المجاور لمطعمنا ومعترض على رسوم التوصيل وحاب اي حد من المطعم يجيب لة الطلب لحد عندة الرد كالتالي :- بنعتذر منه ونبلغه انه للاسف موظفين الفرع ما يقدرون يطلعون من الفرع ويوصلون لك الطلب المتاح فقط التوصيل من خلال سائقين شركة التوصيل ورسوم التوصيل تكون ثابتة من خلال السيستم قيمتها دينار وللاسف ما نقدر نغير فيها وبيكون قدام العميل خيارين اما يعمل طلب استلام من الفرع او يطلب عن طريق Drive Thru او V-Thru او يطلب من خلال الفرع او من التطبيقات',
        'حنرسل الرابط حالا من واتسب الشركة و لازم نأكد للعميل سرعة الدفع لعدم تأخير الطلب'
      ]
    },
    notes: {
      title: 'ملاحظات',
      icon: '📌',
      text: 'اقتراح: طلبات الاستلام عبر خدمة العملاء ، يجب على موظف خدمة العملاء سؤال العميل عن طريقة الدفع المفضل لديه (Cash أو K-Net في الفرع)، إذا طلب العميل رابط الدفع، يمكننا تقديمه. للطلبات التي تزيد عن 10 دينار كويتي، نوصي بطريقة الدفع عبر الرابط بطريقة مهذبة، دون إجبار.'
    }
  },
  followUp: {
    talabat: {
      title: 'Talabat',
      icon: 'ℹ️',
      script: [
        'يعني الطلب جاهز بالفرع و بانتظار سائق ( Order Ready to pick up ) شيك رقم الطلب من خلال البورتل التابع للتطبيق في البورتل حيظهر كالآتي 📌',
        'و نفس الوقت مكتوب الطلب جاهز يعني Rider Near to Pick Up يعني الطلب طلع مع السواق لو طلع ( In Delivery ) طلبات يستلمه - لو طلع عندك الاوردر جاهز و في انتظار سائق طلبات'
      ]
    },
    deliveroo: {
      title: 'Deliveroo',
      icon: 'ℹ️',
      script: [
        'عشان تعرف من اي ( Grubtech اضافة رقم الطلب في ) Grubtech أولا شيك على رقم الي طالب منه بالميكوت لو ما طلعش البيانات شيك من 📌',
        'فرع و بعدها شيك من بورتل ديليفرو على حالة الطلب من بورتل ديليفرو اختار البراند و الفرع الي هيطلع منه الطلب و البيانات تظهر كالآتي اول اوبشن يعني الطلب بتبخر لو المطعم عمل من الجهاز ان الطلب جاهز بيكون حالة الطلب Order Ready to Pickup والبيانات تظهر كالآتي اول اوبشن يكون طلع مع السواق بيكون In Transit'
      ]
    },
    cari: {
      title: 'Cari',
      icon: 'ℹ️',
      script: [
        'نساله عن آخر 4 او 5 ارقام من رقم الطلب عشان هيكون ( Dispatcher ) نفتح البورتل التابع للبراند الي طالب منه العميل ونضغط على الخانة الثانية 📌',
        'عشان البحث السريع لرقم الطلب في احدى ال 3 خانات F + CTRL صعب للعميل يفيدنا برقم الطلب كله لان كاري بيكون في حروف برقم الطلب تعمل او تكتب رقم الطلب كله في خانة البحثعندك 3 خانات مهمين اول خانة Preparing لو الطلب في الخانة دي معنى انه لسه يتجهز الخانة الثانية Ready معنى ان الطلب طلع مع سائق كاري Dispatched معنى ان الطلب جاهز و بانتظار سائق كاري , الأخيرة خانة For Pickup'
      ]
    },
    jahez: {
      title: 'Jahez',
      icon: 'ℹ️',
      script: [
        'عشان تعرف من اي فرع و بعدها شيك من موقع جاهز على حالة الطلب جاهز عندهم 3 انواع لحالة الطلب Grubtech اضافة رقم الطلب في 📌',
        'لغاية سواق التطبيق يستلم الطلب و يتحول Accepted فقط في حالة تم قبول الطلب بيكون حالة Out For Delivery و وقت يوصله يكون Delivered لازم نأكد مع المطعم عن حالته Accepted لو العميل يسأل عن حالة الطلب و شيكت حالته مكتوب'
      ]
    },
    callCenterPickup: {
      title: 'Call Center (Pick up)',
      icon: 'ℹ️',
      script: [
        'نعرف الطلب من اي فرع و تشوف توقيت الطلب لو الطلب بقاله فترة مبعوث ابقى اكيد العميل ما دخلش الفرع عشان يستلمه ممكن يكون 📌',
        'منتظر في الخارج - نعرف العميل الاستلام من داخل الفرع و تتواصل مع الفرع لمعرفة الوقت المطلوب لانهاء الطلب'
      ]
    },
    callCenterDelivery: {
      title: 'Call Center (Delivery)',
      icon: 'ℹ️',
      script: [
        'و حالة الطلب تكون ظاهرة بالبحث على رقم ( Verdi / Tookan ) نعرف الطلب من اي فرع و تشوف توقيت الطلب و نشيك مع شركات التوصيل 📌',
        'لو لقينا الطلب في احدى خانات Verdi العميل في موقع التوصيل الخاص فينا بالنسبة ل Drivers / En-Route نقدر نشوف السواق فينه بالضبط على لو متأخر نشيك السبب لو المطعم او التوصيل و نكلمهم للاستعجال Track سهم'
      ]
    },
    notes: {
      title: 'ملاحظات',
      icon: '📌',
      items: [
        'وقت السائق يكون قريب للفرع و لكن الطلب ليس جاهز - نتصل عالفرع الي بيطلع الطلب منه و نعرفه الطلب متأخر بالتحضير و نستعجلهم',
        'لو سواق التطبيق متأخر - نعتذر للعميل و نبلغه اننا حنتواصل مع التطبيق لأستعجال السائق',
        '⚠️ ملاحظة: ما بيصير نقول شئ للعميل احنا مش واثقين منه او غير واضح عندنا بالسيستم - ما تخلوش العميل بدل ما يسأل عن حالة طلبه يحول شكوى على سلوك الموظف',
        '⚠️ ملاحظة: في حالة انك عارف ممكن تاخد وقت عقبال ما تعرف حالة الطلب - لازم تعرف العميل ينتظر معاك لحظات قليلة و ما يصير نعمل Hold تخليه عال Mute'
      ]
    }
  },
  complain: {
    types: {
      "missing": {
        call: "Review the order bill and ask which item was missing. If multiple items are missing, request a food picture from the customer. Action: Re-delivery / Refund of the missing items.",
        platform: "Review the order bill and ask which item was missing. If multiple items are missing, request a food picture from the customer. Action: Guide them to contact the aggregator for either a refund or re-delivery of the missing items"
      },
      "damaged": {
        call: "Request a picture from the customer. Action: Re-delivery / Refund",
        platform: "Request a picture from the customer. Apologize and explain that this issue occurred during delivery. Action: Guide the customer to contact the aggregator for either a refund or re-delivery"
      },
      "wrong": {
        call: "Review the order bill. Request a picture from the customer showing the wrong item along with the receipt. Action: Re-delivery / Refund of the correct items",
        platform: "Review the order bill + Request a picture from the customer showing the wrong item and the receipt. Action: Guide them to contact the aggregator for either a refund or re-delivery of the correct items."
      },
      "over-cooked": {
        call: "Request a picture from the customer. Action: Re-delivery / Refund",
        platform: "Request a picture from the customer. Action: Offer Re-delivery / Refund from aggregator, or arrange re-delivery from our side"
      },
      "less-quantity": {
        call: "Request a picture from the customer. Verify with the branch or complaints team if the quantity is indeed less. Action: Re-delivery / Refund of the correct items",
        platform: "Request a picture from the customer. Check with the branch or complaints team if the quantity is indeed less. Action: Guide the customer to contact the aggregator for either a refund or re-delivery."
      },
      "bad-smell": {
        call: "Request return of the item. Action: Re-delivery / Refund",
        platform: "Request return of the item. If the customer requests a refund, guide them to contact the aggregator. If re-delivery is requested, arrange a driver from our side"
      },
      "rancid-taste": {
        call: "Request return of the item. Action: Re-delivery / Refund",
        platform: "Request return of the item. If the customer requests a refund, guide them to contact the aggregator. If re-delivery is requested, arrange a driver from our side"
      },
      "salty": {
        call: "Request return of the item. Action: Re-delivery / Refund",
        platform: "Request return of the item. If the customer requests a refund, guide them to contact the aggregator. If re-delivery is requested, arrange a driver from our side."
      },
      "dry": {
        call: "Check the order timestamp and request a picture from the customer. Action: Guide them to contact the aggregator for either a refund or re-delivery.",
        platform: "Check the order timestamp and request a picture from the customer. Action: Guide them to contact the aggregator for either a refund or re-delivery."
      },
      "cold": {
        call: "Check the order timestamp in Verdi / Tookan to confirm whether the mistake was from the store or the driver. Action: Replace effected items",
        platform: "Check the order timestamp to determine if the mistake was from the store or the driver. Action: Guide them to contact the aggregator for either a refund or re-delivery"
      },
      "hygiene": {
        call: "Request a picture from the customer. Action: Re-delivery / Refund",
        platform: "Request a picture from the customer. If a refund is requested, guide them to the aggregator. If re-delivery is requested, arrange it from our side"
      },
      "hair": {
        call: "Request a picture from the customer. Action: Re-delivery / Refund",
        platform: "Request a picture from the customer. If a refund is requested, guide them to the aggregator. If re-delivery is requested, arrange it from our side"
      },
      "foreign-object": {
        call: "Request a picture from the customer. If the item is still available, arrange return of the item. Action: Re-delivery / Refund",
        platform: "Request a picture from the customer. If the item is still available (not discarded), arrange a driver from our side to collect the item. Action: If a refund is requested, guide the customer to contact the aggregator. If re-delivery is requested, arrange it from our side"
      },
      "attitude": {
        call: "Inform the customer that their concern will be escalated",
        platform: "Inform the customer that their concern will be escalated to the aggregator"
      },
      "food-poisoning": {
        call: "Request return of the affected item. Action: Re-delivery / Refund",
        platform: "Request return of the affected item. If a refund is requested, guide them to the aggregator. If re-delivery is requested, arrange it from our side"
      },
      "expired": {
        call: "Request a picture of the item showing the expiration date. Request return of the item. Action: Re-delivery / Refund",
        platform: "Request a picture of the item showing the expiration date. Request return of the item. If a refund is requested, guide them to the aggregator. If re-delivery is requested, arrange it from our side"
      },
      "rare-under-cooked": {
        call: "Request a picture from the customer. Action: Re-delivery / Refund",
        platform: "Request a picture from the customer. If a refund is requested, guide them to the aggregator. If re-delivery is requested, arrange it from our side"
      },
      "preparation-delay": {
        call: "Apologize only",
        platform: "Apologize only"
      },
      "late-delivery": {
        call: "Apologize only",
        platform: "Apologize only"
      },
      "packaging-issue": {
        call: "Request a picture from the customer. If the item is still available, arrange return of the item. Action: Re-delivery / Refund",
        platform: "Request a picture from the customer. If the item is still available (not discarded), arrange a driver from our side to collect the item. Action: If a refund is requested, guide the customer to contact the aggregator. If re-delivery is requested, arrange it from our side"
      }
    },
    notes: {
      title: 'ملاحظات',
      icon: '📌',
      items: [
        'Required data for each complaint:',
        '• Customer Name',
        '• Customer Number',
        '• Order ID',
        '• Order Source',
        '• Order Date & Time',
        '• Complaint Source',
        '• Attach order timestamp as well with the evidence',
        'For Walk-in Customers, we request picture of the receipt + picture of effected item Action: Can receive it from the branch, if insisted on re-delivery, arrange it , if insisted for refund, he should to go back to store and receive effected item value',
        'If the customer refuses to contact the aggregator, you may arrange a driver to deliver or replace the item, or offer to provide it with their next order via the call center',
        'Always show care to the customer'
      ]
    }
  },
  additional: {
    aggregators: {
      title: 'Aggregators',
      icon: '📦',
      content: [
        'أولا نعرف العميل طالب من اي تطبيق, بعدين نضيف رقم الطلب في البورتل ليظهر البيانات في حالة الطلب خرج - نعتذر للعميل و مبلغه للأسف طلبكم في الطريق مع سائق التطبيق في حالة الطلب خرج و بلغت العميل بس مصمم التواصل مع التطبيق و استرجاع السائق نعتذر و نوضح للأسف ما نقدرش نرجع السايق في حالة الطلب لسه في المطعم أيا يكن طريقة دفع العميل من التطبيق- نعرف من العميل ايه هي الاضافة و نأكد عليه الدفع بيكون رابط من المطعم منبلغ العميل كالأتي: اخي الكريم رح نتواصل مع المطعم و نحاول اضافة الأصناف الزيادة - نكلم المطعم و نعرفه يزود العنصر و نبعت لينك للعميل من خلال My Fatoorahو نبعت فاتورة جديدة للفرع COT MF و نأكد يزود الصنف',
        'لو التطبيق نفسه كلمنا و بلغنا نزود عالطلب لان العميل طلبه كاش - نعمل نفس خطوة اننا ناخد رقم الطلب و رقم العميل - نشوف لو هو فعلا بالفرع نكلم المطعم و نزود و نعدل على الفاتورة نفسها - في حالة الفاتورة مش موجودة على رقم العميل بالسيستم (الميكوت ) مش حنقدر نزود عالطلب - ممكن نتواصل مع العميل دايركت و ندفعه رابط و نبعت فاتورة جديدة للفرع و نبلغه يضيفها مع طلب العميل ملاحظة: لو طلب العميل كان كاش و بلغنا الزيادة يدفعها كاش - نعتذرله و نبلغه الزيادة دي حتكون من المطعم و لازم تكون مدفوعة',
        'ملحوظه الزياده علي الطلب يكون الحد الادني 1 دينار'
      ]
    },
    pickup: {
      title: 'Call Center - Pick up',
      icon: '🏪',
      content: [
        'اي عميل يبلغنا سواء طالب من عندنا دايركت او من تطبيق اونلاين ما نقدرش نرجع سواق مستلم الطلب الأساسي عشان العميل عايز يزود صنف - الطلب الي طلع مع السايق لا يمكن ابلاغ السايق ان يرجع للفرع و يستلم صنف الزيادة اي عميل عايز يزود لازم تكون باعت فاتورة جديدة للمطعم - ممنوع التزويد على نفس الفاتورة بسبب اختلاف السعر الأساسي عن السيستم الخاص فينا ضروري جدا الأنتباه وقت ارسال الطلب اذا كان فرع عنده استلام و توصيل نبعت الزيادة طلب استلامCOT MF - Pickup- K-net يزود مع الطلب الأساسي - اذا كان الفرع مطبخ ليس لديه استلام نرسله الزيادة طلب توصيل من غير رسوم توصيل COT MF -Delivery - K-net ممكن تلاقو رقم العميل الي طالب منه مافيش عليه طلب - بسبب تغييرات بالسيستم - زيادة الطلب تتبعت على رقمه و بالكومنت نوضح للفرع رقم الطلب الي حيتضاف عليه و نكلم الفرع تاني للتأكيد العميل اتصل و شيكت الطلب على رقمه مبعوت و لسه ما استلم او ما دفعش بالفرع- في حالة الدفع كاش او كنيت بالفرع ممكن نزود على نفس الفاتورة و نبلغ المطعم بالاضافة و نعرف العميل حسابه الاجمالي ف حالة الطلب مدفوع رابط و العميل اتصل يزود - يجب ارسال فاتورة جديدة للفرع كأنك تاخد طلب من اول و جديد من العميل و نعرف المطعم الطلبين لعميل واحد - نعمل كدا علشان يكون عندنا فاتورتين و اسعارهم متطابقة للروابط لو عميل دافع و عايز يزود بس يدفع كاش بالمطعم - نبعت فاتورة جديدة بطريقة الدفع الجديدة للفرع و نعرف المطعم'
      ]
    },
    delivery: {
      title: 'Call Center - Delivery',
      icon: '🚚',
      content: [
        'في حال شيكنا و الطلب كان طالع مع السواق نعتذر للعميل و نبلغه الطلب بالطريق اليك وضع رقم العميل الي طالب منه بسيستم الميكوت عشان نعرف من اي فرع و منشيك من شركة التوصيل لو لسه ما طلع - نسأل العميل شو حابب يزود و نبلغه حنبعت رابط جديد بالاضافة مع التأكيد السعر معاه نعرف العميل سوف يتم رابط جديد بالاضافة ( و يتم ارسال الزيادة فاتورة جديدة للمطعم ) ممنوع التعديل على اي طلب مدفوع - الزيادة ترسلها في فاتورة جديدة للمطعم لو العميل ما دفعش الرابط الأول و اتواصل للاضافة - نلغي الرابط الأول و بعدين نعدل عالطلب حسب الاضافات الي زودها و نبعت لينك جديد',
        'مثال: عندنا طلب سعره 10 دينار و الرابط المدفوع 10 دينار - العميل بلغنا نزود عالطلب اصناف سعرها 2 دينار لو زودنا الأصناف على نفس الفاتورة و تم ارسال رابط جديد و اتدفع - ( كدا العميل حيكون دفع رابطين على فاتورة واحده و دا ممنوع ( لو اتعملت بالغلط لازم نبلغ القسم المختص عشان يعرف قسم المحاسبة ان العميل ليه دفعتين على فاتورة واحدة !!'
      ]
    }
  },
  specialRequests: {
    aggregators: {
      title: 'Aggregators',
      icon: '📦',
      content: [
        'أولا ضيف رقم العميل في سيستم ميكوت - لو الطلب ما ظهرش على السيستم اسأل العميل ممكن نعرف طلبكم من اي موقع و( لو في امكانية تفيدنا برقم الطلب بحالة طلبه كان من aggregators ؟ )',
        'اضافة رقم الطلب في Grubtech عشان نشوف الطلب متبعت للمطعم على اي رقم و نشوف حالة الطلب من البورتل التابع للتطبيق في حالة الطلب خرج - نعتذر للعميل و نبلغه للأسف طلبكم في الطريق مع السائق الخاص للتطبيق في حالة الطلب لسه في المطعم - نعرف من العميل ايه الكومنت او التعديل و نبلغه حنتواصل مع الفرع لابلاغهم بالكومنت حاليا كل التعليقات (Comments) ممكن تتنفذ من غير تعديل الفاتورة حتى لو العميل بيغير الصنف نفسه. لغاية تغيير سيستم الميكوت لو العميل غير لصنف تاني بنفس السعر (مثال: شاورما لحم → شاورما دجاج / بوكس دجاج → بوكس ميكس لحم ودجاج)، لازم نعدل الفاتورة في حالة الطلب مبعوت من رقم التطبيق - منكلم المطعم فقط من دون تعديل الفاتورة حاليا - بعد تغيير سيستم الميكوت لازم نعدل الفواتير طريقة تعديل الفاتورة: إذا الطلب مبعوث من رقم العميل ندخل الرقم في سيستم الميكوت, نبحث عن طلب العميل ونعدل الفاتورة, نتأكد أن السعر بعد التعديل = نفس سعر الطلب الأساسي. لو الطلب مقفول يتم إفادة الفرع عن طريق الواتساب والاتصال للتأكد من تنفيذ التعديل. تنبيه:ممنوع تعديل الفاتورة أو إرسال رسالة واتساب للمطعم فقط من غير اتصال. يجب التأكد أن المطعم رد وأكد التنفيذ. بعد التأكيد، يتم الاتصال بالعميل لإبلاغه أن المطعم استلم الملاحظة وسيتم تنفيذها.'
      ]
    },
    pickup: {
      title: 'Call Center - Pick up',
      icon: '🏪',
      content: [
        'في حالة الطلب خرج - نعتذر للعميل و نبلغه للأسف طلبكم في الطريق مع السائق في حالة الطلب لسه في المطعم - نعرف من العميل ايه الكومنت او التعديل بالضبط و مبلغه حنتواصل مع الفرع لابلاغهم بالكومنت كل التعليقات (Comments) ممكن تتنفذ من غير تعديل الفاتورة إذا العميل ما غير الصنف نفسه. لو العميل غير لصنف تاني بنفس السعر (مثال: شاورما لحم → شاورما دجاج / بوكس دجاج → بوكس ميكس لحم ودجاج)، لازم نعدل الفاتورة. طريقة تعديل الفاتورة: اضافة رقم العميل في سيستم الميكوت نعدل الفاتورة, نتأكد أن السعر بعد التعديل = نفس سعر الطلب الأساسي. إذا الطلب مقفول أو مش موجود:يتم إفادة الفرع عن طريق الواتساب والاتصال للتأكد من تنفيذ التعديل. الملخص: تعديل الصنف بنفس السعر = لازم تعديل الفاتورة, لو كومنت على نفس الصنف (مثال: إزالة بصل) = ليس بحاجو لتعديل الفاتورة تنبيه:ممنوع تعديل الفاتورة أو إرسال رسالة واتساب للمطعم فقط من غير اتصال. يجب التأكد أن المطعم رد وأكد التنفيذ. بعد التأكيد، يتم الاتصال بالعميل لإبلاغه أن المطعم استلم الملاحظة وسيتم تنفيذها.'
      ]
    },
    delivery: {
      title: 'Call Center - Delivery',
      icon: '🚚',
      content: [
        'في حال شيكنا و الطلب كان طالع مع السواق نعتذر للعميل و نبلغه الطلب بالطريق اليك وضع رقم العميل الي طالب منه بسيستم الميكوت عشان نعرف من اي فرع و منشيك من شركة التوصيل لو لسه ما طلع - نسأل العميل شو حابب يزود و نبلغه حنبعت رابط جديد بالاضافة مع التأكيد السعر معاه نعرف العميل سوف يتم رابط جديد بالاضافة ( و يتم ارسال الزيادة فاتورة جديدة للمطعم ) ممنوع التعديل على اي طلب مدفوع - الزيادة ترسلها في فاتورة جديدة للمطعم لو العميل ما دفعش الرابط الأول و اتواصل للاضافة - نلغي الرابط الأول و بعدين نعدل عالطلب حسب الاضافات الي زودها و نبعت لينك جديد',
        'مثال: عندنا طلب سعره 10 دينار و الرابط المدفوع 10 دينار - العميل بلغنا نزود عالطلب اصناف سعرها 2 دينار لو زودنا الأصناف على نفس الفاتورة و تم ارسال رابط جديد و اتدفع - ( كدا العميل حيكون دفع رابطين على فاتورة واحده و دا ممنوع ( لو اتعملت بالغلط لازم نبلغ القسم المختص عشان يعرف قسم المحاسبة ان العميل ليه دفعتين على فاتورة واحدة !!'
      ]
    }
  },
  talabatKeeta: {
    talabat: {
      title: 'طريقة التواصل مع المحادثة المباشرة لخدمة العملاء (طلبات)',
      steps: [
        { title: 'حسابي (My Account)', text: 'افتح تطبيق طلبات، ثم من القائمة اختر حسابي.', icon: 'UserCircle' },
        { title: 'اختر "احصل على المساعدة" (GET HELP)', text: 'من قائمة حسابك، اضغط على احصل على المساعدة لفتح مركز الدعم.', icon: 'HelpCircle' },
        { title: 'اختر "طلباتي" (My Orders)', text: 'ستظهر لك جميع الطلبات السابقة والحالية — اختر طلباتي.', icon: 'ListChecks' },
        { title: 'اختر الطلب', text: 'مثلًا: shakir.yelo.bbt أو أي طلب آخر من المطعم الذي تريد التواصل بشأنه.', icon: 'Store' },
        { title: 'اختر "لم يصلني الطلب حتى الآن"', text: 'هذا الخيار يفتح لك محادثة مباشرة (Live Chat) مع موظف طلبات.', icon: 'ChatDots' }
      ],
      note: 'ملاحظة: عند فتح المحادثة، يمكنك إبلاغ الموظف أن الطلب الذي وصلك خاطئ أو طلب إعادة التوصيل.'
    },
    keeta: {
      reportIssue: {
        title: 'طريقة رفع شكوي لخدمة العملاء (كيتا)',
        steps: [
          { title: 'افتح تطبيق كيتا', text: 'من فضلك افتح تطبيق Keeta على موبايلك.', icon: 'Smartphone' },
          { title: 'صفحة الطلبات (Orders)', text: 'اضغط على Orders من القائمة السفلية.', icon: 'List' },
          { title: 'اختيار الطلب', text: 'اختار الطلب اللي حصلت فيه المشكلة واضغط عليه.', icon: 'ShoppingBag' },
          { title: 'الإبلاغ عن مشكلة (Report an Issue)', text: 'انزل لحد ما تلاقي زر Report an Issue.', icon: 'AlertTriangle' },
          { title: 'اختيار نوع المشكلة', text: '✔ طلب ناقص\n✔ جودة الأكل\n✔ الطلب اتأخر\n✔ طلب غلط\n✔ Refund\n✔ غير ذلك', icon: 'ListChecks' },
          { title: 'كتابة وصف', text: 'اكتب وصف بسيط للمشكلة.', icon: 'PencilLine' },
          { title: 'رفع الصور', text: 'ارفع صورة للمنتج الناقص أو المشكلة.', icon: 'Image' },
          { title: 'إرسال', text: 'اضغط Submit.', icon: 'Send' },
          { title: 'متابعة الرد', text: 'يتم الرد داخل التطبيق أو في الإشعارات.', icon: 'Bell' }
        ]
      },
      liveSupport: {
        title: 'التواصل المباشر مع خدمة العملاء داخل كيتا (Live Support)',
        steps: [
          { title: 'افتح التطبيق', text: 'افتح تطبيق Keeta.', icon: 'Smartphone' },
          { title: 'الحساب (Account)', text: 'اضغط على Account من الأسفل.', icon: 'UserCircle' },
          { title: 'Help Center', text: 'ثم اضغط على Help Center أو Support.', icon: 'HelpCircle' },
          { title: 'Contact Us', text: 'اضغط Contact Us للتواصل مع الدعم.', icon: 'ChatDots' },
          { title: 'اكتب رسالتك', text: 'اكتب المشكلة أو الاستفسار.', icon: 'PencilLine' },
          { title: 'إرسال', text: 'اضغط Send.', icon: 'Send' }
        ]
      }
    }
  },
  kuwaitiTerms: [
    { meaning: "اتضايقت وتعبت من الزهق", word: "اتوهجت" },
    { meaning: "كلمة للتعجب مثل: بتتكلم جد؟", word: "أمبييه" },
    { meaning: "لسه واصل", word: "توه واصل" },
    { meaning: "والله لأضربه", word: "والله أطقه" },
    { meaning: "يخبط على الباب / يرن الجرس", word: "طج الباب / الجرس" },
    { meaning: "مبعثر / مقلوب", word: "طاح - طايح" },
    { meaning: "شباك", word: "دريشة" },
    { meaning: "الزجاج", word: "الجام" },
    { meaning: "أبعت", word: "دز" },
    { meaning: "ادخل", word: "دش" },
    { meaning: "أرسل", word: "طرش" },
    { meaning: "مفتوح", word: "مبطل" },
    { meaning: "مغلق", word: "مسكر" },
    { meaning: "أصابني", word: "حاشني" },
    { meaning: "ألم / تعب", word: "عوار" },
    { meaning: "كانز", word: "جوطي" },
    { meaning: "حذاء", word: "جوتي" },
    { meaning: "يعني طوالي / خليك صادق", word: "سيدا" },
    { meaning: "تكذب", word: "تشذب" },
    { meaning: "خبز الفينو", word: "صمون" },
    { meaning: "أرز", word: "عيش" },
    { meaning: "تمام / جيد", word: "زين / إنزين" },
    { meaning: "ممتاز", word: "خوش" },
    { meaning: "أحسنت", word: "عافيه" },
    { meaning: "لماذا؟", word: "ليش" },
    { meaning: "وقت / في هذا الوقت", word: "حزه / بهالحزه" },
    { meaning: "لا يوجد", word: "ماكو" },
    { meaning: "بكام؟", word: "جم؟ / تشم" },
    { meaning: "الأصدقاء", word: "ربع" },
    { meaning: "تريد؟", word: "تبي؟" },
    { meaning: "رجع البيت", word: "رد البيت" },
    { meaning: "تجاهل", word: "طاف" },
    { meaning: "يلف", word: "يفتر" },
    { meaning: "ليه؟", word: "شكو؟" },
    { meaning: "مالها علاقة", word: "وش دخل؟" },
    { meaning: "بجد؟", word: "صج" },
    { meaning: "منتظر", word: "ناطر" },
    { meaning: "بعد بكرة", word: "عقب باجر" },
    { meaning: "رحلة برية", word: "كشته" },
    { meaning: "يرمي", word: "يجط" },
    { meaning: "أحسنت", word: "كفو" },
    { meaning: "لا تقلق", word: "لا يحاتي" },
    { meaning: "لا يجوز", word: "ما يصير" },
    { meaning: "تعبني جدًا", word: "لوعت جبدي" },
    { meaning: "جائع", word: "يوعان" },
    { meaning: "الدجاج", word: "الدياي" },
    { meaning: "الطريق", word: "الطريج" },
    { meaning: "يتكلم كلام فاضي", word: "يسولف سوالف" },
    { meaning: "وينك مختفي؟", word: "وين صاك؟" },
    { meaning: "ما فيه أمل", word: "ماكو فايدة" },
    { meaning: "الجمبري", word: "روبيان" },
    { meaning: "الشغل / عملي", word: "دوام / دوامي" },
    { meaning: "مبكر", word: "مبجر / ابجر" },
    { meaning: "احتياجات", word: "مقاضي" },
    { meaning: "عديم الفهم", word: "مطفي" },
    { meaning: "جننته", word: "خبّلته" },
    { meaning: "تشاجر", word: "تهاوش" },
    { meaning: "يخرب", word: "يعفس" },
    { meaning: "متكبر", word: "خشمه فوق" },
    { meaning: "بلا معنى", word: "ما وراه سالفة" },
    { meaning: "تجمع", word: "يمعة" },
    { meaning: "أطفال", word: "يهال" },
    { meaning: "جولة بالشاليه", word: "نفتر بالشاليه" },
    { meaning: "مجلس شبابي", word: "دوانية" },
    { meaning: "تظن / تعتقد", word: "عبالك" },
    { meaning: "يبكي", word: "يبچي" },
    { meaning: "متجاهله", word: "ساحب عليه" },
    { meaning: "انضحك عليه", word: "مقصوص عليه" },
    { meaning: "شغل عشوائي", word: "خربوطة / خرابيط" },
    { meaning: "يخوف", word: "يخرع" },
    { meaning: "وقح", word: "ما يستحي" },
    { meaning: "مستمتعين", word: "مستانسين" },
    { meaning: "تعبان / مو مركز", word: "متخربط" },
    { meaning: "بعد ما حصل", word: "عقب ما صار" },
    { meaning: "نغض النظر", word: "نطوفها" },
    { meaning: "أنيق ومرتب", word: "كشخة" },
    { meaning: "يبدأ", word: "يبلش" },
    { meaning: "كثير", word: "وايد / واجد" },
    { meaning: "دسته", word: "درزن" },
    { meaning: "مدينة / العاصمة", word: "ديرة" },
    { meaning: "شتيمة نابية", word: "كل زق" },
    { meaning: "لخبطة / مشكلة", word: "لويا" }
  ]
};

export const CATERING_DATA = {
  'Pattie': {
    packages: [
      { id: 1, title: '15 Persons', desc: '45 Sliders + 15 Fries + 15 Drinks', price: '95.000 KD' },
      { id: 2, title: '20 Persons', desc: '60 Sliders (Mix) + 20 Fries + 20 Drinks', price: '115.000 KD' },
      { id: 3, title: '30 Persons', desc: '90 Sliders (Mix) + 30 Fries + 30 Drinks', price: '150.000 KD' },
      { id: 4, title: '40 Persons', desc: '120 Sliders (Mix) + 40 Fries + 40 Drinks', price: '195.000 KD' },
      { id: 5, title: 'Extra Meal', desc: 'We Can add all sides except Chicken Nuggets 10 Pcs, Beef Cruch and Pattie Fries', price: '4.350 KD' }
    ],
    terms: [
      'Service hours 12:00 PM - 11:55 PM',
      'Two bookings are available in one day, but on the condition that there are 6 hours between the two bookings.',
      'Service hours 2 hour',
      'Male employees only',
      'Setup time 1h',
      'Electricity required',
      'Online payment only',
      'Cancellation 24h -> 50% non-refundable',
      '50% non-refundable',
      'The maximum limit for booking per day is 1 station',
      'The bear is not included will be added for an additional 35 dinars, subject to availability'
    ],
    facilities: [
      'Grill Machine 1M (3 Faz)',
      'Size 3M x 2.5M',
      'Gas',
      'Fryer Small Size',
      '3 Tables (1M each)',
      'Catering is not available on the roof or in the basements'
    ]
  },
  'Slice': {
    packages: [
      { id: 1, title: 'Beef Doner Station', desc: '50-55 Persons\n\n40 Regular-sized Beef Pita Doner\n40 Regular-sized Beef Saj Doner\nFrench Fries\n50 MIX of Drinks', price: '175.000 KD' },
      { id: 2, title: 'Chicken Doner Station', desc: '50-55 Persons\n\n40 Regular-sized Chicken Pita Doner\n40 Regular-sized Chicken Saj Doner\nFrench Fries\n50 MIX of Drinks', price: '175.000 KD' },
      { id: 3, title: 'Combo Station', desc: '100-110 Persons\n\n80 Regular-sized Pita Doner\n80 Regular-sized Saj Doner\nFrench Fries\n100 MIX of Drinks', price: '340.000 KD' }
    ],
    terms: [
      'Service hours 12:00 PM - 11:55 PM',
      'Male employees only (No female staff)',
      'Setup time 1h 30m at customer venue',
      'Electricity required',
      'Online payment only',
      'Cancellation within 24h -> 50% non-refundable',
      'The maximum limit for booking per day is 1 station'
    ],
    facilities: [
      '1 or 2 Doner Machines (Needs Electricity)',
      '1 Toaster (Needs Electricity)',
      'Gas',
      'Fryer Small Size',
      'Size 2M x 2M',
      'Catering is not available on the roof or in the basements'
    ]
  },
  'Just C': {
    packages: [
      { id: 1, title: '30 Pax - Burger', desc: '30 Burgers + 30 Fries + 30 Drinks', price: '115.500 KD' },
      { id: 2, title: '30 Pax - Slider', desc: '60 Sliders + 30 Fries + 30 Drinks', price: '120.000 KD' },
      { id: 3, title: 'Extra Meal - (Burger)', desc: '1 Burger (Sesame or Potato Bun) + Fries + Drink', price: '3.850 KD' },
      { id: 4, title: 'Extra Meal - (Slider)', desc: '2 Sliders (Sesame or Potato Bun) + Fries + Drink', price: '4.000 KD' }
    ],
    terms: [
      'Service hours 12:00 PM - 11:55 PM',
      'Male employees only',
      'Setup time in customers venue is 1 hour 30 minutes',
      'Electricity is required (Minimum 4000W)',
      'Online payment only',
      'Cancellation 24h -> 50% non-refundable',
      'Electricity is not available in the basement or upper floors',
      'The maximum limit for booking per day is 1 station'
    ],
    facilities: [
      'Grill Machine 1M (Needs Electricity)',
      'Size: 2M x 2M',
      'Gas',
      'Fryer Small Size',
      'No Chicken - All Beef Only',
      'Catering is not available on the roof or in the basements'
    ]
  },
  remoteAreas: [
    { location: 'Liah - Jahra', price: '15.000' },
    { location: 'Mutlaa - Jahra', price: '15.000' },
    { location: 'Rawdatain - Jahra', price: '15.000' },
    { location: 'Rdaifa - Jahra', price: '15.000' },
    { location: 'Sabriya - Jahra', price: '15.000' },
    { location: 'Salmi - Jahra', price: '15.000' },
    { location: 'Shaqayia - Jahra', price: '15.000' },
    { location: 'Subiya - Jahra', price: '15.000' },
    { location: 'Umm Al Aish - Jahra', price: '15.000' },
    { location: 'Abdalli - Chalet/Farm', price: '15.000' },
    { location: 'Al-Zour - Chalet/Farm', price: '15.000' },
    { location: 'Bnaider - Chalet/Farm', price: '15.000' },
    { location: 'Dhubaiya - Chalet/Farm', price: '15.000' },
    { location: 'Julaia - Chalet/Farm', price: '15.000' },
    { location: 'Kabd Farms - Chalet/Farm', price: '15.000' },
    { location: 'Khiran - Chalet/Farm', price: '15.000' },
    { location: 'Mina Abdulla - Chalet - Chalet/Farm', price: '15.000' },
    { location: 'Nuwaiseeb - Chalet/Farm', price: '15.000' },
    { location: 'Sabah Al Ahmad Sea City - Chalet/Farm', price: '15.000' },
    { location: 'Wafra - Chalet/Farm', price: '15.000' },
    { location: 'West Doha - Chalet/Farm', price: '15.000' },
    { location: 'Abdali Camps - Camps', price: '15.000' },
    { location: 'Kabd Camps - Camps', price: '15.000' },
    { location: 'Khiran Camps - Camps', price: '15.000' },
    { location: 'Nuwaiseeb Camps - Camps', price: '15.000' },
    { location: 'Rawdatain Camps - Camps', price: '15.000' },
    { location: 'Salmi Camps - Camps', price: '15.000' },
    { location: 'Subiya Camps - Camps', price: '15.000' },
    { location: 'Wafra Camps - Camps', price: '15.000' }
  ]
};

export const COMPLAINT_STATUSES = [
  { id: 1, title: 'Hygiene', status: 'Open', iconName: 'Beaker' },
  { id: 2, title: 'Hair', status: 'Open', iconName: 'User' },
  { id: 3, title: 'Foreign Object', status: 'Open', iconName: 'Package' },
  { id: 4, title: 'Food Poisoning', status: 'Open', iconName: 'Skull' },
  { id: 5, title: 'Expired', status: 'Open', iconName: 'CalendarX' },
  { id: 6, title: 'Attitude', status: 'Open', iconName: 'Frown' },
  { id: 7, title: 'Bad Smell', status: 'Open', iconName: 'Wind' },
  { id: 8, title: 'Rancid Taste', status: 'Open', iconName: 'Waves' },
  { id: 9, title: 'Over Cooked', status: 'Open', iconName: 'Flame' },
  { id: 10, title: 'Under Cooked', status: 'Open', iconName: 'Waves' },
  { id: 11, title: 'Missing', status: 'Closed', iconName: 'Archive' },
  { id: 12, title: 'Wrong', status: 'Closed', iconName: 'Repeat' },
  { id: 13, title: 'Less Quantity', status: 'Closed', iconName: 'Scale' },
  { id: 14, title: 'Salty', status: 'Closed', iconName: 'Droplets' },
  { id: 15, title: 'Oily', status: 'Closed', iconName: 'CloudRain' },
  { id: 16, title: 'Dry', status: 'Closed', iconName: 'Beef' },
  { id: 17, title: 'Damaged', status: 'Closed', iconName: 'AlertTriangle' },
  { id: 18, title: 'Cold', status: 'Closed', iconName: 'Snowflake' },
  { id: 19, title: 'Technical Issue', status: 'Closed', iconName: 'Settings' },
  { id: 20, title: 'Late Delivery', status: 'Closed', iconName: 'Clock' },
  { id: 21, title: 'Packaging Issue', status: 'Closed', iconName: 'PackageOpen' }
];

export const MEAT_SOURCES = {
  'Shawarma Shakir': {
    items: [
      { label: '🥩 اللحم البقري', value: 'جنوب أفريقيا' },
      { label: '🐏 لحم الغنم', value: 'أستراليا' },
      { label: '🌮 اللحم المستخدم', value: 'مخلوط بين غنم أسترالي وعجل جنوب أفريقيا' },
      { label: '🐔 الشاورما الدجاج', value: 'كويتي' },
      { label: '🍗 دجاج بروستد', value: 'برازيلي / إماراتي' },
      { label: '🍢 المشاوي', value: 'باراجواي' },
      { label: '❄️ الحالة', value: 'مجمد ومبرد' },
      { label: '🍳 الزيت', value: 'خليط (دوار الشمس + كانولا + زيت نخيل + زيت زيتون للسلطات)' }
    ],
    footer: 'الذبح على الشريعة الاسلامية حلال'
  },
  'Yelo Pizza': {
    items: [
      { label: '🥩 اللحم', value: 'بيروني كلاسيك (السعودية)' },
      { label: '🥩 اللحم', value: 'بيبروني بانو (أمريكي)' },
      { label: '🧆 كرات اللحم', value: 'أمريكي' },
      { label: '🥓 بيكون بقري', value: 'إماراتي' },
      { label: '🐔 الدجاج', value: 'أجنحة سعودية / مكعبات إماراتية' },
      { label: '❄️ الحالة', value: 'مجمد' },
      { label: '🍳 الزيت', value: 'زيت فول سوداني + زيت زيتون' },
      { label: '🥣 العجينة', value: 'البان بنها زيت زيتون' },
      { label: '🥣 باقي العجين', value: 'لا يحتوي علي زيت' }
    ],
    footer: 'الذبح على الشريعة الاسلامية حلال'
  },
  'BBT': {
    items: [
      { label: '🥩 اللحم البقري', value: 'أمريكا' },
      { label: '🐔 الدجاج', value: 'الإمارات' },
      { label: '🐔 السوبر الدجاج', value: 'الإمارات' },
      { label: '🥩 السوبر اللحم', value: 'الكويت' },
      { label: '🍗 الناجتس', value: 'شركة نبيل الاردن' },
      { label: '❄️ الحالة', value: 'مجمد' },
      { label: '🍳 الزيت', value: 'زيت نباتي فاخر' }
    ],
    footer: 'الذبح على الشريعة الاسلامية حلال'
  },
  'Pattie Pattie': {
    items: [
      { label: '🥩 اللحم البقري', value: 'أمريكا' },
      { label: '🐔 الدجاج', value: 'الإمارات' },
      { label: '❄️ الحالة', value: 'مجمد' },
      { label: '🍳 الزيت', value: 'زيت نباتي فاخر' }
    ],
    footer: 'الذبح على الشريعة الاسلامية حلال'
  },
  'Just C': {
    items: [
      { label: '🥩 اللحم البقري', value: 'أمريكا' },
      { label: '🐔 الدجاج', value: 'الإمارات' },
      { label: '❄️ الحالة', value: 'مجمد' },
      { label: '🍳 الزيت', value: 'زيت الفول السوداني' }
    ],
    footer: 'الذبح على الشريعة الاسلامية حلال'
  },
  'Slice': {
    items: [
      { label: '🥩 اللحم البقري', value: 'أمريكا' },
      { label: '🐔 الدجاج', value: 'أمريكا' },
      { label: '❄️ الحالة', value: 'مجمد' },
      { label: '🍳 الزيت', value: 'زيت نباتي فاخر' }
    ],
    footer: 'الذبح على الشريعة الاسلامية حلال'
  },
  'Chili pepper': {
    items: [
      { label: '🥩 ستيرلوين', value: 'أمريكا / أستراليا' },
      { label: '🥩 تندرلوين', value: 'باراجواي' },
      { label: '🐏 لحم الضأن', value: 'جنوب أفريقيا / أستراليا' },
      { label: '🥩 اللحم المفروم', value: 'أمريكا / أستراليا / باراجواي' },
      { label: '🐔 الدجاج', value: 'أوكرانيا / الإمارات' },
      { label: '🐟 المأكولات البحرية', value: 'جمبري (الهند / الإمارات)' },
      { label: '❄️ الحالة', value: 'مجمد' },
      { label: '🍳 الزيت', value: 'زيت ذرة نقي' }
    ],
    footer: 'الذبح على الشريعة الاسلامية حلال'
  }
};

export const CANCELLATION_DATA = {
  policy: {
    title: 'Cancellation & Refund Policy',
    description: 'The cancellation of website orders (whether delivery or pickup) as well as call center orders made through the Ordable application (paid orders) will be carried out as follows:',
    steps: [
      {
        icon: 'Send',
        text: 'The call center agent sends a message to the concerned branch with: (Branch name – Order number – Reason for cancellation – Delivery company).'
      },
      {
        icon: 'MessageSquare',
        text: 'The same message is also shared with the designated cancellation group.'
      },
      {
        icon: 'Truck',
        text: 'The assigned driver for the order is canceled and notified accordingly.'
      }
    ],
    refund: {
      title: 'Refund Process',
      methods: [
        { name: 'K-Net', time: '3–5 business days', icon: 'CreditCard' },
        { name: 'Visa / MasterCard', time: '3–5 business days', icon: 'CreditCard' }
      ]
    }
  }
};

export const CONTACTS_DATA = {
  shakir: [
    {
      managers: [
        { name: 'Cemil Arslan', role: 'Ops Manager', phone: '94122245' },
        { name: 'Mohamed Zanaty', role: 'Ops Manager', phone: '97397561' }
      ],
      branches: [
        { 
          name: 'Shakir Salmiya', 
          lead: { name: 'Ahmad Kiwan', phone: '56638061' },
          members: [
            { name: 'Dill Bahadour', phone: '66938629' },
            { name: 'Kareem', phone: '50157575' }
          ]
        },
        { 
          name: 'Shakir Qurain', 
          lead: { name: 'Mohamed Fathi', phone: '55587006' },
          members: [
            { name: 'Laxman', phone: '65068902' },
            { name: 'Ragan', phone: '69040386' },
            { name: 'Nasser', phone: '66824363' }
          ]
        },
        { 
          name: 'Shakir City', 
          lead: { name: 'Mahmud Abaza', phone: '67000698' },
          members: [
            { name: 'Farag', phone: '68542449' }
          ]
        },
        { 
          name: 'Shakir Ardiya', 
          lead: { name: 'Hamad', phone: '69644175' },
          members: [
            { name: 'Govinda', phone: '66334605' },
            { name: 'Argel', phone: '50724584' }
          ]
        }
      ]
    },
    {
      managers: [
        { name: 'Mohamed Farouk', role: 'Area Manager', phone: '' },
        { name: 'Rida Sleem', role: 'Area Manager', phone: '' }
      ],
      branches: [
        { 
          name: 'Shakir Al Rai', 
          lead: { name: 'Saber', phone: '65952382' },
          members: [
            { name: 'Suresh', phone: '60731398' },
            { name: 'Nima', phone: '66049622' }
          ]
        },
        { 
          name: 'Shakir Egaila', 
          lead: { name: 'Abdullah', phone: '98582727' },
          members: [
            { name: 'Ram', phone: '60015058' },
            { name: 'Aakash', phone: '66307905' }
          ]
        },
        { 
          name: 'Shakir Jahra', 
          lead: { name: 'Ahmad Magdy', phone: '64137135' },
          members: [
            { name: 'Jeffrey', phone: '69028338' },
            { name: 'Jushwa', phone: '65867514' }
          ]
        },
        { 
          name: 'Hawally', 
          lead: { name: 'Jiwan', phone: '66203404' },
          members: [
            { name: 'Sunil', phone: '65978606' },
            { name: 'Sherwin', phone: '41068610' }
          ]
        }
      ]
    }
  ],
  yelo: {
    branches: [
      { branch: "Adailiya", staff: "Shiv Shankar Pandit", phone: "69613684" },
      { branch: "Qurtoba", staff: "Romeo Rillera", phone: "65645406" },
      { branch: "Dahiya", staff: "Johnery Wahiman Palisan", phone: "51039702" },
      { branch: "Yard", staff: "Bal Krishna Neupane", phone: "65858657" },
      { branch: "Ardiya", staff: "Sanjib Singh", phone: "65448836" },
      { branch: "Jaber", staff: "Zenlu Felizarta Virgo", phone: "90987594" },
      { branch: "Egaila", staff: "James Banadera", phone: "50989590" },
      { branch: "Hawally", staff: "Jeffrey Flores", phone: "65835687" },
      { branch: "Salmiya", staff: "Arden Cruz", phone: "65828129" },
      { branch: "Fahaheel", staff: "Bikram Adhikari", phone: "65828129" },
      { branch: "Jleeb", staff: "Aris Sapayla", phone: "60393178" },
      { branch: "Sabah Al Salem", staff: "Joeffry Salas", phone: "51426752" },
      { branch: "Khiran", staff: "Sanjib Chaudhary", phone: "96779602" },
      { branch: "Jabriya", staff: "Jim Carl San Pedro", phone: "99726536" },
      { branch: "Ishbiliya", staff: "Ryan Nempa", phone: "99726536" },
      { branch: "Sabah Al Ahmad", staff: "Md Imran Ansari", phone: "66668712" },
      { branch: "Salwa", staff: "Aarjan Karki", phone: "51203453" },
      { branch: "Jahra", staff: "Basant Man", phone: "65057633" }
    ],
    areaCoverage: [
      { name: "Mr. Deepak", phone: "51505931", areas: ["Khiran", "Sabah Al Ahmed", "Fahaheel", "Salmiya", "Salwa", "Vibes"] },
      { name: "Mr. Alyazar", phone: "91106301", areas: ["Eqaila", "Sabah Al Salem", "Yard"] },
      { name: "Mr. Mohamed Nada", phone: "94137736", areas: ["Jahra", "Jaber Al Ahmed", "Ardiya", "Ishbiliya", "Jleeb"] },
      { name: "Mr. Arjay", phone: "55087219", areas: ["Jabriya", "Qortuba", "Hawally", "Adailiya", "Dahya"] }
    ]
  },
  bbt: [
    { name: "BBT Jahra", contacts: [{ name: "Mariano", phone: "98594339" }, { name: "Jalaudin", phone: "65699107" }] },
    { name: "BBT Ardiya", contacts: [{ name: "Anil", phone: "55238982" }, { name: "Edward", phone: "69018021" }] },
    { name: "BBT Mishref", contacts: [{ name: "Jay Ar", phone: "60470557" }, { name: "Binod", phone: "65588682" }] },
    { name: "BBT Salmiya", contacts: [{ name: "Renante", phone: "66052310" }, { name: "Mark", phone: "55809950" }] },
    { name: "BBT Yard", contacts: [{ name: "John Paul", phone: "50061573" }, { name: "Felmer", phone: "69610417" }] },
    { name: "BBT Hilltop", contacts: [{ name: "Romnick", phone: "50587030" }, { name: "Anna", phone: "66924317" }] },
    { name: "BBT Park", contacts: [{ name: "Jobert", phone: "56650237" }, { name: "Michelle", phone: "67634474" }] },
    { name: "BBT Adailiya", contacts: [{ name: "Aris", phone: "60034607" }, { name: "Christian", phone: "50990539" }] },
    { name: "BBT Shuhada", contacts: [{ name: "Honey", phone: "51261624" }, { name: "Archie", phone: "50554987" }] },
    { name: "BBT Mangaf", contacts: [{ name: "Jonathan", phone: "55690495" }, { name: "Dennis", phone: "50210441" }] },
    { name: "BBT Sabah Al Ahmad", contacts: [{ name: "Youssef", phone: "66492025" }, { name: "Vhon", phone: "60694381" }] }
  ],
  tabel: [],
  mishmash: [],
  platforms: [
    {
      id: 'myFatoora',
      name: 'My Fatoora',
      icon: 'CreditCard',
      url: 'https://portal.myfatoorah.com/En/All/Account/Login',
      brands: [
        { name: 'Brand Shakir', user: 'phelo@swishhh.net', pass: 'Shakir@123' },
        { name: 'Brand Yelo', user: 'ulung@swishhh.net', pass: 'Yelo@123' },
        { name: 'Brand BBT', user: 'cc@swishhh.net', pass: 'BBt@123456' },
        { name: 'Brand Slice', user: 'complaints@swishhh.net', pass: 'Swish@123' },
        { name: 'Brand Just C', user: 'a.shokr@swishhh.net', pass: 'Swish@123' },
        { name: 'Brand Pattie', user: 'moaz@swishhh.net', pass: 'Pattie@123' }
      ]
    },
    {
      id: 'verdi',
      name: 'Verdi',
      icon: 'Users',
      url: 'https://tryverdi.com/',
      brands: [
        { name: 'Brand Shakir', user: 'shakirardiya@swishhh.net', pass: '123456789' },
        { name: 'Brand Yelo', user: 'yeloqortuba@swishhh.net', pass: '123456789' },
        { name: 'Brand BBT', user: 'bbt-qurtaba@swishhh.net', pass: '123456789' },
        { name: 'Brand Slice', user: 'sliceardiya@swishhh.net', pass: '123456789' },
        { name: 'Brand Just C', user: 'justcmishref@swishhh.net', pass: '123456789' },
        { name: 'Brand Pattie', user: 'pattie-qurtaba@swishhh.net', pass: '123456789' },
        { name: 'Brand Pattie (Chili)', user: 'chilipeppercity@swishhh.net', pass: '123456789' }
      ]
    },
    {
        id: 'tokan',
        name: 'Grubtech / Tokan',
        icon: 'Box',
        brands: [
            { name: 'Tokan All Brands', user: 'ccm@swishhh.net', pass: 'Swish@123', url: 'https://app.tookanapp.com/v2/#/page/login' },
            { name: 'Talabat All Brands', user: 'cc@swishhh.net', pass: 'Swish@123', url: 'https://partner-app.talabat.com/' },
            { name: 'Grubtech All Brands', user: 'ahmed@swishhh.net', pass: 'Rat@51069', url: 'https://grubops.grubtech.io/#/login' },
            { name: 'Deliveroo', user: 'cc@swishhh.net', pass: 'Swish@123456', url: 'https://partner-hub.deliveroo.com/orders?orgId=551372&startDate=2026-02-25&endDate=2026-02-25&branchId=772739' },
            { name: 'Share Point', user: 'cc@swishhh.net', pass: 'Swish@2025@', url: 'https://etckuwait-my.sharepoint.com/' },
            { name: 'Respond', user: 'complaints@swishhh.net', pass: 'Complaints@123456', url: 'https://app.respond.io/space/191969/inbox/252910063' },
            { name: 'Keeta', user: 'CC_swish@m.meeta.com', pass: 'Swish@123', url: 'https://merchant-eu.mykeeta.com/' },
            { name: 'Bilbayt', user: 'mabdulaziz@swishhh.net', pass: 'Swish@123', url: 'https://vendor.bilbayt.com/' }
        ]
    },
    {
      id: 'doDelivery',
      name: 'Do Delivery',
      icon: 'Truck',
      url: 'https://dodelivery.me/login',
      brands: [
        { name: 'Brand Shakir', user: 'mabdulaiz@swishhh.net', pass: '12345678' },
        { name: 'Brand Yelo', user: 'yeloqortuba@swishhh.net', pass: '12345678' },
        { name: 'Brand BBT', user: 'ali.g@swishhh.net', pass: '12345678' }
      ]
    },
    {
      id: 'jahez',
      name: 'Jahez',
      icon: 'ShoppingBag',
      url: 'https://portal.jahez.net/restaurant-login.htm?action=logout',
      branches: [
        { name: 'Abdallah El salem', user: 'yelopizzakwaas@jahez.net', pass: 'Dahiya@1' },
        { name: 'Qurtoba', user: 'yelopizzakwqortuba@jahez.net', pass: 'Qurtoba@1' },
        { name: 'Ardiya', user: 'yelopizzakwardiya@jahez.net', pass: 'Ardhiya@1' },
        { name: 'Eqaila', user: 'yelopizzakwaleqaila@jahez.net', pass: 'SwisH@10' },
        { name: 'Salmiya', user: 'yelopizzasalmiya@jahez.net', pass: 'SwisH@10' },
        { name: 'Hawally', user: 'yelopizzahawally@jahez.net', pass: 'SwisH@10' },
        { name: 'Fnaitees', user: 'yelopizzakwfnaitees@jahez.net', pass: 'Fnaiteees@1' },
        { name: 'Jabriya', user: 'Yelopizzakwjab@jahez.net', pass: 'SwisH@10' },
        { name: 'Adailiya', user: 'yelopizzakwada@jahez.net', pass: 'SwisH@10' },
        { name: 'Khiran', user: 'yelopizzakwKhir@jahez.net', pass: 'SwisH@10' },
        { name: 'Jleeb Al-Shuyoukh', user: 'yelopizzakwjash@jahez.net', pass: 'SwisH@10' },
        { name: 'Jaber Al Ahmad', user: 'yelopizzakwjaah@jahez.net', pass: 'SwisH@10' },
        { name: 'Fahaheel', user: 'yelopizzakwfahaheel@jahez.net', pass: 'SwisH@10' },
        { name: 'Salwa', user: 'yelopizzakwsalwa@jahez.net', pass: 'SwisH@10' },
        { name: 'Sabah el Ahmed', user: 'yelopizzakwsaa@jahez.net', pass: 'SwisH@10' },
        { name: 'Jahra', user: 'yelopizzakwjahra@jahez.net', pass: 'Yjahhra@1' }
      ]
    },
    {
      id: 'cari',
      name: 'Cari',
      icon: 'Store',
      url: 'https://vendors.getcari.com/login',
      brands: [
        { name: 'Brand Just C', user: 'justcvibes@swishhh.net', pass: 'Gc@43334' },
        { name: 'Brand Yelo', user: 'Yeloportaladmin@getcari.com', pass: 'Gc@11223' },
        { name: 'Chili Pepper', user: 'chilipepperportaladmin@getcari.com', pass: 'Gc@11223' },
        { name: 'Brand Slice', user: 'sliceportaladmin@getcari.com', pass: 'Gc@11224' },
        { name: 'Brand BBT', user: 'bbtportaladmin@getcari.com', pass: 'Gc@11225' }
      ]
    },
    {
      id: 'vthru',
      name: 'V-Thru',
      icon: 'Zap',
      url: 'https://store.v-thru.com/login',
      categories: [
          {
              name: 'Slice',
              items: [
                  { name: 'Adailiya', user: 'slice@adailiya.com', pass: 'vthru123' },
                  { name: 'Jabriya', user: 'slice@jabriya.com', pass: 'slice321' },
                  { name: 'City', user: 'slice@merqab.com', pass: 'vthru123' },
                  { name: 'Mishref', user: 'slice@mishrif.com', pass: 'Vthru@123' }
              ]
          },
          {
              name: 'Yelo',
              items: [
                  { name: 'Fahahel', user: 'yelo@fahahel.com', pass: 'Vthru123' },
                  { name: 'Adailiya', user: 'yelo@adailiya.com', pass: 'Vthru123' },
                  { name: 'Dahiya', user: 'yelo@dhahia.com', pass: 'Vthru123' },
                  { name: 'Egaila', user: 'yelo@egaila.com', pass: 'Vthru123' },
                  { name: 'Jaleeb', user: 'yelo@jleeb.com', pass: 'Vthru123' },
                  { name: 'Salmiya', user: 'yelo@salmiya.com', pass: 'Vthru123' },
                  { name: 'Jabriya', user: 'yelo@jabriya.com', pass: 'Vthru123' },
                  { name: 'Ishbeliya', user: 'yelo@ishbeliya.com', pass: 'Vthru123' },
                  { name: 'Sabah Al-Salem', user: 'yelo@sabah.com', pass: 'Vthru123' },
                  { name: 'Sabah Al-Ahmed', user: 'yelo@sabaha.com', pass: 'Vthru123' }
              ]
          },
          {
              name: 'Shakir',
              items: [
                  { name: 'RAI', user: 'ssan.elsayed@etc-kwt.com', pass: 'Vthru123' },
                  { name: 'Salmiya', user: 'shakir@salmiya.com', pass: 'Vthru123' },
                  { name: 'Qurain', user: 'shakir@qurain.com', pass: 'Vthru123' },
                  { name: 'City', user: 'shakir@city.com', pass: 'Vthru123' },
                  { name: 'Egaila', user: 'shakir@egaila.com', pass: 'Vthru123' },
                  { name: 'Ardiya', user: 'shakir@ardiya.com', pass: 'Vthru123' },
                  { name: 'Hawally', user: 'shawarma@shakir.com', pass: 'Vthru123' },
                  { name: 'Jahra', user: 'shakir@jahra.com', pass: 'Vthru123' }
              ]
          },
          {
              name: 'Chili',
              items: [
                  { name: 'Hawally', user: 'chilipepper@hawally.com', pass: 'Vthru123' }
              ]
          }
      ]
    },
    {
      id: 'menu',
      name: 'MENU',
      icon: 'Menu',
      items: [
          { name: 'Shakir Website', url: 'https://www.shawermashakir.com/' },
          { name: 'Shakir Talabat', url: 'https://www.talabat.com/ar/kuwait/restaurant/682058/shawarma-shhakir?aid=9' },
          { name: 'Yelo Website', url: 'https://www.yelopizza.com/' },
          { name: 'Yelo Talabat', url: 'https://www.talabat.com/ar/kuwait/restaurant/727791/yelo-pizza?aid=9' },
          { name: 'BBT Website', url: 'https://bbt.ordable.com/' },
          { name: 'BBT Talabat', url: 'https://www.talabat.com/kuwait/restaurant/699074/bbt-yard?aid=55' },
          { name: 'Slice Website', url: 'https://www.slicedoner.com/' },
          { name: 'Slice Talabat', url: 'https://www.talabat.com/kuwait/restaurant/22099/slice-qibla?aid=4' },
          { name: 'Just C Website', url: 'https://www.justcburger.com/' },
          { name: 'Just C Talabat', url: 'https://www.talabat.com/kuwait/restaurant/601133/just-c-mishref?aid=9' },
          { name: 'Chili Website', url: 'https://www.eatchilipepper.com/' },
          { name: 'Chili Talabat', url: 'https://www.talabat.com/kuwait/restaurant/23485/chili-pepper-kuwait-city?aid=4' },
          { name: 'Pattie Website', url: 'https://pattie.ordable.com/' },
          { name: 'Pattie Talabat', url: 'https://www.talabat.com/kuwait/restaurant/705560/pattie-pattie?aid=27' },
          { name: 'Ordable Admin', url: 'https://www.yelopizza.com/manage/login' }
      ]
    }
  ],
  extensions: {
    branches: [
      { ext: "400", name: "BBT Shamiya" },
      { ext: "401", name: "BBT HillTop" },
      { ext: "402", name: "BBT / Pattie , West Mishrif" },
      { ext: "403", name: "BBT / Pattie , Salmiya" },
      { ext: "404", name: "BBT Adailiya" },
      { ext: "405", name: "Pattie Adailiya" },
      { ext: "700", name: "Yelo! Pizza Adailiya" },
      { ext: "701", name: "Yelo! Pizza Qortuba" },
      { ext: "702", name: "Yelo! Pizza Dahiya" },
      { ext: "703", name: "Yelo! Pizza Jleeb" },
      { ext: "704", name: "Yelo! Pizza Jaber El Ahmed" },
      { ext: "705", name: "Yelo! Pizza Egaila" },
      { ext: "706", name: "Yelo! Pizza Salmiya" },
      { ext: "707", name: "Yelo! Pizza Ishbiliya" },
      { ext: "708", name: "Yelo! Pizza Fahaheel" },
      { ext: "709", name: "Yelo! Pizza Sabah El Salem" },
      { ext: "710", name: "Yelo! Pizza Jabriya" },
      { ext: "711", name: "Yelo! Pizza Sabah El Ahmed" },
      { ext: "712", name: "Yelo / Pattie / BBT , Ardiya" },
      { ext: "713", name: "Yelo / Pattie / BBT / Chili / Slice , Yard Mall" },
      { ext: "714", name: "Yelo / Pattie / Chili , Hawally" },
      { ext: "715", name: "Yelo / Pattie / BBT / Slice , Jahra" },
      { ext: "716", name: "Yelo! Pizza Khiran" },
      { ext: "717", name: "Yelo! Pizza Salwa" },
      { ext: "718", name: "Yelo! Pizza Vibes" },
      { ext: "800", name: "Shawarma Shakir Hawally" },
      { ext: "801", name: "Shawarma Shakir Jahra" },
      { ext: "802", name: "Shawarma Shakir Ardiya" },
      { ext: "803", name: "Shawarma Shakir Salmiya" },
      { ext: "804", name: "Shawarma Shakir City" },
      { ext: "805", name: "Shawarma Shakir Egaila" },
      { ext: "806", name: "Shawarma Shakir Rai" },
      { ext: "807", name: "Shawarma Shakir Qurain" },
      { ext: "1000", name: "Technical team" },
      { ext: "8", name: "Shawarma Shakir Key" },
      { ext: "7", name: "Yelo EX" },
      { ext: "4", name: "BBT EX" },
      { ext: "6", name: "Pattie EX" },
      { ext: "9", name: "Slice EX" },
      { ext: "10", name: "Chilli Pepper EX" },
      { ext: "2", name: "JUST C EX" }
    ],
    brands: [
      { name: "Slice", ext: "9", hotline: "1875423", landline: "22093650" },
      { name: "Yelo Pizza", ext: "7", hotline: "1881177", landline: "22909420" },
      { name: "Shakir", ext: "8", hotline: "1881199", landline: "22909424" },
      { name: "Just C", ext: "2", hotline: "22909421", landline: "51443333 - 51442222" },
      { name: "BBT", ext: "4", hotline: "22909425", landline: "22909425" },
      { name: "Chilli Pepper", ext: "10", hotline: "22909422", landline: "22909422" },
      { name: "LoveBird", ext: "3", hotline: "22909423", landline: "" },
      { name: "Pattie Pattie", ext: "6", hotline: "1881166", landline: "" },
      { name: "Talabat", ext: "", hotline: "22245002", landline: "" },
      { name: "Keeta", ext: "", hotline: "22393600", landline: "" },
      { name: "Deliveroo", ext: "", hotline: "22270143", landline: "" },
      { name: "Cari", ext: "", hotline: "22204362", landline: "" },
      { name: "Jahez", ext: "", hotline: "22254898", landline: "" },
      { name: "V-Thru", ext: "", hotline: "22063499", landline: "" }
    ],
    employees: [
      { id: 1, name: "Bassam Bayoumi", ext: "104" },
      { id: 2, name: "Carlos", ext: "107" },
      { id: 3, name: "Abdel Rahman", ext: "109" },
      { id: 4, name: "Aya Ramadan", ext: "110" },
      { id: 5, name: "Hamed", ext: "112" },
      { id: 6, name: "Ahmed Hussain", ext: "113" },
      { id: 7, name: "Adam", ext: "114" },
      { id: 8, name: "Sami", ext: "115" },
      { id: 9, name: "Moataz", ext: "116" },
      { id: 10, name: "Mohamed Mahmoud", ext: "117" },
      { id: 11, name: "Ali Mohamed", ext: "118" },
      { id: 12, name: "Loai", ext: "119" },
      { id: 13, name: "H Ali", ext: "101" },
      { id: 14, name: "Hamdy", ext: "111" },
      { id: 15, name: "Abdullah Fathy", ext: "122" },
      { id: 16, name: "Abdelwahab", ext: "123" },
      { id: 17, name: "Shokry", ext: "124" },
      { id: 18, name: "Mahmoud Kamal", ext: "126" },
      { id: 19, name: "Mahmoud Hamed", ext: "127" },
      { id: 20, name: "Ahmed Mohamed", ext: "128" },
      { id: 21, name: "Atef Salem", ext: "129" },
      { id: 22, name: "M Nagi", ext: "130" },
      { id: 23, name: "Antonie", ext: "131" },
      { id: 24, name: "A Alaa", ext: "132" },
      { id: 25, name: "Ahmed Kamel", ext: "134" },
      { id: 26, name: "A Disoky", ext: "135" },
      { id: 27, name: "M Anwar", ext: "136" },
      { id: 28, name: "M Ghareeb", ext: "137" },
      { id: 29, name: "Abdullah AlKaabi", ext: "152" },
      { id: 30, name: "Ahmed Ibrahim", ext: "159" }
    ],
    agents: []
  }
};

export const ALLERGEN_DATA = {
  yelo: {
    title: "Yelo Allergens",
    categories: [
      {
        id: "pizzas",
        name: "PIZZAS",
        items: [
          { id: 1, name: "MEAT LOVERS", allergens: "DAIRY, GLUTEN" },
          { id: 2, name: "PESTO PIZZA (MACROS PER PIECE)", allergens: "DAIRY, GLUTEN, NUTS, EGG, SOY, MUSTARD" },
          { id: 3, name: "YELO PEPPERONI PIZZA", allergens: "DAIRY, GLUTEN" },
          { id: 4, name: "CLASSIC PEPPERONI PIZZA", allergens: "DAIRY, GLUTEN" },
          { id: 5, name: "SOHO PIZZA", allergens: "DAIRY, GLUTEN" },
          { id: 6, name: "MARGHERITA PIZZA", allergens: "DAIRY, GLUTEN" },
          { id: 7, name: "EVERYTHING", allergens: "DAIRY, GLUTEN, SULPHITES" },
          { id: 8, name: "BUFFALO CHICKEN", allergens: "DAIRY, GLUTEN, EGG, SOY, MUSTARD" },
          { id: 9, name: "VEGGIE PIZZA", allergens: "DAIRY, GLUTEN, SULPHITES" }
        ]
      },
      {
        id: "sides",
        name: "SIDES",
        items: [
          { id: 1, name: "MAC & CHEESE", allergens: "GLUTEN, DAIRY, MUSTARD" },
          { id: 2, name: "BUFFALO MAC & CHEESE", allergens: "GLUTEN, DAIRY, MUSTARD" },
          { id: 3, name: "PEPPERONI GARLIC BREAD", allergens: "GLUTEN, DAIRY" },
          { id: 4, name: "LOADED WEDGES", allergens: "DAIRY, GLUTEN, EGG, SOY, MUSTARD" },
          { id: 5, name: "CHEESY GARLIC BREAD", allergens: "DAIRY, GLUTEN" },
          { id: 6, name: "BAKED WEDGES WITH RANCH SAUCE", allergens: "GLUTEN, DAIRY, EGG, SOY, MUSTARD" },
          { id: 43, name: "COOKIE", allergens: "GLUTEN, DAIRY, EGG" }
        ]
      },
      {
        id: "square",
        name: "SQUARE PIZZA",
        items: [
          { id: 1, name: "YELO PEPPERONI", allergens: "DAIRY, GLUTEN" },
          { id: 2, name: "MARGHERITA", allergens: "DAIRY, GLUTEN" },
          { id: 3, name: "EVERYTHING", allergens: "DAIRY, GLUTEN, SULPHITES" },
          { id: 4, name: "BUFFALO CHICKEN", allergens: "DAIRY, GLUTEN, EGG, SOY, MUSTARD" },
          { id: 5, name: "VEGGIE PIZZA", allergens: "DAIRY, GLUTEN, SULPHITES" }
        ]
      },
      {
        id: "seen",
        name: "SEEN JEEM X YELO!",
        items: [
          { id: 1, name: "YELO PEPPERONI", allergens: "DAIRY, GLUTEN" },
          { id: 2, name: "MARGHERITA", allergens: "DAIRY, GLUTEN" },
          { id: 3, name: "EVERYTHING", allergens: "DAIRY, GLUTEN, SULPHITES" },
          { id: 4, name: "BUFFALO CHICKEN", allergens: "DAIRY, GLUTEN, EGG, SOY, MUSTARD" },
          { id: 5, name: "VEGGIE PIZZA", allergens: "DAIRY, GLUTEN, SULPHITES" }
        ]
      },
      {
        id: "sauce",
        name: "Sauce",
        items: [
          { id: 32, name: "SPICY RANCH", allergens: "SOY, EGG, MUSTARD, DAIRY" },
          { id: 33, name: "COOL RANCH", allergens: "SOY, EGG, MUSTARD, DAIRY" },
          { id: 34, name: "PESTO RANCH", allergens: "SOY, EGG, MUSTARD, DAIRY, NUTS" },
          { id: 35, name: "BBQ RANCH", allergens: "SOY, EGG, MUSTARD, DAIRY" },
          { id: 36, name: "APRICOT JAM", allergens: "—" },
          { id: 37, name: "BACON RANCH", allergens: "SOY, EGG, MUSTARD, DAIRY" },
          { id: 38, name: "HONEY MUSTARD RANCH", allergens: "SOY, EGG, MUSTARD, DAIRY" },
          { id: 39, name: "BUFFALO RANCH", allergens: "SOY, EGG, MUSTARD, DAIRY" },
          { id: 40, name: "TRUFFLE RANCH", allergens: "SOY, EGG, MUSTARD, DAIRY, SULPHITES" },
          { id: 41, name: "SKINNY RANCH", allergens: "DAIRY, CORIANDER" },
          { id: 42, name: "CHILI FLAKES", allergens: "*" }
        ]
      }
    ]
  },
  bbt: {
    title: "BBT Allergens",
    categories: [
      {
        id: "combos",
        name: "COMBOS",
        items: [
          { id: 1, name: "ONE STOP COMBO", allergens: "GLUTEN, DAIRY, MUSTARD, SOY, EGG" },
          { id: 2, name: "WESTCOAST COMBO", allergens: "GLUTEN, DAIRY, MUSTARD" },
          { id: 3, name: "QUARTER POWDER COMBO", allergens: "GLUTEN, DAIRY, MUSTARD, SOY, EGG" },
          { id: 4, name: "SOUTHWEST COMBO", allergens: "GLUTEN, DAIRY, MUSTARD, SOY, EGG" },
          { id: 5, name: "CHICKEN FILLAAA COMBO", allergens: "DAIRY, GLUTEN, SOY, EGG, MUSTARD" },
          { id: 6, name: "LITTLE WRAP FILLAAA COMBO", allergens: "GLUTEN, MUSTARD, EGG, SOY, DAIRY" },
          { id: 7, name: "CHICKEN NUGGET COMBO", allergens: "GLUTEN, SOYA, MUSTARD" },
          { id: 8, name: "TRIPLE X COMBO", allergens: "GLUTEN, MUSTARD, EGG, SOY, DAIRY" }
        ]
      },
      {
        id: "chicken",
        name: "CHICKEN FILLAAA",
        items: [
          { id: 1, name: "TENDERS FILLAAA", allergens: "GLUTEN, MUSTARD, EGG, SOY, DAIRY, SESAME" },
          { id: 2, name: "CHICKEN FILLAAA", allergens: "DAIRY, GLUTEN, SOY, EGG, MUSTARD" },
          { id: 3, name: "LITTLE WRAP FILLAAA", allergens: "DAIRY, SOY, EGG, MUSTARD" },
          { id: 4, name: "LITTLE CHICKEN BURGER", allergens: "DAIRY, GLUTEN, SOY, EGG, MUSTARD" }
        ]
      },
      {
        id: "signature",
        name: "SIGNATURE BURGERS",
        items: [
          { id: 1, name: "TRIPLE X", allergens: "DAIRY, MUSTARD, EGG, SOY, NUTS" },
          { id: 2, name: "SOHO WESTBURGER", allergens: "DAIRY, MUSTARD, SOY, EGG" },
          { id: 3, name: "WESTCOAST BURGER", allergens: "DAIRY, MUSTARD, SOY, EGG" },
          { id: 4, name: "QUARTER POWDER BURGER", allergens: "DAIRY, MUSTARD, SOY, EGG, CELERY" },
          { id: 5, name: "LITTLE CHEESEBURGER", allergens: "DAIRY, SOY, MUSTARD" }
        ]
      },
      {
        id: "bbtSides",
        name: "SIDES",
        items: [
          { id: 1, name: "CURLY FRIES", allergens: "—" },
          { id: 2, name: "MESSY FRIES", allergens: "EGG, SOY, MUSTARD" },
          { id: 3, name: "CHICKEN NUGGETS", allergens: "GLUTEN, SOYA, MUSTARD" },
          { id: 4, name: "COLESLAW", allergens: "EGG, SOYA, MUSTARD" }
        ]
      },
      {
        id: "bbtSauces",
        name: "SAUCES",
        items: [
          { id: 32, name: "SPICY RANCH", allergens: "SOY, EGG, MUSTARD, DAIRY" },
          { id: 33, name: "COOL RANCH", allergens: "SOY, EGG, MUSTARD, DAIRY" },
          { id: 34, name: "PESTO RANCH", allergens: "SOY, EGG, MUSTARD, DAIRY, NUTS" },
          { id: 35, name: "BBT Sauce", allergens: "Mayo, ketchup, little hot sauce, onion, garlic and relish" }
        ]
      },
      {
        id: "oldschool",
        name: "OLD SKOOL",
        items: [
          { id: 1, name: "CLASSIC OLD SKOOL", allergens: "GLUTEN, SESAME, DAIRY, EGG, SOY, MUSTARD" },
          { id: 2, name: "CHILLI LIME OLD SKOOL", allergens: "GLUTEN, SESAME, DAIRY, EGG, SOY, MUSTARD" }
        ]
      }
    ]
  },
  just: {
    title: "Just C Allergens",
    categories: [
      {
        id: "burgers",
        name: "BURGERS",
        items: [
          { id: 1, name: "CLASSIC BURGER", allergens: "DAIRY, GLUTEN, SESAME, SOY, EGG, MUSTARD" },
          { id: 2, name: "BBQ BURGER", allergens: "DAIRY, GLUTEN, SESAME, SOY, EGG, MUSTARD, SULPHITES" },
          { id: 3, name: "BBQ SMOKER BURGER", allergens: "DAIRY, GLUTEN, SESAME, SOY, EGG, MUSTARD" },
          { id: 4, name: "MUSHROOM BURGER", allergens: "DAIRY, GLUTEN, SESAME, SOY, EGG, MUSTARD, PEANUTS, SULPHITES" },
          { id: 5, name: "BBO 8 BURGER", allergens: "DAIRY, GLUTEN, SESAME, SOY, EGG, MUSTARD, SULPHITES" },
          { id: 6, name: "CLASSIC CHICKEN BURGER", allergens: "DAIRY, GLUTEN, SESAME, SOY, EGG, MUSTARD" },
          { id: 7, name: "SPICY CHICKEN (MODERATELY SPICY)", allergens: "DAIRY, GLUTEN, SESAME, SOY, EGG, MUSTARD" }
        ]
      },
      {
        id: "sliders",
        name: "SLIDERS",
        items: [
          { id: 1, name: "BBQ SLIDER", allergens: "DAIRY, GLUTEN, SESAME, SOY, EGG, MUSTARD" },
          { id: 2, name: "TRUFFLE SLIDER", allergens: "DAIRY, GLUTEN, SESAME, SOY, EGG, MUSTARD" },
          { id: 3, name: "CHEESE SLIDER", allergens: "DAIRY, GLUTEN, SESAME, SOY, EGG, MUSTARD" },
          { id: 4, name: "MUSHROOM SLIDER", allergens: "DAIRY, GLUTEN, SESAME, SOY, EGG, MUSTARD, PEANUTS, SULPHITES" },
          { id: 5, name: "CLASSIC CHICKEN SLIDER", allergens: "DAIRY, GLUTEN, SESAME, SOY, EGG, MUSTARD" },
          { id: 6, name: "SPICY CHICKEN SLIDER", allergens: "DAIRY, GLUTEN, SESAME, SOY, EGG, MUSTARD" }
        ]
      },
      {
        id: "sidessss",
        name: "SIDE ORDERS",
        items: [
          { id: 1, name: "ZOGGY FRIES", allergens: "—" },
          { id: 2, name: "C-FRIES", allergens: "EGG, SOY, MUSTARD, GLUTEN, SULPHITES" }
        ]
      },
      {
        id: "sauces",
        name: "SAUCES",
        items: [
          { id: 1, name: "JUST C SAUCE", allergens: "EGG, SOY, MUSTARD" },
          { id: 2, name: "BBQ SAUCE", allergens: "SOY, MUSTARD, SULPHITES" },
          { id: 3, name: "SPICY SAUCE", allergens: "EGG, SOY, MUSTARD" },
          { id: 4, name: "HONEY MUSTARD SAUCE", allergens: "EGG, SOY, MUSTARD" }
        ]
      },
      {
        id: "bbqbox",
        name: "BBQ BOX",
        items: [
          { id: 1, name: "BBQ BOX 30 PCS", allergens: "DAIRY, GLUTEN, SESAME, SOY, EGG, MUSTARD, SULPHITES" },
          { id: 2, name: "BBQ BOX 12 PCS", allergens: "DAIRY, GLUTEN, SESAME, SOY, EGG, MUSTARD, SULPHITES" },
          { id: 3, name: "BBQ BOX 18 PCS", allergens: "DAIRY, GLUTEN, SESAME, SOY, EGG, MUSTARD, SULPHITES" }
        ]
      }
    ]
  },
  slice: {
    title: "Slice Allergens",
    categories: [
      {
        id: "sandwiches",
        name: "SANDWICHES",
        items: [
          { id: 1, name: "ROASTED DONER (Pita)", allergens: "GLUTEN, DAIRY, SOY, EGG, MUSTARD, SESAME" },
          { id: 2, name: "ROASTED DONER (Saj)", allergens: "GLUTEN, DAIRY, SOY, EGG, MUSTARD" },
          { id: 3, name: "SPICY DONER (Pita)", allergens: "GLUTEN, DAIRY, SOY, EGG, MUSTARD, SULPHITES, SESAME, CORIANDER" },
          { id: 4, name: "SPICY DONER (Saj)", allergens: "GLUTEN, DAIRY, SOY, EGG, MUSTARD, SULPHITES, CORIANDER" },
          { id: 5, name: "PARMESAN CAESAR DONER (Pita)", allergens: "GLUTEN, DAIRY, SOY, EGG, MUSTARD, SESAME, FISH" },
          { id: 6, name: "PARMESAN CAESAR DONER (Saj)", allergens: "GLUTEN, DAIRY, SOY, EGG, MUSTARD, FISH" },
          { id: 7, name: "ROASTED SLICER (Pita)", allergens: "GLUTEN, DAIRY, SOY, EGG, MUSTARD, SESAME" },
          { id: 8, name: "ROASTED SLICER (Saj)", allergens: "GLUTEN, DAIRY, SOY, EGG, MUSTARD" },
          { id: 9, name: "SPICY SLICER (Pita)", allergens: "GLUTEN, DAIRY, SOY, EGG, MUSTARD, SULPHITES, SESAME" },
          { id: 10, name: "SPICY SLICER (Saj)", allergens: "GLUTEN, DAIRY, SOY, EGG, MUSTARD, SULPHITES" },
          { id: 11, name: "PARMESAN CAESAR SLICER (Pita)", allergens: "GLUTEN, DAIRY, SOY, EGG, MUSTARD, SESAME, FISH" },
          { id: 12, name: "PARMESAN CAESAR SLICER (Saj)", allergens: "GLUTEN, DAIRY, SOY, EGG, MUSTARD, FISH" }
        ]
      },
      {
        id: "sidesboxes",
        name: "SIDES & BOXES",
        items: [
          { id: 13, name: "CLASSIC FRIES", allergens: "*" },
          { id: 14, name: "SIGNATURE FRIES", allergens: "GLUTEN, SOY, EGG, MUSTARD" },
          { id: 15, name: "CHEESE BITES", allergens: "GLUTEN, SOY, EGG, MUSTARD, DAIRY" },
          { id: 16, name: "SPECIAL SAUCE", allergens: "EGG, SOY, MUSTARD" },
          { id: 17, name: "YOGURT SAUCE", allergens: "DAIRY" },
          { id: 18, name: "ROASTED SAUCE", allergens: "EGG, SOY, MUSTARD" },
          { id: 19, name: "SPICY SIGNATURE SAUCE", allergens: "EGG, SOY, MUSTARD, SULPHITES, CORIANDER" },
          { id: 20, name: "SPICY RANCH", allergens: "EGG, SOY, MUSTARD, DAIRY, SULPHITES" },
          { id: 21, name: "CAESAR SAUCE", allergens: "EGG, SOY, MUSTARD, DAIRY, FISH" },
          { id: 22, name: "TAHINA SAUCE", allergens: "SESAME, DAIRY" },
          { id: 23, name: "WHITE RANCH", allergens: "EGG, SOY, MUSTARD, DAIRY" },
          { id: 24, name: "GARLIC MAYO", allergens: "EGG, SOY, MUSTARD, DAIRY" },
          { id: 25, name: "BBQ SAUCE", allergens: "EGG, SOY, MUSTARD" }
        ]
      },
      {
        id: "build",
        name: "BUILD YOUR OWN",
        items: [
          { id: 26, name: "PITA", allergens: "GLUTEN, DAIRY, SESAME" },
          { id: 27, name: "SAJ", allergens: "GLUTEN, DAIRY" },
          { id: 28, name: "BEEF", allergens: "GLUTEN, SOY" },
          { id: 29, name: "CHICKEN", allergens: "SOY" },
          { id: 30, name: "VEGETABLES", allergens: "*" },
          { id: 31, name: "SPECIAL SAUCE", allergens: "EGG, SOY, MUSTARD" },
          { id: 32, name: "YOGURT SAUCE", allergens: "DAIRY" },
          { id: 33, name: "GARLIC MAYO", allergens: "EGG, SOY, MUSTARD, DAIRY" },
          { id: 34, name: "HOT SAUCE", allergens: "*" },
          { id: 35, name: "TAHINA SAUCE", allergens: "SESAME, DAIRY" }
        ]
      },
      {
        id: "dessert",
        name: "DESSERT",
        items: [
          { id: 36, name: "CARAMEL FEUILLE", allergens: "GLUTEN, DAIRY, SULPHITES" }
        ]
      },
      {
        id: "kidsmeal",
        name: "KID’S MEAL",
        items: [
          { id: 37, name: "PITA", allergens: "GLUTEN, DAIRY, SESAME" },
          { id: 38, name: "BEEF", allergens: "GLUTEN, SOY" },
          { id: 39, name: "CHICKEN", allergens: "SOY" },
          { id: 40, name: "VEGETABLES", allergens: "*" },
          { id: 41, name: "SPECIAL SAUCE", allergens: "EGG, SOY, MUSTARD" },
          { id: 42, name: "YOGURT SAUCE", allergens: "DAIRY" },
          { id: 43, name: "GARLIC MAYO", allergens: "EGG, SOY, MUSTARD, DAIRY" },
          { id: 44, name: "HOT SAUCE", allergens: "*" },
          { id: 45, name: "TAHINA SAUCE", allergens: "SESAME, DAIRY" },
          { id: 46, name: "CLASSIC FRIES", allergens: "*" }
        ]
      },
      {
        id: "gathering",
        name: "GATHERING",
        items: [
          { id: 47, name: "PITA", allergens: "GLUTEN, DAIRY, SESAME" },
          { id: 48, name: "SAJ", allergens: "GLUTEN, DAIRY" },
          { id: 49, name: "BEEF", allergens: "GLUTEN, SOY" },
          { id: 50, name: "CHICKEN", allergens: "SOY" },
          { id: 51, name: "SPECIAL SAUCE", allergens: "EGG, SOY, MUSTARD" },
          { id: 52, name: "YOGURT SAUCE", allergens: "DAIRY" },
          { id: 53, name: "GARLIC MAYO", allergens: "EGG, SOY, MUSTARD, DAIRY" },
          { id: 54, name: "HOT SAUCE", allergens: "*" },
          { id: 55, name: "TAHINA SAUCE", allergens: "SESAME, DAIRY" },
          { id: 56, name: "ROASTED SAUCE", allergens: "EGG, SOY, MUSTARD" },
          { id: 57, name: "SPICY SIGNATURE SAUCE", allergens: "EGG, SOY, MUSTARD, SULPHITES, CORIANDER" },
          { id: 58, name: "SPICY RANCH", allergens: "EGG, SOY, MUSTARD, DAIRY, SULPHITES" },
          { id: 59, name: "CAESAR SAUCE", allergens: "EGG, SOY, MUSTARD, DAIRY, FISH" },
          { id: 60, name: "WHITE RANCH", allergens: "EGG, SOY, MUSTARD, DAIRY" },
          { id: 61, name: "FRIES", allergens: "*" }
        ]
      },
      {
        id: "saladbox",
        name: "SALAD BOX",
        items: [
          { id: 62, name: "SALAD BOX", allergens: "GLUTEN, DAIRY, EGG, MUSTARD, SOY" }
        ]
      },
      {
        id: "ricebox",
        name: "RICE BOX",
        items: [
          { id: 63, name: "RICE BOX", allergens: "GLUTEN, DAIRY, EGG, MUSTARD, SOY, SULPHITES" }
        ]
      }
    ]
  },
  chili: {
    title: "Chili Pepper Allergens",
    categories: [
      {
        id: "burritos",
        name: "BURRITOS",
        items: [
          { id: 1, name: "Traditional Burrito - CHICKEN", allergens: "DAIRY, GLUTEN, CORIANDER, MUSTARD" },
          { id: 2, name: "Traditional Burrito - STEAK", allergens: "DAIRY, GLUTEN, CORIANDER" },
          { id: 3, name: "Traditional Burrito - SHRIMP", allergens: "DAIRY, GLUTEN, CORIANDER, CRUSTACEAN" },
          { id: 4, name: "Traditional Burrito - BARBACOA", allergens: "DAIRY, GLUTEN, CORIANDER, SOY" },
          { id: 5, name: "Traditional Burrito - CHILI CORN CARNE", allergens: "DAIRY, GLUTEN, CORIANDER, SOY" },
          { id: 6, name: "Traditional Burrito - VEG", allergens: "DAIRY, GLUTEN, CORIANDER" },
          { id: 7, name: "Build Your Burrito (wrap) - CHICKEN", allergens: "MUSTARD" },
          { id: 8, name: "Build Your Burrito (wrap) - STEAK", allergens: "*" },
          { id: 9, name: "Build Your Burrito (wrap) - SHRIMP", allergens: "CRUSTACEAN" },
          { id: 10, name: "Build Your Burrito (wrap) - BARBACOA", allergens: "GLUTEN, SOY" },
          { id: 11, name: "Build Your Burrito (wrap) - CHILI CORN CARNE", allergens: "CORIANDER, GLUTEN, SOY" },
          { id: 12, name: "Build Your Burrito (wrap) - VEG", allergens: "*" },
          { id: 13, name: "Build Your Burrito (wrap) - MEXICAN RICE", allergens: "GLUTEN, SOY" },
          { id: 14, name: "Build Your Burrito (wrap) - WHITE / BROWN RICE", allergens: "*" },
          { id: 15, name: "Build Your Burrito (wrap) - GUACAMOLE", allergens: "CORIANDER" },
          { id: 16, name: "Build Your Burrito (wrap) - CHEESE SAUCE / SOUR CREAM / MIXED CHEESE", allergens: "DAIRY" },
          { id: 17, name: "Build Your Burrito (wrap) - PICO DO GALLO / CORN SALSA / RED & GREEN SALSA", allergens: "CORIANDER" }
        ]
      },
      {
        id: "bowls",
        name: "BOWLS",
        items: [
          { id: 3, name: "Traditional Burrito Bowl - CHICKEN", allergens: "GLUTEN, SOY, CORIANDER, DAIRY, MUSTARD" },
          { id: 4, name: "Traditional Burrito Bowl - STEAK", allergens: "GLUTEN, SOY, CORIANDER, DAIRY" },
          { id: 5, name: "Traditional Burrito Bowl - SHRIMP", allergens: "GLUTEN, SOY, CORIANDER, DAIRY, CRUSTACEAN" },
          { id: 6, name: "Traditional Burrito Bowl - BARBACOA / CHILI CORN CARNE / VEG", allergens: "GLUTEN, SOY, CORIANDER, DAIRY" },
          { id: 7, name: "Low Carb - CHICKEN", allergens: "CORIANER, MUSTARD" },
          { id: 8, name: "Low Carb - STEAK", allergens: "CORIANER" },
          { id: 9, name: "Low Carb - SHRIMP", allergens: "CORIANER, CRUSTACEAN" },
          { id: 10, name: "VEGAN - CHICKEN", allergens: "DAIRY, CORIANER, MUSTARD" },
          { id: 11, name: "VEGAN - STEAK / SHRIMP / BARBACOA / VEG", allergens: "DAIRY, CORIANER" }
        ]
      },
      {
        id: "tacos",
        name: "TACOS",
        items: [
          { id: 7, name: "Build Your Set of 3 Tacos - CHICKEN", allergens: "MUSTARD" },
          { id: 8, name: "Build Your Set of 3 Tacos - STEAK", allergens: "*" },
          { id: 9, name: "Build Your Set of 3 Tacos - SHRIMP", allergens: "CRUSTACEAN" },
          { id: 10, name: "Build Your Set of 3 Tacos - BARBACOA", allergens: "GLUTEN, SOY" },
          { id: 11, name: "Traditional Chicken Taco (SOFT / HARD)", allergens: "DAIRY, CORIANDER, MUSTARD, GLUTEN" },
          { id: 12, name: "Traditional Steak Taco (SOFT / HARD)", allergens: "DAIRY, CORIANDER, MUSTARD" },
          { id: 13, name: "Traditional Shrimp Taco (SOFT / HARD)", allergens: "CRUSTACEAN, CORIANDER, DAIRY, GLUTEN" }
        ]
      },
      {
        id: "quesadilla",
        name: "QUESADILLA",
        items: [
          { id: 12, name: "Build Your Quesadilla - CHICKEN", allergens: "MUSTARD" },
          { id: 13, name: "Build Your Quesadilla - STEAK", allergens: "*" },
          { id: 14, name: "Build Your Quesadilla - SHRIMP", allergens: "CRUSTACEAN" },
          { id: 15, name: "Traditional Quesadilla - CHICKEN", allergens: "GLUTEN, DAIRY, CORIANDER, MUSTARD" },
          { id: 16, name: "Traditional Quesadilla - STEAK / SHRIMP / BARBACOA / VEG", allergens: "GLUTEN, DAIRY, CORIANDER, SOY" }
        ]
      },
      {
        id: "sidesss",
        name: "SIDES",
        items: [
          { id: 14, name: "Amigo Fries", allergens: "GLUTEN, DAIRY, CORIANDER, SOY" },
          { id: 15, name: "Chips & Salsa", allergens: "DAIRY, CORIANDER" },
          { id: 16, name: "Nachos", allergens: "*" },
          { id: 17, name: "Cheese Broccoli Soup", allergens: "DAIRY, CORIANDER" },
          { id: 18, name: "Chicken Enchilada Soup", allergens: "GLUTEN, SOY, MUSTARD" }
        ]
      },
      {
        id: "desserts",
        name: "DESSERTS",
        items: [
          { id: 19, name: "Caramello", allergens: "*" },
          { id: 20, name: "Slim Churros", allergens: "GLUTEN, DAIRY, EGG" }
        ]
      }
    ]
  },
  pattie: {
    title: "Pattie Pattie Allergens",
    categories: [
      {
        id: "sliders",
        name: "SLIDERS",
        items: [
          { id: 1, name: "PATTIE PATTIE SLIDER", allergens: "GLUTEN, DAIRY, EGG, MUSTARD" },
          { id: 2, name: "CLASSIC PATTIE SLIDER", allergens: "GLUTEN, DAIRY, MUSTARD" },
          { id: 3, name: "CHEESESTEAK PATTIE SLIDER", allergens: "GLUTEN, DAIRY, EGG, MUSTARD" },
          { id: 4, name: "TRUFFLE MUSHROOM PATTIE SLIDER", allergens: "GLUTEN, DAIRY, EGG, SULPHITES" },
          { id: 5, name: "SWEET BACON SLIDER", allergens: "GLUTEN, DAIRY, EGG, MUSTARD" },
          { id: 6, name: "CRISPY CHICKEN PATTIE SLIDER", allergens: "GLUTEN, DAIRY, EGG, SOY" },
          { id: 7, name: "SPICY CHICKEN PATTIE SLIDER", allergens: "GLUTEN, DAIRY, EGG, SOY" }
        ]
      },
      {
        id: "sidess",
        name: "SIDES",
        items: [
          { id: 1, name: "CHICKEN NUGGETS", allergens: "GLUTEN, SOY, CELERY" },
          { id: 2, name: "JALAPENO CHEESE NUGGETS", allergens: "GLUTEN, DAIRY" },
          { id: 3, name: "SPICED CORN", allergens: "*" },
          { id: 4, name: "PATTIE FRIES", allergens: "GLUTEN, DAIRY" },
          { id: 5, name: "FRIES", allergens: "*" },
          { id: 6, name: "CHICKEN BITES", allergens: "SOY, GLUTEN, EGG, MUSTARD" },
          { id: 7, name: "BEEF CRUNCH", allergens: "DAIRY, EGG, GLUTEN" },
          { id: 8, name: "ONION RINGS", allergens: "GLUTEN" }
        ]
      },
      {
        id: "saucess",
        name: "SAUCES",
        items: [
          { id: 1, name: "PATTIE PATTIE SAUCE", allergens: "EGG, MUSTARD" },
          { id: 2, name: "SWEET CHILI", allergens: "*" },
          { id: 3, name: "HONEY MUSTARD", allergens: "EGG, MUSTARD" },
          { id: 4, name: "RANCH", allergens: "EGG, DAIRY, CORIANDER" },
          { id: 5, name: "PATTIE PATTIE MAYO", allergens: "EGG, SOY" }
        ]
      }
    ]
  }
};

export const INGERINES_DATA = {
  shakir: {
    title: "Shakir Ingredients",
    items: [
      {
        title: "Mix Grill 1",
        content: "جميع المشويات مبيطلعش معاها مخلل فقط صحن ميكس جيريل 1 هو الي يخرج معاه مخلل",
        details: "1 tawook / 1 tikka / 1 kebab meat / 1 kebab chicken + tahina + garlic . Mix Grill 1 comes with a bag containing 3 breads."
      },
      {
        title: "Shakir Medium platter",
        content: "He will have 3 bags of bread (each bag contains 3 loaves) = 9 loaves"
      },
      {
        title: "Shakir Large platter",
        content: "He will have 6 bags of bread (each bag contains 3 loaves) = 18 loaves"
      },
      {
        title: "Kebab Sandwich / Wrap",
        content: "Hummus - Pickles - Onion - Grilled Tomatoes - Kebab Sauce"
      },
      {
        title: "Tawooq Sandwich / Wrap",
        content: "Garlic - Pickles - Potatoes"
      },
      {
        title: "Beef Arayes Sandwich",
        content: "Tahina Mayo"
      },
      {
        title: "Chicken Arayes Sandwich",
        content: "Garlic - Pickles"
      },
      {
        title: "صحن كباب لحم",
        content: "بطاط كيس خبز خضار مشوي (طماطم بصل فلفل) صوص مشاوي وصوص طحينه"
      },
      {
        title: "صحن تكا لحم",
        content: "بطاط كيس خبز خضار مشوي (طماطم بصل فلفل) صوص مشاوي وصوص طحينه"
      },
      {
        title: "صحن الطاؤوق",
        content: "بطاط كيس خبز خضار مشوي (طماطم بصل فلفل) صوص مشاوي وصوص ثوم"
      },
      {
        title: "صحن كباب دجاج",
        content: "بطاط كيس خبز خضار مشوي (طماطم بصل فلفل) صوص مشاوي وصوص ثوم"
      },
      {
        title: "صحن شاورما دجاج",
        content: "دجاج، بطاط مقلي، حمص، كيس به 3 خبزات , مخلل واختيارك من الثوم او الطحينة بالثوم"
      },
      {
        title: "صحن شاورما لحم",
        content: "لحم مع بطاط، خضروات، حمص، كيس به 3 خبزات، واختيارك من الطحينة أو الخلطة الحارة"
      },
      {
        title: "الأطباق 🍽️",
        content: "جميع هذه الأطباق يأتي معها كيس خبز يحتوي على 3 حبزات",
        list: [
          "صحن شاورما لحم",
          "صحن شاورما دجاج",
          "صحن كباب دجاج",
          "صحن كباب لحم",
          "صحن شيش طاووق",
          "صحن تكا لحم",
          "صحن الحمص"
        ]
      },
      {
        title: "كرسبي راب",
        content: "خص - درة - طماطم - ثوم - صوص خاص بالكرسبي"
      },
      {
        title: "سلطة الشاكر",
        content: "خيار، بصل أخضر، خس، بقدونس، شبت"
      },
      {
        title: "سلطة الفاتوش",
        content: "فجل، بصل أخضر، بقدونس، نعناع، زعتر لبناني، خس، خيار، فلفل أخضر، بذر رمان، طماطم، سماق + علبه دبس رمان"
      },
      {
        title: "خبزة شاكر + كفتة اللحم + الشاورما + صوص الثوم + تتبيلة الدجاج",
        content: "الأصناف دي تحتوي على منتجات ألبان عشان لو العميل دخل يسأل عليهم"
      },
      {
        title: "عصاير شاكر كلها",
        content: "450 M"
      }
    ]
  },
  just: {
    title: "Just C Ingredients",
    items: []
  },
  "yelo-sop": {
    title: "Yelo SOP",
    items: []
  },
  chili: {
    title: "Chili Ingredients",
    items: []
  }
};

export const TASK_DATA = [
  /* Shawarma Shakir */
  {status:"Available", brand:"Shawarma Shakir", branch:"Salmiya", location:"https://goo.gl/maps/aRKHfr2K3BNwMUqr8"},
  {status:"Available", brand:"Shawarma Shakir", branch:"Al Qurain", location:"https://maps.app.goo.gl/oY5o4TYLmj1TrooB6"},
  {status:"Available", brand:"Shawarma Shakir", branch:"Al Rai", location:"https://maps.app.goo.gl/hvmT4Gq1oYY87t7g8"},
  {status:"Available", brand:"Shawarma Shakir", branch:"City", location:"https://maps.app.goo.gl/EmzG5msABMhVBemM6"},
  {status:"Available", brand:"Shawarma Shakir", branch:"Ardiya", location:"https://maps.app.goo.gl/xRUYj6e2ycEmMSGF8"},
  {status:"Available", brand:"Shawarma Shakir", branch:"Egaila", location:"https://maps.app.goo.gl/uipjLgxZXzw9xBwF7"},
  {status:"Available", brand:"Shawarma Shakir", branch:"Jahra", location:"https://www.google.com/maps/place/29%C2%B021'17.1%22N+47%C2%B040'07.9%22E/@29.3547562,47.6662873,767m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d29.3547562!4d47.6688622!5m1!1e2?hl=en&entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"},
  {status:"Available", brand:"Shawarma Shakir", branch:"Hawally", location:"https://maps.app.goo.gl/rm3q5DwMwbMDFQ2t8"},
  {status:"Available", brand:"Shawarma Shakir", branch:"Sabah Al Ahmed", location:"https://maps.app.goo.gl/bTGHhDiM3DPBZEb66"},
  {status:"Available", brand:"Shawarma Shakir", branch:"Bayan", location:"https://maps.app.goo.gl/tSw9ZZ5muNLNwsNK9"},
  /* Chili Pepper */
  {status:"Only for Drivers", brand:"Chili Pepper", branch:"Qortuba", location:"https://bit.ly/440oy2Q"},
  {status:"Only for Drivers", brand:"Chili Pepper", branch:"City", location:"https://goo.gl/maps/HaiFWiosYycuyYPW9"},
  {status:"Only for Drivers", brand:"Chili Pepper", branch:"Hawally", location:"https://maps.app.goo.gl/rm3q5DwMwbMDFQ2t8"},
  {status:"Only for Drivers", brand:"Chili Pepper", branch:"Yard", location:"https://maps.app.goo.gl/vK4gT6Wj2hCAPhrh7"},

  /* Yelo Pizza */
  {status:"Available", brand:"Yelo Pizza", branch:"Abdulla Al Salem", location:"https://goo.gl/maps/jVD2P1Lwk2CCcenh8"},
  {status:"Available", brand:"Yelo Pizza", branch:"Qortuba", location:"https://maps.app.goo.gl/h2qGVWkiedaoBozi6"},
  {status:"Only for Drivers", brand:"Yelo Pizza", branch:"Salwa", location:"https://goo.gl/maps/KkBzXLNuvRDgiutL7"},
  {status:"Available", brand:"Yelo Pizza", branch:"Maidan Hawally", location:"https://maps.app.goo.gl/SxNfwuBcX9kUptZq8"},
  {status:"Available", brand:"Yelo Pizza", branch:"Ardiya", location:"http://bit.ly/48t72Wr"},
  {status:"Available", brand:"Yelo Pizza", branch:"Qurain", location:"https://maps.app.goo.gl/4Wp3AE9HiNogLn4ZA"},
  {status:"Available", brand:"Yelo Pizza", branch:"Jaber Al Ahmed", location:"https://maps.app.goo.gl/bssv6bV54Ue6YhD48"},
  {status:"Available", brand:"Yelo Pizza", branch:"Adailiya", location:"https://maps.app.goo.gl/9ozqr5xyYkJefDFG7"},
  {status:"Available", brand:"Yelo Pizza", branch:"Egaila", location:"https://maps.app.goo.gl/yxDbnGVNkYV7B5V18"},
  {status:"Available", brand:"Yelo Pizza", branch:"Salmiya", location:"https://maps.app.goo.gl/i8pFX1Q9whRWz4b3A"},
  {status:"Available", brand:"Yelo Pizza", branch:"Fahaheel", location:"https://maps.app.goo.gl/gbkywXmUhAQgDTeF6"},
  {status:"Available", brand:"Yelo Pizza", branch:"Sabah Al Salem", location:"https://bit.ly/4p7u38d"},
  {status:"Available", brand:"Yelo Pizza", branch:"Jabriya", location:"https://maps.app.goo.gl/bUVF2Aqjn4oTWvJ29"},
  {status:"Available", brand:"Yelo Pizza", branch:"Ishbilya", location:"https://bit.ly/48rhuOa"},
  {status:"Only for Drivers", brand:"Yelo Pizza", branch:"Sabah Al Ahmed", location:"https://bit.ly/4pBOk5F"},
  {status:"Available", brand:"Yelo Pizza", branch:"Khairan", location:"https://maps.app.goo.gl/DxVSMaB1LgGJefEm6"},
  {status:"Only for Drivers", brand:"Yelo Pizza", branch:"Jahra Kitchen", location:"https://maps.app.goo.gl/wtgV8DLLFzyH4H3w5"},
  {status:"Available", brand:"Yelo Pizza", branch:"Vibes", location:"https://bit.ly/3X86j7T"},
  {status:"Available", brand:"Yelo Pizza", branch:"Jleeb Al-Shuyoukh", location:"https://maps.app.goo.gl/xCsLemtxPRRycozE7"},
  {status:"Available", brand:"Yelo Pizza", branch:"Zahra", location:"https://maps.app.goo.gl/rVJPL2PwvTXWKWHa7"},

  /* Slice Doner */
  {status:"Available", brand:"Slice Doner", branch:"Mishref", location:"https://goo.gl/maps/mw3Prs7x5mJgVT2QA"},
  {status:"Available", brand:"Slice Doner", branch:"City", location:"https://goo.gl/maps/P7Yv3b15SC1au2kD9"},
  {status:"Only for Drivers", brand:"Slice Doner", branch:"Vibes", location:"https://goo.gl/maps/99XJYpH8aNmVMRmQ9"},
  {status:"Available", brand:"Slice Doner", branch:"Adailiya", location:"https://maps.app.goo.gl/SaiXr31zCtUEbdM78"},
  {status:"Only for Drivers", brand:"Slice Doner", branch:"Jabriya", location:"https://goo.gl/maps/SMn3kFNxjFJNwLPa6"},
  {status:"Only for Drivers", brand:"Slice Doner", branch:"Ardiya", location:"https://bit.ly/49LiVcx"},
  {status:"Only for Drivers", brand:"Slice Doner", branch:"Jahra", location:"https://goo.gl/maps/Sck93JT9rCh22oQv9"},

  /* Just C */
  {status:"Only for Drivers", brand:"Just C", branch:"Qortuba", location:"https://goo.gl/maps/E52u9BU2DAPXEBHV9"},
  {status:"Only for Drivers", brand:"Just C", branch:"Yard", location:"https://maps.app.goo.gl/2DMQ3Aw4FL4eirPL8"},

  /* Pattie Pattie */
  {status:"Available", brand:"Pattie Pattie", branch:"Adailiya", location:"https://goo.gl/maps/AgBXNBUpcV2fQK777"},
  {status:"Only for Drivers", brand:"Pattie Pattie", branch:"Salmiya", location:"https://goo.gl/maps/qhw8KnuGZtzgCAET7"},
  {status:"Only for Drivers", brand:"Pattie Pattie", branch:"Mishref", location:"https://maps.app.goo.gl/jfKXd9ZRKmfg13u36"},
  {status:"Only for Drivers", brand:"Pattie Pattie", branch:"Yard", location:"https://maps.app.goo.gl/oxA4tmqZFP9DxtaZA"},
  {status:"Only for Drivers", brand:"Pattie Pattie", branch:"Ardiya", location:"https://maps.google.com/maps?q=29.2934806%2C47.9083281"},
  {status:"Only for Drivers", brand:"Pattie Pattie", branch:"Jahra", location:"https://goo.gl/maps/Sck93JT9rCh22oQv9"},
  {status:"Only for Drivers", brand:"Pattie Pattie", branch:"Hawally", location:"https://maps.app.goo.gl/rm3q5DwMwbMDFQ2t8"},

  /* BBT */
  {status:"Only for Drivers", brand:"BBT", branch:"Ardiya", location:"https://maps.app.goo.gl/JnF4i567QU3wjuuQ9"},
  {status:"Only for Drivers", brand:"BBT", branch:"Jahra", location:"https://goo.gl/maps/Sck93JT9rCh22oQv9"},
  {status:"Only for Drivers", brand:"BBT", branch:"Yard", location:"https://maps.app.goo.gl/oxA4tmqZFP9DxtaZA"},
  {status:"Only for Drivers", brand:"BBT", branch:"Mishref", location:"https://maps.app.goo.gl/jfKXd9ZRKmfg13u36"},
  {status:"Only for Drivers", brand:"BBT", branch:"Salmiya", location:"https://goo.gl/maps/qhw8KnuGZtzgCAET7"},
  {status:"Available", brand:"BBT", branch:"Hilltop (Kw-City)", location:"https://maps.app.goo.gl/2myoBzZwNCnkUmfr7"},
  {status:"Available", brand:"BBT", branch:"Adailiya", location:"https://maps.app.goo.gl/bi9Uu1dKWVyMhzFGA"},
  {status:"Available", brand:"BBT", branch:"Shamiya", location:"https://maps.app.goo.gl/k5B78wmirURw8ZRB7"},
  {status:"Available", brand:"BBT", branch:"Shuhada", location:"https://maps.app.goo.gl/mQujvYYocYy6a23t8"},
  {status:"Available", brand:"BBT", branch:"Mangaf", location:"https://maps.app.goo.gl/vddug4QKC35jCtSr8"},
  {status:"Available", brand:"BBT", branch:"Sabah Al Ahmed", location:"https://maps.app.goo.gl/XUpqK4NtzvpdTDCX8"},
  {status:"Available", brand:"BBT", branch:"Bayan", location:"https://maps.app.goo.gl/tSw9ZZ5muNLNwsNK9"}
];
