export interface HotelModel {
    id: string;
    name: string;
    stars: number;
    price: number;
    image: string;
    amenities: string[];
  }

  export class HotelModel implements HotelModel {
    public id: string;
    public name: string;
    public stars: number;
    public image: string;
    public amenities: string[];

    constructor() {
    }
  }
