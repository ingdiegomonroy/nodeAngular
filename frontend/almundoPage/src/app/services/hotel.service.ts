import { FilterModel } from './../models/filter.model';
import { HotelModel } from './../models/hotel.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
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
    setAllStars(value) {
      if ( value ) {
        this.filter.stars = [1, 2, 3, 4, 5];
      } else {
        this.filter.stars = [];
      }
    }

    removeAllStars() {
      this.filter.stars = [];
    }
    setNameFilter(name) {
      this.filter.name = name;
    }
    getHotels(): Observable<HotelModel[]> {
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      return this.http.get(`${this.hotelsUrl}`)
      .map(res  => {
        return res['data'];
      });
    }

    getDetailHotels(): Observable<HotelModel[]> {
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');

      const applyFilter = {
        name: (this.filter.name) ? this.filter.name : '',
        stars: (this.filter.stars) ? this.filter.stars : []
      };

      // return this.http.post(`${this.hotelsUrl}`, '{name:' + applyFilter.name + ', stars:' + applyFilter.stars + '}')
      return this.http.post(`${this.hotelsUrl}`, applyFilter)
      .map(res  => {
        return res['data'];
      });
    }

}
