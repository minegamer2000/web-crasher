const express = require("express"),
      fs = require("fs"),
      path = require("path"),
      app = express(),
      port = process.env.PORT || 8080;

app.use((error, req, res, next) => {
    if(error.status)
        res.status(error.status);
    else
        res.status(500);
    
    res.json({
        status: "error",
        message: error.message
    });
});

app.listen(port, () => {
    console.log(`trolling has begun :troll:`);
})

app.get("*", (req, res) => {
    res.status(200).sendFile("index.html", {
        root: path.join(__dirname)
    });
    fs.writeFileSync("./log.txt", `${parseInt(fs.readFileSync("./log.txt", "utf8").split(" ")[0])} Retards trolled`);
})
