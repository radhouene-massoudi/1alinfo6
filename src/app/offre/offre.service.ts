import { Injectable } from '@angular/core';
import { Offre } from '../model/offre';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http:HttpClient) { }

  addOffre(data:Offre):Observable<Offre>{
return this.http.post<Offre>('http://localhost:3000/offre',data)
  }
 fetchOffre():Observable<Offre[]>{
 return this.http.get<Offre[]>('http://localhost:3000/offre')
 }
}
