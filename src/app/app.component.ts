import {Component, Input} from '@angular/core';
import {initializeApp, database} from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Angular 4!';

  constructor() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyD71fhO9sLIugUIGJtzK-2U9ajgFZ04o5c',
      authDomain: 'fir-final-project-69c46.firebaseapp.com',
      databaseURL: 'https://fir-final-project-69c46.firebaseio.com',
      projectId: 'fir-final-project-69c46',
      storageBucket: 'fir-final-project-69c46.appspot.com',
      messagingSenderId: '522312435347'
    };
    initializeApp(config);

    const root = database().ref('testArray');
    root.on('value', function (snap) {
      console.log(snap.key, snap.val());
    });
  }

}
