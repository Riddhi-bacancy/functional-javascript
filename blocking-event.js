  function repeat(operation, num) {
      // modify this so it can be interrupted
      //console.log(num)
      if (num%10===0){
        operation()
        setTimeout(function(){return repeat(operation, --num);},5);
      }
    else{
      return repeat(operation, --num);}
      
    }
    
    module.exports = repeat
