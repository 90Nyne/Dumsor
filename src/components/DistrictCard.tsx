import React from 'react';
import { District, DayOfWeek } from '../types';
import { TIME_SLOTS } from '../data';
import { MapPin, Power, Activity, ArrowRight, Lightbulb, LightbulbOff } from 'lucide-react';

interface DistrictCardProps {
  key?: string | number;
  district: District;
  currentDay: DayOfWeek;
  currentSlotId: string;
  onSelect: (districtId: string) => void;
}

export default function DistrictCard({
  district,
  currentDay,
  currentSlotId,
  onSelect,
}: DistrictCardProps) {
  // Calculate how many areas are ON or OFF in this district currently
  const totalAreas = district.neighborhoods.length;
  const onAreas = district.neighborhoods.filter(
    (n) => n.weeklySchedule[currentDay]?.[currentSlotId as 'slot_1'] === 'ON'
  ).length;
  const offAreas = totalAreas - onAreas;

  // Let's decide if the main status is mostly powered or under outage
  const isHealthy = onAreas === totalAreas;
  const isDown = onAreas === 0;

  return (
    <div
      id={`district-card-${district.id}`}
      onClick={() => onSelect(district.id)}
      className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer flex flex-col h-full hover:-translate-y-1"
    >
      {/* Visual Landmark Photo Container */}
      <div className="relative h-48 overflow-hidden bg-neutral-900">
        <img
          src={district.imagePath}
          alt={district.landmark}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
        />
        {/* Absolute Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold bg-black/80 text-white backdrop-blur-md border border-white/10 gap-1">
            <MapPin className="w-3 h-3 text-red-400" />
            {district.landmark}
          </span>
        </div>

        {/* Live Grid State Badge */}
        <div className="absolute bottom-3 right-3">
          {isHealthy ? (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-[0_0_8px_rgba(16,185,129,0.4)]">
              Fully Powered
            </span>
          ) : isDown ? (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30 shadow-[0_0_10px_rgba(239,68,68,0.4)]">
              Complete Outage
            </span>
          ) : (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 shadow-[0_0_8px_rgba(245,158,11,0.4)]">
              Shedding Active
            </span>
          )}
        </div>
      </div>

      {/* Card Details */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors font-display">
            {district.name}
          </h3>
          <span className="text-xs font-mono text-slate-400 font-medium">
            {totalAreas} Sub-areas
          </span>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed mb-4 flex-grow line-clamp-2">
          {district.description}
        </p>

        {/* Local Area Power breakdown */}
        <div className="pt-3 border-t border-white/5 grid grid-cols-2 gap-2 mt-auto">
          <div className="bg-emerald-500/10 rounded-xl p-2.5 border border-emerald-500/20 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-emerald-400 shrink-0 fill-emerald-400/10" />
            <div>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold leading-none">Power On</p>
              <p className="text-sm font-bold text-emerald-400 mt-0.5 leading-none">{onAreas}</p>
            </div>
          </div>

          <div className="bg-rose-500/10 rounded-xl p-2.5 border border-rose-500/20 flex items-center gap-2">
            <LightbulbOff className="w-4 h-4 text-rose-400 shrink-0" />
            <div>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold leading-none">Off-Grid</p>
              <p className="text-sm font-bold text-rose-400 mt-0.5 leading-none">{offAreas}</p>
            </div>
          </div>
        </div>

        {/* Call to action bar */}
        <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mt-4 pt-1 group-hover:text-amber-400 transition-colors">
          <span>Explore Timetable</span>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-400 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
}
