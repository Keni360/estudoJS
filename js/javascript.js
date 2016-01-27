/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function(){

    var larg = window.innerWidth;
    var altu = window.innerHeight;
    var full = window.fullScreen;
    //window.alert(larg+" e "+altu+" "+full);
    var x = 5;
    var y;
    
 
    
    var msg = window.document.getElementById("msg");
    var btn = window.document.getElementById("btn");
    
}
    
    /*
     * Calculo do imc
     * 
     */
   function calcular(){ 
    var formulario = document.getElementById("form");
    var nome = formulario.nome.value;
    var idade = formulario.idade.value;
    var altura = formulario.altura.value;
    var peso = formulario.peso.value;
    var imc = (altura * altura) / peso;
    window.alert(imc);
    
    


   }
   
   
    