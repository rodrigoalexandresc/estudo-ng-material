import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MainService } from '../main.service';
import { debounceTime, distinctUntilChanged, every, switchMap, tap } from 'rxjs/operators';
import { DriverResults, SeasonResult } from './entities/driver-results';
import { DriverResultsService } from '../services/driver-results.service';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-detail1',
  templateUrl: './detail1.component.html',
  styleUrls: ['./detail1.component.scss']
})
export class Detail1Component implements OnInit {
  constructor(private mainService: MainService, private driverResultsService: DriverResultsService) { }
  displayedColumns: string[] = ['select', 'season', 'wins'];
  selection: SelectionModel<SeasonResult>;

  @Output() seasonSelected: EventEmitter<SeasonResult> = new EventEmitter();

  ngOnInit(): void {
    this.subscribeFindDriversData();

    const initialSelection = [];
    const allowMultiselect = false;
    this.selection = new SelectionModel<SeasonResult>(allowMultiselect, initialSelection);
    this.selection.changed.subscribe(data => {
      if (data.added.length > 0)
        this.seasonSelected.emit(data.added[0]);
    } );
  }

  text: string = "";
  contador: number = 0;
  driverSelected: DriverResults = <DriverResults>{};

  private subscribeFindDriversData() {
    this.mainService.data$.pipe(debounceTime(200), distinctUntilChanged())
      .subscribe(d => {
        this.text = d;
        this.findDriversData();
        this.contador++;
      });
  }

  private findDriversData() {
    if (this.text.length <= 0) {
      this.reset();
      return;
    } 

    this.driverResultsService.getResults().subscribe(data => {
      const driversMatched = data.filter(f => f.driver.toLowerCase().includes(this.text.toLowerCase()));
      if (driversMatched.length > 0) {
        this.driverSelected = driversMatched[0];
      }
      else {
        this.reset();
      }    
    })
  }

  private reset() {
    this.driverSelected = <DriverResults>{};
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.driverSelected.results.length;
    return numSelected == numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.driverSelected.results.forEach(row => this.selection.select(row));
  }
}
