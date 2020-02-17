import { Component, OnInit } from '@angular/core';
import { ProductService  } from "../shared/product.service";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) { }
submitted: boolean;
formControls = this.productService.form.controls;
showSuccessMessage: boolean;
  ngOnInit() {
  }

onSubmit(){

         if(this.productService.form.get("$key").value == null ){
 this.productService.insertProduct(this.productService.form.value);
this.showSuccessMessage =true;
       setTimeout(()=> this.showSuccessMessage=false,3000); // show 3 secs
       this.submitted = false;
       this.productService.form.reset();// clear after submit
         } else {
                 //update
         }
 }
}
