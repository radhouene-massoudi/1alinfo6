import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
id!:any;
  constructor(private ar:ActivatedRoute) { }

  ngOnInit(): void {
this.id=this.ar.snapshot.params['idt'];
console.log(this.id);
this.ar.params.subscribe(
  (d)=>{
    console.log(d)
  }
)
  }

}
