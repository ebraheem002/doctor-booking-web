import { db, auth, storage } from './Firebase';
import { firestore } from 'firebase';

export const firebaseFunctions = {
  //put your function reference here like:
  //functionName : function reference
  bookAppointment: bookAppointment,
  signIn: signIn,
  signOut: signOut,
  signUp: signUp,
};

//write your function here
function bookAppointment(appointmentInfo) {
  return db
    .collection('appointments')
    .doc()
    .set(appointmentInfo, { merge: true })
    .then(() => {
      alert('Your appointment is recorded successfully');
    })
    .catch((err) => {
      alert(err.message);
    });
}
async function signIn(email, password) {
  await auth
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      console.log(res.user);
    })
    .catch((err) => {
      alert(err.message);
    });
}

function signOut() {
  auth.signOut();
}
async function signUp(doctorInfo) {
  let user;
  await auth
    .createUserWithEmailAndPassword(doctorInfo.email, doctorInfo.password)
    .then((res) => (user = res.user))
    .catch((err) => console.log(err));

  const doctorData = {
    name: doctorInfo.name,
    province: doctorInfo.province,
    city: doctorInfo.city,
    reference: doctorInfo.reference,
    neighborhood: doctorInfo.neighborhood,
    location: new firestore.GeoPoint(
      doctorInfo.marker[0],
      doctorInfo.marker[1]
    ),
    phoneNumber: doctorInfo.phoneNumber,
    gender: doctorInfo.gender,
    speciality: doctorInfo.speciality,
    education: doctorInfo.education,
    experience: doctorInfo.experience,
    timeTable: doctorInfo.timeTable,
    uid: user.uid,
  };
  const img = doctorInfo.img;
  await db
    .collection('doctors')
    .doc(user.uid)
    .set(doctorData, { merge: true })
    .then(() => alert('your clinic is registered now'));
  const storageRef = storage.ref('doctors/' + user.uid);
  const upload = storageRef.put(img);
  upload.on('state_changed', function complete() {
    console.log('uploaded');
  });
}
