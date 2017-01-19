var express = require('express');
var router = express.Router();
var { graphql, buildSchema } = require('graphql');
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

function a() {
    var root = { hello: () => 'Hello world!' };
    graphql(schema, '{ hello }', root).then((response) => {
        console.log('***************************************');
        console.log(response);
    });
}




/* GET users listing. */
router.get('/', function (req, res, next) {
    var html = ["Banana", "Orange", "Apple", "Mango"];
    var person =
    {
        firstName: "John",
        lastName: "Doe",
        age: 46
    };
    person.age=33;
    a()
    res.send('toregard svarer');
});

module.exports = router;