
var firstNum = Math.ceil(Math.random() * 10);
var secondNum = Math.floor(Math.random() * 10) ;
document.getElementById("fNum").value = firstNum;
document.getElementById("sNum").value = secondNum;
 function checkSum(){  
var ans = parseInt(document.getElementById("ansBox").value);
            if (firstNum + secondNum == ans) {
                document.getElementById("answer").innerHTML = "Correct";
                document.getElementById("answer").style="color:green; background-color:yellow";
            } else {
                document.getElementById("answer").innerHTML = "Incorrect";
            }
        }
    function reset(){
        
    var firstNum=Math.ceil(Math.random()*10);
    var secondNum=Math.ceil(Math.random()*10);
    var firstNum=document.getElementById("fNum").value=firstNum;
    var secondNum=document.getElementById("sNum").value=secondNum;
    var ans=document.getElementById("ansBox").value="";
    }
   