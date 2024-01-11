import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransectionComponent } from './transection/transection.component';
import { ReportComponent } from './report/report.component';
import { SettingComponent } from './setting/setting.component';
import { ProductionComponent } from './production/production.component';
import { HrComponent } from './hr/hr.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'master',
    loadChildren: () =>
      import('./master/master.module').then((m) => m.MasterModule),
  },
  { path: 'transection', component: TransectionComponent },
  { path: 'production', component: ProductionComponent },
  { path: 'report', component: ReportComponent },
  { path: 'hr', component: HrComponent },
  { path: 'settings', component: SettingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
