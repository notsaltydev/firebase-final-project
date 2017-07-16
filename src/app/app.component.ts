import {Component} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Angular 4!';
  courses$: FirebaseListObservable<any[]>;
  lesson$: FirebaseObjectObservable<any[]>;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.courses$ = db.list('courses');

    this.courses$.subscribe(console.log);

    this.lesson$ = db.object('lessons/Kp4kKSgS8ujqLb-5vIw');

    this.lesson$.subscribe(console.log);
  }

  listPush() {
    this.courses$.push({description: 'TEST NEW COURSE'})
      .then(
        () => console.log('List push done.'),
        console.error
      );
  }

}
18. How to Write Data to the Database using Angular Fire ?
  3:52
