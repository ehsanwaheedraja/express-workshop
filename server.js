var express = require("express");
var app = express();
const port = 3000;

app.use(express.static("public"));
app.post("/create-post", function (req, res) {
    
});

app.listen(port, function () {
  console.log(`Server is listening on port ${port}. Ready to accept requests!`);
});
