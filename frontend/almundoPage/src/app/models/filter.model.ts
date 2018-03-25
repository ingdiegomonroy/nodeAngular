export interface FilterModel {
    name: string;
    stars: number[];
  }

  export class FilterModel implements FilterModel {
    public id: string;
    public stars: number[];

    constructor() {
        this.name = '';
        this.stars = [];
    }
  }
