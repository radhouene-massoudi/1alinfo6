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
 removeOffre(id:any){
  return this.http.delete<Offre>('http://localhost:3000/offre/'+id)
 }
 getOffreById(id:any):Observable<Offre>{
  return this.http.get<Offre>('http://localhost:3000/offre/'+id)
 }
 updateOffre(data:Offre,id:any):Observable<Offre>{
  return this.http.put<Offre>('http://localhost:3000/offre/'+id,data)
    }
}
