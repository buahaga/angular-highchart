import { Component } from '@angular/core';
import { MOCK_DATA } from './mock-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public profit: number[] = MOCK_DATA.map(el => el.profit);
  public planned: number[] = MOCK_DATA.map(el=> el.planned);
  public month: string[] = MOCK_DATA.map(el => el.month);
  public currency: string = MOCK_DATA[MOCK_DATA.length -1].currency;

  public btnToggle = false;
  public text: string = 'Evolution index';

  onClick() {
      this.btnToggle= !this.btnToggle;
      this.text = this.text === 'Evolution index' ? 'Target Attainment' : 'Evolution index';
  }
}
