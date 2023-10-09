export interface Deliveryman {
  _id: string;
  current_deliveries: number;
  active: boolean;
  drinked_alcohol: boolean;
  taked_drugs: boolean;
  sleeped_well: boolean;
  packages: string[];
}
