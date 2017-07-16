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
  firstCourse: any;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.courses$ = db.list('courses');

    this.courses$
      .subscribe(
        (courses) => {
          console.log(courses);
          this.firstCourse = courses[0];
        }
      );

    this.lesson$ = db.object('lessons/-Kp4kKSgS8ujqLb-5vIw');

    this.lesson$.subscribe(console.log);
  }

  listPush() {
    this.courses$.push({description: 'TEST NEW COURSE'})
      .then(
        () => console.log('List push done.'),
        console.error
      );
  }

  listRemove() {
    this.courses$.remove(this.firstCourse);
  }

  listUpdate() {
    this.courses$.update(this.firstCourse, {description: 'Angular 2 HTTP Modified'});
  }

  objUpdate() {
    this.lesson$.update({description: 'NEW DESCRIPTION 5'});
  }

  objSet() {
    this.lesson$.set({description: 'NEW DESCRIPTION 1'});
  }

  objRemove() {
    this.lesson$.remove();
  }

}

