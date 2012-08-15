if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
       return arr.indexOf(item);
    },

    sum : function(arr) {
       var total = 0;
       for(var index=0;arr.length > index ;index++){
         total += arr[index];
       }
       return total;
    },

    remove : function(arr, item) {
       var index = arr.indexOf(item);
       while(index >=0)
       {
         arr.splice(index,1);
         index = arr.indexOf(item);
       }
       return arr;
    },

    append : function(arr, item) {
       arr.push(item);
       return arr;
    },

    truncate : function(arr) {
       arr.splice(arr.length -1,1);
       return arr;
    },

    concat : function(arr1, arr2) {
       var result = [];
       var arrs = [arr1,arr2];
       for(var i=0;arrs.length > i;i++){
         for(var j=0;arrs[i].length > j;j++){
           result.push(arrs[i][j]);
         }
       }
       return result;
    },

    insert : function(arr, item, index) {
       // http://stackoverflow.com/questions/586182/javascript-insert-item-into-array-at-a-specific-index
       arr.splice(index,0,item);
       return arr;
    },

    count : function(arr, item) {
       var working_arr = _.clone(arr);
       var count = 0;
       for(var i=0;working_arr.length > i;i++){
         if(working_arr[i] === item){
           count += 1;
         }
       }
       return count;
    },

    duplicates : function(arr) {
       var duls = [];
       for(var i=0;arr.length > i;i++){
        for(var j=0;arr.length > j;j++){
          if((i != j) && (arr[i]===arr[j]) && (duls.indexOf(arr[i]) < 0)){
            duls.push(arr[i]);
          }
        }
       }
       return duls;
    },

    square : function(arr) {
       for(var i=0;arr.length > i;i++){
         arr[i] = arr[i] * arr[i];
       }
       return arr;
    },

    findAllOccurrences : function(arr, target) {
       var occs = [];
       for(var i=0;arr.length > i;i++){
         if(arr[i] === target){
          occs.push(i);
         }
       }
       return occs;
    }
  };
});
