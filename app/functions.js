if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
       return fn.apply(null,arr);
    },

    speak : function(fn, obj) {
       return fn.apply(obj);
    },

    functionFunction : function(str) {
       return function(message){
         return str + ', ' + message;
       }
    },

    makeClosures : function(arr, fn) {
       //return a array of functions
       var funcs = [];
       var func_creator = function(f,num){
         return function(){ return f(num);}
       }
       for(var j=0;arr.length > j;j++){
         funcs.push(func_creator(fn,arr[j]));
       }
       return funcs;
    },

    partial : function(fn, str1, str2) {
       // return a function accept one arg
       return function(punc){
         return fn(str1,str2,punc);
       }
    },

    useArguments : function() {
       var sum = 0;
       for(var i=0;i<arguments.length;i++){
         sum += arguments[i];
       }
       return sum;
    },

    callIt : function(fn) {
       //using call to invoke
       //http://stackoverflow.com/questions/1777705/a-question-about-javascripts-slice-and-splice-methods
       var args = Array.prototype.slice.call(arguments, 1);
       return fn.apply(null,args);
    },

    curryIt : function(fn) {
      var args = Array.prototype.slice.call(arguments, 1);
      return function(){
        for(var i=0;i<arguments.length;i++){
          args.push(arguments[i]);
        }
        return fn.apply(null,args);
      };
    }
  };
});
