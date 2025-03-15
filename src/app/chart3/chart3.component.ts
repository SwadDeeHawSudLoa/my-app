import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart3.component.html',
  styleUrls: ['./chart3.component.css']
})
export class Chart3Component implements AfterViewInit {
  @ViewChild('lineChart') lineChart!: ElementRef<HTMLCanvasElement>;
  private chart!: Chart;

  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart(this.lineChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [
          {
            label: 'Last Month',
            data: [3000, 3200, 2900, 3100, 3300, 3500, 3000],
            borderColor: '#2276f5',
            backgroundColor: 'rgba(34, 118, 245, 0.2)',
            pointBackgroundColor: '#2276f5',
            pointBorderColor: '#ffffff',
            fill: true,
          },
          {
            label: 'This Month',
            data: [4000, 4200, 4300, 4100, 4400, 4600, 4500],
            borderColor: '#18c964',
            backgroundColor: 'rgba(24, 201, 100, 0.2)',
            pointBackgroundColor: '#18c964',
            pointBorderColor: '#ffffff',
            fill: true,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }
    });
  }
}
