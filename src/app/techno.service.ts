import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class TechnoService {

  DEVAPI_URL = '/assets/db/';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<any> {
    return this.http.get<any[]>(`${this.DEVAPI_URL}projects.json`);
  }

  getProject(id:number): Observable<any> {
    return this.http.get<any[]>(`${this.DEVAPI_URL}projects.json`).pipe(map(projects => projects.find(p => p.id == id)));
  }

  getHomeProjects(): Observable<any> {
    return this.http.get<any[]>(`${this.DEVAPI_URL}projects.json`).pipe(map(projects => projects.slice(0, 4)));
  }

  countProjects():Observable<any>{
    return this.http.get<any>(`${this.DEVAPI_URL}projects.json`).pipe(map(projects=>projects.length-4));
  }

}