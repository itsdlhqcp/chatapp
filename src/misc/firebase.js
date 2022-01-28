import { Notification as Toast } from 'rsuite';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';
import 'firebase/functions';

// import { isLocalhost } from './helper';

const firebaseConfig = {
      apiKey: "AIzaSyD_doQXC6shRxqFuo3MqX80AjzdmhZ6sFM",
      authDomain: "chat-web-app-46b89.firebaseapp.com",
      databaseURL: "https://chat-web-app-46b89-default-rtdb.firebaseio.com",
      projectId: "chat-web-app-46b89",
      storageBucket: "chat-web-app-46b89.appspot.com",
      messagingSenderId: "1054557095729",
      appId: "1:1054557095729:web:cbe3a2083a8993efb7d210"
    };

   export const app = firebase.initializeApp(firebaseConfig);
   export const auth = app.auth();
   export const database = app.database();
   export const storage = app.storage();
   export const functions = app.functions('europe-west3');

   export const messaging = firebase.messaging.isSupported() ? app.messaging() : null; 

   if(messaging) {
     messaging.usePublicVapidKey('BByenmQb1b155S3csmn1xwRd8yTHd8sbWDxPORFeiVwMaB1wrxDP2oNlCRc1pBs_lgsEHnbpj76J0vp_DjgTXUs');

     messaging.onMessage(({notification}) => {
       const { title, body } = notification
       Toast.info({title, description: body, duration: 0})

     });
   }

  //  if(isLocalhost) {
  //    functions.useFunctionsEmulator()
  //  }