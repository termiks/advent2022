const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;

  var summedArray = [];

  const myArray = data.toString().split(/\n\n/);
  for (var j = 0, n = myArray.length - 1; j < n; j++) {
    let convArray1 = myArray[j].toString().split(/\n/);

    var count = 0;
    for (var i = convArray1.length; i--; ) {
      count += parseInt(convArray1[i]);
    }
    summedArray.push(count);
  }
  console.log("highest elf -> " + Math.max(...summedArray));
  var top3boys = summedArray.sort().reverse().slice(3, 6);
  var top3sec = summedArray.sort((a,b) => b-a).slice(0, 3);
  console.log("top 3 values -> " + top3boys);
  console.log(top3sec);
  var top3sum = 0;
  for (var i = top3boys.length; i--; ) {
    top3sum += top3boys[i];
  }
  console.log("top3sum -> " + top3sum);
});
