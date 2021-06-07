import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  heading = 'Dev'

  onClick(): void {
    if(this.heading === 'Dev') {
      this.heading = 'Ops';
    } else {
      this.heading = 'Dev';
    }
  }
}
