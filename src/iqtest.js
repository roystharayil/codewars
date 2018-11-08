function iqtest(numbers){
    var num = numbers.split(" ");
    var odd = [];
    var even = [];

    num.forEach((no, index) => {
        if(no == 1){
            odd.push(index); 
        }
        if(no%2) {
            odd.push(index);
        }         
        if(no%2 == 0) {
            even.push(index);
        }
    });
    if(odd.length == 1){
        var p = Number(odd[0]);
        return p+1;
    }
    if(odd.length > 1) {
        var q = Number(even[0]);
        return q+1;
    }
}

console.log(iqtest("1 2 2"));