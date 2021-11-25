function a(){
    var label = document.createElement('label');
    label.innerHTML = "Label Gerada !! ";    
    document.getElementsByTagName('body')[0].appendChild(label);
}

function b(){
    var txtfield = document.createElement("INPUT");
    txtfield.setAttribute("type", "text");
    document.body.appendChild(txtfield);	
}

function c(){
    var senha = document.createElement("INPUT");
    senha.setAttribute("type", "password");
    document.body.appendChild(senha);
}
    
function d(){
    var radio = document.createElement("INPUT");
    radio.setAttribute("type", "radio");
    document.body.appendChild(radio);
}		

function e(){
    var check = document.createElement("INPUT");
    check.setAttribute("type", "checkbox");
    document.body.appendChild(check);
}		

function f(){
    var combo = document.createElement("select");
    combo.setAttribute("type", "option");
    document.body.appendChild(combo);
}		

function g(){
    var img = document.createElement("img");
    img.setAttribute("src", "img");
    document.body.appendChild(img);
}

function h(){
    var botao = document.createElement("INPUT");
    botao.setAttribute("type", "BUTTON");
    document.body.appendChild(botao);	;
}

function i(){
    var txtarea = document.createElement("TEXTAREA");
    document.body.appendChild(txtarea);
}

function limpar(){
    document.getElementById("principal").innerHTML = '';
}

function gerar(){
    var nome1 = document.getElementById('nome').value;
    var texto1 = document.getElementById("txt").value;

        
    document.getElementById("principal").innerHTML = texto1 + '<br>' + document.getElementById("principal").innerHTML;
    document.getElementById("txt").value = '';
    
    document.getElementById("principal").innerHTML = nome1 + '<br>' + document.getElementById("principal").innerHTML;
    document.getElementById("nome").value = '';
    
}