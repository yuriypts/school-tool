import {Injectable} from '@angular/core';
import {HttpService} from '../core/services/http.service';
import {IRoom} from '../models/response/IRoom';
import {GET_URL} from '../helpers/url-helper';
import {IResponse} from '../models/IResponse';
import {IRoomModel} from '../models/common-components/IRoomModel';

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

  public addRoom = async (roomId: number, model: IRoomModel): Promise<IRoom[]> => {
    const url = GET_URL('room');
    const response = await this.httpSrv.post<IResponse<IRoom[]>>(url, {
      model: {
        id: roomId,
        link: model.link,
        name: model.name
      }
    });
    return response.data;
  }

  public updateRoom = async (roomId: number, model: IRoomModel): Promise<IRoom[]> => {
    const url = GET_URL('room');
    const response = await this.httpSrv.put<IResponse<IRoom[]>>(url, {
      model: {
        id: roomId,
        link: model.link,
        name: model.name
      }
    });
    return response.data;
  }

  public removeRoom = async (roomId: number): Promise<IRoom[]> => {
    const url = GET_URL('room');
    const response = await this.httpSrv.delete<IResponse<IRoom[]>>(url, {
      model: { id: roomId }
    });
    return response.data;
  }
}
