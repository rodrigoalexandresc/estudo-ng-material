import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

interface FooBar {
  id: number,
  name: string
}

@Component({
  selector: 'app-demo-autocomplete',
  templateUrl: './demo-autocomplete.component.html',
  styleUrls: ['./demo-autocomplete.component.scss']
})
export class DemoAutocompleteComponent implements OnInit {

  myControl = new FormControl();
  options: FooBar[] = [
    { id: 1, name: "Foo" }, 
    { id: 2, name: "Bar" }, 
    { id: 3, name: "Foo bar"}
  ];
  filteredOptions: Observable<FooBar[]>;

  constructor() { 
  }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  private _filter(value: string) : FooBar[] {
    const filterValue = value?.toLowerCase() || '';

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  displayFn(option: FooBar): string {
    return option && option.name ? option.name : '';
  }

}
