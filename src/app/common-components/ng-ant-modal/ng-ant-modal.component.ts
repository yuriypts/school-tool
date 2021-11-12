import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-ng-ant-modal',
  templateUrl: './ng-ant-modal.component.html',
  styleUrls: ['./ng-ant-modal.component.scss']
})
export class NgAntModalComponent {
  @Input()
  public isVisible = false;
  @Output()
  public handleClick = new EventEmitter<string>();

  handleOk(): void {
    this.isVisible = false;
    if (this.handleClick) {
      this.handleClick.emit('');
    }
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
