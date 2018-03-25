import { HotelModel } from './../../../models/hotel.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent implements OnInit {

  @Input() hotelDetail: HotelModel;
  constructor() { }

  ngOnInit() {
  }

}
