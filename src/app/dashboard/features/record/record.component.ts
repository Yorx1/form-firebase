import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrl: './record.component.css'
})
export class RecordComponent implements OnInit {


  showRecord: string[] = []


  constructor(private dashboardService: DashboardService) { }


  ngOnInit(): void {
    this.dashboardService.getRecords().subscribe(
      (value) => {
        value.record?.forEach((value) => {
          this.showRecord.push(value)
        });
      }
    )

  }
}
