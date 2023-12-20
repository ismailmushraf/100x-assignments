const fs = require('fs');

fs.readFile('test.txt', 'utf-8', function(err, data) {
  if (err) {
    console.log(err);
    return;
  }
//  data = data.split(" ").filter((item) => { if (item !== " ") return item }).join(" ");
  data = data.split(" ").filter(item => item).join(" "); // tricky expression. both will work.
  fs.writeFile('test.txt', data, 'utf-8', function(err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("File cleaned and updated successfully");
  })
});
