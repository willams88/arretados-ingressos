importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyCgFN0lCf0xeJaLnWkTfjAbvDBwQXxXe0A",
  authDomain: "arretados-ingressos-app.firebaseapp.com",
  projectId: "arretados-ingressos-app",
  storageBucket: "arretados-ingressos-app.firebasestorage.app",
  messagingSenderId: "309467408671",
  appId: "1:309467408671:web:d4be567df9b4d39a1e282a",
  measurementId: "G-R5V0QVJBB5"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Mensagem recebida em segundo plano:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'logo-arretados.jpg'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
