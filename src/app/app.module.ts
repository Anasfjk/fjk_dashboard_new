import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BodyComponent } from './component/sidenav/body/body.component';
import { SettingComponent } from './setting/setting.component';
import { TransectionComponent } from './transection/transection.component';
import { ReportComponent } from './report/report.component';
import { SubMenuComponent } from './component/sidenav/sub-menu/sub-menu.component';
import { HeaderComponent } from './component/header/header.component';

import { FooterComponent } from './component/footer/footer.component';
import { UnitsComponent } from './master/product/units/units.component';
import { FeaturesComponent } from './master/product/features/features.component';
import { CatagoryComponent } from './master/product/catagory/catagory.component';
import { SubCatagoryComponent } from './master/product/sub-catagory/sub-catagory.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HrComponent } from './hr/hr.component';
import { ProductionComponent } from './production/production.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DashboardComponent,
    BodyComponent,
    SettingComponent,
    TransectionComponent,
    ReportComponent,
    SubMenuComponent,
    HeaderComponent,
    FooterComponent,
    UnitsComponent,
    FeaturesComponent,
    CatagoryComponent,
    SubCatagoryComponent,
    HrComponent,
    ProductionComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HighchartsChartModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
