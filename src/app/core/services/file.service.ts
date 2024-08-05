import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';
import { UtilsHttpClientService } from 'ngx-danisoft-utils';
import {
  apiArceFileToken,
  apiArceLoginResponse,
  apiArceFileConfig,
  apiArceResponse,
  apiArceFileBody,
} from '../interfaces/file.interface';

const { file } = environment;

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  private _apiArceFileToken: apiArceFileToken = {
    token: '',
    apiKey: '',
  };
  constructor(private httpService: UtilsHttpClientService) {
    this.goSigninFile();
  }

  goSigninFile() {
    this.signinFile().subscribe(
      (response: apiArceLoginResponse) => {
        console.log(response);
        if (response.code === '200') {
          this._apiArceFileToken.token = response.token;
          this._apiArceFileToken.apiKey = response.apiKey;
        } else {
          console.log('Error en el login de file');
          this._apiArceFileToken.token = '';
          this._apiArceFileToken.apiKey = '';
        }
      },
      (error) => {
        console.log(error);
        this._apiArceFileToken.token = '';
        this._apiArceFileToken.apiKey = '';
      }
    );
  }

  signinFile() {
    let data = {
      username: file.username,
      password: file.password,
    };
    return this.httpService.post<apiArceLoginResponse>(
      `${file.domain}/auth/signin`,
      data
    );
  }
  uploadFile(
    data: apiArceFileConfig
  ): Observable<apiArceResponse<apiArceFileBody>> {
    let headers_: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('x-apiarce-token', this.tokenFile)
      .set('token-type', 'Bearer')
      .set('api-Key', this.apiKeyFile);

    return this.httpService.post<apiArceResponse<apiArceFileBody>>(
      `${file.domain}/files/upload-file-base64`,
      data,
      {
        headers: headers_,
      }
    );
  }

  delateFile(id_file: string): Observable<apiArceResponse<apiArceFileBody>> {
    let headers_: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('x-apiarce-token', this.tokenFile)
      .set('token-type', 'Bearer')
      .set('api-Key', this.apiKeyFile);
    return this.httpService.delete<apiArceResponse<apiArceFileBody>>(
      `${file.domain}/files/${id_file}`,
      {
        headers: headers_,
      }
    );
  }

  get tokenFile(): string {
    return this._apiArceFileToken.token || '';
  }
  get apiKeyFile(): string {
    return this._apiArceFileToken.apiKey || '';
  }
}
