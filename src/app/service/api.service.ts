import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl: string = 'https://fakestoreapi.com';

  constructor(private http : HttpClient) { }

  getProduct() {
    return this.http.get<any>(`${this.apiUrl}/products`)
    .pipe(map((res:any)=>{
      return res;
    }));
  }

  getElectronics() {
    return this.http.get<any>(`${this.apiUrl}/products/electronics`)
    .pipe(map((res:any)=>{
      return res;
    }));
  }

}
