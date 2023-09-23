var elbtn = document.querySelector(".hide-modal__exit");
var elgamubrger = document.querySelector(".site-header__gamburger-btn");
var elhideform = document.querySelector(".hide-modal__form");

elhideform.addEventListener("submit", function(evt) {
    evt.preventDefault();
})
elgamubrger.addEventListener("click", function() {
    document.body.classList.add("active");
})

elbtn.addEventListener("click", function() {
    document.body.classList.remove("active");
})


// yashirin tastiqlash oynasi 
// var elform = document.querySelector(".hide-modal__form");
var elmainbtn = document.querySelector(".approved__btn2");
var elmadditionbtn = document.querySelector(".approved__btn1");

elhideform.addEventListener("submit", function() {  
    var elinp = document.querySelector(".hide-modal__input-name").value;
    var elinptel = document.querySelector(".hide-modal__input-tel").value.length;
    if(elinptel < 9) {
        alert(`telfon nomerni tekshirib qayta urinib ko'ring !!!
             misol uchun 99-790-06-76`)
        return;
     }
     if(elinp.charAt(0) !== elinp.charAt(0).toUpperCase()) {
        alert("ismizi bosh harf bilan kiriting !!!")
        return;
     }
     document.body.classList.add("active2");
     

});

elmainbtn.addEventListener("click", function() {
    document.body.classList.remove("active2");
})
elmadditionbtn.addEventListener("click", function() {
    document.body.classList.remove("active2");
})
