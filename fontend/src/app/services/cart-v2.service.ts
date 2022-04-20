import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { LocalStorageService } from 'angular-web-storage';
@Injectable({
  providedIn: 'root'
})
export class CartV2Service {

  constructor(private http:HttpClient, public local:LocalStorageService) { }

  updateCart(product: any){
    return this.http.put<any>('http://localhost:3000/bookstore/additemtocart', product)
    .pipe(map(data =>{
      return data;
    }))
  }

}
