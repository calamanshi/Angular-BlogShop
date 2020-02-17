import { Injectable } from '@angular/core';
import { FormControl , FormGroup, Validators  } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firebase: AngularFireDatabase) { }
  productList: AngularFireList<any>;
 form = new FormGroup({
     $key: new FormControl(null),
     proName: new FormControl('', Validators.required),
     proPrice: new FormControl('', Validators.required),
     proStock: new FormControl(''),
     proImage: new FormControl('')     
         });
          getProducts(){
                 this.productList = this.firebase.list('products');
                 return this.productList.snapshotChanges();
         }

insertProduct(product){
                 this.productList.push({
                         proName: product.proName,
                         proPrice: product.proPrice,
                         proStock: product.proStock,
                         proImage:product.proImage
                  });
         }
}
