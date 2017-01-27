import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Message } from './message.model.ts'

@Component({
  selector: 'sishu-message',
  templateUrl: './message.component.html',
  styles: [`
    .author {
      display: inline-block;
      font-style: italic;
      font-size: 12px;
      width: 80%;
    }
    .config {
      display: inline-block;
      text-align: right;
      font-size: 12px;
      width: 19%;
    }
  `]
})
export class MessageComponent {
  // Allow pass argument from outside
  @Input() message: Message
  @Output() editClicked = new EventEmitter<string>();

  onEdit() {
    this.editClicked.emit('A new value.');
  }
}
