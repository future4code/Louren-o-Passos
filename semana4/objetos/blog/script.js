const tituloPost = document.getElementById("titulo");
const conteudoPost = document.getElementById("conteudo");
const autorPost = document.getElementById("autores");
const arrayPosts = [];
const postsPublicados = document.getElementById("posts-publicados");



function criaObjeto(){
    console.log(tituloPost.value);
    console.log(conteudoPost.value);

    const post = {
        titulo: tituloPost.value,
        conteudo:conteudoPost.value,
        autor:autorPost.value,
    }

    
    arrayPosts.push(post);
    console.log(arrayPosts); 
    
    publicaObjeto();    
}

function publicaObjeto(){


    postsPublicados.innerHTML += `<div class="card-post"><h2 class="titulo-publicado"> ${tituloPost.value} </h2> <p> ${conteudoPost.value} <p> ${autorPost.value}</div>`;
    tituloPost.value = "";
    conteudoPost.value = "";


}