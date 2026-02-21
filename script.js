function toggleMenu(){
document.getElementById("sideMenu").classList.toggle("active");
}

function adminLogin(){
let login=prompt("Логин:");
let pass=prompt("Пароль:");

if(login==="Kenzhe_gold2022" && pass==="kenzhegold2022"){
window.location.href="admin.html";
}else{
alert("Неверные данные");
}
}

function buyNow(product){
let text="Здравствуйте! Хочу заказать "+product+" с сайта Kenzhe_Gold";
window.open("https://wa.me/77759425888?text="+encodeURIComponent(text));
}