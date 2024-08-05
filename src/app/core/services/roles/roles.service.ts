import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private _api: ApiService) {}

  allRoles(): Observable<any> {
		return this._api.get('/roles');
	}

  createRol(): Observable<any> {
		return this._api.post('/roles');
	}
  listRolesId(id: any): Observable<any> {
		return this._api.get(`/roles/${id}`);
	}

  updateRol(id: any): Observable<any> {
		return this._api.put(`/roles/${id}`);
	}
}
