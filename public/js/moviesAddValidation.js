const $ = (element) =>document.getElementById(element)

window.onload = function(){
    console.log('MoviesAddValidation success');
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    

let form = document.querySelector('form')

let errores = document.querySelector('.errores')

let inputTitle = document.getElementById('title')
let inputRating = document.getElementById('rating')
let inputAwards = document.getElementById('awards')
let inputReleaseDate = document.getElementById('release_date')
let inputLength = document.getElementById('length')
let selectGenre = document.getElementById('genre_id')


inputTitle.focus()   //Para hacer foco en ese input cuando carge la pagina

let erroresArray = []

inputTitle.addEventListener('blur' , function() {
    if(!this.value){ //Si es q el campo title no tiene valor mostrar mensaje
        $('errorTitle').innerHTML = 'El campo titulo no puede estar vacio'
/*         this.classList.add('is-invalid')          
 */    }else{
        $('errorTitle').innerHTML = null
        this.classList.add('is-valid')
    }
})

inputRating.addEventListener('blur' , function() {
   

    switch (true) {
        case !this.value:
            $('errorRating').innerHTML = 'El campo rating no puede estar vacio'
            this.classList.add('is-invalid')          
            break;
        case this.value < 0 || this.value > 10:
            $('errorRating').innerHTML = 'El rating debe ser entre 0 y 10 puntos'
            this.classList.add('is-invalid')          
            break;
        default:
            $('errorRating').innerHTML = null
            this.classList.remove('is-invalid')          
    }

})

inputAwards.addEventListener('blur' , function() {
   
    switch (true) {
        case !this.value:
            $('errorAwards').innerHTML = 'El campo awards no puede estar vacio'
            this.classList.add('is-invalid')          
            break;
        case this.value < 0 || this.value > 10:
            $('errorAwards').innerHTML = 'Los premios deben ser entre 0 y 10'
            this.classList.add('is-invalid')          
            break;
        default:
            $('errorAwards').innerHTML = null
            this.classList.remove('is-invalid')          
    }
})

inputReleaseDate.addEventListener('blur' , function() {
    if(!this.value){ //Si es q el campo title no tiene valor mostrar mensaje
        $('errorReleaseDate').innerHTML = 'El campo release date no puede estar vacio'
        this.classList.add('is-invalid')          
    }else{
        $('errorReleaseDate').innerHTML = null
        this.classList.remove('is-invalid')          
    }
})

inputLength.addEventListener('blur' , function() {

    switch (true) {
        case !this.value:
            $('errorLength').innerHTML = 'El campo length no puede estar vacio'
            this.classList.add('is-invalid')          
            break;
        case this.value < 60 || this.value > 360:
            $('errorLength').innerHTML = 'La duracion debe ser entre 60 y 360 min'
            this.classList.add('is-invalid')          
            break;
        default:
            $('errorLength').innerHTML = null
            this.classList.remove('is-invalid')          
    }
})

selectGenre.addEventListener('blur' , function() {
    if(!this.value){ //Si es q el campo title no tiene valor mostrar mensaje
        $('errorGenre').innerHTML = 'El campo genero no puede estar vacio'
        this.classList.add('is-invalid')          
    }else{
        $('errorGenre').innerHTML = null
        this.classList.remove('is-invalid')          
    }
})


form.addEventListener('submit' , (e) => {
    e.preventDefault()
    
    let elements = form.elements
    let error = false
    for (let i = 0; i < elements.length -1; i++) {
        
        if (elements[i].classList.contains('is-invalid') || !elements[i].value) {
            error = true
        }
        
    }
   
    if (!error) {
        e.target.submit() //target hace referencia donde se genero el evento en este caso la etiqueta form
    }else{
        errores.innerHTML = `<li class='alert-warning'> Tiene errorers pendientes!! </li>`
    }

})

}