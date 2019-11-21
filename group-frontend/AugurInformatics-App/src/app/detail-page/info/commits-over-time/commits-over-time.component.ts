import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../../data.service';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-commits-over-time',
  templateUrl: './commits-over-time.component.html',
  styleUrls: ['./commits-over-time.component.css']
})
export class CommitsOverTimeComponent implements OnInit {

  changes: any;

  @Input() urlGroupId: string;
  @Input() urlRepoId: string;

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getInfo(this.urlGroupId, this.urlRepoId, 'code-changes').subscribe(data => {
      this.changes = data;

    }
    );
  }

}
