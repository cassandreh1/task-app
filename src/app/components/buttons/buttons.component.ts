import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  @Input() text: string = '';
  @Input() color: string = '';
  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
    console.log('add clicked');
  }
}
