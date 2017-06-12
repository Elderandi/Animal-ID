const express = require('express');
const session = require('express-session');
const massive = require('massive');
const bodyParser = require('body-parser');
const database = require('./config.js');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

const port = 3333;

const app = express();

var db = massive.connectSync({connectionString : database});

app.use(session({
    secret: "animalidsecret"
}))

app.use(express.static(".././public"))
app.use(passport.initialize())
app.use(passport.session())

passport.use(new Auth0Strategy({
        domain:'nephaelin.auth0.com',
        clientID:'5Y0G4HzdNyoxi7jxJMmzh5M8qX5diDi1',
        clientSecret:'n9vdKML_Wq-6RiWNuBGwb32eiNLypA_ejo1qZnm8HENDEyQkkjFm3vhslYmgTzs4',
        callbackURL:'/auth/callback'
        }, function(accessToken, refreshToken, extraParams, profile, done){
        return done(null, profile);
        }));

app.get('/auth', passport.authenticate('auth0')); // <<< START AUTH (WHICH WAY TO LOGIN)

app.get('/auth/callback', passport.authenticate('auth0', {  // <<< AUTH0 RETURNS HERE
        successRedirect: '/#/',
        failureRedirect: '/login'}),
        function(req, res){
        res.status(200).send(req.user)
        })

        passport.serializeUser(function(user, done) {
            return done(null, user);
        });

        passport.deserializeUser(function(user, done) {
            return done(null, user);
        });

        app.get('/me', function(req, res){
            res.send( req.user )
        })

// db.create_seed(()=>{})

app.get('/api/subclass/:subclass', function(req, res){
    console.log(req.params)
    const id = req.params.subclass
    db.get_animal_group([id], function(error, animalGroup){
        res.send(animalGroup);
    })
})

app.get('/api/animals/:animals', function(req, res){
    console.log(req.params)
    const id = req.params.animals
    db.get_all_animals([id], function(error, animalList){
        if (error) {
            console.log(error)
        }
        console.log(animalList)
        res.json(animalList);
    })
})

app.get('/api/animal/:id', function(req, res){
    console.log(req.params)
    const id = req.params.id
    db.get_animal([id], function(error, animal){
        if (error) {
            console.log(error)
        }
        console.log(animal)
        res.json(animal[0]);
    })
})

app.listen(port, console.log("Listening on ", port));