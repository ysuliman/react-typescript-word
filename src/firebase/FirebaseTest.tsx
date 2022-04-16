import { collection } from 'firebase/firestore';
import { useCollection } from "react-firebase-hooks/firestore";
import { useEffect, useMemo } from 'react'
import { db } from './FirebaseConfig';
import SignInModal from './SignInModal/SignInModal';

const FirebaseTest = () => {
    // Firestore
    const someColRef = useMemo(() => collection(db, 'someCollection'), [])
    const [someCol] = useCollection(someColRef)

    useEffect(() => {
        someCol?.forEach(element => {
            console.log(element.data().user)
        })
    }, [someCol])


    return (
        <div>
            <SignInModal />
        </div>
    )
}

export default FirebaseTest