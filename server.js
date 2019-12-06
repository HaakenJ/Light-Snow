const express = require("express");
const exphbs = require("express-handlebars");
const db = require("./app/models");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static("./app/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defualtLayout: "main" }));
app.set("view engine", "handlebars");

// TODO: Require routes

db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on PORT ${PORT}`);
    })
})