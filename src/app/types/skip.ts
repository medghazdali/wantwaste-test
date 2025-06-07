export interface Skip {
  id: string;
  name: string;
  size: string;
  price: number;
  description: string;
  imageUrl: string;
  isAllowedOnRoad: boolean;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allows_heavy_waste: boolean;
}

export interface FilterState {
  priceSort: 'asc' | 'desc' | 'none';
  showOnlyRoadAllowed: boolean;
} 