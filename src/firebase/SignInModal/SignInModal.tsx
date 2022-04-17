// firebase
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// Styles
import './firebaseui-styling.css'
import styles from './SignInModal.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// word-yousef firebaseApp
import { auth } from "../FirebaseConfig";

import React, { useEffect, useState } from 'react'
import { EmailAuthProvider, GoogleAuthProvider, onAuthStateChanged, User } from 'firebase/auth';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';


const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
        GoogleAuthProvider.PROVIDER_ID,
        EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
        signInSuccessWithAuthResult: () => {
            return false
        },
    },
};


const SignInModal = () => {
    // Auth
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
            console.log(user);
        })
    }, [])

    const [user, setUser] = useState<User | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            {!!!user &&
                <Button onClick={() => setIsModalOpen(true)}>Sign In</Button>}
            {!!user &&
                <Button onClick={() => setIsModalOpen(true)}>{auth.currentUser?.displayName}</Button>
            }

            <Modal isOpen={isModalOpen} toggle={() => setIsModalOpen(!isModalOpen)} className={'modal-dialog-centered'}>
                <ModalBody>
                    <div>
                        {!!!user &&
                            <div>
                                <StyledFirebaseAuth className={styles.firebaseUi} uiConfig={uiConfig}
                                    firebaseAuth={auth} />
                            </div>
                        }
                        {!!user &&
                            <div className={styles.signedIn}>
                                <p>Hello {auth.currentUser?.displayName}. You are now signed In!</p>
                            </div>
                        }
                    </div>
                </ModalBody>
                {!!user &&
                    <ModalFooter>
                        <Button onClick={() => {
                            auth.signOut()
                            setIsModalOpen(false)
                        }}>Sign-out</Button>
                    </ModalFooter>
                }
            </Modal>
        </>
    )
}

export default SignInModal