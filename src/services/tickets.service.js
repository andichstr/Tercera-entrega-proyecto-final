//@ts-check
import { TicketsRepository } from '../daos/factory.js';
import { TicketsException } from '../exceptions/tickets.exceptions.js';
import { generateRandomString } from '../utils/string.utils.js';

const CODE_DEFAULT_SIZE = 6;

export class TicketService {
    constructor () {
        this.ticketsRepository = new TicketsRepository();
    }

    async addTicket(ticket) {
        try {
            let code = generateRandomString(CODE_DEFAULT_SIZE);
            let codeRepeated = await this.isCodeRepeated(code);
            while(codeRepeated) {
                code = generateRandomString(CODE_DEFAULT_SIZE);
                codeRepeated = await this.isCodeRepeated(code);
            }
            ticket.code = code;
            return await this.ticketsRepository.create(ticket);
        } catch (err) {
            console.log(err);
            throw new TicketsException("Error validando el ticket", 500);
        }
    }

    async getTickets() {
        return await this.ticketsRepository.get();
}

    async getTicketById(id) {
        const foundTicket = await this.ticketsRepository.getById(id);
        if(!!foundTicket){
            return foundTicket
        } else throw new TicketsException(`Product with id: ${id} not found.`, 404);
    }

    async isCodeRepeated(code) {
        const ticket = await this.ticketsRepository.getByCode(code);
        return !!ticket;
    }

    async getByPurchaser(email) {
        return await this.ticketsRepository.getByPurchaser(email);
    }
}