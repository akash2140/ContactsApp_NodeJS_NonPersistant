const { log } = require('console');
const express=require('express');
const port=8000;
const path=require('path');
const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());
app.use(express.static('assests'));


// Middleware 1
// to just add a constant name and phoneNumber

// app.use(function(req,res,next){
//     req.body.name="Ayudadadasfshi";
//     req.body.phoneNo="8755513994";
//     next();
// });


contactList=[
    {
        name:"Aakash",
        phoneNo:"7500844349"    
    },
    {
        name:"Dhruv",
        phoneNo:"9760224433"    
    },
    {
        name:"Ayush",
        phoneNo:"8077709487"    
    },
    {
        name:"Ankit",
        phoneNo:"8077135455"    
    },
];



app.get('/',function(req,res){
    // console.log(req);
    // console.log(__dirname);
     return res.render('index',{
        title: "My Contacts' App" ,
        contact_list : contactList 
    });
});

app.post("/create-contact",function(req,res)
{
//    console.log(req.body);
   contactList.push(req.body);
   return res.redirect('/');
});

app.get('/delete-contact',function(req,res){
    console.log('coming in right controller');
    let phone=req.query.phoneNo;
    let contactIndex=contactList.findIndex((contact)=>{
        return  contact.phoneNo == phone;
    });

    if(contactIndex != -1){
        contactList.splice(contactIndex,1);
    }
    return res.redirect("/");
});


app.listen(port,function(err)
{
    if(err)
    {
        console.log("Error in firing up server");
        return;
    }

    console.log("server is well fired up and running !!");
});




