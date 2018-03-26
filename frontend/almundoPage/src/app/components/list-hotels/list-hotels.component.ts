import { HotelModel } from './../../models/hotel.model';
import { HotelService } from './../../services/hotel.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list-hotels',
  templateUrl: './list-hotels.component.html',
  styleUrls: ['./list-hotels.component.scss']
})
export class ListHotelsComponent implements OnInit {

  constructor(private hotelService: HotelService) { }
  listHotels$: Observable<HotelModel[]>;
  listDetailHotels$: Observable<HotelModel[]>;
  listHotels = [];

  ngOnInit() {
    this.getAllHotels();
  }

  getAllHotels() {
    const listHotels$ = this.hotelService.getHotels();
    this.listHotels = [];
    listHotels$.subscribe(hotels => {
      this.listHotels = hotels;
    });
  }
  getDetailHotels(data) {
    if ( data ) {
      this.listHotels = [];
      this.listHotels = data;
    }
  }

}
