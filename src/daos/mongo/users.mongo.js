import { UserModel } from '../../models/users.model.js';

export default class User {
    constructor(){}

    async get() {
        try {
            return await UserModel.find({}); 
        } catch(error){
            console.log(error);
            return null;
        }
    }

    async getByEmail(email) {
        try {
            return await UserModel.find({email: email})
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async create(user) {
        try {
            return await UserModel.create(user);
        } catch(error) {
            console.log(error);
            return null;
        }
    }

    async getById(id) {
        try {
            return await UserModel.find({_id: id});   
        } catch(error) {
            console.log(error);
            return null;
        }
    }

    async update(id, user) {
        try {
            return await UserModel.updateOne({_id: id}, user);
        } catch(error) {
            console.log(error);
            return null;
        }
    }

    async delete(id) {
        try {
            UserModel.delete({_id: id});
        } catch(error) {
            console.log(error);
        }
    }
}
