import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
    this.events
      .pipe(filter(o => o.type === "LOG"))
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {        
        console.log(data);
        this.eventLog.push(data);
      })
  }  

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }  

  title = 'estudo';
  isReady: boolean = false;    
  events: Subject<any> = new Subject();
  destroy$: Subject<any> = new Subject();
  eventLog: Array<any> = [];

  testAppReady() {
     this.isReady = true;
  }
}



