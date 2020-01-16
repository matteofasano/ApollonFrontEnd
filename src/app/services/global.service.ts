import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

//public backend_address = "localhost:8000";
public backend_address = "10.0.215.1:8000";
 //public address = "localhost";
  constructor() { }
}
