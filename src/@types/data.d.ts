export interface Data {
  data: Models;
}

export interface Models {
  models: Model;
}

export interface Model {
  convertible: Car[];
  sedan: Car[];
  coupe: Car[];
  sport: Car[];
}

export interface CarProps {
  car: Car;
}

export interface Car {
  id: number;
  make: string;
  model: string;
  car_type: string;
  year: number;
  miliage: string;
  price: number;
  horsepower: number;
  top_speed: number;
  acceleration: number;
  image_url: string;
  description: string;
  drivetrain: string;
  suspension: string;
  engine: string;
  fuel_type: string;
  liters: number;
  transmission: string;
}
