import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services/admin.service';
import {IRoom} from '../../models/response/IRoom';
import {PopupNotificationService} from '../../core/services/popup-notification.service';
import {DATE_FORMATS, NOTIFICATION_TYPES} from '../../constants/main';
import {IRoomModel} from '../../models/common-components/IRoomModel';
// @ts-ignore
import moment from 'moment';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public rooms: IRoom[] = [];
  public openModal = false;
  public roomModel?: IRoomModel;

  public isLoading = false;

  constructor(private readonly adminSrv: AdminService,
              private readonly popupNotificationSrv: PopupNotificationService) { }

  async ngOnInit(): Promise<void> {
    try {
      this.isLoading = true;
      const result = await this.adminSrv.getRooms();
      this.rooms = result;
    } catch (error) {
      console.error(error);

      this.popupNotificationSrv.createNotification(
        NOTIFICATION_TYPES.ERROR,
        'Error',
        'Something went wrong please contact to administrator',
      );
    } finally {
      this.isLoading = false;
    }
  }

  public removeRoom = async (room: IRoom): Promise<void> => {
    const confirmEvent = window.confirm('Видалити класс?');

    if (confirmEvent) {
      try {
        this.isLoading = true;
        const result = await this.adminSrv.removeRoom(room.classId);
        this.rooms = result;
      } catch (error) {
        console.error(error);

        this.popupNotificationSrv.createNotification(
          NOTIFICATION_TYPES.ERROR,
          'Error',
          'Something went wrong please contact to administrator',
        );
      } finally {
        this.isLoading = false;
      }
    }
  }

  public editRoom = async (room: IRoom): Promise<void> => {
    this.openModalEvent();
    this.roomModel = {
      roomId: room.classId,
      name: room.name,
      link: room.link
    };
  }

  public handleAddRoom = async (addUpdateRoom: IRoomModel): Promise<void> => {
    try {
      this.closeModalEvent(false);
      this.isLoading = true;

      let result: IRoom[] = [];

      if (addUpdateRoom.roomId) {
        result = await this.adminSrv.updateRoom(addUpdateRoom.roomId, addUpdateRoom);
      } else {
        result = await this.adminSrv.addRoom(this.rooms.length + 1, addUpdateRoom);
      }

      this.roomModel = undefined;
      this.rooms = result;
    } catch (error) {
      console.error(error);

      this.popupNotificationSrv.createNotification(
        NOTIFICATION_TYPES.ERROR,
        'Error',
        'Something went wrong please contact to administrator',
      );
    } finally {
      this.isLoading = false;
    }
  }

  public openModalEvent = (): void => {
    this.openModal = true;
  }

  public closeModalEvent = (flag: boolean): void => {
    this.openModal = flag;
    this.roomModel = undefined;
  }

  public parseDate = (value: number): string => {
    return moment(value).format(DATE_FORMATS.YYYYMMDDHHMM);
  }
}
