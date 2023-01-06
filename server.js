//require express and initializing the app:
const app = require('express')();

//require the cors middleware:
const cors = require('cors');

const PORT = 5001; //initialize port 5001


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://shishpt:05RlWs3giwFYVs8t@cluster0.vuzilyd.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


app.use(cors());//initialize express to use the cors middleware

app.get('/', (req,res)=>{
    client.connect(async err => {
        const collection = client.db("test").collection("devices");
      
        // perform actions on the collection object
        const data = await collection.find().toArray();
      
       //listen to a get request
        res.send(JSON.stringify(data))
    });
})

app.listen(PORT, ()=>{ //listen to the port we chose above
    //print to the console that the server is listening
    console.log("listening to port: " + PORT);
})