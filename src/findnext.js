function findNextSquare(sq) {
    var sqroot = Math.sqrt(sq);
    if(sq%sqroot == 0) {
        return Math.pow(sqroot+1,2);
    }
    else{ 
    return -1; }
  }

console.log(findNextSquare(120));

