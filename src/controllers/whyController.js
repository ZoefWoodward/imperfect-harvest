module.exports = {
    index(req, res, next){
        res.render("why/index", {title: "Why Imperfect?"});
    }
  }