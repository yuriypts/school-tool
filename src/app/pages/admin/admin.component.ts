import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services/admin.service';
import {IRoom} from '../../models/response/IRoom';
import {PopupNotificationService} from '../../core/services/popup-notification.service';
import {NOTIFICATION_TYPES} from '../../constants/main';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public rooms: IRoom[] = [];
  public openModal = false;

  constructor(private readonly adminSrv: AdminService,
              private readonly popupNotificationSrv: PopupNotificationService) { }

  async ngOnInit(): Promise<void> {
    try {
      const result = await this.adminSrv.getRooms();
      this.rooms = result;
    } catch (error) {
      console.error(error);

      this.popupNotificationSrv.createNotification(
        NOTIFICATION_TYPES.ERROR,
        'Error',
        'Something went wrong please contact to administrator',
      );
    }
  }

  public addRoom = async (): Promise<void> => {
    this.openModal = true;
  }

  public removeRoom = async (room: IRoom): Promise<void> => {

  }

  public editRoom = async (room: IRoom): Promise<void> => {

  }

  public click = (value: string) => {};
}
