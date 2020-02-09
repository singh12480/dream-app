import { Component } from '@angular/core';
import { of, interval, concat  } from 'rxjs';
import { mergeMap, map, mapTo  } from 'rxjs/operators';
// import Rx from 'rxjs/Rx'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
 getPostOne$ = interval(5000);
 getPostTwo$ = interval(10000);

 subscription = concat(this.getPostOne$, this.getPostTwo$)
            .subscribe(res => console.log(res));

}