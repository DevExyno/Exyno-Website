# Exyno Webpage
> Exyno-Webpage is a open source coded in Javascript and [Mongoose](https://mongoosejs.com/docs/api.html) by [DevExyno](https://github.com/DevExyno/)

# Setup
You need to create `.env` file and you have configure the values for example:
```
CLIENT_ID= (ID of the bot)
CLIENT_SECRET= (Client Secret, you can find it in https://discord.com/developers/applications/)
CLIENT_REDIRECT=/auth/redirect (dont change that, you have to add a redirect => localhost:8080/auth)

```
You also have to change something in the database part, for example here:
```
const mongoose = require('mongoose');
module.exports = mongoose.connect('YOUR_MONGO_DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
```
In this example, you should replace the `YOUR_MONGO_DB` into your mongodb database, If you do not know how, 
then follow this [yt-tutorial](https://www.youtube.com/watch?v=0z5RYknYwDA), if you struggle a bit, then you can contact me [here](https://discord.gg/bknyd5q)

And then you have to run `npm install` to install all the packages for the website 

# Launch the Webpage

1. Run `node .`
2. Enjoy it!

# Contributing
Before creating an issue, please ensure that it hasn't already been reported/suggested. And if you have a question, please ask it in the [Discord server](https://discord.gg/bknyd5q) instead of opening an issue

# License
ExynoWebpage is licensed under the GPL 3.0 license. See the file LICENSE for more information.
