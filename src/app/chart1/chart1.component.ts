import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Chart, registerables, ChartOptions, ChartDataset } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(...registerables, annotationPlugin);

@Component({
  selector: 'app-chart-component',
  standalone: true,
  template: `<canvas #chartCanvas></canvas>`,
  styles: [
    `canvas {
      width: 150% !important; 
      height: 210px !important; 
      max-width: 150% !important;
    }`
  ],
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('chartCanvas', { static: false }) chartCanvas!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;

  ngAfterViewInit(): void {
    if (!this.chartCanvas) {
      console.error('Canvas element not found!');
      return;
    }
    this.createChart();
  }

  createChart() {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) {
      console.error('Failed to get canvas context');
      return;
    }

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Loyal Customers',
            data: [320, 340, 250, 200, 230, 250, 300, 330, 280, 220, 160, 120],
            borderColor: 'purple',
            backgroundColor: 'purple',
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 0,
          },
          {
            label: 'New Customers',
            data: [260, 255, 170, 120, 170, 280, 350, 350, 300, 240, 190, 120],
            borderColor: 'red',
            backgroundColor: 'red',
            tension: 0.4,
            pointRadius: (ctx) => ctx.dataIndex === 7 ? 5 : 0, 
            pointBackgroundColor: 'red',
            pointBorderColor: 'red',
            pointHoverRadius: 6,
          },
          {
            label: 'Unique Customers',
            data: [280, 350, 340, 280, 210, 220, 240, 300, 320, 300, 220, 200],
            borderColor: 'green',
            backgroundColor: 'green',
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            align: 'center',
            labels: {
              font: {
                size: 10,
              },
              boxWidth: 10,
              padding: 5,
              usePointStyle: false,
            },
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              autoSkip: true, 
              maxRotation: 0, 
              minRotation: 0,
            },
          },
          y: {
            beginAtZero: true,
            suggestedMax: 400,
            ticks: {
              stepSize: 100,
            },
          },
        },
      },
      plugins: [
        {
          id: 'customGridLine',
          beforeDraw: (chart) => {
            const ctx = chart.ctx;
            const xScale = chart.scales['x'];
            const yScale = chart.scales['y'];
            const index = 7; 
            const x = xScale.getPixelForTick(index);

            ctx.save();
            ctx.beginPath();
            ctx.setLineDash([6, 6]);  
            ctx.strokeStyle = 'red'; 
            ctx.lineWidth = 0.5;
            ctx.moveTo(x, yScale.top);
            ctx.lineTo(x, yScale.bottom);
            ctx.stroke();
            ctx.restore();
          },
        },
      ],
    });
  }
}
