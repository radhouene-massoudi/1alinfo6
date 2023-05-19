import { Component, OnInit } from '@angular/core';
import { OffreService } from '../offre/offre.service';
import { Offre } from '../model/offre';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addoffre',
  templateUrl: './addoffre.component.html',
  styleUrls: ['./addoffre.component.css']
})
export class AddoffreComponent implements OnInit {

  constructor(private of: OffreService,
    private router: Router) { }

  ngOnInit(): void {
  }
  save(d: Offre) {
    this.of.addOffre(d).subscribe(
      () => {
        this.router.navigate(['list'])
      },
      (err) => {
        console.log(err)
      }
    );
  }
}
