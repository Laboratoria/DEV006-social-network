import { collection, getDocs } from 'firebase/firestore';
import { firestore } from './firebaseConf';

const colRef = collection(firestore, 'posts');
getDocs(colRef)
  .then((snapshot) => {
    console.log(snapshot.docs);
  });
