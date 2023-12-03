import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCENiFhA4sr1W2YNpcYEVFOtaU0TyeTt0o",
  authDomain: "fir-react-d2067.firebaseapp.com",
  projectId: "fir-react-d2067",
  storageBucket: "fir-react-d2067.appspot.com",
  messagingSenderId: "790366796680",
  appId: "1:790366796680:web:dee9f8989ba3d32337583d"
};

// // const app = initializeApp(firebaseConfig);

// // export const authentication = getAuth(app);

// let app;

// try {
//   app = initializeApp(firebaseConfig);
// } catch (error) {
//   console.error('Error initializing Firebase: ', error);
// }

// export const authentication = getAuth(app);

// Import the functions you need from the SDKs you need


// const firebaseConfig = {
//   apiKey: "AIzaSyD8gICRlLhwejW7wiaVjZUFB2Eivavvjjg",
//   authDomain: "react1-e59f8.firebaseapp.com",
//   projectId: "react1-e59f8",
//   storageBucket: "react1-e59f8.appspot.com",
//   messagingSenderId: "235765980389",
//   appId: "1:235765980389:web:f1f5ebfd8ff5734437880c",
//   measurementId: "G-0G9FKBEXTF"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

let app;

try {
  app = initializeApp(firebaseConfig);
} catch (error) {
  console.error('Error initializing Firebase: ', error);
}

export const authentication = getAuth(app);
