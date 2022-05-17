import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div className='grid min-h-screen items-center justify-center h-screen'>
            <div class="card w-96 bg-base-300 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center font-bold">Login</h2>

                    <div class="divider">OR</div>


                    <button onClick={() => signInWithGoogle()} class="btn btn-outline btn-secondary">SIGN IN WITH GOOOGOLEE</button>
                </div>
            </div>
        </div>

    );
};

export default Login;