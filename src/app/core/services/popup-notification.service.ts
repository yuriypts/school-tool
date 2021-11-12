import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzNotificationPlacement } from 'ng-zorro-antd/notification/typings';

@Injectable({
  providedIn: 'root'
})
export class PopupNotificationService {
  private position: NzNotificationPlacement = 'bottomRight';

  constructor(private notification: NzNotificationService) {}

  public createNotification(type: string, title: string, content: string): void {
    this.notification.create(
      type,
      title,
      content,
      { nzPlacement: this.position }
    );
  }
}
