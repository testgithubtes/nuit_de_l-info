// Bring in Models
const Article = require('../models/article');

module.exports = app => {

  //Get Article

  app.get('/article', (req, res) => {
    Article.find({}, (err, Article) => {
      console.log('azhg');
      if (err) {
        console.log(err);
      } else {
        console.log(Article);
        res.json(Article);
      }
    });
  });

  //Post Article
  app.post('/article', (req, res) => {
    let newArticle = new Article(req.body);

    newArticle.save((err, article) => {
      if (err) {
        res.send('m:p');
      } else {

        res.json(article);
      }
    });
  });
};
