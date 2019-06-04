const db = require('./conn.js');

class Businesses {
    constructor(id, name, address, phone, type){
        this.id = id;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.type = type;
    }

    static async getAll() {
        try {
            let response = await db.any(
                `select 
                    id, name 
                from 
                    businesses`
            );
            return response;
        } catch(err) {
            return err.message
        }
    }
    static async getOne(b_id) {
        try {
            let response = await db.any(
                `select
                    id, name, address, phone, type
                from
                    businesses
                where
                    id = ${b_id}`
            );
            return response;
        } catch(err) {
            return err.message
        }
    }
    static async createReview(id, content, score) {
        const query = `insert into reviews (score, content, business_id) values (${score}, '${content}', ${id});`;
        console.log(query);
        try {
            let response = await db.result(query);
            console.log(response);
            return response;
        } catch(err) {
            return err.message
        }
    }
}

module.exports = Businesses;