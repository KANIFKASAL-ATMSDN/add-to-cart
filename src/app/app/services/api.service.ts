import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url="http://localhost:3000/posts";

  constructor(private http : HttpClient) { }
 
  getProduct(){
    // return this.http.get<any>("https://fakestoreapi.com/products")
    return this.http.get<any>(this.url)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  
}
