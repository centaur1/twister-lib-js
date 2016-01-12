
var Twister = require("../src/Twister.js");
var Bitcoin = require('bitcoinjs-lib');

var twister_network = Bitcoin.networks.bitcoin;

twister_network.messagePrefix= '\x18twister Signed Message:\n';

var username = "sdfgsdfg4g3hjk3434g3";

var keypair = Bitcoin.ECPair.makeRandom(twister_network);
pubkey = keypair.getPublicKeyBuffer().toString('hex');

console.log(pubkey);

//Twister.setup({logfunc: function(l){console.log(l)}})

/*Twister.RPC("createrawtransaction",[username,pubkey],function(raw){
  console.log("raw transaction: ",raw);
  Twister.RPC("sendrawtransaction",raw,function(res){
    console.log("sent transaction",res);
    Twister.getUser(username)._doPubKey(function(key){
      console.log("dumppubkey",key);
    })
  },function(err){
  console.log("error",err);
  })
},function(err){
  console.log("error",err);
})*/

