//HostListener will provide scroll feedback
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { transition, trigger, query, style, animate, group, animateChild } from '@angular/animations'; /* Animations on routing */
import { bufferToggle } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimate', 
      [transition('* <=> *', [
        query(':enter', [style({opacity: 0}), animate('1s 0.3s ease-in-out', style({ opacity: 1 }))], {optional: true}),
      ])
    ])
  ]
})
export class AppComponent {
  title = 'Brian Venter';

}
