import { Injectable } from '@angular/core';
import { UtilsHttpClientService } from 'ngx-danisoft-utils';
import { StorageService } from './storage.service';
import { environment } from 'src/environments/environment';

const { woomi } = environment;
@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(
    private httpService: UtilsHttpClientService,
    private storageService: StorageService
  ) {}
}
