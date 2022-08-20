import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type DishMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RestaurantMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Dish {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly price?: number | null;
  readonly image?: string | null;
  readonly restaurantID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Dish, DishMetaData>);
  static copyOf(source: Dish, mutator: (draft: MutableModel<Dish, DishMetaData>) => MutableModel<Dish, DishMetaData> | void): Dish;
}

export declare class Restaurant {
  readonly id: string;
  readonly name: string;
  readonly deliveryFee?: number | null;
  readonly minDeliveryTime?: number | null;
  readonly maxDeliveryTime?: number | null;
  readonly rating?: number | null;
  readonly Dishes?: (Dish | null)[] | null;
  readonly adress: string;
  readonly lat: number;
  readonly lng: number;
  readonly image: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Restaurant, RestaurantMetaData>);
  static copyOf(source: Restaurant, mutator: (draft: MutableModel<Restaurant, RestaurantMetaData>) => MutableModel<Restaurant, RestaurantMetaData> | void): Restaurant;
}