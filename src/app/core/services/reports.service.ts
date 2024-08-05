import { Injectable } from '@angular/core';
import { UtilsHttpClientService } from 'ngx-danisoft-utils';
import { environment } from 'src/environments/environment';
import { apiResponse } from '../interfaces/generic.interface';
import { Auth0Service } from './auth0.service';
import { ReportData } from '../interfaces/reports.interface';


const { woomi } = environment;
@Injectable({
  providedIn: 'root',
})
export class ReportsService {
  constructor(
    private httpService: UtilsHttpClientService,
    private auth0Service: Auth0Service
  ) {}

  getReport(year: string, month: string) {
    return this.httpService.get<apiResponse<ReportData[]>>(
      `${woomi.domain}/post-consumer/certificates?year=${year}&month=${month}`,
      {
        headers: this.auth0Service.auth0Headers,
      }
    );
  }
}
