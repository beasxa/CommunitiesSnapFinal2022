# Snap Communities

This application is a potential Snapchat feature that helps students become confident in their capability to pursue greater learning. Students can directly connect with others on similar journeys and to educational and professional development opportunities.

## Demo
<img src="assets/readme/app_prototype.gif" />

##

## Getting Started

In the terminal, type:

```
git clone https://github.com/awllms/communities.git
```

Next, type:

```
cd communities
yarn install
expo start
```

If you would like to take advantage of the database, you will have to add a `firebase.js` file to the project's root folder. You must enter your firebase SDK setup and configuration information inside this file. It should look something like this: 

```
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "your_api_key_here",
  authDomain: "yourdomain.firebaseapp.com",
  projectId: "yourappname-28098",
  storageBucket: "yourappname-28098.appspot.com",
  messagingSenderId: "000000000000000",
  appId: "1:00000000000000:web:0000000000000000"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
```

Your final `firebase.js` file should look like the following:

```
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "your_api_key_here",
  authDomain: "yourdomain.firebaseapp.com",
  projectId: "yourappname-28098",
  storageBucket: "yourappname-28098.appspot.com",
  messagingSenderId: "000000000000000",
  appId: "1:00000000000000:web:0000000000000000"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
```
You must also enable authentication sign in with email and password on your firebase account. 