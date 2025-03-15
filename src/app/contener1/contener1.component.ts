import { AfterViewInit, Component } from '@angular/core';
import { Chart,registerables } from 'chart.js'
import { ChartComponent } from '../chart1/chart1.component'; 
@Component({
  selector: 'app-contener1',
  imports: [ChartComponent],
  templateUrl: './contener1.component.html',
  styleUrl: './contener1.component.css'
})
export class Contener1Component {

}
