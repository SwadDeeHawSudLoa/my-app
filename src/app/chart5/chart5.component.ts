import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // ✅ Import CommonModule

@Component({
  selector: 'app-chart5',
  standalone: true,
  imports: [CommonModule],  // ✅ Add CommonModule
  templateUrl: './chart5.component.html',
  styleUrls: ['./chart5.component.css'],
})
export class Chart5Component {
  salesData = [
    { id: '01', name: 'Home Decor Range', popularity: 45, sales: 45, color: '#2196F3' },
    { id: '02', name: "Disney Princess Pink Bag 18'", popularity: 29, sales: 29, color: '#4CAF50' },
    { id: '03', name: 'Bathroom Essentials', popularity: 18, sales: 18, color: '#9C27B0' },
    { id: '04', name: 'Apple Smartwatches', popularity: 25, sales: 25, color: '#FF9800' },
  ];
}
