import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private wasClicked = false;
  private text: string = 'Evolution index';

  onClick() {
      this.wasClicked= !this.wasClicked;
      this.text = this.text === 'Evolution index' ? 'Target Attainment' : 'Evolution index';
  }
}
