/* eslint-disable no-undef */

importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');


firebase.initializeApp({
    apiKey: "AIzaSyD_doQXC6shRxqFuo3MqX80AjzdmhZ6sFM",
    authDomain: "chat-web-app-46b89.firebaseapp.com",
    databaseURL: "https://chat-web-app-46b89-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-46b89",
    storageBucket: "chat-web-app-46b89.appspot.com",
    messagingSenderId: "1054557095729",
    appId: "1:1054557095729:web:cbe3a2083a8993efb7d210"
});


firebase.messaging();