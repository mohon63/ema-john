/**
 * 1. Create a new firebase project in console.firebase.google.com
 * 2. npm install firebase
 * 3. create firebase.init.js and import getAuth to export auth
 * 4. Firebase setting > Authentication > enable Email and Password auth
 * 5. Create login, SignUp component, setup route
 * 6. Attach form field handler and form submit handler
 * 7. npm install --save react-firebase-hooks
 * 8. useCreateUserWithEmailAndPassword from react-firebase-hooks
 * 9. if user is created redirect to the expected page 
 * 10. useSignInWithEmailAndPassword for sign in
 * 11. create requireAuth component ==> check user exists also tract user location
 * 12. In route wrap Protected component by using require auth component 
 * 
 * 
*/



/**
 * firebase hosting step 
 * 1. npm install -g firebase-tools
 * 2. firebase login
 * 3. firebase init
 *  * Are you want to proceed. 'y'
 *  * hosting: Configure files for firebase hosting and setup gitHub action deploy (click speech *)
 *  * Use and existing project 
 *  * ...project name
 *  * public directory. (build)
 *  * index.html (y)
 *  * set up automatic build and deploys with gitHub, (n)
 * 4. firebase deploy
 * 4. firebase deploy
*/