class Movie {
    constructor(title, actor = "Not Specified", dire = "Unknown") {
        this.title = title;
        this.actor = actor;
        this.director = dire;
    }

    async add(collection) { 
        await collection.insertOne(this);
        return "Success"
        // Add this to the Database
    }

    async list(collection) {
        return await collection.find().toArray()
        //List all movies in the Database
    }

    async update(collection, var1, var2) {
        console.log("index-var1 is ", var1);
        console.log("index-var2 is ", var2);
        console.log(this)
       return await collection.updateOne({title: this.title}, {
           $set: {
                title: this.title,
                actor: this.actor,
                dire: this.director
        }});
       
            // return "Record updated"
        // Update this in the Database
    };

    async delete(collection) { 
        if (this !== "") {
            await collection.deleteOne(this);
            return "Deleted"
        } else {
            return "There is nothing to delete"
        }
        // Delete this from the Database
    }

    async find(collection) { 
        await collection.findOne(this);
        return [
            this.title,
            this.actor,
            this.director
        ]    
        // Find this to the Database
    }
}

module.exports = Movie;