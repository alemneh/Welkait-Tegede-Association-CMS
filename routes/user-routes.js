'use strict';

module.exports = (userRouter, models) => {
  let User = models.User;

  userRouter.route('/members')
    .get((req, res) => {
      User.find({}, (err, users) => {
        if(err) throw err;
        res.json({
          data: users
        });
      });
    })
    .post((req, res) => {
      User.findOne({name: req.body.name}, (err, user) => {
        if(err) throw err;
        if(!user) {
          var newUser = new User(req.body);
          newUser.save((err, user) => {
            res.json({
              data: user
            });
          });
        }else {
          res.status(401).json({error: 'Username taken!'});
        }
      });
    });

  userRouter.route('/members/:id')
    .get((req, res) => {
      User.findById(req.params.id, (err, user) => {
        if(err) throw err;
        res.json({
          data: user
        });
      });
    })
    .put((req, res) => {
      User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
        if(err) throw err;
        res.json({
          data: user,
          msg: 'User updated!'
        });
      });
    })
    .delete((req, res) => {
      console.log(req);
      User.findById(req.params.id, (err, user) => {
        if(err) throw err;
        user.remove((err) => {
          if(err) throw err;
          res.json({
            data: 'User removed!'
          });
        });
      });
    });
}
