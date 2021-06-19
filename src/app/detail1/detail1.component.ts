import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { debounceTime, distinctUntilChanged, every, switchMap, tap } from 'rxjs/operators';
import { interval } from 'rxjs';

@Component({
  selector: 'app-detail1',
  templateUrl: './detail1.component.html',
  styleUrls: ['./detail1.component.scss']
})
export class Detail1Component implements OnInit {

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.data$.pipe(debounceTime(200), distinctUntilChanged())
    .subscribe(d => {
      this.text = d;
      this.contador++;
    })
  }

  text: string = "";
  contador: number = 0;

}
