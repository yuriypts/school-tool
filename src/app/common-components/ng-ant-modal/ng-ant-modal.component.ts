import {Component, Input, Output, EventEmitter, OnInit, OnDestroy, OnChanges, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IRoomModel} from '../../models/common-components/IRoomModel';

@Component({
  selector: 'app-ng-ant-modal',
  templateUrl: './ng-ant-modal.component.html',
  styleUrls: ['./ng-ant-modal.component.scss']
})
export class NgAntModalComponent implements OnInit, OnDestroy, OnChanges {
  @Input()
  public isVisible = false;
  @Output()
  public handleClick = new EventEmitter<IRoomModel>()
  @Input()
  public roomModel?: IRoomModel;
  @Output()
  public closeModal = new EventEmitter<boolean>();

  public formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      name: new FormControl('', [
        Validators.required,
      ]),
      link: new FormControl('', [
        Validators.required,
      ])
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.roomModel) {
      this.formGroup.setValue({
        name: this.roomModel.name,
        link: this.roomModel.link,
      });
    }
  }

  ngOnInit(): void {
    this.formGroup.reset({name: '', link: ''});
  }

  ngOnDestroy(): void {
    this.formGroup.reset({name: '', link: ''});
  }

  handleOk(): void {
    this.isVisible = false;

    const { valid } = this.formGroup;

    if (this.handleClick && valid) {
      this.handleClick.emit({
        roomId: this.roomModel?.roomId,
        name: this.formGroup.value.name,
        link: this.formGroup.value.link,
      });
      this.formGroup.reset();
    } else {
      this.handleCancel();
      this.formGroup.markAllAsTouched();
    }
  }

  handleCancel(): void {
    if (this.closeModal) {
      this.formGroup.reset();
      this.closeModal.emit(false);
    }
  }
}
