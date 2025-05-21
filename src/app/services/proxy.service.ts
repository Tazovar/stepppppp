import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProxyService {

  constructor(private http:HttpClient) { }


  getAllProducts():Observable<any>{
return this.http.get(`https://restaurant.stepprojects.ge/api/Products/GetAll`)
  }
}
