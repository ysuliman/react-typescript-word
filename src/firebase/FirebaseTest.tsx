import { onAuthStateChanged } from 'firebase/auth';
import { collection, DocumentData, getDocs, QuerySnapshot } from 'firebase/firestore';
import { useCollection, useDocumentData } from "react-firebase-hooks/firestore";
import React, { useEffect, useMemo, useState } from 'react'
import { auth, db } from './FirebaseConfig';

const FirebaseTest = () => {
    // Detect auth state
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log(auth, user)
            } else {
                console.log(auth)
            }
        })
    }, [])

    const someColRef = useMemo(() => collection(db, 'someCollection'), [])

    const [someCol] = useCollection(someColRef)

    useEffect(() => {
        someCol?.forEach(element => {
            console.log(element.data().user)
        })
    }, [someCol])


    return (
        <div>
        </div>
    )
}

export default FirebaseTest