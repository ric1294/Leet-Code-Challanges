var freqAlphabets = function(s) {
    result = ""
    while(s.length>0){ 
        lastchar = s.charAt(s.length-1)
        alphabet="";
        if(lastchar ==='#'){
            alphabet = numToalphabet(s.substring(s.length-3,s.length-1)) 
          //  console.log(alphabet);
            s = s.substring(0,s.length-3)
        }else{
            alphabet = numToalphabet(s.substring(s.length-1,s.length))
            s = s.substring(0,s.length-1)
        }
        result = alphabet + result
    }
    return result
}


function numToalphabet(numString){
    return String.fromCharCode(parseInt(numString)+96)
}