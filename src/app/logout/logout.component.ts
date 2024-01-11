import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CoreService } from '../service/core.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {

  

  tokenData: any = { auth_token: null, error: null, message: null };
  result = '';
  constructor(
    private apiService: ApiService,
    private coreService: CoreService,
    public router: Router
  ) {}

  ngOnInit(): void {
  //   this.apiService.LogOut().subscribe((res: any) => {
  //     localStorage.removeItem('cmptoken');
  //     localStorage.removeItem('auth_token');
  //     localStorage.removeItem('lcstg');
  //     localStorage.removeItem('urpg');
  //     this.router.navigate(['/']);

  //     if (res['error'] != null) {
  //       this.result = res['error'];
  //     }
  //     this.result = res['message'];
  //   });
  //   // console.log(this.result);
  // }
  }
}
