import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'chart7',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="chart-container">
      <canvas #chartCanvas></canvas>
    </div>
  `,
  styleUrls: ['./chart7.component.css']
})
export class Chart7Component implements AfterViewInit {
  @ViewChild('chartCanvas', { static: false }) chartCanvas!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;

  ngAfterViewInit() {
    this.createChart();
  }
  createChart() {
    const canvas = this.chartCanvas.nativeElement;
    canvas.width = 250; 
    canvas.height = 200;
  
    const ctx = canvas.getContext('2d');
  
    if (ctx) {
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['', '', '', '', '',''],
          datasets: [
            {
              label: 'Services',
              data: [300, 350, 280, 220, 200,440],
              backgroundColor: '#1DD1A1',
              barThickness: 10,
              barPercentage: 0.8, // ปรับขนาดแท่งให้เล็กลง
              categoryPercentage: 0.9, // เพิ่มช่องว่างระหว่างกลุ่มแท่ง
            },
            {
              label: 'Volume',
              data: [500, 600, 550, 450, 400,300],
              backgroundColor: '#0984E3',
              barThickness: 10,
              barPercentage: 0.7,
              categoryPercentage: 0.5,
            }
          ]
        },
        options: {
          responsive: false,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          },
          scales: {
            x: { 
              type: 'category', // ใช้ category แทน linear
              display: false,
              stacked: true
            },
            y: { 
              display: false,
              stacked: true
            }
          }
        }
      });
    }
  }
  
}
