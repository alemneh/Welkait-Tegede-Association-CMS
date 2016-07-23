'use strict';

module.exports = (loginRouter, models) => {
  const Admin = models.Admin;

  loginRouter.route('/login')
    .get((req, res) => {
      console.log(req.headers);
      const authorizationArray = req.headers.authorization.split(' ');
      const method = authorizationArray[0];
      const base64ed = authorizationArray[1];
      const authArray = new Buffer(base64ed, 'base64').toString().split(':');
      const name = authArray[0];
      const password = authArray[1];
      console.log(name);
      Admin.findOne({name:name}, (err, admin) => {
        if(err) throw err;
        if(!admin) {
          return res.json({status: 'failure', message: 'Invalid User!'});
        }
        const valid = admin.compareHash(password);

        if(!valid) {
          res.json({status: 'failure', message: 'Wrong password'});
        } else {
          res.json({
            data: admin,
            token: admin.generateToken()
          });
        }
      });
    });
};
