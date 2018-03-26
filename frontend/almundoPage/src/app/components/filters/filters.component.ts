import { HotelService } from './../../services/hotel.service';
import { Component, OnInit, Output, EventEmitter, ViewChild, ViewChildren, QueryList, trigger, state, style, transition, animate } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StarsComponent } from '../stars/stars/stars.component';
import { Observable } from 'rxjs/Observable';
import { HotelModel } from '../../models/hotel.model';



@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  animations: [
    trigger('filtersInOut', [
      state('in', style({
        height: '400px'
      })),
      state('out', style({
        height: '50px',
        overflow: 'hidden'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
})
export class FiltersComponent implements OnInit {

  @ViewChildren(StarsComponent) stars: QueryList<StarsComponent>;
  @Output() showNewHotelDetail: EventEmitter<any> = new EventEmitter<any>();

  constructor(private hotelService: HotelService) { }
  hotelName: string;
  listDetailHotels$: Observable<HotelModel[]>;
  listHotels = [];
  helpFiltersOpen: string;
  checked = false;

  ngOnInit() {
    this.helpFiltersOpen = 'in';
  }
  toggleFilters(): void {
    // this.helpFiltersOpen = this.helpFiltersOpen === 'out' ? 'in' : 'out';
  }
  actionButton() {
    const listDetailHotels$ = this.hotelService.getDetailHotels();
    this.listHotels = [];
    listDetailHotels$.subscribe(hotels => {
      this.listHotels = hotels;
      this.showNewHotelDetail.emit(this.listHotels);
    });
  }
  blurButton() {
    this.hotelService.setNameFilter(this.hotelName);
  }
  selectAllStars() {
    this.stars.forEach(star => star.checkStar());
    this.hotelService.setAllStars(this.checked);
  }
}
