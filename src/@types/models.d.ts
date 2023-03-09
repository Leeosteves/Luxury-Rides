export interface Models {
  convertible: Convertible[];
  sedan: Sedan[];
  coupe: Coupe[];
  sport: Sport[];
}

interface Convertible {
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

interface Sedan {
  acceleration: number;
  car_type: string;
  description: string;
  drivetrain: string;
  engine: string;
  fuel_type: string;
  horsepower: number;
  id: number;
  image_url: string;
  liters: number;
  make: string;
  miliage: string;
  model: string;
  price: number;
  suspension: string;
  top_speed: number;
  transmission: string;
  year: number;
}

interface Coupe {
  acceleration: number;
  car_type: string;
  description: string;
  drivetrain: string;
  engine: string;
  fuel_type: string;
  horsepower: number;
  id: number;
  image_url: string;
  liters: number;
  make: string;
  miliage: string;
  model: string;
  price: number;
  suspension: string;
  top_speed: number;
  transmission: string;
  year: number;
}

interface Sport {
  acceleration: number;
  car_type: string;
  description: string;
  drivetrain: string;
  engine: string;
  fuel_type: string;
  horsepower: number;
  id: number;
  image_url: string;
  liters?: number;
  make: string;
  miliage: string;
  model: string;
  price: number;
  suspension: string;
  top_speed: number;
  transmission: string;
  year: number;
}
