import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();
exports.triggerUserCreated = functions.auth.user().onCreate((user) => {
  console.log("user created");
  return admin
    .firestore()
    .collection('/users/').doc(user.uid).set({
      firstname: "",
      lastname: '',
      email: user.email,
      role: 'client',
      imgurl: '',
      team: '',
      phone: '',
    });
});

exports.triggerUserDeleted = functions.auth.user().onDelete((user) => {
  console.log("user deleted");
  return admin
    .firestore()
    .collection('/users/').doc(user.uid).delete();
});
