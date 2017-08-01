import { Injectable, Inject, EventEmitter } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { FirebaseObjectObservable } from "angularfire2/database/firebase_object_observable";

@Injectable()
export class FirebaseService {
  notes: any[] = [];
  notesObserverList: FirebaseListObservable<any[]>;
  notesObserverObject: FirebaseObjectObservable<any>;
  listener: EventEmitter<any> = new EventEmitter();

  constructor(private db: AngularFireDatabase) {
    this.notesObserverList = this.db.list('/note', {preserveSnapshot: true});
    this.notesObserverList.subscribe(snapshots => {
      this.notes = [];
      for(let i in snapshots) {
        console.log(snapshots[i].val());
        let lastIndex = this.notes.push(snapshots[i].val()) - 1;
        this.notes[lastIndex]['id'] = snapshots[i].key;
        this.listener.emit({type: 'notes', data: this.notes});
      }
    });
  }

  addNote(keys: String[], content: String) {
    let when = new Date().getTime();
    this.notesObserverList.push({keys: keys, content: content, when: when});
  }

  updateNote(id: String, content: String){
    this.notesObserverObject = this.db.object('/note/'+id);
    this.notesObserverObject.update({ content: content });
  }

  removeNote(id: String){
    this.notesObserverObject = this.db.object('/note/'+id);
    this.notesObserverObject.remove();
  }

  getNote(): any[] {
    return this.notes;
  }

  getEventListener() {
    return this.listener;
  }
}

