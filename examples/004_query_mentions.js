/*
 * ... the mentions (here, the callback argument is an array of post objects) ...
 */

Twister.getUser("mfreitas").doMentions(function(mentions){
  
  for(var i in mentions){

    console.log(mentions[i].getUsername()+": "+mentions[i].getContent());

  }
  
});