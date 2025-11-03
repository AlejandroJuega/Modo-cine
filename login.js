const music=document.getElementById("bgMusic");music.volume=0.6;
function entrar(){music.pause();localStorage.setItem("modoCineUser","true");window.location.href="index.html";}
loginBtn.onclick=()=>{const e=email.value.trim(),p=password.value.trim();if(e&&p)entrar();else alert("Rellena los campos");};
googleLogin.onclick=entrar;
