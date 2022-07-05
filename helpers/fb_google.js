const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const FacebookStrategy  =  require('passport-facebook').Strategy;

const GOOGLE_CLIENT_ID = '165323796167-4kld7e7lpvafg0vb2ja6ngreedovtirv.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

const FACEBOOK_CLIENT_ID = '431334525265505'
const FACEBOOK_CLIENT_SECRET = 'fff1acfc82c46a2ecbec3ad07b7839b2'

var userProfile;

passport.serializeUser(function(user, cb) {
    console.log("serializer")
    cb(null, user);
  });
  
passport.deserializeUser(function(obj, cb) {
  console.log("deserializer")
    cb(null, obj);
  });

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_CLIENT_ID,
    clientSecret: FACEBOOK_CLIENT_SECRET,
    callbackURL: "http://localhost:8000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
        console.log("FacebookStrategy",profile)
        userProfile=profile;
        axios({
          url: 'https://graph.facebook.com/me',
          method: 'get',
          params: {
            fields: ['id', 'email', 'first_name', 'last_name'].join(','),
            access_token: accessToken,
          },
        }).then((data)=>{
          userProfile = profile._json
          userProfile.email = data.data.email 
          console.log(data)
          return done(null, userProfile);
        })
        
    
  }
  ));
  
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      console.log("GoogleStrategy",profile._json.email)
      userProfile=profile;
      return done(null, userProfile);
  }
));
