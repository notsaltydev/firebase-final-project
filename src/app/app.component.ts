import {Component} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Angular 4!';
  // courses$: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    const courses$: FirebaseListObservable<any[]> = db.list('courses');

    const course$ = db.object('courses/-Kp4kKScdSfUCCNVOaAY');

    course$.subscribe(console.log);
  }

}
