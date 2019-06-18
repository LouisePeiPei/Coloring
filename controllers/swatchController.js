'use strict';
const Swatch = require( '../models/Swatch' );


exports.saveSwatch = ( req, res ) => {
  //console.log("in saveSkill!")
  //console.dir(req)
  let newSwatch = new Swatch( {
    BrandName:req.body.BrandName,
    TypeMakeup: req.body.TypeMakeup,
    ColorCode: req.body.ColorCode,
    userComments:req.body.userComments
  } )

  //console.log("skill = "+newSkill)

  newSwatch.save()
    .then( () => {
      res.redirect( '/showSwatch' );
    } )
    .catch( error => {
      res.send( error );
    } );
};


exports.getAllSwatch = ( req, res ) => {
  //gconsle.log('in getAllSkills')
  Swatch.find( )
    .exec()
    .then( ( swatches ) => {
      res.render( 'swatchPlaza', {
        swatches:swatches,
        title:'swatch'
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
