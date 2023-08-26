import { TicketModel } from '../../models/tickets.model.js';

export default class Ticket {
    constructor(){}

    async get() {
        try {
            return await TicketModel.find(); 
        } catch(error) {
            console.log(error);
            return null;
        }
    }

    async create(ticket) {
        try {
            return await TicketModel.create(ticket)
        } catch(error) {
            console.log(error);
            return null;
        }
    }

    async getById(id) {
        try {
            return await TicketModel.findById(id);
        } catch(error) {
            console.log(error);
            return null;
        }
    }

    async getByCode(code) {
        try {
            return await TicketModel.find({code: code});
        } catch(error) {
            console.log(error);
            return null;
        }
    }

    async getByPurchaser(email) {
        try {
            return await TicketModel.find({purchaser: email});
        } catch(error) {
            console.log(error);
            return null;
        }
    }
}
