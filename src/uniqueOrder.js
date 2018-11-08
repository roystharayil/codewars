var uniqueInOrder=function(iterable){
    if(typeof(iterable) == 'string') {    
    var arr = iterable.split("");}

    if(typeof(iterable) == 'object') {
    var arr = iterable;}

    var result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] != arr[i+1]) {
            result.push(arr[i]);
        }        
    }
    return result;
  }
  console.log(uniqueInOrder([1,2,2,3,3]));
  
  