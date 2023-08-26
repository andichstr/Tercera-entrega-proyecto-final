import { MessagesRepository } from '../daos/factory.js';
import { MessagesException } from '../exceptions/messages.exceptions.js';

export class MessageService {
  constructor() {
    this.messagesRepository = new MessagesRepository();
  }
  validatePostMsg(email, msg) {
    if (!email || !msg) {
      throw new MessagesException("Please, complete email and message", 400);
    }
  }

  async getAllMessages() {
    const messages = await this.messagesRepository.get();
    if (!!messages) return messages;
    else throw new MessagesException("No messages found", 404);
  }

  async addMessage(message) {
    const email = message.user;
    const msg = message.message;
    this.validatePostMsg(email, msg);
    const msgCreated = await this.messagesRepository.create(message);
    return msgCreated;
  }
}
