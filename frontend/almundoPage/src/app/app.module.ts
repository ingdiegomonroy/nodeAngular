import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HotelService } from './services/hotel.service';
import { HeaderComponent } from './components/header/header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ListHotelsComponent } from './components/list-hotels/list-hotels.component';
import { SvgIconsComponent } from './components/svg-icons/svg-icons.component';
import { StarsComponent } from './components/stars/stars/stars.component';
import { HotelCardComponent } from './components/hotelCard/hotel-card/hotel-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiltersComponent,
    ListHotelsComponent,
    SvgIconsComponent,
    StarsComponent,
    HotelCardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
