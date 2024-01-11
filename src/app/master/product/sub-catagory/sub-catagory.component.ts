import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CoreService } from 'src/app/service/core.service';

@Component({
  selector: 'app-sub-catagory',
  templateUrl: './sub-catagory.component.html',
  styleUrls: ['./sub-catagory.component.scss']
})
export class SubCatagoryComponent implements OnInit{
  subcat_all: any;
  subtotal_cats: any;


  constructor(private apiService: ApiService,private coreService: CoreService) {}

  ngOnInit(): void {
   this.getAllSubCat();
  }

  getAllSubCat(){

    this.apiService.getSubCatAll().subscribe((res) => {
      this.subcat_all = res['data']['subcat'];   
      this.subtotal_cats = res['data']['total'];
               
     });
  }

}
