import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import * as SecureLS from 'secure-ls';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  constructor(private apiService: ApiService,public router: Router) {}

  getUserData(item:any) {
    const ls = new SecureLS();
    if (ls.get('lcstg') !== '') {
      const data = JSON.parse(ls.get('lcstg'));
      return data[item];
    } else {
      return false;
    }
  }

  createfunct(form:any, result:any, message:any) {
    result= null;
    // this.showMessage(message);
    form.reset();
  }

  setLocalStorage(key:any, value:any) {
    const ls = new SecureLS();
    ls.set(key, value); // set key1
  }

  // showMessage(message,limit = 1000) {
  //   this.snackBar.open(message, 'Close', {
  //     duration: limit,
  //   });
  // }
}
