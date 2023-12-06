//MILESTONE 0:
//Creare l’array di stringhe contenente i nomi dei membri del team.
//MILESTONE 1:
//Stampare le informazioni su DOM come card.
//MILESTONE 3:
//Aggiungere un evento click sulla card che aggiunge/rimuove una classe per evidenziare un componente del team.
//BONUS 1:
//In generale curare la parte di UI e organizzare i singoli membri in card/schede.
//BONUS 2:
//Inserire un form per l’aggiunta di un elemento alla lista.

//TOOLS
//Strings corresponding to team member names
//Array
//card (class)
//document.innerText
//click event
//push/remove

const teamList = ["Fabio Pacifici", "Luigi Micco", "Filippo Mangione", "Simone Taccori", "Valeria Marta"]

const containerElement = document.querySelector(".container")
//create a single div with class "card"
//const cardElement = document.createElement("div")
//cardElement.className = "card"
//console.log(cardElement);
//put the single card into container
//containerElement.append(cardElement)
//repeat this operation for every element in the array. 
//I have to insert previous operations into a loop

for (let i = 0; i < teamList.length; i++) {
    const cardElement = document.createElement("div")
    cardElement.className = "card"
    //insert element list into every card
    cardElement.innerText = teamList[i]
    containerElement.append(cardElement)
}

