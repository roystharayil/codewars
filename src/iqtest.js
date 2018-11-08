function iqtest(numbers){
    var num = numbers.split(" ");
    var odd = [];
    var even = [];

    num.forEach((no, index) => {
        if(no == 1){
            odd.push(no); 
        }
        if(no%2) {
            odd.push(no);
        }         
        if(no%2 == 0) {
            even.push(no);
        }
    });

    return odd+" "+even;
    

}

console.log(iqtest("2 4 7 8 10"));