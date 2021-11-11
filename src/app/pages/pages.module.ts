import {NgModule} from '@angular/core';
import {AdminComponent} from './admin/admin.component';
import {RoomClassComponent} from './room-class/room-class.component';

const PageComponents = [
  AdminComponent,
  RoomClassComponent
];

@NgModule({
  exports: [PageComponents],
  declarations: [PageComponents]
})
export class PagesModule {}
