import {NgModule} from '@angular/core';
import {DemoNgZorroAntdModule} from './modules/ng-zorro-antd.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    DemoNgZorroAntdModule
  ]
})
export class CoreModule {}
