import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'chart7',
  standalone: true,
  imports: [CommonModule],
  template: `<canvas #chartCanvas></canvas>`,
  styleUrls: ['./chart7.component.css']
})
export class Chart7Component implements AfterViewInit {
  @ViewChild('chartCanvas', { static: false }) chartCanvas!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;

  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');

    if (ctx) {
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['', '', '', '', ''],
          datasets: [
            {
              label: 'Services',
              barThickness: 10,
              data: [300, 350, 280, 220, 200],
              backgroundColor: '#1DD1A1',
            },
            {
              label: 'Volume',
              barThickness: 10,
              data: [500, 600, 550, 450, 400],
              backgroundColor: '#0984E3',
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
            x: {display:false ,stacked: true },
            y: { display :false,stacked: true }
          }
        }
      });
    }
  }
}
