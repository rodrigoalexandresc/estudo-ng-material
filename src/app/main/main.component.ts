import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Detail2Component } from '../detail2/detail2.component';
import { MainService } from '../main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  constructor(private mainService: MainService) { }

  @ViewChild(Detail2Component) detail2: Detail2Component;

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.mainService.data$.next();
    this.mainService.data$.complete();
  }
  
  mainText: string = "";

  sendText() {
    alert("");
    this.mainService.data$.next(this.mainText);
  }


}
