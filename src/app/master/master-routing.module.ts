import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitsComponent } from './product/units/units.component';
import { FeaturesComponent } from './product/features/features.component';
import { CatagoryComponent } from './product/catagory/catagory.component';
import { SubCatagoryComponent } from './product/sub-catagory/sub-catagory.component';

const routes: Routes = [
  {
    path:'units',
    component:UnitsComponent
  },
  {
    path:'feature',
    component:FeaturesComponent
  },
  {
    path:'catagory',
    component:CatagoryComponent
  },
  {
    path:'sub_category',
    component:SubCatagoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
