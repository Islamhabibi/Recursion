  function Ispalindrome(str) {
    
     if ((str.length === 0)||(str.length ===1) ){
        return true
     }else if (str.charAt(0).toLowerCase() !== str.charAt(str.length-1).toLowerCase()){
        return false
     }
     
     return Ispalindrome (str.slice(1, str.length - 1) )
}

 
var chaine = "hoOL";
var analysis = Ispalindrome(chaine);
console.log(analysis);//false
var chaine2 = "hoOH";
var analysis = Ispalindrome(chaine2);

console.log(analysis);//true
