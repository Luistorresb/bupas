import { Injectable } from '@angular/core';
import { UtilsHttpClientService } from 'ngx-danisoft-utils';
import { environment } from 'src/environments/environment';
import { apiResponse } from '../interfaces/generic.interface';
import { Auth0Service } from './auth0.service';
import { Invoice, Pedido } from '../interfaces/orders.interfaces';
import { Observable } from 'rxjs';

const { woomi } = environment;
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(
    private httpService: UtilsHttpClientService,
    private auth0Service: Auth0Service
  ) {}

  getOrders(
    client: string,
    date_init: string,
    date_end: string,
    type_filter: string
  ) {
    return this.httpService.get<apiResponse<Pedido[]>>(
      `${woomi.domain}/itrack/orders/${client}?date_init=${date_init}&date_end=${date_end}&type_filter=${type_filter}`,
      {
        headers: this.auth0Service.auth0Headers,
      }
    );
  }
  getOrderInvoice(client: string, serie: string, invoice: string) {
    return this.httpService.get<apiResponse<Invoice[]>>(
      `${woomi.domain}/itrack/orders/invoice/${client}/${serie}/${invoice}`,
      {
        headers: this.auth0Service.auth0Headers,
      }
    );
  }
  downloadExcel(
    client: string,
    date_init: string,
    date_end: string
  ): Observable<Blob> {
    return this.httpService.get<Blob>(
      `${woomi.domain}/itrack/orders/excel/${client}?date_init=${date_init}&date_end=${date_end}`,
      {
        responseType: 'blob' as 'json', // Especificar explícitamente que la respuesta es un 'blob'
        headers: this.auth0Service.auth0Headers,
      }
    );
  }
}
