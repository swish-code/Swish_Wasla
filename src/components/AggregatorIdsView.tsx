import React, { useMemo, useState } from 'react';
import { Search, Copy, Check, Hash, Store, Truck } from 'lucide-react';
import { AGGREGATOR_IDS } from '../data';

// Contacts -> Aggregator IDs: every branch's id on Deliveroo / Keeta / Talabat, per brand, with the Keeta brand id.
// Read-only reference for the call centre (the ids are what the aggregators' support asks for). One click copies an id.

const PLATFORMS: { key: 'deliveroo' | 'keeta' | 'talabat'; label: string; color: string }[] = [
  { key: 'deliveroo', label: 'Deliveroo', color: 'text-teal-600' },
  { key: 'keeta', label: 'Keeta', color: 'text-amber-600' },
  { key: 'talabat', label: 'Talabat', color: 'text-orange-600' },
];

function CopyId({ value }: { value: string }) {
  const [done, setDone] = useState(false);
  if (!value) return <span className="text-gray-300 font-black">—</span>;
  const copy = async () => {
    try { await navigator.clipboard.writeText(value); setDone(true); setTimeout(() => setDone(false), 1200); } catch { /* clipboard blocked: the id is still selectable */ }
  };
  return (
    <button
      type="button"
      onClick={copy}
      title="Copy"
      className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gray-50 hover:bg-gray-900 hover:text-white border border-gray-100 font-mono font-bold text-sm tracking-wide transition-colors"
    >
      <span>{value}</span>
      {done ? <Check size={14} className="text-emerald-500 group-hover:text-emerald-300" /> : <Copy size={14} className="opacity-40 group-hover:opacity-100" />}
    </button>
  );
}

export default function AggregatorIdsView() {
  const [query, setQuery] = useState('');
  const [brand, setBrand] = useState<string>('all');

  const q = query.trim().toLowerCase();
  const brands = useMemo(() => AGGREGATOR_IDS.map(b => b.brand), []);
  const filtered = useMemo(() => AGGREGATOR_IDS
    .filter(b => brand === 'all' || b.brand === brand)
    .map(b => ({
      ...b,
      branches: !q ? b.branches : b.branches.filter(r =>
        r.branch.toLowerCase().includes(q) || r.deliveroo.includes(q) || r.keeta.includes(q) || r.talabat.includes(q) || b.brand.toLowerCase().includes(q) || (b.keetaBrandId || '').includes(q)),
    }))
    .filter(b => b.branches.length > 0), [q, brand]);

  const totalBranches = AGGREGATOR_IDS.reduce((n, b) => n + b.branches.length, 0);
  const shown = filtered.reduce((n, b) => n + b.branches.length, 0);

  return (
    <div>
      <div className="rounded-3xl p-8 text-white shadow-2xl mb-8 overflow-hidden relative bg-[#0f766e]">
        <div className="absolute top-0 right-0 p-8 opacity-10"><Truck size={120} /></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-black mb-3 uppercase tracking-tighter">Aggregator IDs</h2>
          <p className="max-w-2xl font-medium opacity-80">
            Branch ids on Deliveroo, Keeta and Talabat for every brand, plus each brand's Keeta id. Click an id to copy it.
          </p>
          <div className="flex flex-wrap gap-3 mt-6 text-xs font-black uppercase tracking-widest">
            <span className="px-3 py-1.5 rounded-full bg-white/15">{AGGREGATOR_IDS.length} brands</span>
            <span className="px-3 py-1.5 rounded-full bg-white/15">{totalBranches} branches</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search a branch, a brand or any id…"
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border-2 border-gray-100 focus:border-teal-500 outline-none font-semibold text-gray-800 shadow-sm"
          />
        </div>
        <select
          value={brand}
          onChange={e => setBrand(e.target.value)}
          className="px-4 py-4 rounded-2xl bg-white border-2 border-gray-100 focus:border-teal-500 outline-none font-black text-gray-700 shadow-sm"
        >
          <option value="all">All brands</option>
          {brands.map(b => <option key={b} value={b}>{b}</option>)}
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center text-gray-400 font-bold border-2 border-dashed border-gray-100">No branch matches "{query}".</div>
      ) : (
        <div className="space-y-8">
          {filtered.map(b => (
            <section key={b.brand} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <header className="flex flex-wrap items-center justify-between gap-3 px-6 py-5 border-b border-gray-100 bg-gray-50/60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-teal-600 text-white flex items-center justify-center"><Store size={18} /></div>
                  <div>
                    <h3 className="text-xl font-black text-gray-800 leading-tight">{b.brand}</h3>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{b.branches.length} {b.branches.length === 1 ? 'branch' : 'branches'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-100 px-3 py-2 rounded-xl">
                  <Hash size={14} /> Keeta brand id
                  {b.keetaBrandId ? <CopyId value={b.keetaBrandId} /> : <span className="text-gray-300">—</span>}
                </div>
              </header>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                      <th className="px-6 py-3">Branch</th>
                      {PLATFORMS.map(p => <th key={p.key} className={`px-6 py-3 ${p.color}`}>{p.label}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {b.branches.map((r, i) => (
                      <tr key={r.branch + i} className="border-t border-gray-50 hover:bg-teal-50/40 transition-colors">
                        <td className="px-6 py-3 font-black text-gray-800">{r.branch}</td>
                        {PLATFORMS.map(p => <td key={p.key} className="px-6 py-3"><CopyId value={r[p.key]} /></td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </div>
      )}

      {q && <p className="mt-6 text-center text-xs font-bold text-gray-400 uppercase tracking-widest">{shown} of {totalBranches} branches shown</p>}
    </div>
  );
}
