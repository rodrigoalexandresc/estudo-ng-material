import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { debounceTime, distinctUntilChanged, every, switchMap, tap } from 'rxjs/operators';
import { DriverResults } from './entities/driver-results';
import { DriverResultsService } from '../services/driver-results.service';

@Component({
  selector: 'app-detail1',
  templateUrl: './detail1.component.html',
  styleUrls: ['./detail1.component.scss']
})
export class Detail1Component implements OnInit {

  constructor(private mainService: MainService, private driverResultsService: DriverResultsService) { }
  displayedColumns: string[] = ['season', 'wins'];

  ngOnInit(): void {
    this.mainService.data$.pipe(debounceTime(200), distinctUntilChanged())
    .subscribe(d => {
      this.text = d;
      this.findDriversData();
      this.contador++;
    })
  }

  text: string = "";
  contador: number = 0;
  driverSelected: DriverResults = <DriverResults>{};

  private findDriversData() {

    if (this.text.length <= 0) {
      this.reset();
      return;
    } 

    const data = this.driverResultsService.getResults();
    const driversMatched = data.filter(f => f.driver.toLowerCase().includes(this.text.toLowerCase()));
    if (driversMatched.length > 0) {
      this.driverSelected = driversMatched[0];
    }
    else {
      this.reset();
    }
  }

  private reset() {
    this.driverSelected = <DriverResults>{};
  }
}
