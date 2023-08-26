//@ts-check

export class TicketsException extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
        this.name = 'TicketsException';
    }
}