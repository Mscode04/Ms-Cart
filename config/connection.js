const { MongoClient } = require('mongodb');

const state = {
    db: null
};

module.exports.connect = function (done) {
    const url = 'mongodb://localhost:27017'; // Update this if needed
    const dbname = 'ecart'; // Database name

    MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
        if (err) {
            return done(err);
        }
        state.db = client.db(dbname);
        done();
    });
};

module.exports.get = function () {
    return state.db;
};
