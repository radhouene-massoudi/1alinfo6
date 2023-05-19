import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
  msg(){
    console.log('bonjour test')
  }
  mObs(){
   return new Observable(
      ()=>{
        console.log('obs')
      }
    )
  }
}
