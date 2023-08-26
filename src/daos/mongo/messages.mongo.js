import { MessagesModel } from "../../models/messages.model.js";

export default class Message {
    constructor(){}

    async get() {
        try {
            return await MessagesModel.find({}).sort({date: 1}).lean();
        } catch(error) {
            console.log(error);
            return null
        }
    }

    async create(message) {
        try {
            return await MessagesModel.create(message);
        } catch(error) {
            console.log(error);
            return null;
        }
    }
}
