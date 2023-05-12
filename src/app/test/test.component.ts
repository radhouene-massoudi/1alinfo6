import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnChanges {
klass='1alinfo6'
kolor='red';
j=-1;
d:any;
search!:number;
listProdcut=[
  {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
  {id: 2, title: "T-shirt 2", price: 21, quantity: 30, like: 0},
  {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ];
  constructor() { 
    console.log('cons')
  }

  ngOnInit(): void {
    console.log('oninit')
  }
  ngOnChanges(changes: SimpleChanges): void {
      
  }
  increaseLike(p:any){
//console.log(p)
//let index=this.listProdcut.indexOf(p);
this.listProdcut[p].like++;  
}
  showMsg(){
    console.log('bonjour')
  }
  getColor(){
    return 'pink'
  }
  changeColor(c:any){
    //console.log(c)
this.kolor=c
  }
  detail(i:any){
this.d=this.listProdcut[i];
this.j=i;
  }
}
