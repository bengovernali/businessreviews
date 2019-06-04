const db = require('./conn.js');

class Reviews {
    constructor(name, score, content, username) {
        this.name = name;
        this.score = score;
        this.content = content;
        this.username = username;
    }

    static async getReviews(b_id) {
        try {
            let response = await db.any(
                `select
                    businesses.name, score, content, users.username
                from
                    reviews
                inner join businesses
                    on businesses.id = ${b_id} and business_id = businesses.id
                inner join users
                    on user_id = users.id;`
            )
            return response;
        } catch(err) {
            return err.message
        }
    }
}

module.exports = Reviews;