import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Com {
  private url = 'http://localhost:3000/api/';
  constructor (
    private http: HttpClient
  ) {

  }
  getCiutats(): Observable<any> {
    return this.http.get<any[]>(`${this.url}ciutats`);
  }
  coincidencia(origin:number, desti:number): Observable<any> {
    const body = {origin, desti};
    return this.http.post<any[]>(`${this.url}horaris`, body);
  }
}
