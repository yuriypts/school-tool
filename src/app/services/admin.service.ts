import {Injectable} from '@angular/core';
import {HttpService} from '../core/services/http.service';
import {IRoom} from '../models/response/IRoom';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private readonly httpSrv: HttpService) {}

  public getRooms = async (): Promise<IRoom[]> => {
    const response = await this.httpSrv.get<IRoom[]>();
    return response;
  }
}
