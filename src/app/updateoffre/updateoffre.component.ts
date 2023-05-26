import { Component, OnInit } from '@angular/core';
import { OffreService } from '../offre/offre.service';
import { Offre } from '../model/offre';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateoffre',
  templateUrl: './updateoffre.component.html',
  styleUrls: ['./updateoffre.component.css']
})
export class UpdateoffreComponent implements OnInit {
off=new Offre();
  constructor(private s:OffreService,private ac:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.s.getOffreById(this.ac.snapshot.params['id']).subscribe(
      (data:Offre)=>{
this.off=data
      }
    );
  }
updateOffre(f:Offre){
this.s.updateOffre(f,this.ac.snapshot.params['id']).subscribe(
  ()=>{
this.router.navigate(['/list'])
});
}
}