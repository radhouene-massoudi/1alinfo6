import { Component, OnInit } from '@angular/core';
import { OffreService } from '../offre/offre.service';
import { Offre } from '../model/offre';

@Component({
  selector: 'app-listoffre',
  templateUrl: './listoffre.component.html',
  styleUrls: ['./listoffre.component.css']
})
export class ListoffreComponent implements OnInit {
offers!:Offre[];
  constructor(private s:OffreService) { }

  ngOnInit(): void {
    this.s.fetchOffre().subscribe(
   (d)=>{
this.offers=d;
   }   
    );
    
  }

}
