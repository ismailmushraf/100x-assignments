const fs = require('fs');

fs.writeFile("test.txt", "Hello I'm Ismail", function(err) {
  if (err)
    console.log(err);
  else 
    console.log("file written successfully");
})
