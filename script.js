function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  var minutos = (data.getMinutes() < 10 ? '0' : '') + data.getMinutes()
  
  msg.innerHTML = "agora são " + hora + ":" + minutos + " horas." ;

  if (hora >= 0 && hora < 12) {
    img.src = 'imagens/pexels-artur-roman-1167355.jpg'
    document.body.style.background = "#e2cd9f"    
  } else if (hora >= 12 && hora <= 18) {
    img.src = 'imagens/pexels-george-desipris-858241.jpg'
    document.body.style.background = "#b9846f"   
  } else {
    img.src = 'imagens/pexels-dominika-roseclay-977736.jpg'
    document.body.style.background = "#515154"
  }
}
