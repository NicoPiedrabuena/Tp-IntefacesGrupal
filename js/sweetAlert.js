(async() => {
const {value: respuesta} = await Swal.fire(
    {
    title: 'Bienvenido',
    text: '¿ya estas inscripto?',
    //icon : 'question',
    width: '60%',
    background: 'rgba(249, 243, 243, 0.75)',
    backdrop: true,
    input:'select',
    confirmButtonColor: 'rgba(71, 176, 60, 0.71)',
    inputPlaceholder: 'Elige una opcion',
    inputOptions: {
        SI: 'SI',
        NO: 'NO'
    },
    customClass:{
        input: 'tamaño'
    },
    timer: '5000',
}
);
if(respuesta == 'SI'){
    location.href = 'login.html';
}else{
    location.href = 'index1.html';
}
if(respuesta == 'NO'){
    location.href = 'form.html';

}
})()

