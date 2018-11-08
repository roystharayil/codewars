function findNextSquare(sq) {
    var sqrt = Math.sqrt(sq);
    if(sq%sqrt == 0) {
        return Math.pow(sqrt++);
    }
    else{ 
    return -1; }
  }

  console.log(findNextSquare(121));