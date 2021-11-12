import {Injectable} from '@angular/core';
import {HttpService} from '../core/services/http.service';
import {IRoom} from '../models/response/IRoom';
import {GET_URL} from '../helpers/url-helper';
import {IResponse} from '../models/IResponse';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private readonly httpSrv: HttpService) {}

  public getRooms = async (): Promise<IRoom[]> => {
    const url = GET_URL('rooms');
    const response = await this.httpSrv.get<IResponse<IRoom[]>>(url);
    return response.data;
  }
}
