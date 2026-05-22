import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Activity, 
  HelpCircle, 
  Search, 
  Settings, 
  Sparkles, 
  TrendingDown, 
  Zap, 
  Lightbulb, 
  LightbulbOff,
  BatteryCharging,
  Info,
  MapPin,
  Clock,
  ExternalLink,
  Map,
  ArrowRight
} from 'lucide-react';

import { DayOfWeek, District } from './types';
import { DISTRICTS, TIME_SLOTS } from './data';
import SimulatorControl from './components/SimulatorControl';
import DistrictCard from './components/DistrictCard';
import DistrictDetail from './components/DistrictDetail';
import FaqSection from './components/FaqSection';

// Utility to get Ghana GMT-aligned initial parameters
function getGhanaInitialDateTime() {
  const date = new Date();
  
  // Ghana is strictly on Greenwich Mean Time (UTC+0) year-round.
  const days: DayOfWeek[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  
  const currentDay = days[date.getUTCDay()];
  const currentHour = date.getUTCHours();
  
  let currentSlotId = 'slot_2'; // Default: Morning (06:00 - 12:00)
  if (currentHour >= 0 && currentHour < 6) {
    currentSlotId = 'slot_1';
  } else if (currentHour >= 6 && currentHour < 12) {
    currentSlotId = 'slot_2';
  } else if (currentHour >= 12 && currentHour < 18) {
    currentSlotId = 'slot_3';
  } else {
    currentSlotId = 'slot_4';
  }

  return { day: currentDay, slotId: currentSlotId };
}

export default function App() {
  const defaults = useMemo(() => getGhanaInitialDateTime(), []);
  
  const [currentDay, setCurrentDay] = useState<DayOfWeek>(defaults.day);
  const [currentSlotId, setCurrentSlotId] = useState<string>(defaults.slotId);
  const [selectedDistrictId, setSelectedDistrictId] = useState<string | null>(null);
  const [globalSearch, setGlobalSearch] = useState('');

  // Check if simulated day/time is different from actual GMT time
  const isSimulated = currentDay !== defaults.day || currentSlotId !== defaults.slotId;

  // Find active district selection object
  const activeDistrict = useMemo(() => {
    return DISTRICTS.find((d) => d.id === selectedDistrictId) || null;
  }, [selectedDistrictId]);

  // Handle simulation resets
  const handleResetSimulation = () => {
    setCurrentDay(defaults.day);
    setCurrentSlotId(defaults.slotId);
  };

  // Perform a global search for neighborhoods across all districts
  // Returns matchings with district link information
  const globalSearchResults = useMemo(() => {
    if (!globalSearch.trim()) return [];
    
    const results: {
      districtId: string;
      districtName: string;
      neighborhoodId: string;
      neighborhoodName: string;
      status: 'ON' | 'OFF';
    }[] = [];

    DISTRICTS.forEach((district) => {
      district.neighborhoods.forEach((n) => {
        if (n.name.toLowerCase().includes(globalSearch.toLowerCase())) {
          const status = n.weeklySchedule[currentDay]?.[currentSlotId as 'slot_1'] || 'ON';
          results.push({
            districtId: district.id,
            districtName: district.name,
            neighborhoodId: n.id,
            neighborhoodName: n.name,
            status,
          });
        }
      });
    });

    return results.slice(0, 5); // caps at 5 results
  }, [globalSearch, currentDay, currentSlotId]);

  // Overall grid metrics calculation for the current simulation frame
  const metrics = useMemo(() => {
    let totalAreas = 0;
    let onAreas = 0;

    DISTRICTS.forEach((district) => {
      district.neighborhoods.forEach((n) => {
        totalAreas++;
        const status = n.weeklySchedule[currentDay]?.[currentSlotId as 'slot_1'];
        if (status === 'ON') onAreas++;
      });
    });

    const offAreas = totalAreas - onAreas;
    const percentagePowered = totalAreas > 0 ? Math.round((onAreas / totalAreas) * 100) : 100;

    return {
      totalAreas,
      onAreas,
      offAreas,
      percentagePowered,
    };
  }, [currentDay, currentSlotId]);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 flex flex-col antialiased relative overflow-hidden">
      {/* Immersive UI Absolute Backdrop Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#1e293b_0%,transparent_50%),radial-gradient(circle_at_80%_80%,#0f172a_0%,transparent_50%)] pointer-events-none z-0" />

      {/* Visual Navigation Bar */}
      <header className="sticky top-0 z-40 bg-black/40 backdrop-blur-md border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div id="brand-logo" className="h-10 w-10 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.25)]">
              <Zap className="w-5 h-5 fill-amber-400 animate-pulse" />
            </div>
            <div>
              <h1 className="text-sm font-extrabold tracking-tight text-white font-display uppercase flex items-center gap-2">
                Dumsor Tracker <span className="text-amber-400 font-normal">GH</span>
              </h1>
              <p className="text-[10px] text-slate-400 font-mono tracking-wide leading-none">
                Grid Monitoring System
              </p>
            </div>
          </div>

          {/* Clock Widget */}
          <div className="hidden sm:flex items-center gap-2.5 bg-white/5 border border-white/5 p-2 px-3 rounded-xl text-right">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <div>
              <p className="text-[10px] text-slate-400 font-semibold leading-none uppercase">Ghana Standard Time</p>
              <p className="text-xs font-mono font-bold text-white mt-1 leading-none">GMT +00:00</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Body */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        
        {/* Top Promotional Info Flag (Ghana color scheme stripe) */}
        <div id="aesthetic-alert" className="mb-8 rounded-2xl bg-gradient-to-r from-red-500 via-amber-400 to-emerald-600 p-[1.5px] shadow-sm">
          <div className="bg-black/90 backdrop-blur-md rounded-[14px] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5">
            <div className="flex items-center gap-3">
              <span className="flex-shrink-0 bg-white/5 border border-white/10 text-amber-400 rounded-lg p-1.5 font-bold text-xs">
                🇬🇭
              </span>
              <div>
                <h4 className="text-xs font-bold text-white font-display">
                  National Load management Watch
                </h4>
                <p className="text-[10px] text-slate-400 leading-normal">
                  Schedules are subject to instant fluctuations based on ECG and GRIDCo emergency rotational guidelines.
                </p>
              </div>
            </div>
            <div className="text-[10px] text-slate-500 shrink-0 font-medium">
              V1.4.2 Ghana Grid Watch • Free Public Service
            </div>
          </div>
        </div>

        {/* Global Hub Search & Banner (Only visible when not deep-dived in a district) */}
        {!selectedDistrictId && (
          <div id="welcome-intro-block" className="mb-8 text-center sm:text-left space-y-4">
            <div className="max-w-xl">
              <h2 className="text-3xl font-black font-display tracking-tight text-white">
                Dumsor Tracker
              </h2>
              <p className="text-sm text-slate-400 mt-1.5 leading-relaxed">
                Select your district to view your power schedule. Get accurate projections and prepare for scheduled outages in advance.
              </p>
            </div>

            {/* Global Quick Search */}
            <div className="relative max-w-xl z-30">
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Search className="h-4.5 w-4.5 text-slate-400" />
                </span>
                <input
                  id="global-search-query"
                  type="text"
                  placeholder="Quick Search: Type your neighborhood (e.g., Osu, Adum, Damongo, Bantama...)"
                  value={globalSearch}
                  onChange={(e) => setGlobalSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 focus:border-amber-500 rounded-2xl text-xs font-semibold focus:outline-none shadow-xs transition-all text-white placeholder:text-slate-500"
                />
              </div>

              {/* Live search results overlay dropdown */}
              {globalSearch && (
                <div id="search-overlay-dropdown" className="absolute top-full left-0 right-0 mt-2 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-2 z-50 text-left">
                  {globalSearchResults.length === 0 ? (
                    <div className="p-4 text-center text-xs text-slate-400">
                      No matching neighborhoods found across regions.
                    </div>
                  ) : (
                    <div>
                      <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wider px-3 py-1.5 border-b border-white/5">
                        Matching Local schedules ({globalSearchResults.length})
                      </p>
                      <div className="divide-y divide-white/5">
                        {globalSearchResults.map((res) => (
                          <button
                            key={res.neighborhoodId}
                            id={`search-result-btn-${res.neighborhoodId}`}
                            onClick={() => {
                              setSelectedDistrictId(res.districtId);
                              setGlobalSearch('');
                            }}
                            className="w-full text-left px-3 py-2.5 hover:bg-white/5 rounded-xl flex items-center justify-between text-xs transition-colors cursor-pointer"
                          >
                            <div>
                              <span className="font-bold text-white">{res.neighborhoodName}</span>
                              <span className="text-[10px] text-slate-400 ml-1.5">({res.districtName})</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              {res.status === 'ON' ? (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-sm text-[9px] font-extrabold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                  POWER ON
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-sm text-[9px] font-extrabold bg-rose-500/10 text-rose-400 border border-rose-500/20">
                                  OFF-GRID
                                </span>
                              )}
                              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Global Live Simulator (Allows day/time toggle for all card calculations) */}
        <SimulatorControl
          currentDay={currentDay}
          currentSlotId={currentSlotId}
          onDayChange={setCurrentDay}
          onSlotChange={setCurrentSlotId}
          isSimulated={isSimulated}
          onReset={handleResetSimulation}
        />

        {/* Dynamic National Live Metrics HUD */}
        {!selectedDistrictId && (
          <div id="grid-metrics-banner" className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-3.5 shadow-xs backdrop-blur-md">
              <div className="h-10 w-10 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center border border-emerald-500/20">
                <BatteryCharging className="w-5 h-5 shadow-[0_0_10px_rgba(16,185,129,0.3)]" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">National Grid Load</p>
                <p className="text-lg font-black font-display text-emerald-400 mt-0.5">
                  {metrics.percentagePowered}% Powered
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-3.5 shadow-xs backdrop-blur-md">
              <div className="h-10 w-10 bg-rose-500/10 text-rose-400 rounded-xl flex items-center justify-center border border-rose-500/20">
                <LightbulbOff className="w-5 h-5 shadow-[0_0_10px_rgba(239,68,68,0.3)]" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Shedding Centers</p>
                <p className="text-lg font-black font-display text-rose-400 mt-0.5">
                  {metrics.offAreas} areas Offline
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-3.5 shadow-xs backdrop-blur-md">
              <div className="h-10 w-10 bg-amber-500/10 text-amber-400 rounded-xl flex items-center justify-center border border-amber-500/20">
                <Activity className="w-5 h-5 animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.3)]" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Rotational Status</p>
                <p className="text-lg font-black font-display text-amber-400 mt-0.5">
                  {isSimulated ? 'Simulated Outages' : 'Standard Routine'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Core Interactivity Screen Manager via standard fade animations */}
        <AnimatePresence mode="wait">
          {!selectedDistrictId ? (
            /* MAIN DISTRICT GRID VIEW */
            <motion.div
              key="grid-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest block">
                  Click a District region to view timetables
                </h3>
              </div>

              <div id="district-cards-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {DISTRICTS.map((district) => (
                  <DistrictCard
                    key={district.id}
                    district={district}
                    currentDay={currentDay}
                    currentSlotId={currentSlotId}
                    onSelect={(id) => setSelectedDistrictId(id)}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            /* DETAILED TIMETABLE VIEW */
            <motion.div
              key="detail-view"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {activeDistrict && (
                <DistrictDetail
                  district={activeDistrict}
                  currentDay={currentDay}
                  currentSlotId={currentSlotId}
                  onBack={() => setSelectedDistrictId(null)}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interactive FAQ and survivability tips section */}
        <FaqSection />

      </main>

      {/* Footer Design */}
      <footer className="bg-black/80 backdrop-blur-md text-slate-400 mt-20 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/5 pb-8">
            <div className="text-center md:text-left space-y-1">
              <h3 className="text-sm font-bold text-white font-display uppercase tracking-wider">
                Ghana Dumsor Tracker
              </h3>
              <p className="text-xs text-slate-400 max-w-md leading-relaxed">
                An intuitive public service load tracking dashboard map. Check outages, manage battery profiles, and coordinate with family schedules.
              </p>
            </div>
            <div className="text-center md:text-right text-xs">
              <span className="inline-block bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 text-slate-300 font-medium">
                ⚡ ECG / GRIDCo Public Reference
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px] text-slate-500 font-mono">
            <p>© 2026 Dumsor Tracker GH. Developed for public rotational awareness.</p>
            <p>Accra • Kumasi • Savanna Grid Watch</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
