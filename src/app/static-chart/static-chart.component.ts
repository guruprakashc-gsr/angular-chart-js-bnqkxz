import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-static-chart',
  templateUrl: './static-chart.component.html',
  styleUrls: ['./static-chart.component.css']
})
export class StaticChartComponent implements OnInit {
  constructor() {}
  chartOptions ={
    reponsive: true
  };
  chartLabels: ['1st','2nd','Movement'];
  chartData: any = [
    {
      data: []
    }
  ];
  data:any[] = [25,85,64];
  ngOnInit() {
    this.chartData = this.data as any[];
  }
}
