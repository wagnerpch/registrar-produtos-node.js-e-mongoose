const mongoose = require('mongoose')

mongoose.set("strictQuery", true);

async function main() {
    await mongoose.connect('mongodb://root:example@127.0.0.1:27017/testemongoose?authSource=admin')
    console.log('Conectado')
}

main().catch((err) => console.log(err))

module.exports = mongoose