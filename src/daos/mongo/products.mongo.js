import { ProductModel } from '../../models/products.model.js';

export default class Product {
    constructor(){}

    async get(query, options) {
        try {
            return await ProductModel.paginate(JSON.parse(query), options); 
        } catch(error) {
            console.log(error);
            return null;
        }
    }

    async create(product) {
        try {
            return await ProductModel.create(product)
        } catch(error) {
            console.log(error);
            return null;
        }
    }

    async getById(id) {
        try {
            return await ProductModel.findById(id);
        } catch(error) {
            console.log(error);
            return null;
        }
    }

    async update(id, product) {
        try {
            return await ProductModel.updateOne({_id: id}, product)
        } catch(error) {
            console.log(error);
            return null;
        }
    }

    async delete(id) {
        try {
            ProductModel.delete({_id: id});
        } catch(error) {
            console.log(error);
        }
    }

    async getByCode(code) {
        try {
            return await ProductModel.find({code: code});
        } catch(error) {
            console.log(error);
            return null;
        }
    }
}
