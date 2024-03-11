function secureRoute(req, res, next) {
    if (!req.session.login) { // если сессии нет, тогда вперед
      next();
    } else {
      res.redirect('/page404');
    }
  }
  
  function checkUser(req, res, next) {
    if (req.session.login) {
      next();
    } else {
      res.redirect('/login');
    }
  }

  function checkSeller(req, res, next) {
    if (req.session.role) {
      next();
    } else {
      res.redirect('/');
    }
  }
  
  module.exports = { secureRoute, checkUser, checkSeller };