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
                    name, address, phone, type 
                from 
                    businesses`);
            return response;
        } catch(err) {
            return err.message
        }
    }
}

module.exports = Businesses;