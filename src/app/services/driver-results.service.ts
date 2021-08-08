import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { DriverResults } from '../detail1/entities/driver-results';
import * as data from '../../assets/results.json';

@Injectable({
  providedIn: 'root'
})
export class DriverResultsService {
  private data: Array<DriverResults> = (data as any).default;

  constructor(private http: HttpClient) { }

  getResults(): Observable<Array<DriverResults>> {
    return this.http.get<any>("http://localhost:3000/results");
  }
}
