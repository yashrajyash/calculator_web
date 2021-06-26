const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

const port = 3000;

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});


app.post("/", function (req, res) {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2;
    res.send(`${num1} + ${num2} = ${result}`);
});

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    let result = weight / Math.pow(height, 2);
    result = result.toFixed(3);
    res.send(`Weight: ${weight}<br>Height: ${height}<br>BMI: ${result}`);
});

app.listen(port, function () {
    console.log("Your server has started at http://localhost:" + port);
});
