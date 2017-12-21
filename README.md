# About
 This project is to help everyone in yours methods with mongoosejs.
 
## Under development
 > Not available yet in NPM
### Install
```bash
npm i -S crud-generic-mongoosejs
```

### Getting Start
```js
const mongoose = require('mongoose');
mongoose.Promise = Promise || global.Promise;
mongoose.connect('mongodb://localhost:27017/myDB');
mongoose.connection.once('connected', () => console.log("Connectou MONGODB!"));

const CRUD = require('./crud');

let model = mongoose.model('Test', mongoose.schema({name: String}), 'Test');
let myCrud = new CRUD(model);

myCrud.insert({name: 'tstMongoDB'}).then(console.log).catch(console.log);
```

### Methods
 It's methods are promises

#### INSERT(data)
#### listSeekLimit(seek, limit, sorted, fields)
#### listLastForSeek(seek, limit, sorted, fields)
#### listAllForPage(seek, limit, sorted, fields)
#### findOneUpdate(seek, limit, sorted, fields)
#### remove(filter)

### LICENSE
 [MIT](https://raw.githubusercontent.com/renanbastos93/crud-generic-mongoosejs/master/LICENSE)
