if(process.env.NODE_ENV != "Production") {
    require('dotenv').config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Complaint = require("./models/complaint.js");
const cors = require("cors");
const User = require("./models/user.js");
const MongoStore = require("connect-mongo");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const session = require("express-session");

MongoURL = "mongodb://localhost:27017/Hostel";

main().then(()=> {
    console.log("connected to DB");
}).catch(err => {
    console.log(err);
})

async function main() {
    await mongoose.connect(MongoURL);
}

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  
app.use(
    cors({
      origin: ["http://localhost:5174", "http://localhost:5173"], // Allow only your frontend
      methods: "GET,POST,PUT,DELETE", // Allow specific methods
      credentials: true, // Allow cookies & sessions
    })
  );

const store = MongoStore.create( {
    mongoUrl: MongoURL,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600,
})


const sessionOptions = {
    store,
    secret : process.env.SECRET,
    resave : false,              // modified without changes
    saveUninitialized : true,     // not initialized also store
    cookie : {
        expires : Date.now() + 7 * 24 * 60 *60 * 1000,
        maxAge :  7 * 24 * 60 *60 * 1000,
        httpOnly : true,
    }
};

app.use(session(sessionOptions));
// app.use(flash());

app.use(passport.initialize());    //setup
app.use(passport.session()); 
     
passport.use(new LocalStrategy(
  { usernameField: 'email', passwordField: 'password', roleField: 'role' }, 
  User.authenticate()
));


passport.serializeUser(User.serializeUser());      //store in session
passport.deserializeUser(User.deserializeUser()); 




app.post("/signup", async (req, res) => {
    try {
        const { name, email, password, phone, role, hostel, room, workType } = req.body;
        const newUser = new User({name, email, phone, role, hostel, room, workType, username: email});
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser)
        req.login(registeredUser, (err) => {
            if(err) {
                return next(err);
            }
            
            res.send(role);
            
        })
    } catch (e) {
        console.error("Signup error:", e);
        res.status(400).json({ error: "Signup failed. Try again." });
    }
})


app.post("/Complaint", async (req, res) => {
    let newComplaint = new Complaint({
        name: req.body.name,
        mobile: req.body.mobile,
        hostelName: req.body.hostelName,
        room: req.body.room,
        workType: req.body.workType,
        problemDescription: req.body.problemDescription,
        fileUrl: req.body.fileUrl
    });

    newComplaint.save();
    res.send("Order saved");
    console.log("saved");
    
})

app.get("/Complaint", async (req, res) => {
    let allComplaint = await Complaint.find({});
    res.send(allComplaint);
})

app.post('/login', (req, res, next) => {
  console.log("Login body:", req.body);
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      console.log("Login failed:", info.message);
      return res.status(401).json({ message: info.message });
    }

    if(req.body.role !== user.role) {
        return res.status(403).json({message: "Invalid role selected."})
    }
    req.logIn(user, err => {

      if (err) return next(err);
      console.log("Login success:", user.email);
      return res.json({ message: 'Login successful', role : req.body.role});
    });
  })(req, res, next);
});


app.get('/logout', async (req, res) => {
    req.logout((err) => {
    if (err) return next(err);
        req.session.destroy(() => {
            res.clearCookie('connect.sid'); // if using express-session
            res.status(200).json({ message: 'Logged out successfully' });
        });
    });
})



app.get("/", (req, res) => {
    res.json({h :"Hello world"});
})

app.listen(8080, () => {
    console.log("server working.")
})