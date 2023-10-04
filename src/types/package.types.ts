export interface PackagesTypes {
  _id: string;
  id: string;
  client: string;
  quantity: number;
  destination: string;
  is_delivered: boolean;
  package_weight: number;
  additional_information: string;
  deadline_date: string;
  creation_date: string;
  quantity_taked: number;
  state: string;
  bg: string;
}

export interface Package {
  _id: string;
  title: string;
  client: string;
  description: string;
  address: string;
  receptorName: string | null;
  deliveryMan: string | null;
  weight: number | null;
  deliveredAt: Date | null;
  status: "taken" | "in_progress" | "delivered" | null;
  deadlines: Date;
  city?: string;
  coordinatesPackage?: {
    lat: number;
    lng: number;
  };
  coordinatesUser?: {
    lat: number;
    lng: number;
  };
  distance?: number | null;
}

export interface Coordinates {
  lat: number;
  lng: number;
}
