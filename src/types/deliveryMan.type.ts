export interface DeliverymanType {
  _id: string;
  current_deliveries: number;
  active: boolean;
  status: boolean;
  drinked_alcohol: boolean;
  taked_drugs: boolean;
  have_stress: boolean;
  packages: string[];
}