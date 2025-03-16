import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart3',
  standalone: true,
  imports: [CommonModule], // No ng2-charts needed
  templateUrl: './chart3.component.html',
  styleUrls: ['./chart3.component.css']
})
export class Chart3Component implements AfterViewInit {
  @ViewChild('areaChart') areaChart!: ElementRef;

  ngAfterViewInit() {
    new Chart(this.areaChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['week 1', 'week 2', 'week 3', 'week 4', 'week 5', 'week 6', 'week 7'],
        datasets: [
          {
            label: 'Last Month',
            data: [3100, 3500, 2900, 2900, 3000, 4000, 3700],
            borderColor: '#007bff',
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            fill: true,
            pointBackgroundColor: '#007bff',
            tension: 0.4
          },
          {
            label: 'This Month',    
            data: [3200, 3600, 2800, 3100, 3300, 4200, 3900], 
            borderColor: '#28a745',
            backgroundColor: 'rgba(40, 167, 69, 0.2)',
            fill: true,
            pointBackgroundColor: '#28a745',
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {  display: false, 
            labels: { 
              
            } }
        },
        scales: {
          x: { display: false },
          y: { display: false }
        }
      }
    });
  }
}
