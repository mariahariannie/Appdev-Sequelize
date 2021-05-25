const threads = require("../models/threads");

// exports.threadList = (req, res) =>{ 
//     if(req.session.uuid === account_uuid){
//         res.locals.user = req.session.user;
//     }else{
//         res.render("home");
//     }
// }
exports.addThread = async (req, res) => {
    res.locals.user = req.session.user;
    await threads.model.create({
        threaduuid : req.session.user.uuid,
        thread_title : req.body.thread_title,
        thread_body : req.body.thread_body
    })        
    res.render("home");
    
}