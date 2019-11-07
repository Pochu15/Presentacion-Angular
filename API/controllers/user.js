const UserSchema = require('../models/user')

function getOne(req, res) {
  UserSchema.findOne({ username: req.params.username }, (err, user) => {
    if (err) return res.status(500).send(err);
    if (!user) return res.status(404).send({ message: 'data not found' });

    return res.status(200).send(user);
  })
}

function basicGet(req, res) { // Get data from the database
    UserSchema.find({}, (err, info) => {
        if(err) return res.status(500).send(err);
        if(!info) return res.status(404).send({ message: 'Data not found' });

        return res.status(200).send(info);
    })
}

function basicPost(req, res) { // Create a new item and save it to the database 
    var info = new UserSchema(req.body);
    info.save((err, data) => {
        if(err) return res.status(500).send(err);

        return res.status(200).send({ message: 'Data saved succesfully'});
    })
}

module.exports = {
    basicGet,
    basicPost,
    getOne
}