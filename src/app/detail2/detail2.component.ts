import { Component, OnInit } from '@angular/core';
import { RaceResult, SeasonResult } from '../detail1/entities/driver-results';
import { MainService } from '../main.service';

@Component({
  selector: 'app-detail2',
  templateUrl: './detail2.component.html',
  styleUrls: ['./detail2.component.scss']
})
export class Detail2Component implements OnInit {

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.data$.subscribe(d => {
      this.text = d;
      this.contador++;
    })    
  }

  text: string = "";
  contador: number = 0;  
  data: Array<RaceResult> = [];

  setSeason(seasonResult: SeasonResult) {
    this.data = seasonResult.races;
    console.log(this.data);
  }

}
