const express=require('express');
const bodyParser = require('body-parser');
const port=3000;
const MongoClient = require('mongodb').MongoClient;
const dbUrl = 'mongodb+srv://Alex2712:Alex2712@cluster0.s6zij.mongodb.net/orders?retryWrites=true&w=majority';

const app=express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', (req, res) => { 
  MongoClient.connect(dbUrl, { useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err);
    const db = client.db('node-order');
    const collection = db.collection('orders');
    collection
      .find()
      .toArray()
      .then((results) => {
        res.render('index.ejs', { orders: results });
      })
      .catch((error) => {
        res.redirect('/');
      });
  });
  });
app.post('/orders', (req, res) => { 
  var item={
    name: req.body.name,
    count: Number(req.body.count),
    price: Number(req.body.price),
  }
  MongoClient.connect(dbUrl, { useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err);
    const db = client.db('node-order');
    const collection = db.collection('orders');
    if (Object.keys(req.body)=='inputData'){
      const ex=Number(req.body.inputData);
      console.log(ex)
      collection 
        .deleteMany({"price":{$gt:ex}})
        .then(() => {
          res.redirect('/');
        })
        .catch(() => {
          res.redirect('/');
        });
    }
    else{
      collection
        .insertOne(item)
        .then(() => {
          res.redirect('/');
        })
        .catch(() => {
          res.redirect('/');
        });
    }
    }); 
});
app.delete('/orders', (req, res) => {
  var item={
    name: req.body.name,
    count: Number(req.body.count),
    price: Number(req.body.price),
  }
  MongoClient.connect(dbUrl, { useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err);
    const db = client.db('node-order');
    const collection = db.collection('orders');
    collection
      .deleteOne(item)
      .then(() => {
        res.json(`Deleted order`);
      })
      .catch(() => {
        res.redirect('/');
      });
  });
});
app.put('/orders', (req, res) => {
  MongoClient.connect(dbUrl, { useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err);
    const db = client.db('node-order');
    const collection = db.collection('orders');
    collection
      .findOneAndUpdate(
        { name: req.body.oldName, count: Number(req.body.oldCount), price: Number(req.body.oldPrice) },
        {
          $set: {
            name: req.body.name,
            count: Number(req.body.count),
            price: Number(req.body.price),
          },
        
        },
        {
          new:true
        },

      )
      .then(() => {
         res.json('Success');
      })
      .catch(() => {
        res.redirect('/');
     });
  });
});
  MongoClient.connect(dbUrl, { useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err);
    const db = client.db('node-order');
    const collection = db.collection('orders');
    collection.find({price:{$lt:100}}, {name:0, count:0, price:0})
    .toArray(function(err,result){
      if(err) throw err;
      console.log(result);
      client.close();
    });
  });

app.listen(port, () => {
  console.log(`Server listening on port ${port}}`)});

