import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private readonly http: HttpClient) {}

  public delete<T>(params?: any, payload?: any, options?: any): Promise<T> {
    return this.httpCall('DELETE', params, payload, options)
      .toPromise();
  }

  public get<T>(params?: any, options?: any): Promise<T> {
    return this.httpCall('GET', params, options)
      .toPromise();
  }

  public post<T>(params?: any, payload?: any, options?: any): Promise<T> {
    return this.httpCall('POST', params, payload, options)
      .toPromise();
  }

  public put<T>(params?: any, payload?: any, options?: any): Promise<T> {
    return this.httpCall('PUT', params, payload, options)
      .toPromise();
  }

  private httpCall(method: string,
                   url: string,
                   payload?: any,
                   options?: any,
                   contentType = 'application/json'): Observable<any> {
    try {
      const headers = new HttpHeaders({});
      if (contentType !== null) {
        headers.append('Content-Type', contentType);
      }

      const requestOptions: any = {
        ...options,
        headers,
        body: payload,
      };

      return this.http.request(method, url, requestOptions);
    } catch (error) {
      console.error(error);

      return new Observable(observer => observer.error(error));
    }
  }
}
