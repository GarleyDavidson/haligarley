importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBZp43Mzh4VLfExeIoVwPIQNl4Cf7NPq4o",
  authDomain: "haligarley.firebaseapp.com",
  projectId: "haligarley",
  storageBucket: "haligarley.firebasestorage.app",
  messagingSenderId: "104709094928",
  appId: "1:104709094928:web:a6ab606216e00caf219495"
});

const messaging = firebase.messaging();

// 백그라운드 메시지 수신
messaging.onBackgroundMessage(payload => {
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body,
    icon: '/apple-touch-icon.png',
    badge: '/apple-touch-icon.png',
    vibrate: [200, 100, 200],
  });
});
