import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chartData: any[] = [
    {
      locationName: 'Uttar Pradesh',
      sbimf1Val: 52.69,
      sbimf2Val: 84.16,
      sbimf3Val: 25.36,
      ms1Val: 25.86,
      ms2Val: 48.24,
      ms3Val: 12.58
    },
    {
      locationName: 'Rajasthan',
      sbimf1Val: 25.86,
      sbimf2Val: 48.25,
      sbimf3Val: 12.58,
      ms1Val: 52.96,
      ms2Val: 84.16,
      ms3Val: 25.36
    },
    {
      locationName: 'Karnataka',
      sbimf1Val: 52.69,
      sbimf2Val: 84.16,
      sbimf3Val: 25.36,
      ms1Val: 52.96,
      ms2Val: 84.45,
      ms3Val: 25.0
    }
  ];
}
