import {Injectable} from '@angular/core';
import {IRoom} from '../models/response/IRoom';
import {GET_URL} from '../helpers/url-helper';
import {IResponse} from '../models/IResponse';
import {HttpService} from '../core/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  constructor(private readonly httpSrv: HttpService) {}

  public getRoomByRoomId = async (roomId: string): Promise<IRoom> => {
    const url = GET_URL(`room/${roomId}`);
    const response = await this.httpSrv.get<IResponse<IRoom>>(url);
    return response.data;
  }
}
