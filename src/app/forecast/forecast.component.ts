import { Component, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent {
  tempData = new Array<number>();
  time = new Array<string>();
  @Input() set temperatureData(value: number[]) {
    // this.tempData = new Array<number>();
    value.forEach((element: number) => {
      this.tempData.push(element);
    });

  }
  @Input() set timeData(value: string[]) {
    // this.time = new Array<string>();
    value.forEach((element: string) => {
      this.time.push(element);
    });
  }
  // temperature on y axis
  lineChartData: ChartDataSets[] = [
    { data: this.tempData, label: 'Temperature' },
  ];

  // data at time interval on x axis
  lineChartLabels: Label[] = this.time;

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(0,100,0, 0.8)'
    },
  ];

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType = 'line';

}
