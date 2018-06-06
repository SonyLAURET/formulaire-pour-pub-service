import * as pubService from './services/pubs.services.js';

export function getListPub() {
    console.log(pubService.recupereJSON());
}

export function getListPubOpen() {
    console.log(pubService.OpenDay());
};

export function affichePub() {
    let ul = document.getElementById('ul');
    pubService.recupereJSON().forEach(element => {
        let li = document.createElement('li');
        let pub = 'le pub ' + element['name'] + ' appartient à ' + element.owner.firstName + ' ' + element.owner.lastName;
        li.appendChild(document.createTextNode(pub));
        ul.appendChild(li);
    });
}

export function affichePubJour(){
    let ul = document.getElementById('jours');
    pubService.OpenDay().forEach(element => {
        let li = document.createElement('li');
        let pub = 'le pub ' + element['name'] +" est ouvert aujourd'hui";
        li.appendChild(document.createTextNode(pub));
        ul.appendChild(li);
    });
}
affichePub();
affichePubJour();