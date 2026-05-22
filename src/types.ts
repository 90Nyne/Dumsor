export type StatusType = 'ON' | 'OFF';

export interface TimeSlot {
  id: string;
  label: string;
  timeRange: string;
}

export type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

export interface Schedule {
  slot_1: StatusType; // 00:00 - 06:00
  slot_2: StatusType; // 06:00 - 12:00
  slot_3: StatusType; // 12:00 - 18:00
  slot_4: StatusType; // 18:00 - 00:00
}

export interface Neighborhood {
  id: string;
  name: string;
  description: string;
  weeklySchedule: Record<DayOfWeek, Schedule>;
}

export interface District {
  id: string;
  name: string;
  landmark: string;
  imagePath: string;
  description: string;
  neighborhoods: Neighborhood[];
}
