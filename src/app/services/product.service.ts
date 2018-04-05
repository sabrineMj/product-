import { Product } from './../domain/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
url: string = 'http://localhost:3000/products';
  constructor(private _service: HttpClient) { }

  public getProduct(): Observable<Product[]> {
    return this._service.get<Product[]>(this.url);
  }}
