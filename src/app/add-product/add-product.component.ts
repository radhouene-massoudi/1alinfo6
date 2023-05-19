import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { ProductService } from '../ProductService/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
 
})
export class AddProductComponent implements OnInit {

  constructor(private t:TestService,private ps: ProductService) { }

  ngOnInit(): void {
    
  }
showF(form:any){
console.log(form)
}
save(valueOfForm:any){
this.ps.AddProduct(valueOfForm).subscribe(
  
);
}
}
