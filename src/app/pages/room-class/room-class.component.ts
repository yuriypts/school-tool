import {Component, Inject, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {RoomService} from '../../services/room.service';
import {PopupNotificationService} from '../../core/services/popup-notification.service';
import {NOTIFICATION_TYPES} from '../../constants/main';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-room-class',
  templateUrl: './room-class.component.html',
  styleUrls: ['./room-class.component.scss']
})
export class RoomClassComponent implements OnInit {
  public isLoading = false;

  constructor(private readonly route: ActivatedRoute,
              @Inject(DOCUMENT) private document: Document,
              private readonly roomSrv: RoomService,
              private readonly popupNotificationSrv: PopupNotificationService) { }

  async ngOnInit(): Promise<void> {
    try {
      this.isLoading = true;
      const value = this.route.snapshot.params;

      if (value && value.roomId) {
        const response = await this.roomSrv.getRoomByRoomId(value.roomId);

        if (response) {
          this.document.location.href = response.link;
        }
      }
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
