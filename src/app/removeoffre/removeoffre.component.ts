import { Component, OnInit } from '@angular/core';
import { OffreService } from '../offre/offre.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-removeoffre',
  templateUrl: './removeoffre.component.html',
  styleUrls: ['./removeoffre.component.css']
})
export class RemoveoffreComponent implements OnInit {
id:any;
  constructor(
    private s:OffreService,
    private router:Router,
    private ar:ActivatedRoute) { }

  ngOnInit(): void {
this.id=this.ar.snapshot.params['idt'];
this.s.removeOffre(this.id).subscribe(
  ()=>{
    this.router.navigate(['/list']);
  }
)
  }

}
