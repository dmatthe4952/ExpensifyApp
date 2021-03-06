import * as firebase from 'firebase';
import moment from 'moment';


const config = {
  apiKey: "AIzaSyCI2O1y6PThxZOZPlW3o9d87XKIpjXZURg",
  authDomain: "track-my-spending.firebaseapp.com",
  databaseURL: "https://track-my-spending.firebaseio.com",
  projectId: "track-my-spending",
  storageBucket: "track-my-spending.appspot.com",
  messagingSenderId: "716710212593",
  appId: "1:716710212593:web:ec884dafa81fbaa7"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default};
//
// database.ref('expenses').on('child_removed',(snapshot)=>{
//    console.log(snapshot.key, snapshot.val());
// });
// database.ref('expenses').on('child_changed',(snapshot)=>{
//     console.log('Change:',snapshot.key, snapshot.val());
//  });
//  database.ref('expenses').on('child_added',(snapshot)=>{
//     console.log('Add:', snapshot.key, snapshot.val());
//  });
// database.ref('expenses').push({
//     description: 'Food',
//     amount: 1395,
//     note: "",
//     createdAt:845000
// });

// database.ref('expenses/-LI80Io6t9--InqRDenQ').update({
//     amount: 4500
// });



// const notes = [{
//     id:12,
//     title:'My Note',
//     body: 'this is my note'
// },{
//     id:13,
//     title:'Another Note',
//     body: 'this is another note'
// }]

// database.ref('notes').set(notes)
// .then(()=>{
//     console.log('Data saved');
// }).catch((e)=>{
//     console.log('Error:',e)
// });

// const onValueChange = database.ref().on('value', (snapshot)=>{
//     let data = snapshot.val();
//     console.log(data.name, 'is a', data.job.title, 'at', data.job.company);
// }, ()=>{
//     console.log("Error fetching data",e)
// });

// setTimeout(()=>{
//     database.ref('job/company').set('Microsoft');
// }, 5000);

// setTimeout(()=>{
//     database.ref().off();
// }, 10000);

// setTimeout(()=>{
//     database.ref('age').set('66');
// }, 15000);


// database.ref().once("value")
// .then((snapshot)=>{
//     console.log(snapshot.val());
// }).catch((e)=>{
//     console.log("Error: ",e)
// });

// database.ref().set({
//     name: 'David Matthews',
//     age: 66,
//     stressLevel: 6,
//     job: {
//         title:  'Software Developer',
//         company: 'Google'
//     },
//     isSingle: false,
//     location: {
//         city: 'Gadsden',
//         state: 'AL',
//         country: 'United States'
//     }
// }).then(()=>{
//     console.log('Data is saved.');
// }).catch((error)=>{
//     console.log('error:',error);
// });

// database.ref('attributes').set({
//     height: 72,
//     weight: 290
// }).then(()=>{
//     console.log('Data was added.')
// }).catch((e)=>{
//     console.log('Data was not added.',e)
// })

// database.ref().update({
//     stressLevel:9,
//     'job/company':'Amazon',
//     'location/city': 'Seattle',
//     'location/state': 'WA'
// }).then(()=>{
//     console.log('name and age updated');
// }).catch((e)=>{
//     console.log('no update',e);
// });
