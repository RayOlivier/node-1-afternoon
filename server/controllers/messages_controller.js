// let messages = [
//   { text: "Hello", time: "2:34pm", id: 0 },
//   { text: "Hey nerds", time: "2:36pm", id: 4 }
// ];

let messages = [];
let id = 0;

module.exports = {
  readMessages(req, res) {
    return res.status(200).json(messages);
  },

  updateMessages(req, res) {
    //console.log("Params: ", req.params, "Body: ", req.body);

    let index = messages.findIndex(obj => {
      //console.log(obj.id);
      return obj.id === +req.params.id; //the plus makes it an integer
    });

    //console.log(messages[index]);
    messages[index].text = req.body.text;
    //console.log(messages[index]);
    //console.log(messages);
    return res.status(200).json(messages);
  },

  createMessage(req, res) {
    //console.log(req.body);
    let newPost = req.body;
    // let newId = messages[messages.length - 1].id + 1;
    //console.log(newId);
    newPost.id = id;
    id++;
    //console.log(newPost);
    messages.push(newPost);
    //console.log(messages);
    return res.status(200).json(messages);
  },

  deleteMessage(req, res) {
    console.log(req.params.id); //gives a string

    let index = messages.findIndex(obj => {
      console.log(obj.id);
      return obj.id === +req.params.id; //the plus makes it an integer
    });
    console.log("index to be deleted: ", index);
    messages.splice(index, 1);

    return res.status(200).json(messages);
  }
};
