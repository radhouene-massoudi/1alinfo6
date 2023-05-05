import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
klass='1alinfo6'
kolor='red';
listProdcut=[
  {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
  {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
  {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ];
  constructor() { }

  ngOnInit(): void {
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
}
