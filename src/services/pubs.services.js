var json = require('../../mocks/pubs.json')
import moment from 'moment';
import {Pub} from '../entity/Pub.js';
import { publicDecrypt } from 'crypto';

export function recupereJSON() {
    var tab = [];
    tab.forEach(element => {
        element=new Pub(Pub);
        tab.push(element);   
    });
    return json;
}

export function OpenDay() {
    var day = moment().format("dddd");
    var tab=[];
    json.forEach(pub => {
        if (pub.openDays.includes(day)) {    
            tab.push(pub);
        }     
    });
    return tab;
}
