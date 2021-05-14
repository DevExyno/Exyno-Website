const mongoose = require('mongoose');
module.exports = mongoose.connect('YOUR_MONGO_DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});