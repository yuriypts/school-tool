import {NgModule} from '@angular/core';
import {AdminComponent} from './admin/admin.component';
import {RoomClassComponent} from './room-class/room-class.component';
import {CommonModule} from '@angular/common';
import {CommonComponentsModule} from '../common-components/common-components.module';

const PageComponents = [
  AdminComponent,
  RoomClassComponent
];

@NgModule({
    exports: [PageComponents],
    imports: [
      CommonModule,
      CommonComponentsModule
    ],
    declarations: [PageComponents]
})
export class PagesModule {}
