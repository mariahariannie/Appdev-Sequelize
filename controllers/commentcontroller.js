const commments = require("../models/comments");

exports.addComment = async (req, res) => {
    await comments.model.create({
        comment_id : req.session.user.uuid,
        author : req.body.author,
        comment_body : req.body.comment_body
    }) 
    req.flash('success', 'Comment Posted');       
    res.render("home");
}
