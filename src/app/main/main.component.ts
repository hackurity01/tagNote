/**
 * Created by hackurity on 2017. 7. 19..
 */

import { Component } from '@angular/core';

import { FirebaseService } from '../services/firebase.service';

@Component({
  selector   : 'app-main',
  templateUrl: './main.component.html',
  styleUrls  : ['./main.component.scss']
})
export class MainComponent {
  notes: any[];

  constructor(private firebaseService: FirebaseService) {
    firebaseService.getEventListener().subscribe(event => {
      if(event.type == 'notes') {
        this.notes = event.data;
        console.log(this.notes);
      }
    });
    //firebaseService.addNote(['2444', 'asdf'], 'aaaaaaa');
  }

  addNote(keys, content){
    let key_list = keys.value.split(',');
    for(let i in key_list ){
      key_list[i] = key_list[i].trim();
    }
    this.firebaseService.addNote(key_list, content.value);
    keys.value = '';
    content.value = '';
  }

  updateNote(event){
    let id = event.target.parentElement.parentElement.parentElement.id;
    let content = event.target.value;
    this.firebaseService.updateNote(id, content);
  }

  removeNote(event){
    let id = event.target.parentElement.parentElement.id;
    this.firebaseService.removeNote(id);

  }

  showModal() {
    document.querySelector('#add-note-modal').className += ' is-active';
  }

  hideModal() {
    document.querySelector("#add-note-modal").className = document.querySelector("#add-note-modal").className.replace('is-active', "");
    console.log('test');
  }
}
