import { Component } from '@angular/core';

import { Message } from './messages/message.model.ts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  message: Message = new Message("A new message.", "Huan Chang");

  refreshMessageContent(newMessage: string) {
    this.message.content = this.message.content + newMessage;
  }
}
