import {Component} from '@angular/core';
import {NgForageConfig, NgForage} from '@ngforage/ngforage-ng5';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private config: NgForageConfig, store: NgForage) {
  }
}
