// Types for the KalpRiti Lead Conversion Magnet

export type RoleType = 'founder' | 'marketing' | 'product';

export interface RoleOption {
  id: RoleType;
  label: string;
}

export type GAEventName =
  | 'magnet_started'
  | 'role_selected'
  | 'screen_viewed'
  | 'keus_clicked'
  | 'teardown_viewed'
  | 'next_step_clicked'
  | 'magnet_completed'
  | 'mock_click_tapped'
  | 'chip_tapped'
  | 'flow_step_tapped'
  | 'teardown_toggle';

export interface GAEventParams {
  role?: RoleType | string;
  screen_number?: number;
  offer?: string;
  chip?: string;
  step?: number;
  state?: string;
  [key: string]: unknown;
}
