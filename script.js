const usuarios=[
    {nome:"Caique", idade:18},
    {nome:"Rafael", idade:19},
    {nome:"Rodrigo", idade:18},
];

let msg = document.getElementById('msg')

const nomeUsers = usuarios.length;

for(let i=0; i < nomeUsers; i++){
    msg.innerHTML += `<p>${usuarios[i].nome} ${usuarios[i].idade}</p>`
}

var imagens =[
    'imagens/img.jpg',
    'imagens/img2.png',
    'imagens/img3.jpg'
];

var index = 0;
var time = 2000;

function slideShow(){
    document.getElementById('imagens'). src= imagens[index];
    index++;
    if (index == imagens.length){index = 0}
        setTimeout("slideShow()", time);
}

slideShow();