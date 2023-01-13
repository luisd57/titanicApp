// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const environment = {
    useEmulators: true,
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyDS9_vvBuWYUM7tqBbRHPUBJXsscrKANEA",
        authDomain: "titanicapp-266d2.firebaseapp.com",
        databaseURL: "https://titanicapp-266d2-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "titanicapp-266d2",
        storageBucket: "titanicapp-266d2.appspot.com",
        messagingSenderId: "735084157178",
        appId: "1:735084157178:web:d0406e6f61fd3119631143",
        measurementId: "G-3VWWSD57XF"
          },
    vapidKey: 'BIDPctnXHQDIjcOXxDS6qQcz-QTws7bL8v7UPgFnS1Ky5BZL3jS3-XXfxwRHmAUMOk7pXme7ttOBvVoIfX57PEo',
    recaptcha3SiteKey: '6LeI1VocAAAAAEHdUR_I_p2dDBkes4Hu7c5utbKT',
  };

// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);