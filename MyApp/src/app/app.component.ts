import { Component } from '@angular/core';
import { getResource } from './resource';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

console.log(getResource());
