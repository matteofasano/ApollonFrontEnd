import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OsmService {

  searchUrl1: string = 'https://nominatim.openstreetmap.org/search?q=';
  searchUrl2: string = '&format=json&polygon=1&addressdetails=1'

  constructor(private http: HttpClient) { }

  search(address: string): Observable<any[]>{
    return this.http.get<any[]>(this.searchUrl1 + encodeURIComponent(address) + this.searchUrl2);
  }
}
