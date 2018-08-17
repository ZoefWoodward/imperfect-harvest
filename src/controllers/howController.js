module.exports = {
    index(req, res, next){
        res.render("how/index", {title: "How It Works"});
    }
  }