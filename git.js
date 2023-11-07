function sumar() {
    
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var num1= parseInt(numero1);
    var num2= parseInt(numero2);
    var total = num1+num2;
    
    alert("el valor total de su suma es= "+total)
  }
  function resta() {
    
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var num1= parseInt(numero1);
    var num2= parseInt(numero2);
    var total = num1-num2;
    
    alert("el valor total de su resta es= "+total)
  }
  function multi() {
    
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var num1= parseInt(numero1);
    var num2= parseInt(numero2);
    var total = num1*num2;
    
    alert("el valor total de su multiplicacion es= "+total)
  }
  function divi() {
    
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var num1= parseInt(numero1);
    var num2= parseInt(numero2);
    var total = num1/num2;
    
    alert("el valor total de su divicion es= "+total)
  }