import { Component, OnDestroy, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.mainService.data$.next();
    this.mainService.data$.complete();
  }
  
  mainText: string = "";

  sendText() {
    this.mainService.data$.next(this.mainText);
  }


}
