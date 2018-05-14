import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public wasClicked = false;
  public text: string = 'Evolution index';

  onClick() {
      this.wasClicked= !this.wasClicked;
      this.text = this.text === 'Evolution index' ? 'Target Attainment' : 'Evolution index';
  }
}
