import { Injectable } from '@angular/core';
import { UtilsHttpClientService } from 'ngx-danisoft-utils';
import { environment } from 'src/environments/environment';
import { apiResponse } from '../interfaces/generic.interface';
import { Auth0Service } from './auth0.service';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpErrorResponse, HttpEvent } from '@angular/common/http';
import {
  Certificate,
  CertificateIRC,
  createData,
  CustomHttpErrorResponse,
  deleteData,
} from '../interfaces/consumption.interface';

const { woomi } = environment;
@Injectable({
  providedIn: 'root',
})
export class ConsumptionService {
  constructor(
    private httpService: UtilsHttpClientService,
    private auth0Service: Auth0Service
  ) {}

  getCertificate(date_init: string, date_end: string) {
    return this.httpService.get<apiResponse<Certificate[]>>(
      `${woomi.domain}/post-consumer/certificate/2?date_init=${date_init}&date_end=${date_end}`,
      {
        headers: this.auth0Service.auth0Headers,
      }
    );
  }

  getTableIRC(date_init: string, date_end: string) {
    return this.httpService.get<apiResponse<CertificateIRC[]>>(
      `${woomi.domain}/post-consumer/certificate/1?date_init=${date_init}&date_end=${date_end}`,
      {
        headers: this.auth0Service.auth0Headers,
      }
    );
  }

  uploadFile(formData: FormData): Observable<HttpEvent<apiResponse<any[]>>> {
    return this.httpService
      .post<apiResponse<any[]>>(
        `${woomi.domain}/post-consumer/certificates`,
        formData,
        {
          headers: this.auth0Service.auth0HeadersByFile,
          reportProgress: true,
          observe: 'events',
        }
      )
      .pipe(catchError(this.handleFileUploadError));
  }

  private handleFileUploadError(error: HttpErrorResponse): Observable<never> {
    const customError: CustomHttpErrorResponse = {
      headers: {
        normalizedNames: {},
        lazyUpdate: null,
      },
      status: error.status,
      statusText: error.statusText,
      url: error.url || '',
      ok: false,
      name: 'HttpErrorResponse',
      message: `Http failure response for ${error.url}: ${error.status} ${error.statusText}`,
      error: {
        code: error.status,
        success: false,
        messages: {
          error:
            'Something went wrong with the following lines: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10',
        },
      },
    };
    return throwError(customError);
  }

  deleteCertificate(data: deleteData) {
    return this.httpService.patch<apiResponse<null>>(
      `${woomi.domain}/post-consumer/certificate/${data.id}`,
      data,
      {
        headers: this.auth0Service.auth0Headers,
      }
    );
  }

  createCertificate(data: createData) {
    return this.httpService.post<apiResponse<any[]>>(
      `${woomi.domain}/post-consumer/certificate`,
      data,
      {
        headers: this.auth0Service.auth0Headers,
      }
    );
  }

  deleteIRC(id: string) {
    return this.httpService.delete<apiResponse<any[]>>(
      `${woomi.domain}/post-consumer/irc/${id}`,
      {
        headers: this.auth0Service.auth0Headers,
      }
    );
  }

  getCertificatePDF(id: number): Observable<Blob> {
    return this.httpService.get<Blob>(
      `${woomi.domain}/post-consumer/certificate/pdf/${id}`,
      {
        responseType: 'blob' as 'json',
        headers: this.auth0Service.auth0Headers,
      }
    );
  }
}
