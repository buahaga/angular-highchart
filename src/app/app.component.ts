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
      this.text === 'Evolution index' ? this.text = 'Target Attainment' : this.text = 'Evolution index';
  }
}
