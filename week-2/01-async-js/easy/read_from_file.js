const fs = require('fs');


fs.readFile("1-counter.md", "utf-8", function(err, data) {
  console.log(data);
});

let sum = 1;
for (let i = 0; i <= 10000000000; i++) {
  sum = i;
}

console.log(sum);
