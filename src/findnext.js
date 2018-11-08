function findNextSquare(sq) {
    var sqroot = Math.sqrt(sq);
    if(sq%sqroot == 0) {
        return Math.pow(sqroot+1,2);
    }
    else{ 
    return -1; }
  }

  //console.log(findNextSquare(120));
console.log(Math.sqrt(120)%1 ? -1 : Math.pow(Math.sqrt(121)+1, 2));
