import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public http: HttpClient) { }
  URL : any = 'http://125.99.173.43:5222/';
  /*function for calling get Apis's*/
  get(url) {
    let headers = new HttpHeaders()
    // headers = headers.append('content-type', 'application/json')
    // headers = headers.append('content-type', 'application/x-www-form-urlencoded')
    // headers = headers.append('customer-header', 'custom');

    let token=localStorage.getItem('token') ? localStorage.getItem('token') : '';
    console.log('token',token);
    headers = headers.append('token', token);

    return this.http.get<any[]>(`${this.URL}${url}`, { 'headers': headers }).pipe(
      map((data) => {
        //You can perform some transformation here
        return data;
      }),
      catchError((err) => {
        console.error(err);
        throw err;
      })
    )
  }

  /*function for calling post Apis's*/
  post(url, body) {
    let headers = new HttpHeaders()
    // headers = headers.append('content-type', 'application/json')
    // headers = headers.append('content-type', 'application/x-www-form-urlencoded')
    // headers = headers.append('customer-header', 'custom')
    let token=localStorage.getItem('token') ? localStorage.getItem('token') : '';
    headers = headers.append('token', token);

    let value: HttpParams = new HttpParams();
    if (body) {
      Object.keys(body).forEach(key => {
        value = value.append(key, body[key]);
      });
    }
    return this.http.post(`${this.URL}${url}`, body, { 'headers': headers })
      .pipe(
        map((data) => {
          //You can perform some transformation here
          return data;
        }),
        catchError((err) => {
          console.error(err);
          throw err;
        })
      )
  }

  /*function for calling put Apis's*/
  put(url, body) {
    let headers = new HttpHeaders()
    // headers = headers.append('content-type', 'application/json')
    // headers = headers.append('content-type', 'application/x-www-form-urlencoded')
    // headers = headers.append('customer-header', 'custom')
    let token=localStorage.getItem('token') ? localStorage.getItem('token') : '';
    headers = headers.append('token', token);
    
    let value: HttpParams = new HttpParams();
    if (body) {
      Object.keys(body).forEach(key => {
        value = value.append(key, body[key]);
      });
    }
    return this.http.put(`${this.URL}${url}`, body, { 'headers': headers })
      .pipe(
        map((data) => {
          //You can perform some transformation here
          return data;
        }),
        catchError((err) => {
          console.error(err);
          throw err;
        })
      )

  }

  /*function for calling patch Apis's*/
  patch(url, body) {
    let headers = new HttpHeaders()
    headers = headers.append('content-type', 'application/json')
    headers = headers.append('content-type', 'application/x-www-form-urlencoded')
    // headers = headers.append('customer-header', 'custom')
    let value: HttpParams = new HttpParams();
    if (body) {
      Object.keys(body).forEach(key => {
        value = value.append(key, body[key]);
      });
    }
    return this.http.patch(url, body, { 'headers': headers })
      .pipe(
        map((data) => {
          //You can perform some transformation here
          return data;
        }),
        catchError((err) => {
          console.error(err);
          throw err;
        })
      )

  }

  /*function for calling delete Apis's*/
  delete(url, id: string) {
    let headers = new HttpHeaders()
    headers = headers.append('content-type', 'application/json')
    headers = headers.append('content-type', 'application/x-www-form-urlencoded')
    return this.http.delete(url, { 'headers': headers })
      .pipe(
        map((data) => {
          //You can perform some transformation here
          return data;
        }),
        catchError((err) => {
          console.error(err);
          throw err;
        })
      )

  }

}
