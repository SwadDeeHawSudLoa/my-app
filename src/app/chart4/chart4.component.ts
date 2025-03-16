import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-chart4',
  standalone: true,
  templateUrl: './chart4.component.html',
  styleUrls: ['./chart4.component.css']
})
export class Chart4Component implements AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef;

  ngAfterViewInit() {
    new Chart(this.chartCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [20, 18, 25, 22, 30, 24, 28],
            backgroundColor: '#4CAF50',
            borderRadius: { topLeft: 5, topRight: 5, bottomLeft: 5, bottomRight: 5 }, // ทำให้แท่งกราฟโค้งมนทุกด้าน
            borderSkipped: false, 
          },
          {
            label: 'Dataset 2',
            data: [25, 22, 30, 24, 35, 30, 35],
            backgroundColor: '#FFC107',
            borderRadius: { topLeft: 5, topRight: 5, bottomLeft: 5, bottomRight: 5 }, // ทำให้แท่งกราฟโค้งมนทุกด้าน
            borderSkipped: false,
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: {display :true,
            stacked: false,
            grid: { display: false },
            ticks: { align: 'center' } 
          },
          y: {display :false,
            beginAtZero: true,
            ticks: { display: false }, 
            grid: { drawTicks: false }, 
          }
        }
      }
    });
  }
}
