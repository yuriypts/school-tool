import {Injectable} from '@angular/core';
import {HttpService} from '../core/services/http.service';
import {IRoom} from '../models/response/IRoom';
import {GET_URL} from '../helpers/url-helper';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private readonly httpSrv: HttpService) {}

  public getRooms = async (): Promise<IRoom[]> => {
    const url = GET_URL('rooms');
    const response = await this.httpSrv.get<IRoom[]>(url);
    return response;
  }
}
