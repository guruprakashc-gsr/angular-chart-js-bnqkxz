import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { Chart, ChartDatasets } from 'chart.js';

import { OnChanges } from '@angular/core';
@Component({
  selector: 'demo-chart',
  templateUrl: './chart.component.html',
  encapsulation: ViewEncapsulation.None
})
export class DemoChartComponent implements OnInit {
  sbimfChart: Chart;
  msChart: Chart;
  @Input() chartdata: any[] = [
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
      sbimf1Val: 15.69,
      sbimf2Val: 65.16,
      sbimf3Val: 57.36,
      ms1Val: 54.96,
      ms2Val: 95.45,
      ms3Val: 25.0
    }
  ];
  @ViewChild('canvassbimf') stackchartcanvas1: ElementRef;
  @ViewChild('canvasms') stackchartcanvas2: ElementRef;
  sbimfDs: any[] = [];
  msDs: any[] = [];
  sbimfData: ChartDatasets[] = [];
  msData: ChartDatasets[] = [];
  // sbimf: any = {
  //   data: [],
  //   label: ''
  // };
  // ms: any = {
  //   data: [],
  //   label: ''
  // };
  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < this.chartdata.length; i++) {
      let sbimf: any = {
        data: [],
        label: ''
      };
      let ms: any = {
        data: [],
        label: ''
      };
      sbimf.data.push(this.chartdata[i].sbimf1Val);
      sbimf.data.push(this.chartdata[i].sbimf2Val);
      sbimf.data.push(this.chartdata[i].sbimf3Val);
      sbimf.label = 'SBIMF';
      this.sbimfDs.push(sbimf);
      ms.data.push(this.chartdata[i].ms1Val);
      ms.data.push(this.chartdata[i].ms2Val);
      ms.data.push(this.chartdata[i].ms3Val);
      ms.label = 'Market Share';
      this.msDs.push(ms);
    }

    // console.log('SBIMF ', this.sbimfDs);
    // console.log('MS ', this.msDs);
    this.generateChart();
  }

  generateChart() {
    this.sbimfData = this.sbimfDs;
    this.msData = this.msDs;

    const canvas1: any = this.stackchartcanvas1.nativeElement;
    const ctx1 = canvas1.getContext('2d');

    const canvas2: any = this.stackchartcanvas2.nativeElement;
    const ctx2 = canvas2.getContext('2d');

    setTimeout(() => {
      this.sbimfChart = new Chart(ctx1, {
        type: 'bar',
        data: this.sbimfData,
        options: {
          // tooltips: {
          //   mode: 'index',
          //   intersect: true,
          //   position: 'custom',
          //   yAlign: 'bottom'
          // },
          // scales: {
          //   xAxes: [
          //     {
          //       stacked: true
          //     }
          //   ],
          //   yAxes: [
          //     {
          //       stacked: false,
          //       display: false
          //     }
          //   ]
          // },
          responsive: true
        }
      });
      this.msChart = new Chart(ctx2, {
        type: 'bar',
        data: this.msData,
        options: {
          // tooltips: {
          //   mode: 'index',
          //   intersect: true,
          //   position: 'custom',
          //   yAlign: 'bottom'
          // },
          // scales: {
          //   xAxes: [
          //     {
          //       stacked: true
          //     }
          //   ],
          //   yAxes: [
          //     {
          //       stacked: false,
          //       display: false
          //     }
          //   ]
          // },
          responsive: true
        }
      });
    });
  }
}
