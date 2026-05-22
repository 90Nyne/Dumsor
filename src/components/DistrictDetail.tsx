import React, { useState } from 'react';
import { District, DayOfWeek, Neighborhood } from '../types';
import { TIME_SLOTS, DAYS_OF_WEEK } from '../data';
import { 
  ArrowLeft, 
  Search, 
  Clock, 
  Calendar, 
  CheckCircle, 
  AlertTriangle,
  Lightbulb, 
  LightbulbOff,
  HelpCircle,
  Hash
} from 'lucide-react';

interface DistrictDetailProps {
  district: District;
  currentDay: DayOfWeek;
  currentSlotId: string;
  onBack: () => void;
}

export default function DistrictDetail({
  district,
  currentDay,
  currentSlotId,
  onBack,
}: DistrictDetailProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'today' | 'weekly'>('weekly');

  // Filter neighborhoods based on search
  const filteredNeighborhoods = district.neighborhoods.filter((n) =>
    n.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    n.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="district-detail-view" className="space-y-6">
      {/* Back Button & Navigation Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          id="back-to-districts-btn"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl shadow-lg text-xs font-semibold text-white transition-all group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-slate-300 group-hover:-translate-x-0.5 transition-transform" />
          Back to All Districts
        </button>

        <div className="flex bg-white/5 border border-white/5 p-1 rounded-xl">
          <button
            id="tab-weekly"
            onClick={() => setActiveTab('weekly')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'weekly'
                ? 'bg-amber-400 text-black shadow-xs font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Full Weekly Timetable
          </button>
          <button
            id="tab-today"
            onClick={() => setActiveTab('today')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'today'
                ? 'bg-amber-400 text-black shadow-xs font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Today's Quick View
          </button>
        </div>
      </div>

      {/* Hero Header Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-neutral-950 text-white min-h-[220px] md:min-h-[260px] flex flex-col justify-end p-6 md:p-8 shadow-lg border border-white/10">
        {/* Absolute Background Image with elegant overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={district.imagePath}
            alt={district.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
        </div>

        {/* Hero Text */}
        <div className="relative z-10 max-w-2xl">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-400/20 text-amber-400 border border-amber-400/30 uppercase tracking-wider mb-2.5">
            District Focus
          </span>
          <h1 className="text-3xl md:text-4xl font-black font-display tracking-tight text-white">
            {district.name}
          </h1>
          <p className="text-slate-300 text-xs md:text-sm mt-2 leading-relaxed font-light">
            {district.description}
          </p>
        </div>
      </div>

      {/* Sub-locality Search & Control Row */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 backdrop-blur-md">
        <div className="relative max-w-md w-full">
          <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-400" />
          </span>
          <input
            id="neighborhood-search-input"
            type="text"
            placeholder={`Search neighborhoods in ${district.name} (e.g. Osu, Adum...)`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-white/5 hover:bg-white/10 focus:bg-white/5 border border-white/10 focus:border-amber-400 rounded-xl text-xs font-medium focus:outline-none transition-all text-white placeholder:text-slate-500"
          />
        </div>

        <div className="text-xs text-slate-400 flex items-center gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
          Showing <span className="font-semibold text-white">{filteredNeighborhoods.length}</span> of {district.neighborhoods.length} areas
        </div>
      </div>

      {/* Timetable Panels */}
      {filteredNeighborhoods.length === 0 ? (
        <div className="text-center py-12 bg-white/5 rounded-2xl border border-white/10 p-8 backdrop-blur-md">
          <HelpCircle className="w-12 h-12 text-slate-500 mx-auto mb-3" />
          <h3 className="text-sm font-semibold text-white">No Neighborhoods Found</h3>
          <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
            We couldn't find any neighborhood matching "{searchTerm}" in this district. Make sure the name is typed correctly.
          </p>
        </div>
      ) : activeTab === 'today' ? (
        /* TODAY BRIEF VIEW */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredNeighborhoods.map((neighborhood) => {
            const todaySchedule = neighborhood.weeklySchedule[currentDay];
            const currentStatus = todaySchedule[currentSlotId as 'slot_1'];
            const isPowerOn = currentStatus === 'ON';

            return (
              <div
                key={neighborhood.id}
                id={`neighborhood-today-card-${neighborhood.id}`}
                className={`bg-white/5 rounded-2xl p-5 border transition-all ${
                  isPowerOn 
                    ? 'border-emerald-500/20 hover:border-emerald-500/40 shadow-md' 
                    : 'border-rose-500/20 hover:border-rose-500/40 shadow-md'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <Hash className="w-4 h-4 text-slate-400" />
                      {neighborhood.name}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-1 italic">
                      {neighborhood.description}
                    </p>
                  </div>

                  {/* Power status visual card indicator */}
                  <div>
                    {isPowerOn ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-[0_0_8px_rgba(16,185,129,0.3)]">
                        <CheckCircle className="w-3 h-3 text-emerald-400" />
                        POWER ON
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30 shadow-[0_0_10px_rgba(239,68,68,0.3)]">
                        <AlertTriangle className="w-3 h-3 text-rose-400" />
                        DUMSOR (OFF)
                      </span>
                    )}
                  </div>
                </div>

                {/* Sub-area slot progress row */}
                <div className="mt-4 pt-3 border-t border-white/5">
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    Today's 6-Hour Shift Breakdown
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {TIME_SLOTS.map((slot) => {
                      const status = todaySchedule[slot.id as 'slot_1'];
                      const isSlotOn = status === 'ON';
                      const isCurrentlyActive = slot.id === currentSlotId;

                      return (
                        <div
                          key={slot.id}
                          className={`p-2.5 rounded-xl text-center flex flex-col justify-between h-20 relative overflow-hidden transition-all ${
                            isCurrentlyActive 
                              ? 'ring-2 ring-amber-400 ring-offset-2 z-10 shadow-md font-semibold' 
                              : 'opacity-90 hover:opacity-100'
                          } ${
                            isSlotOn 
                              ? 'bg-emerald-500/10 text-emerald-200 border border-emerald-500/20' 
                              : 'bg-rose-500/10 text-rose-200 border border-rose-500/20'
                          }`}
                        >
                          <span className="text-[11px] font-bold block truncate text-white">{slot.label}</span>
                          <span className="text-[9px] font-mono text-slate-400 font-medium leading-none block">{slot.timeRange}</span>
                          
                          <div className="flex justify-center mt-1">
                            {isSlotOn ? (
                              <Lightbulb className="w-4 h-4 text-emerald-400 fill-emerald-400/15" />
                            ) : (
                              <LightbulbOff className="w-4 h-4 text-rose-400" />
                            )}
                          </div>

                          {isCurrentlyActive && (
                            <div className="absolute top-0 right-0 bg-amber-400 text-black rounded-bl-lg px-2 py-0.5 text-[8px] font-black tracking-wider leading-none">
                              NOW
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* FULL WEEK ROTABLE SHEET / GRID */
        <div className="space-y-6">
          {filteredNeighborhoods.map((neighborhood) => {
            return (
              <div
                key={neighborhood.id}
                id={`neighborhood-weekly-block-${neighborhood.id}`}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg backdrop-blur-md"
              >
                {/* Neighborhood header strip */}
                <div className="bg-white/5 px-5 py-4 border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <Hash className="w-4 h-4 text-amber-400" />
                      {neighborhood.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">{neighborhood.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-medium text-slate-400">Current state:</span>
                    {neighborhood.weeklySchedule[currentDay]?.[currentSlotId as 'slot_1'] === 'ON' ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        Active ON
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30">
                        Active DUMSOR
                      </span>
                    )}
                  </div>
                </div>

                {/* Grid matrix of schedules */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left min-w-[640px]">
                    <thead>
                      <tr className="bg-black/20 text-xs font-semibold text-slate-300 border-b border-white/5">
                        <th className="py-3 px-5 w-32 font-semibold">DAY OF WEEK</th>
                        {TIME_SLOTS.map((slot) => {
                          const isCurrentlyActive = slot.id === currentSlotId;
                          return (
                            <th
                              key={slot.id}
                              className={`py-3 px-4 font-semibold text-center ${
                                isCurrentlyActive ? 'bg-amber-400/10 text-amber-300 font-bold' : ''
                              }`}
                            >
                              <div className="text-xs text-slate-200">{slot.label}</div>
                              <div className="text-[10px] font-mono text-slate-400 mt-0.5 font-normal">
                                {slot.timeRange}
                              </div>
                            </th>
                          );
                        })}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-xs text-slate-300">
                      {DAYS_OF_WEEK.map((day) => {
                        const isToday = day === currentDay;

                        return (
                          <tr
                            key={day}
                            className={`transition-colors ${
                              isToday ? 'bg-amber-400/5 font-medium' : 'hover:bg-white/[0.02]'
                            }`}
                          >
                            <td className="py-3.5 px-5 font-semibold text-white flex items-center gap-1.5">
                              {isToday && (
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping inline-block shadow-[0_0_8px_#fbbf24]" />
                              )}
                              {day}
                              {isToday && (
                                <span className="text-[10px] bg-amber-400 text-black rounded-lg px-2 py-0.2 font-extrabold leading-none scale-90">
                                  TODAY
                                </span>
                              )}
                            </td>

                            {TIME_SLOTS.map((slot) => {
                              const isTodayAndActiveSlot = isToday && slot.id === currentSlotId;
                              const statusValue = neighborhood.weeklySchedule[day]?.[slot.id as 'slot_1'];
                              const isSlotOn = statusValue === 'ON';

                              return (
                                <td
                                  key={slot.id}
                                  className={`p-2 text-center transition-all ${
                                    isTodayAndActiveSlot 
                                      ? 'bg-amber-400/10' 
                                      : ''
                                  }`}
                                >
                                  <div
                                    className={`inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg w-28 max-w-full font-semibold transition-all ${
                                      isTodayAndActiveSlot
                                        ? 'ring-2 ring-amber-400 ring-offset-2 ring-offset-black scale-105 z-10 font-bold shadow-md'
                                        : ''
                                    } ${
                                      isSlotOn
                                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30'
                                        : 'bg-[#151515] text-slate-400 border border-white/5 hover:bg-[#202020] hover:text-white'
                                    }`}
                                  >
                                    {isSlotOn ? (
                                      <>
                                        <Lightbulb className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/10" />
                                        <span>ON</span>
                                      </>
                                    ) : (
                                      <>
                                        <LightbulbOff className="w-3.5 h-3.5 text-slate-500" />
                                        <span>OFF</span>
                                      </>
                                    )}
                                  </div>
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Bottom caption / survivability guide helper */}
                <div className="bg-white/[0.02] p-3 px-5 text-[10px] text-slate-500 flex items-center gap-1.5 border-t border-white/5 leading-relaxed">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>
                    Note: Shifting boundaries are approximate. Power cut durations are roughly 6 hours but local transformer setups may vary grid recovery by ±15 minutes.
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
