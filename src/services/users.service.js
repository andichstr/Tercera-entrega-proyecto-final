import { UsersRepository } from '../daos/factory.js';

export class UsersService {
  constructor() {
    this.usersRepository = new UsersRepository();
  }
  
  async getUserById(id) {
    return this.usersRepository.getById(id);
  }
}
