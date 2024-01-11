import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CoreService } from 'src/app/service/core.service';

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.scss']
})
export class CatagoryComponent implements OnInit{
  cats: any;
  total_cats: any;

  constructor(private apiService: ApiService,private coreService: CoreService) {}

  ngOnInit(): void {
    this.getAllCat();
  }

  getAllCat(){

    this.apiService.readCat().subscribe((res) => {
      this.cats = res['cat'];   
      this.total_cats = res['total_cat'];   
               
     });
  }

}
