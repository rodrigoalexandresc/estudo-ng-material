import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  data$: Subject<any> = new Subject();

  constructor() { }
}
