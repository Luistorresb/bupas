import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from '../../models/api/response';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) {}

  public post<R, T>(url: string, data?: T): Observable<string> {
    url = this.apiUrl + url;
    return this.http.post<Response<R>>(url, data).pipe(
      map(({ message }) => message),
      catchError(({ error }: HttpErrorResponse) => throwError(error as Error))
    );
  }

  public postWithReturnData<R, T>(url: string, data?: T): Observable<R> {
    url = this.apiUrl + url;
    return this.http.post<Response<R>>(url, data).pipe(
      map(({ data }) => data),
      catchError(({ error }: HttpErrorResponse) => throwError(error as Error))
    );
  }

  public get<R>(url: string, content?: any): Observable<R> {
    url = this.apiUrl + url;
    let params = {};

    if (content) {
      params = new HttpParams().appendAll(content);
    }

    return this.http.get<Response<R>>(url, { params }).pipe(
      map(({ data }) => data),
      catchError(({ error }: HttpErrorResponse) => throwError(error as Error))
    );
  }

  public put<R, T>(url: string, data?: T): Observable<string> {
    url = this.apiUrl + url;
    return this.http.put<Response<R>>(url, data).pipe(
      map(({ message }) => message),
      catchError(({ error }: HttpErrorResponse) => throwError(error as Error))
    );
  }

  public putWithReturnData<R, T>(url: string, data?: T): Observable<R> {
    url = this.apiUrl + url;
    return this.http.put<Response<R>>(url, data).pipe(
      map(({ data }) => data),
      catchError(({ error }: HttpErrorResponse) => throwError(error as Error))
    );
  }

  public delete<R>(url: string, body?: any): Observable<string> {
    url = this.apiUrl + url;
    return this.http
      .delete<Response<R>>(url, {
        body,
      })
      .pipe(
        map(({ message }) => message),
        catchError(({ error }: HttpErrorResponse) => throwError(error as Error))
      );
  }
}
