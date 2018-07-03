import { Component } from '@angular/core';
import { getResource } from './resource';
import { DataAccess } from './data-access';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

console.log(getResource());

var da: DataAccess = new DataAccess();
console.log('getData: ' + da.getData());
console.log('getSum: ' + da.getSum());
console.log('getTwice: ' + da.getTwice());
console.log('getFind(5): ' + da.getFind(5));
console.log('getFind(999999): ' + da.getFind(999999));  // not find
