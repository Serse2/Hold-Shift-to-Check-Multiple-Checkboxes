//select all input button 
const checkboxs = document.querySelectorAll('input[type="checkbox"]');
  
let lastChecked;
function select(e){
  //questa variabile serve per discriminare quali check box sono all'interno della selezione e quali no
  //se è true sono compresi se e false non sono compresti
  let inBetween = false
  //verifico se è premuto il tasto shift è che sia selezionato un check box
  if (e.shiftKey && this.checked){
    //loop su ogni elemento checkbox 
    checkboxs.forEach(checkbox => {
      //per ogni checkbox verifica che il checbox sia checked
      //se incontra un checkbox selezionato cambia il valore di inBetween da false a true
      if (checkbox == this || checkbox == lastChecked){
        //inversione del valore tra false e true
        inBetween = !inBetween
      }
      //se inBetween è true aggiorna l'emento checkbox con .checked = true
      if (inBetween){
        checkbox.checked = true
      }
    })
  }
  lastChecked = this
}
//aggiungo un listener di evento ad ogni checkbox
checkboxs.forEach(checkbox => {
  checkbox.addEventListener('click', select)
})