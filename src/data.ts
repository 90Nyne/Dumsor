import { District, TimeSlot, DayOfWeek, Schedule } from './types';

export const TIME_SLOTS: TimeSlot[] = [
  { id: 'slot_1', label: 'Late Night', timeRange: '00:00 - 06:00' },
  { id: 'slot_2', label: 'Morning', timeRange: '06:00 - 12:00' },
  { id: 'slot_3', label: 'Afternoon', timeRange: '12:00 - 18:00' },
  { id: 'slot_4', label: 'Evening', timeRange: '18:00 - 00:00' },
];

export const DAYS_OF_WEEK: DayOfWeek[] = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

// Structural catalog covering all 16 Administrative Regions of Ghana
export const DISTRICTS: District[] = [
  // 1. GREATER ACCRA REGION
  {
    id: 'accra_central',
    name: 'Greater Accra - Accra Central',
    landmark: 'Independence Arch',
    imagePath: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/e/e9/Independence_Arch%2C_Accra%2C_Ghana.jpg&w=800&output=webp',
    description: 'The national capital core. Encompasses administrative secretariats, financial institutions, the Supreme Court, and premium historic coastal blocks.',
    neighborhoods: [
      { id: 'osu', name: 'Osu', description: 'Oxford Street retail strip, iconic cultural alleys and lively commerce.', weeklySchedule: {} as any },
      { id: 'ridge', name: 'Ridge', description: 'Upscale governmental embassies, multinational banks, and clinic networks.', weeklySchedule: {} as any },
      { id: 'adabraka', name: 'Adabraka', description: 'Active commercial and residential neighborhoods near national media headquarters.', weeklySchedule: {} as any },
      { id: 'cantonments', name: 'Cantonments', description: 'Elite residential enclave housing multi-national high commissions.', weeklySchedule: {} as any },
      { id: 'asylum_down', name: 'Asylum Down', description: 'Established inner-city residential and business district.', weeklySchedule: {} as any },
      { id: 'jamestown', name: 'Jamestown', description: 'Historic fishing harbor and colonial coastal neighborhood of old Accra.', weeklySchedule: {} as any }
    ]
  },
  {
    id: 'accra_west',
    name: 'Greater Accra - Accra West',
    landmark: 'Mausoleum Plaza',
    imagePath: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/c/ca/Kwame_Nkrumah_Mausoleum_Accra.jpg&w=800&output=webp',
    description: 'The high-density economic sector of the capital. Packed with active markets, hospitals, and national transit hubs.',
    neighborhoods: [
      { id: 'dansoman', name: 'Dansoman', description: 'Famous master-planned suburban housing estate with highly active local commerce.', weeklySchedule: {} as any },
      { id: 'kaneshie', name: 'Kaneshie', description: 'Vibrant transport terminal and market hub connecting western routes.', weeklySchedule: {} as any },
      { id: 'korle_bu', name: 'Korle Bu', description: 'Critical health sector surrounding the premier Ghana Teaching Hospital.', weeklySchedule: {} as any },
      { id: 'lartebiokorshie', name: 'Lartebiokorshie', description: 'Leafy, culturally traditional residential zone in the west of the city.', weeklySchedule: {} as any },
      { id: 'abossey_okai', name: 'Abossey Okai', description: 'Ghana\'s master automotive trade and spare parts warehouse center.', weeklySchedule: {} as any }
    ]
  },
  {
    id: 'accra_east_legon',
    name: 'Greater Accra - Accra East & Legon',
    landmark: 'University Lagoon',
    imagePath: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/5/5e/Balme_Library_of_the_University_of_Ghana.jpg&w=800&output=webp',
    description: 'The modern northern metropolitan expanses. Elite residences, master gated communities, and luxury real estate.',
    neighborhoods: [
      { id: 'east_legon', name: 'East Legon', description: 'Sought-after corporate residential neighborhood popular with business icons.', weeklySchedule: {} as any },
      { id: 'legon_campus', name: 'UG Legon Campus', description: 'Vast campus of the University of Ghana, including halls and state labs.', weeklySchedule: {} as any },
      { id: 'spintex_road', name: 'Spintex', description: 'A massive logistics strip with extensive retail spaces and beautiful developments.', weeklySchedule: {} as any },
      { id: 'dzorwulu', name: 'Dzorwulu', description: 'Premium corporate suburb housing main technology bureaus.', weeklySchedule: {} as any },
      { id: 'airport_residential', name: 'Airport Residential', description: 'Quiet diplomatic sector enclosing high-security real estate near the airport.', weeklySchedule: {} as any }
    ]
  },
  {
    id: 'tema_metro',
    name: 'Greater Accra - Tema Metropolitan',
    landmark: 'Meridian Point Anchor',
    imagePath: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/0/0c/Tema_Port%2C_Ghana.jpg&w=800&output=webp',
    description: 'The industrial and maritime flagship. Encloses deep sea docks, aluminum mills, and master-planned worker communities.',
    neighborhoods: [
      { id: 'tema_comm_1', name: 'Tema Community 1', description: 'Commercial marketplace and municipal administrative core.', weeklySchedule: {} as any },
      { id: 'tema_comm_6', name: 'Tema Community 6 & 12', description: 'Favorable residential blocks with scenic avenues and local parks.', weeklySchedule: {} as any },
      { id: 'ashaiman', name: 'Ashaiman', description: 'Populous market city with high trade density and terminal stations.', weeklySchedule: {} as any },
      { id: 'lashibi_sakumono', name: 'Lashibi & Sakumono', description: 'Pleasant lakeside and seaside residential blocks with active community hubs.', weeklySchedule: {} as any }
    ]
  },
  {
    id: 'ga_east_madina',
    name: 'Greater Accra - Ga East & Madina',
    landmark: 'Madina Interchange',
    imagePath: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/9/9f/Madina_Interchange.jpg&w=800&output=webp',
    description: 'The northern gateway. Bustling trade flyovers, nuclear research complexes, and suburban hill properties.',
    neighborhoods: [
      { id: 'madina', name: 'Madina', description: 'Massive transit city linking standard Accra routes to the beautiful Aburi hills.', weeklySchedule: {} as any },
      { id: 'kwabenya', name: 'Kwabenya / Atomic', description: 'Ghana Atomic Energy Commission settings and hilltop estate residences.', weeklySchedule: {} as any },
      { id: 'haatso', name: 'Haatso', description: 'Clean residential estates and popular corporate shopping avenues.', weeklySchedule: {} as any },
      { id: 'dome', name: 'Dome', description: 'Populous market neighborhood centered on active grid lines.', weeklySchedule: {} as any }
    ]
  },

  // 2. ASHANTI REGION
  {
    id: 'kumasi_metro',
    name: 'Ashanti Region - Kumasi Central',
    landmark: 'Kejetia Market Complex',
    imagePath: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/d/dd/Kejetia_Market_Complex%2C_Kumasi.jpg&w=800&output=webp',
    description: 'The historic capital of Ashanti. Famed for its royal traditional courts, ancient garden aesthetic, and massive trade centers.',
    neighborhoods: [
      { id: 'adum_kumasi', name: 'Adum', description: 'The absolute banking, finance and trading nerve center of Kumasi.', weeklySchedule: {} as any },
      { id: 'nhyiaeso_kumasi', name: 'Nhyiaeso', description: 'Beautiful high-end suburb containing Kumasi\'s premier recreational hotels.', weeklySchedule: {} as any },
      { id: 'bantama_kumasi', name: 'Bantama', description: 'Major cultural and social center of Kumasi with active main streets.', weeklySchedule: {} as any },
      { id: 'asafo_kumasi', name: 'Asafo', description: 'Vast printing houses, transport stations, and central trade depots.', weeklySchedule: {} as any },
      { id: 'knust_campus', name: 'KNUST Campus', description: 'Vibrant tertiary research university grounds and hostels.', weeklySchedule: {} as any }
    ]
  },
  {
    id: 'obuasi_municipal',
    name: 'Ashanti Region - Obuasi Goldfields',
    landmark: 'Obuasi Shafts',
    imagePath: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/e/e0/Obuasi_mine_shaft_Ghana.jpg&w=800&output=webp',
    description: 'The legendary golden enclave. Historically one of the highest yielding gold mining municipalities globally.',
    neighborhoods: [
      { id: 'tutuka', name: 'Tutuka', description: 'Active central residential sector within Obuasi Municipal borders.', weeklySchedule: {} as any },
      { id: 'obuasi_estate', name: 'Wawase & Goldfields Estate', description: 'Scenic planned corporate enclave with high utility layout priority.', weeklySchedule: {} as any },
      { id: 'brahabebome', name: 'Brahabebome', description: 'Developing suburban zone serving as trade link to outlying districts.', weeklySchedule: {} as any }
    ]
  },

  // 3. EASTERN REGION
  {
    id: 'eastern_koforidua',
    name: 'Eastern Region - Koforidua Municipal',
    landmark: 'Obuo Tabri Peak',
    imagePath: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/0/05/Koforidua_Bead_Market.jpg&w=800&output=webp',
    description: 'Surrounded by panoramic mountains. Renowned for its traditional bead markets and pristine administrative center.',
    neighborhoods: [
      { id: 'effiduase', name: 'Effiduase', description: 'Major commercial suburb hosting regional offices.', weeklySchedule: {} as any },
      { id: 'asokore', name: 'Asokore', description: 'Quiet residential zone containing traditional cocoa buyers.', weeklySchedule: {} as any },
      { id: 'srodae', name: 'Srodae & Betom', description: 'Sovereign administrative center with historical judicial courts.', weeklySchedule: {} as any }
    ]
  },
  {
    id: 'eastern_akosombo',
    name: 'Eastern Region - Asuogyaman (Akosombo)',
    landmark: 'Akosombo Dam Spillway',
    imagePath: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/a/a2/Akosombo_Dam_hydroelectrical_power_station.jpg&w=800&output=webp',
    description: 'The hydroelectric cradle of Ghana. Built on the gorgeous banks of the Volta River to house power grid operations.',
    neighborhoods: [
      { id: 'akosombo_town', name: 'Akosombo Township', description: 'Immaculate planned estate hosting grid control centers and engineers.', weeklySchedule: {} as any },
      { id: 'atimpoku', name: 'Atimpoku', description: 'Gateway toll bridge station popular for lakeside fish and local bread.', weeklySchedule: {} as any },
      { id: 'senchi', name: 'Senchi', description: 'Scenic riverside residential district popular for tourism and luxury resorts.', weeklySchedule: {} as any }
    ]
  },

  // 4. CENTRAL REGION
  {
    id: 'central_cape_coast',
    name: 'Central Region - Cape Coast Metro',
    landmark: 'Cape Coast Castle Towers',
    imagePath: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/c/cc/Cape_Coast_Castle%2C_Ghana.jpg&w=800&output=webp',
    description: 'Citadel of Ghanaian secondary and tertiary education. Beautiful coastal cliffs, castles, and traditional fishing communities.',
    neighborhoods: [
      { id: 'pedu_abura', name: 'Pedu & Abura', description: 'Busy business suburbs forming the central spine of the municipal zone.', weeklySchedule: {} as any },
      { id: 'ucc_campus', name: 'UCC Campus enclave', description: 'Host of the University of Cape Coast, surrounding halls and research sectors.', weeklySchedule: {} as any },
      { id: 'elmina', name: 'Elmina Port', description: 'Historic salt-mining and fishing hub dominated by the imposing castle.', weeklySchedule: {} as any },
      { id: 'ola_coastal', name: 'Ola Coastal Front', description: 'Charming seaside locality and residential strip.', weeklySchedule: {} as any }
    ]
  },
  {
    id: 'central_kasoa',
    name: 'Central Region - Awutu Senya East (Kasoa)',
    landmark: 'Kasoa Bridge Terminal',
    imagePath: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/f/ff/Kasoa_Interchange_at_night.jpg&w=800&output=webp',
    description: 'Dynamic mega-metropolis. A vast melting-pot economy serving as a gateway to the central and western corridors.',
    neighborhoods: [
      { id: 'kasoa_galilee', name: 'Galilee & Interchange Core', description: 'Dense market blocks with hyper-active trading lines.', weeklySchedule: {} as any },
      { id: 'buduburam', name: 'Buduburam', description: 'Populous commercial corridor featuring multiple transport terminals.', weeklySchedule: {} as any },
      { id: 'nyanyano', name: 'Nyanyano', description: 'Fast-expanding seaside residential neighborhood with vibrant local fishing.', weeklySchedule: {} as any }
    ]
  },

  // 5. WESTERN REGION
  {
    id: 'western_takoradi',
    name: 'Western Region - Sekondi-Takoradi Metro',
    landmark: 'Takoradi Oil Docks',
    imagePath: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/2/23/Takoradi_harbour_docks.jpg&w=800&output=webp',
    description: 'The twin cargo shipping capital. Spearheads Ghana\'s oil exports, deepwater ports, cocoa loading terminals, and rail networks.',
    neighborhoods: [
      { id: 'tadi_harbor', name: 'Takoradi Harbor Zone', description: 'Main business core near heavy ship yards and logistics complexes.', weeklySchedule: {} as any },
      { id: 'kwesimintsim', name: 'Kwesimintsim', description: 'Populous trade sector with dense residential networks.', weeklySchedule: {} as any },
      { id: 'airport_ridge', name: 'Airport Ridge & Fijai', description: 'Prestigious residential hilltop enclaves with classic layouts.', weeklySchedule: {} as any },
      { id: 'sekondi_traditional', name: 'Sekondi Palace Area', description: 'Administrative core and traditional supreme court offices.', weeklySchedule: {} as any }
    ]
  },

  // 6. VOLTA REGION
  {
    id: 'volta_ho',
    name: 'Volta Region - Ho Municipal',
    landmark: 'Mount Adaklu Base',
    imagePath: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/e/ea/Mount_Adaklu_near_Ho.jpg&w=800&output=webp',
    description: 'The peaceful capital. High-altitude clean atmosphere, medical campuses, and panoramic mountain ranges.',
    neighborhoods: [
      { id: 'ho_bankoe', name: 'Ho Bankoe', description: 'Cultural traditional core of the Asogli state.', weeklySchedule: {} as any },
      { id: 'fiave_heve', name: 'Fiave & Heve', description: 'Well-laid residential sectors containing government administration units.', weeklySchedule: {} as any },
      { id: 'ho_barracks', name: 'Army Barracks Sector', description: 'High-security neighborhood near the regional regiment force.', weeklySchedule: {} as any }
    ]
  },

  // 7. NORTHERN REGION
  {
    id: 'northern_tamale',
    name: 'Northern Region - Tamale Metro',
    landmark: 'Tamale Stadium',
    imagePath: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/7/7b/Tamale_Central_Mosque_building.jpg&w=800&output=webp',
    description: 'The bustling metropolitan heart of Northern Ghana, hosting architectural round-houses, shea refineries and major solar farms.',
    neighborhoods: [
      { id: 'sakasaka', name: 'Sakasaka', description: 'Elite business suburb with active corporate houses and offices.', weeklySchedule: {} as any },
      { id: 'lamashegu', name: 'Lamashegu', description: 'Famous artisan, engineering and industrial manufacturing hub.', weeklySchedule: {} as any },
      { id: 'nyohini', name: 'Nyohini', description: 'Sizable beautiful neighborhood hosting primary public sector services.', weeklySchedule: {} as any },
      { id: 'changli', name: 'Changli', description: 'Rich cultural traditional quarter of old Tamale.', weeklySchedule: {} as any }
    ]
  },

  // 8. SAVANNAH REGION
  {
    id: 'savannah_district',
    name: 'Savannah Region - Damongo Core',
    landmark: 'Larabanga Mystic Stone',
    imagePath: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/1/1a/Larabanga_Mosque_side_profile.jpg&w=800&output=webp',
    description: 'The massive game-reserve landscape. Features the famous Mole National Park, historic mosques, and dense shea savannah.',
    neighborhoods: [
      { id: 'damongo_town', name: 'Damongo Central', description: 'The regional capital and central meeting arena.', weeklySchedule: {} as any },
      { id: 'larabanga_village', name: 'Larabanga', description: 'Heritage settlement hosting one of West Africa\'s oldest mud-architecture mosques.', weeklySchedule: {} as any },
      { id: 'bole', name: 'Bole', description: 'Lively gold extraction and transport hub in the west of Savannah.', weeklySchedule: {} as any },
      { id: 'salaga', name: 'Salaga', description: 'Historic trading municipality along the central-eastern routes.', weeklySchedule: {} as any }
    ]
  },

  // 9. UPPER EAST REGION
  {
    id: 'upper_east_bolga',
    name: 'Upper East Region - Bolgatanga',
    landmark: 'Tongo Hills Rocks',
    imagePath: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/7/77/Bolgatanga_craft_market_baskets.jpg&w=800&output=webp',
    description: ' sahelian beauty. Encompasses historic clay castles, world-famed straw weaving centers and rocky plateaus.',
    neighborhoods: [
      { id: 'bolga_central', name: 'Bolga Central', description: 'Active market core known for traditional leather crafts.', weeklySchedule: {} as any },
      { id: 'soe_zaare', name: 'Soe & Zaare', description: 'Peaceful residential expansions with rising suburban markets.', weeklySchedule: {} as any },
      { id: 'navrongo', name: 'Navrongo', description: 'Famed educational hub containing prominent technology departments.', weeklySchedule: {} as any },
      { id: 'bawku', name: 'Bawku', description: 'Bustling direct international border trade hub.', weeklySchedule: {} as any }
    ]
  },

  // 10. UPPER WEST REGION
  {
    id: 'upper_west_wa',
    name: 'Upper West Region - Wa Municipal',
    landmark: 'Wa Royal Palace',
    imagePath: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/2/2e/Wa_Naa_Palace_mud_architecture.jpg&w=800&output=webp',
    description: 'Rich in traditional heritage. Celebrated for royal mud-brick architecture, cotton handlooms and dry farming sectors.',
    neighborhoods: [
      { id: 'wa_palace', name: 'Wa Palace Enclave', description: 'Sovereign administrative compound of the Wa Naa.', weeklySchedule: {} as any },
      { id: 'bamahu', name: 'Bamahu & Kpaguri', description: 'Thriving student residential sectors near the municipal perimeter.', weeklySchedule: {} as any },
      { id: 'jirapa_lawra', name: 'Jirapa & Lawra', description: 'Venerated traditional municipal divisions in Upper West.', weeklySchedule: {} as any }
    ]
  },

  // 11. BONO REGION
  {
    id: 'bono_sunyani',
    name: 'Bono Region - Sunyani Municipal',
    landmark: 'Sunyani Cocoa House',
    imagePath: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/8/82/Sunyani_Cocoa_House_Bono_Region.jpg&w=800&output=webp',
    description: 'The green cocoa municipality. Heavily surrounded by scenic forestry reserves and cacao assembly depots.',
    neighborhoods: [
      { id: 'sunyani_central', name: 'Sunyani Central', description: 'Main shopping streets surrounding the historic Cocoa House.', weeklySchedule: {} as any },
      { id: 'fiapre', name: 'Fiapre', description: 'Academic suburb hosting key administrative institutions.', weeklySchedule: {} as any },
      { id: 'berekum', name: 'Berekum Town', description: 'Famed high-output agricultural and local manufacturing municipality.', weeklySchedule: {} as any }
    ]
  },

  // 12. BONO EAST REGION
  {
    id: 'bono_east_techiman',
    name: 'Bono East Region - Techiman',
    landmark: 'Techiman Wholesale Market',
    imagePath: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/d/dc/Techiman_Market_foodstuffs.jpg&w=800&output=webp',
    description: 'The absolute food basket. Home to the legendary wholesale terminal feeding Ghana and neighboring countries.',
    neighborhoods: [
      { id: 'techiman_market', name: 'Techiman Market Core', description: 'The vast trade junction handling wholesale crop logistics.', weeklySchedule: {} as any },
      { id: 'kenten', name: 'Kenten', description: 'Rapidly growing residential sector housing key transit terminals.', weeklySchedule: {} as any },
      { id: 'kintampo', name: 'Kintampo', description: 'Scenic municipality globally famous for pristine waterfalls and forest walks.', weeklySchedule: {} as any }
    ]
  },

  // 13. AHAFO REGION
  {
    id: 'ahafo_goaso',
    name: 'Ahafo Region - Goaso Municipal',
    landmark: 'Goaso Forest',
    imagePath: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/1/18/Cocoa_pod_harvest_Ghana.jpg&w=800&output=webp',
    description: 'Dense rich rainbelt forests yielding timber, tropical produce and major gold ventures.',
    neighborhoods: [
      { id: 'goaso_central', name: 'Goaso Central', description: 'The agricultural and administrative seat of Ahafo.', weeklySchedule: {} as any },
      { id: 'mim_town', name: 'Mim', description: 'Timber manufacturing layout containing traditional parks.', weeklySchedule: {} as any },
      { id: 'kenyasi_mines', name: 'Kenyasi', description: 'Gold industrial settlement with standard grids.', weeklySchedule: {} as any }
    ]
  },

  // 14. WESTERN NORTH REGION
  {
    id: 'western_north_wiawso',
    name: 'Western North - Sefwi Wiawso',
    landmark: 'Sefwi Ridges',
    imagePath: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/3/3a/Forestry_reserve_Wiawso_Ghana.jpg&w=800&output=webp',
    description: 'Elevated verdant hills hosting ancient bauxite mines, dense forest canopy and pristine traditional courts.',
    neighborhoods: [
      { id: 'wiawso_central', name: 'Wiawso Central', description: 'High-altitude mountaintop administrative capital.', weeklySchedule: {} as any },
      { id: 'bibiani', name: 'Bibiani & Anhwiaso', description: 'Historic mining community and logging center.', weeklySchedule: {} as any }
    ]
  },

  // 15. OTI REGION
  {
    id: 'oti_dambai',
    name: 'Oti Region - Dambai Municipal',
    landmark: 'Oti Ferry Terminal',
    imagePath: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/4/41/Dambai_ferry_crossing_Oti_river.jpg&w=800&output=webp',
    description: 'Lakeside and river terrain. Noted for rich freshwater boat harbors, yam farming, and lakeside tourism.',
    neighborhoods: [
      { id: 'dambai_habour', name: 'Dambai Port', description: 'Active boat terminal crossing the Oti river to Volta routes.', weeklySchedule: {} as any },
      { id: 'nkwanta', name: 'Nkwanta & Jasikan', description: 'Expanding agricultural communities near the eastern borders.', weeklySchedule: {} as any }
    ]
  },

  // 16. NORTH EAST REGION
  {
    id: 'north_east_nalerigu',
    name: 'North East Region - East Mamprusi',
    landmark: 'Gambaga Cliffs',
    imagePath: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/4/4b/Gambaga_cliff_view.jpg&w=800&output=webp',
    description: 'Ancient Mamprusi empire. Dominating flat plains and sheer mountain scarp ridges.',
    neighborhoods: [
      { id: 'nalerigu_core', name: 'Nalerigu Traditional Area', description: 'Historic capital and seat of the Nayiri Paramount King.', weeklySchedule: {} as any },
      { id: 'walewale', name: 'Walewale Municipal', description: 'Active transport trading city along the central Sahel corridor.', weeklySchedule: {} as any }
    ]
  }
];

// Seed a highly realistic, fully deterministic load shedding schedule
function getDeterministicSchedule(districtId: string, neighborhoodId: string): Record<DayOfWeek, Schedule> {
  const schedule: Record<DayOfWeek, Schedule> = {} as any;
  const slots = ['slot_1', 'slot_2', 'slot_3', 'slot_4'] as const;

  DAYS_OF_WEEK.forEach((day) => {
    const daySchedule: Schedule = {} as any;
    slots.forEach((slot) => {
      // Create a stable, mathematical hash based on ids so schedules are static and immutable
      const seedStr = `${districtId}-${neighborhoodId}-${day}-${slot}`;
      let hash = 0;
      for (let i = 0; i < seedStr.length; i++) {
        hash = (hash << 5) - hash + seedStr.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
      }

      // ECG rotational target average: roughly 25% of slots are scheduled OFF
      // Neighborhoods containing high key priorities (airport, hospitals, courts) get more ON slots
      const isPriorityEnclave = 
        neighborhoodId.includes('hospital') || 
        neighborhoodId.includes('korle_bu') || 
        neighborhoodId.includes('airport') || 
        neighborhoodId.includes('ridge') ||
        neighborhoodId.includes('akosombo');

      const divisor = isPriorityEnclave ? 6 : 4;
      const isOff = Math.abs(hash) % divisor === 0;

      daySchedule[slot] = isOff ? 'OFF' : 'ON';
    });
    schedule[day] = daySchedule;
  });

  return schedule;
}

// Map schedules programmatically to guarantee 100% complete coverage for all districts and neighborhoods
DISTRICTS.forEach((district) => {
  district.neighborhoods.forEach((neighborhood) => {
    neighborhood.weeklySchedule = getDeterministicSchedule(district.id, neighborhood.id);
  });
});
