'use strict';
const Comment = require( '../models/Comment' );


exports.saveComment = ( req, res ) => {
  //console.log("in saveSkill!")
  //console.dir(req)
  let newComment = new Comment( {
    TypeMakeup: req.body.TypeMakeup,
    ColorCode: req.body.ColorCode
  } )

  //console.log("skill = "+newSkill)

  newComment.save()
    .then( () => {
      res.redirect( '/showComments' );
    } )
    .catch( error => {
      res.send( error );
    } );
};


exports.getAllComments = ( req, res ) => {
  //gconsle.log('in getAllSkills')
  Comment.find( )
    .exec()
    .then( ( comments ) => {
      res.render( 'comments', {
        comments:ColorCode,
        title:'comments'
      } );
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      //console.log( 'skill promise complete' );
    } );
};
