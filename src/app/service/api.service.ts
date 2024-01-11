import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  PHP_API_LOC_SERVER1 = 'http://bquickerp.com/backend';
  PHP_API_LOC_SERVER2 = 'http://127.0.0.1:8000';
  PHP_API_SERVER = environment.php_api_server
    ? environment.php_api_server
    : this.PHP_API_LOC_SERVER1;

  constructor(private httpClient: HttpClient) {}

  readUnit(): Observable<any> {
    return this.httpClient.get<any>(this.PHP_API_SERVER + '/api/get_units', {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Bearer ' + localStorage.getItem('auth_token'),
        cmptoken: localStorage.getItem('cmptoken') || '',
      }),
    });
  }

  login(res: any): Observable<any> {
    return this.httpClient.post(this.PHP_API_SERVER + '/api/login', res, {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
      }),
    });
  }

  LogOut(): Observable<any> {
    return this.httpClient.get<any>(this.PHP_API_SERVER + '/api/logout', {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Bearer ' + localStorage.getItem('auth_token'),
        cmptoken: localStorage.getItem('cmptoken') || '',
      }),
    });
  }

  getRates(): Observable<any> {
    return this.httpClient.post<any>(
      this.PHP_API_SERVER + '/api/get_rate_code',
      {},
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          Authorization: 'Bearer ' + localStorage.getItem('auth_token'),
          cmptoken: localStorage.getItem('cmptoken') || '',
        }),
      }
    );
  }

  readCat(): Observable<any> {
    return this.httpClient.get<any>(
      this.PHP_API_SERVER + '/api/get_categories',
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          Authorization: 'Bearer ' + localStorage.getItem('auth_token'),
          cmptoken: localStorage.getItem('cmptoken') || '',
        }),
      }
    );
  }

  getSubCatAll(): Observable<any> {
    return this.httpClient.get<any>(this.PHP_API_SERVER + '/api/get_subcat_all', {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Bearer ' + localStorage.getItem("auth_token"),
        cmptoken: localStorage.getItem('cmptoken') || '',
      })
    });
  }
}
