import { useEffect, useMemo } from 'react';

import { collection } from 'firebase/firestore';
import { db } from './FirebaseConfig';
import { useCollection } from 'react-firebase-hooks/firestore';

const FirestoreTest = () => {
	// Firestore
	const someColRef = useMemo(() => collection(db, 'someCollection'), []);
	const [someCol] = useCollection(someColRef);

	useEffect(() => {
		someCol?.forEach(element => {
			console.log(element.data().user);
		});
	}, [someCol]);

	return <div></div>;
};

export default FirestoreTest;
