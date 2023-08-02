import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../Domine/personas';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) {}

  save(p: Persona): Observable<any[]> {
    return this.http.post<any>("http://40.121.45.164:8080/persona/add", p);
  }

  list(): Observable<any[]> {
    return this.http.get<any[]>("http://40.121.45.164:8080/persona/list");
  }
}
