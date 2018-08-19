module.exports = {
    index(req, res, next){
        res.render("preferences/index", {title: "Your Imperfect box is affordable, customizable, and delicious!"});
    }
  }