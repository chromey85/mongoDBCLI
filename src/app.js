const Movie = require("./utils");
const yargs = require("yargs");
const {client, connection} = require ("./db/connection");
const { argv } = require("yargs");

const app = async (yargsObj) => {
    const collection = await connection();
    try {
        if (yargsObj.add) {
            const movie = new Movie(yargsObj.title, yargsObj.actor, yargsObj.dire);
            console.log("app-title is ", yargsObj.title);
            console.log("app-actor is ", yargsObj.actor);
            console.log("app-director is ", yargsObj.dire)
            console.log(await movie.add(collection));
            //take movie info, add it to the mongoDB database and console.log a success message 
        } else if (yargsObj.list) {
            const movie = new Movie(yargsObj.title, yargsObj.actor, yargsObj.dire);
            console.log(await movie.list(collection))
            //list all movies in database
        } else if (yargsObj.update) {
            const movie = new Movie(yargsObj.title, yargsObj.actor, yargsObj.dire);
            console.log(await movie.update(collection, yargsObj.title, yargsObj.actor, yargsObj.dire))
            console.log("app-title is ", yargsObj.title);
            console.log("app-actor is ", yargsObj.actor);
            console.log("app-director is ", yargsObj.dire)
            //update movie in list
        } else if (yargsObj.delete) {
            const movie = new Movie(yargsObj.title, yargsObj.actor, yargsObj.dire);
            console.log(await movie.delete(collection))
            //Delete movie in list
        } else if (yargsObj.find) {
            const movie = new Movie(yargsObj.title, yargsObj.actor, yargsObj.dire);
            console.log(await movie.find(collection))
            //Find movie in list
        } else {
            console.log("You Messed Up");
        }
        await client.close();
    } catch (error) {
        console.log(error)        
    }
};

app(yargs.argv);