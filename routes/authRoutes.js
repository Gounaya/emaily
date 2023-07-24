const passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google', passport.authenticate(
        'google', {
          scope: ['profile', 'email'] // access user profile information such as name and email address
        }
      ))
      
    app.get('/auth/google/callback', passport.authenticate('google')); // Auth with Google
}
