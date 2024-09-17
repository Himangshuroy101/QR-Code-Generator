let imageBox = document.querySelector('.Imgbox');
let qrImage = document.querySelector('.qrImage');
let qrText = document.querySelector('.qrText');

const btn = document.querySelector('.btn');
btn.addEventListener('click', function(){
    generateQR();

})

function generateQR(){
    if(qrText.value.trim().length > 0){

    qrImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+qrText.value;
    imageBox.classList.add("show-image");
    }else{
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error');
        }, 1000)
    }
}