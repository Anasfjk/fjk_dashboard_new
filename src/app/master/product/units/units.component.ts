import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CoreService } from 'src/app/service/core.service';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss'],
})
export class UnitsComponent implements OnInit{
  units: any;
  total_unit: any;

  constructor(private apiService: ApiService,private coreService: CoreService) {}

  ngOnInit() {
    this.getAllUnit();
  }

  getAllUnit() {
    this.apiService.readUnit().subscribe((res) => {
      this.units = res['data'];
      this.total_unit = res['total_unit'];
    });
  }
}
