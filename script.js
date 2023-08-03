function calcular() {
  let fpeso = window.document.querySelector('#fpeso')
  let falt = window.document.querySelector('#falt')

  if (fpeso.value.length == 0 || falt.value.length == 0) {
    alert('[ERRO!] Insira valores válidos!')
    return
  } else {
    let peso = Number(fpeso.value)
    let alt = Number(falt.value)

    if (peso <= 0 || alt <= 0) {
      alert('[ERRO!] Insira valores válidos!')
    } else {
      let imc = peso / alt ** 2
  
      let res = window.document.querySelector('p#res')
      res.innerHTML = `Seu IMC: <strong>${imc.toFixed(2)}</strong>`
      res.style.textAlign = 'center'
      res.style.fontSize = '1rem'
    }
  }
}