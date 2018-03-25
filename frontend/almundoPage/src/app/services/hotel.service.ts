import { FilterModel } from './../models/filter.model';
import { HotelModel } from './../models/hotel.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response, RequestOptions} from '@angular/http';

@Injectable()
export class HotelService {

  api_url = 'http://localhost:3000';
  hotelsUrl = `${this.api_url}/api/hotels`;
  filter = new FilterModel;

  constructor(
    private http: HttpClient
  ) { }

  // configureHeaders(contentType?: string) {
  //   const headers = new Headers({
  //     'Content-Type': contentType || 'application/json'
  //   });

  //   const options = new RequestOptions({ headers: headers});
  //   return options;
  // }
    setStarsFilter(stars) {
      if (this.filter.stars.indexOf(stars) === -1) {
        this.filter.stars.push(stars);
        this.filter.stars.sort();
      } else {
        const index =  this.filter.stars.indexOf(stars);
        this.filter.stars.splice(index, 1);
        this.filter.stars.sort();
      }
    }
    setAllStars() {
      this.filter.stars = [];
    }
    setNameFilter(name) {
      this.filter.name = name;
    }
    getHotels(): Observable<HotelModel[]> {
      // const options = this.configureHeaders();
      return this.http.get(this.hotelsUrl)
      .map(res  => {
        return res['data'];
      });
    }
    getDetailHotels() {
      console.log(this.filter);
    }

}
