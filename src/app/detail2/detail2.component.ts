import { Component, OnInit } from '@angular/core';
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

}
