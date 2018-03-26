import { HttpClientModule } from '@angular/common/http';
import { HotelService } from './services/hotel.service';
import { Component, ViewChild, QueryList } from '@angular/core';
import { ListHotelsComponent } from './components/list-hotels/list-hotels.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  @ViewChild(ListHotelsComponent) listHotels: ListHotelsComponent;

  constructor(private hotelService: HotelService) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
  }

  showNewHotelDetail(data) {
    this.listHotels.getDetailHotels(data);
  }
}
