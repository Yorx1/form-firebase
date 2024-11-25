import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { DataDisorders } from '../../../interfaces/dataDisorders.type';

type single = {
  name: string,
  value: number
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  view: [number, number] = [700, 400];
  single: DataDisorders[] = []

  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private dashboardService: DashboardService) {

  }

  ngOnInit(): void {
    const dataInterpretation: { [key: string]: number } = this.dashboardService.interpretationDataCount
    const dataDisordersCount: DataDisorders[] = []
    this.dashboardService.getRecords().subscribe(
      (data) => {
        for (let i = 0; i < Object.keys(dataInterpretation).length; i++) {
          const cont = data.record?.filter(({ disorder }) =>
            disorder === Object.keys(dataInterpretation)[i]).length as number
          dataDisordersCount.push({
            name: Object.keys(dataInterpretation)[i].toUpperCase(),
            value: cont
          })
        }
        this.single = dataDisordersCount
      }
    )
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }



}
