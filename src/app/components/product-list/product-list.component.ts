import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  data: Product[];
  pr: any[];
  constructor( private _service: ProductService) {
   }

  ngOnInit() {
  this._service.getProduct().subscribe(
    // tslint:disable-next-line:whitespace
    result => { this.data= result ;}
  );
  }

}
