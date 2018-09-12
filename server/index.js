const express = require("express"),
  bodyParser = require("body-parser"),
  app = express(),
  messages_controller = require("./controllers/messages_controller"),
  //const mc = require( __dirname + '/controllers/messages_controller');
  port = 3000;
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../public/build"));

app.get("/api/messages", messages_controller.readMessages);
app.post("/api/messages", messages_controller.createMessage);
app.delete("/api/messages/:id", messages_controller.deleteMessage);
app.put("/api/messages/:id", messages_controller.updateMessages);

app.listen(port, () => console.log(`Listening... port ${port}`));
