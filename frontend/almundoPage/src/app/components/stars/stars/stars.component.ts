import { HotelService } from './../../../services/hotel.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {

  @Input() totalStars;
  @Input() allowInput;
  checked = false;
  stars = [];
  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.setStars();
    console.log(typeof this.totalStars);
  }

  setStars() {
    for (let i = 0; i < this.totalStars; i++) {
      this.stars.push(i);
    }
  }

  selectStar() {
      this.hotelService.setStarsFilter(this.totalStars);
  }
  checkStar() {
    this.checked = !this.checked;
  }
}
