function spinWords(words){
    var wArr = words.split(" ");
    var arr1;
    var arr2 = [];
    wArr.forEach(element => {
        if(element.length >= 5) {
            var splitString = element.split("");
            var arr1 = splitString.reverse();
            var joinArray = arr1.join("");
            arr2.push(joinArray); 
        }
        else {
            arr2.push(element);
        }
    }); 
    return arr2.join(" ");
}

console.log(spinWords("Hey fellow warriors"));
  