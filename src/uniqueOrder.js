var uniqueInOrder=function(arr){
    // if(typeof(iterable) == 'string') {    
    // var arr = iterable.split("");}

    // if(typeof(iterable) == 'object') {
    // var arr = iterable;}

    var result = [];
    var last
   
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== last) {
            result.push(last = arr[i]);
        }        
    }
    return result;
  }
  console.log(uniqueInOrder([1,2,2,3,3]));
  
  