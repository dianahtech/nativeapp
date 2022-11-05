export type Product = {
  name: string;
  durl: string;
  itemDesc?: string;
  value: number;
  id: any;
  section?: string;
  qty: number;
};

export interface StoreType {
  id: string;
  fantasyName?: string;
  location?: {
    city: string;
    latitude: number;
    longitude: number;
  };
  logoUrl?: string;
  address?: string;
  config?: StoreConfig;
  category?: string;
  distance?: number;
  isFavouritedByCurrentUser?: boolean;
  deliveryMinimumValue?: number;
  informative?: string;
  isClosed?: string;
  acceptableCards?: AcceptableCards[];
  isActive?: boolean;
  contact?: {
    cellPhone?: string;
    reception?: string;
  };
}

export interface ItensCheckoutType extends Product {
  qty: number;
}

export interface OrderType {
  id?: string;
  native_user_id: string;
  store_id: string;
  items:  ItensCheckoutType[];
  status: string;
  delivery_mode: any;
  final_value:any;
  payment_mode: any;
  
}
