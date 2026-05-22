import React from 'react';
import { DayOfWeek, TimeSlot } from '../types';
import { DAYS_OF_WEEK, TIME_SLOTS } from '../data';
import { Calendar, Clock, Sliders, Sparkles } from 'lucide-react';

interface SimulatorControlProps {
  currentDay: DayOfWeek;
  currentSlotId: string;
  onDayChange: (day: DayOfWeek) => void;
  onSlotChange: (slotId: string) => void;
  isSimulated: boolean;
  onReset: () => void;
}

export default function SimulatorControl({
  currentDay,
  currentSlotId,
  onDayChange,
  onSlotChange,
  isSimulated,
  onReset,
}: SimulatorControlProps) {
  const activeSlot = TIME_SLOTS.find((s) => s.id === currentSlotId);

  return (
    <div id="simulator-widget" className="bg-white/5 border border-white/10 rounded-2xl shadow-lg p-5 md:p-6 mb-8 backdrop-blur-md">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-white/5">
        <div>
          <h2 className="text-sm font-semibold text-white tracking-tight flex items-center gap-2">
            <Sliders className="w-4 h-4 text-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
            Schedule Period & Simulation
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Check power statuses across weekly schedules. Toggle slots to plan your charging needs.
          </p>
        </div>
        {isSimulated && (
          <button
            id="reset-simulation-btn"
            onClick={onReset}
            className="self-start md:self-auto text-xs font-semibold px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full transition-all flex items-center gap-1 cursor-pointer"
          >
            <Sparkles className="w-3 h-3" />
            Reset to Actual Time
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Day Selector */}
        <div className="lg:col-span-7">
          <label className="text-xs font-medium text-slate-400 uppercase tracking-wider block mb-2.5 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            Select Day of Week
          </label>
          <div className="flex flex-wrap gap-1.5">
            {DAYS_OF_WEEK.map((day) => {
              const isSelected = currentDay === day;
              return (
                <button
                  key={day}
                  id={`day-select-${day.toLowerCase()}`}
                  onClick={() => onDayChange(day)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-amber-400 border-amber-400 text-black font-bold shadow-[0_0_12px_rgba(245,158,11,0.4)]'
                      : 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        {/* Time Slots Selector */}
        <div className="lg:col-span-5">
          <label className="text-xs font-medium text-slate-400 uppercase tracking-wider block mb-2.5 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            Select 6-Hour Shift
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-1.5">
            {TIME_SLOTS.map((slot) => {
              const isSelected = currentSlotId === slot.id;
              return (
                <button
                  key={slot.id}
                  id={`slot-select-${slot.id}`}
                  onClick={() => onSlotChange(slot.id)}
                  className={`p-2 rounded-lg text-left transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-amber-500/20 border-amber-500 text-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.25)] font-bold'
                      : 'bg-white/5 border-white/5 hover:bg-white/10 text-slate-300'
                  }`}
                >
                  <p className="text-xs font-semibold leading-tight">{slot.label}</p>
                  <p className="text-[10px] text-slate-400 font-mono mt-0.5 leading-none">{slot.timeRange}</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active Banner */}
      <div className="mt-4 bg-white/5 border border-white/5 rounded-xl p-3 flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
          <span className="text-xs text-slate-300">
            Active view: <strong className="text-white">{currentDay}</strong> during the{' '}
            <strong className="text-white">{activeSlot?.label}</strong> ({activeSlot?.timeRange}) block.
          </span>
        </div>
        <div className="text-[10px] font-mono text-slate-500">
          Ghana GMT / UTC Schedule
        </div>
      </div>
    </div>
  );
}
