let express = require('express');
let app = express();

const middleware = function(req, res, next){
  // Call next function in line:
  var string = req.method + " " + req.path + " - " + req.ip;
  console.log(string);
  req.time = new Date().toString();
  next();
};

app.get("/now", middleware, function(req, res){
  res.send({ time: req.time});
});

absolutePath = __dirname + "/views/index.html";

app.get("/" ,function(req, res){
  res.sendFile(absolutePath);
  app.use("/public", express.static(__dirname + "/public"));
});

app.get("/json", function(req, res){
  if(process.env.MESSAGE_STYLE === "uppercase"){
    res.json({
    message: "HELLO JSON"
    });
  }else {
    res.json({
    message: "Hello json"
    });
  }
});

app.get("/:word/echo", function(req,res){
  var word = req.params.word;
  res.send({echo: word})
});

app.get("/name", function(req, res) {
  var firstName = req.query.first;
  var lastName = req.query.last;
  res.json({
    name: `${firstName} ${lastName}`
  });
});

// app.route(path).get(handler).post(handler)














 module.exports = app;
