import { Component, OnInit } from '@angular/core';
import { ProductService } from "../shared/product.service";
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
productArray =[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
  	this.productService.getProducts().subscribe(
                 (list) => {
                         this.productArray = list.map( (item) => {
                                return {
                                        $key : item.key,
                                        ...item.payload.val()
                                }
                        })
                 });
  }

}
