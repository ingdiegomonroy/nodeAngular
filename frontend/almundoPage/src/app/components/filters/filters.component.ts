import { HotelService } from './../../services/hotel.service';
import { Component, OnInit, Output, EventEmitter, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StarsComponent } from '../stars/stars/stars.component';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Output() applyFilters: EventEmitter<any> = new EventEmitter<any>();
  @ViewChildren(StarsComponent) stars: QueryList<StarsComponent>;

  constructor(private hotelService: HotelService) { }
  hotelName: string;
  ngOnInit() {
  }
  actionButton() {
    this.applyFilters.emit();
    this.hotelService.getDetailHotels();
  }
  blurButton() {
    this.hotelService.setNameFilter(this.hotelName);
  }
  selectAllStars() {
    this.hotelService.setAllStars();
    this.stars.forEach(star => star.checkStar());
  }
}
