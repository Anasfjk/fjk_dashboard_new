import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CoreService } from '../service/core.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  error: string = '';
  profile: any = null;
  token: string = '';
  usr_type: string = '';
  branch_id!: string;
  cmptoken: string = '';
  usrPrvlg: any = null;
  codes: any;

  pageLoadingImg: boolean = false;
  form: any;
  company_code: any = '';
  usr_email: any;
  usr_password: any;
  result = '';

  constructor(
    private apiService: ApiService,
    public coreService: CoreService,
    public router: Router
  ) {}

  ngOnInit() {
    // $('#head-part').hide();
    // if (this.coreService.getUserData('user_type')) {
    //   if (this.coreService.getUserData('user_type') == 'PRICE CHECKER') {
    //     this.router.navigate(['/price_checker']);
    //   } else {
    //     this.router.navigate(['/master']);
    //   }
    // }
    this.pageLoadingImg = false;
  }

  loginFunct(form: any) {
    this.pageLoadingImg = true;
    this.apiService.login(form.value).subscribe((res: any) => {
      this.pageLoadingImg = false;
      if (res.error != null) {
        this.result = res.error;
        // console.log(this.result);
      } else {
        this.result = '';
        this.coreService.createfunct(form, this.result, 'Login Success');
        document.cookie = 'bquick=loggedin';
        localStorage.setItem('cmptoken', res.cmptoken);
        localStorage.setItem('auth_token', res.token);
        
        // localStorage.setItem("lcstg", CryptoJS.AES.encrypt(JSON.stringify(res.profile),'dKVFujk').toString());
        this.coreService.setLocalStorage('lcstg', JSON.stringify(res.profile));
        this.coreService.setLocalStorage('urpg', JSON.stringify(res.usrPrvlg));
        this.apiService.getRates().subscribe((rescod: any) => {
          this.codes = rescod.rcd_code.split(';');
          this.coreService.setLocalStorage(
            'rate_codes',
            JSON.stringify(this.codes)
          );
        });

        if (res.usr_type == 'PRICE CHECKER') {
          this.router.navigate(['/price_checker']);
        } else {
          // $('#head-part').show();
          if (res.profile.usr_username == 'auditor')
            this.router.navigate(['/report']);
          else this.router.navigate(['/dashboard']);
        }
      }
    });
  }
}
