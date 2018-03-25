import { HttpClientModule } from '@angular/common/http';
import { HotelService } from './services/hotel.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private hotelService: HotelService) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
  }
}
