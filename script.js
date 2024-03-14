// Traccia 1
persona = {
    'nome': 'Marco',
    'cognome': 'De Vito',
    'eta': 31,
    "saluto": function () {
        console.log(`Buongiorno, mi chiamo ${this.nome} ${this.cognome}`);
    }

}
persona.saluto();


// Traccia 2

let rubrica = {
    'contacts': [
        { 'nome': 'Nicola', 'telefono': '3331111111' },
        { 'nome': 'Lorenzo', 'telefono': '3332222222' },
        { 'nome': 'Paola', 'telefono': '3333333333' },
        { 'nome': 'Jenny', 'telefono': '3334444444' }
    ],
    // Mostrare tutti i contatti 
    'showContacts': function () {
        this.contacts.forEach(contact => console.log(`${contact.nome} - ${contact.telefono}`));
    },
    // Chiamare un contatto
    'callContact': function (search) {
        let isFound = false;
        // Cercare il contatto
        this.contacts.forEach(contact => {
            if (contact.nome.toLowerCase() === search.toLowerCase()) {
                console.log(`sto chiamando ${contact.nome} componendo il numero: ${contact.telefono}`);
                isFound = true;
            }
        })
        if (!isFound) {
            console.log(`${search} NON trovato`);
        }
    },
    // Aggiungere un contatto
    'addContacts': function (newName, newNumber) {
        this.contacts.push({ 'nome': newName, 'telefono': newNumber });
    },
    // Modificare un contatto
    'editContact': function (search, newNumber) {
        let isFound = false;
        // Cercare il contatto
        this.contacts.forEach(contact => {
            if (contact.nome.toLowerCase() === search.toLowerCase()) {
                contact.telefono = newNumber;
                isFound = true;
            }
        })
        if (!isFound) {
            console.log(`${search} NON trovato`);
        }
    },
    // Eliminare un contatto
    'deleteContact': function (search) {
        // ⬇  Trova solo la prima corrispondenza
        // let i = this.contacts.findIndex(contact => contact.nome.toLowerCase() === search.toLowerCase())
        // if (i === -1) {
        //     console.log(`${search} non trovato`);
        // }
        // else {
        //     this.contacts.splice(i, 1);
        // }

        // ⬇ questo gestisce anche il caso di 2 contatti con lo stesso nome
        let i = [];

        this.contacts.forEach((contact, index) => {
            if (contact.nome.toLowerCase() === search.toLowerCase()) {
                i.push(index);
            }
        })
        console.log(i);
        let promptMsg = "";
        if (i.length > 1) {
            promptMsg += `Quale nome vuoi eliminare?\n`;
            i.forEach((pos, index) => promptMsg += `${index + 1}: ${this.contacts[pos].nome} ${this.contacts[pos].telefono}\n`);
            let choice;
            do {
                choice = parseInt(prompt(promptMsg));

            } while (choice <= 0 || choice > i.length || isNaN(choice)) 
            console.log(choice);
            this.contacts.splice(i[choice - 1], 1)


        }
        else if (i.length === 0) {
            console.log(`${search} non trovato`);
        }
        else {
            this.contacts.splice(i[0], 1);
        }

    }
}
// Chiamare un contatto
rubrica.callContact("nicola"); // contatto esistente
rubrica.callContact('sdfhd'); // contatto non esistente

// Aggiungere un contatto
rubrica.addContacts('Marco', 333333555);
rubrica.addContacts('Marco', 333333666);

// Modificare un contatto
rubrica.editContact('nicola', 9999999); // contatto esistente
rubrica.editContact('sgo', 9999999); // contatto non esistente

// Eliminare un contatto
rubrica.deleteContact('marco'); // contatto esistente ma ce ne sono più di 1 con lo stesso nome
rubrica.deleteContact('nicola'); // contatto esistente
rubrica.deleteContact('los'); // contatto non esistente


// Mostrare tutti i contatti 
rubrica.showContacts();