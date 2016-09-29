function StairCase(n){
  var arr = new Array(n);
  for(var i = 1; i <= n; i++){
    console.log(' '.repeat(n - i) + '#'.repeat(i));
  }
 
}

StairCase(6);