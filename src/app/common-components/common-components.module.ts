import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { NgAntModalComponent } from './ng-ant-modal/ng-ant-modal.component';
import {DemoNgZorroAntdModule} from '../core/modules/ng-zorro-antd.module';
import {CommonModule, registerLocaleData} from '@angular/common';

import en from '@angular/common/locales/en';

import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import {ReactiveFormsModule} from '@angular/forms';

const CommonComponents = [
  NgAntModalComponent
];

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [CommonComponents],
  exports: [CommonComponents],
  imports: [
    CommonModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule,
  ],
  bootstrap: [NgAntModalComponent],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons },
  ],
})
export class CommonComponentsModule {}
