import { Component } from '@angular/core';
import { Chart2Component } from "../chart2/chart2.component";
import { Chart3Component } from '../chart3/chart3.component';
import { Chart4Component } from '../chart4/chart4.component';
@Component({
  selector: 'app-contener2',
  imports: [Chart2Component,Chart3Component,Chart4Component],
  templateUrl: './contener2.component.html',
  styleUrl: './contener2.component.css'
})
export class Contener2Component {

}
