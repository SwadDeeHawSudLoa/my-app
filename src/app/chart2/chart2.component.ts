import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.css'],
})
export class Chart2Component implements AfterViewInit {
  @ViewChild('barChart') barChartRef!: ElementRef<HTMLCanvasElement>;
  private chart!: Chart;

  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart(this.barChartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
          {
            label: 'Online Sales',
            data: [15000, 18000, 5000, 17000, 14000, 16000, 21000],
            backgroundColor: '#007bff',
            barThickness: 10,
            barPercentage: 0.2,
            categoryPercentage: 0.5
          },
          {
            label: 'Offline Sales',
            data: [12000, 14000, 22000, 9000, 11000, 13000, 10000],
            backgroundColor: '#39FF14',
            barThickness: 10,
            barPercentage: 0.2,
            categoryPercentage: 0.9
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            bottom: 40,  
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              padding: 10,  
              usePointStyle: true,  
              boxWidth: 10, 
              
            }
          }
        },
        scales: {
          
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
