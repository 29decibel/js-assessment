if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
       //return a object,
       //has then funciton
       var delayed = {};
       delayed.then = function(callback){
         callback.call(delayed,value);
       }
       return delayed;
    },

    manipulateRemoteData : function(url) {
       //return a defered object
       //has a then method
       var delayed = {};
       // just store the callback
       delayed.then = function(callback){
         this.callback = callback;
       }
       delayed.working = function(url){
         var that = this;
         $.get('http://localhost:4444'+url,function(result){
           var r = $.map(result.people,function(data,index){
             return data.name;
           })
           that.callback(r);
         })
       }
       delayed.working(url);
       return delayed;
    }
  };
});
