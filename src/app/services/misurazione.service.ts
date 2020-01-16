import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MisurazioneService {

  misurazioneUrl: string = 'http://' + this.global.backend_address + '/misurazioni';

  constructor(private http: HttpClient, public global: GlobalService) { }

  getDBMedium_PM10(): Observable<any[]>{
    return this.http.get<any[]>(this.misurazioneUrl + '/averageDB_PM10');
  }

  getDBMedium_PM2_5(): Observable<any[]>{
    return this.http.get<any[]>(this.misurazioneUrl + '/averageDB_PM2_5');
  }

  getDBMedium_PM1(): Observable<any[]>{
    return this.http.get<any[]>(this.misurazioneUrl + '/averageDB_PM1');
  }

  getCarrierMedium(): Observable<any[]>{
    return this.http.get<any[]>(this.misurazioneUrl + '/carriermedium');
  }

  getDayChangesPM10(): Observable<any[]>{
    return this.http.get<any[]>(this.misurazioneUrl + '/daychangesPM10');
  }

  getDayChangesPM25(): Observable<any[]>{
    return this.http.get<any[]>(this.misurazioneUrl + '/daychangesPM25');
  }

  getDayChangesPM1(): Observable<any[]>{
    return this.http.get<any[]>(this.misurazioneUrl + '/daychangesPM1');
  }


  getPM10(precision: Number, lat1: Number, lat2: Number,long1: Number,long2: Number): Observable<any[]>{
    return this.http.get<any[]>(this.misurazioneUrl + '/mediapm10/zoom=' + precision + '&lat1=' + lat1 +
                                '&lat2=' + lat2 + '&long1=' + long1 + '&long2=' + long2);
  }
  

  getPM25(precision: Number, lat1: Number, lat2: Number,long1: Number,long2: Number): Observable<any[]>{
    return this.http.get<any[]>(this.misurazioneUrl + '/mediapm25/zoom=' + precision + '&lat1=' + lat1 +
                                '&lat2=' + lat2 + '&long1=' + long1 + '&long2=' + long2);
  }
  
  getPM1(precision: Number, lat1: Number, lat2: Number,long1: Number,long2: Number): Observable<any[]>{
    return this.http.get<any[]>(this.misurazioneUrl + '/mediapm1/zoom=' + precision + '&lat1=' + lat1 +
                                '&lat2=' + lat2 + '&long1=' + long1 + '&long2=' + long2);
  }

  getMediaAnno(precision: Number, animation_backend_param: String, lat1: Number, lat2: Number,long1: Number,long2: Number, start: String, end: String): Observable<any[]>{
    return this.http.get<any[]>(this.misurazioneUrl + '/media/anno/from=' + start + '&to=' + end + '&zoom=' + precision + '&lat1=' + lat1 +
                                '&lat2=' + lat2 + '&long1=' + long1 + '&long2=' + long2+ '&animation_backend_param=' + animation_backend_param);
  }

  getMediaGiorno(precision: Number, animation_backend_param: String,lat1: Number, lat2: Number,long1: Number,long2: Number, start: String, end: String): Observable<any[]>{
    console.log("PRECISIONE: "+precision)
    return this.http.get<any[]>(this.misurazioneUrl + '/media/giorno/from=' + start + '&to=' + end + '&zoom=' + precision + '&lat1=' + lat1 +
                                '&lat2=' + lat2 + '&long1=' + long1 + '&long2=' + long2 + '&animation_backend_param=' + animation_backend_param);
  }

  getMediaOra(precision: Number, animation_backend_param: String, lat1: Number, lat2: Number,long1: Number,long2: Number, start: String, end: String): Observable<any[]>{
    return this.http.get<any[]>(this.misurazioneUrl + '/media/ora/from=' + start + '&to=' + end + '&zoom=' + precision + '&lat1=' + lat1 +
                                '&lat2=' + lat2 + '&long1=' + long1 + '&long2=' + long2+ '&animation_backend_param=' + animation_backend_param);
  }

  getMediaMese(precision: Number, animation_backend_param: String, lat1: Number, lat2: Number,long1: Number,long2: Number, start: String, end: String): Observable<any[]>{
    return this.http.get<any[]>(this.misurazioneUrl + '/media/mese/from=' + start + '&to=' + end + '&zoom=' + precision + '&lat1=' + lat1 +
                                '&lat2=' + lat2 + '&long1=' + long1 + '&long2=' + long2+ '&animation_backend_param=' + animation_backend_param);
  }

  getYears(): Observable<any[]>{
    return this.http.get<any[]>(this.misurazioneUrl + '/getyears');
  }

  getMonthOfYears(year: String): Observable<any[]>{
    return this.http.get<any[]>(this.misurazioneUrl + '/getmonthofyear/' + year);
  }

  getDayOfMonth(year: String, month: String): Observable<any[]>{
    return this.http.get<any[]>(this.misurazioneUrl + '/getdayofmonth/year=' + year + '&month=' + month);
  }

  getHourOfDay(year: String, month: Number, day: Number): Observable<any[]>{
    return this.http.get<any[]>(this.misurazioneUrl + '/gethourofday/year=' + year + '&month=' + month + '&day=' + day);
  }

}
