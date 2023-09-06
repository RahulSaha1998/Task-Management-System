import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Loader from '../Loader/Loader';

const UserProfile = () => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loader></Loader>
    }

    // Retrieve the user data from local storage
    const storedUserDataJSON = localStorage.getItem('userData');
    const storedUserData = storedUserDataJSON ? JSON.parse(storedUserDataJSON) : null;
    console.log(storedUserData);

    // Check if the user is logged in and if the emails match
    const matchingUser = user && storedUserData.find(item => item?.email === user?.email);
    console.log(matchingUser);


    return (
        <div>
            <div className=" card card-side bg-base-100 shadow-xl">
            {matchingUser?.photoURL ? (
                        <figure><img className='w-52' src={matchingUser?.photoURL}  alt="Movie" /></figure>
                    ) : (
                        <figure><img className='w-52' src={user?.photoURL}  alt="Movie" /></figure>
                    )}

                <div className="card-body">
                {matchingUser?.name ? (
                        <h2 className="card-title"><span className='text-red-600'>User Name:</span> {matchingUser?.name}</h2>
                    ) : (
                        <h2 className="card-title"><span className='text-red-600'>User Name:</span> {user?.displayName}</h2>
                    )}

                {matchingUser?.email ? (
                        <h2 className="card-title"><span className='text-red-600'>Email:</span> {matchingUser?.email}</h2>
                    ) : (
                        <h2 className="card-title"><span className='text-red-600'>Email:</span> {user?.email}</h2>
                    )}
                    
                    

                    {matchingUser?.bio ? (
                        <h2 className="card-title"><span className='text-red-600'>Bio:</span> {matchingUser?.bio}</h2>
                    ) : (
                        <h2 className="card-title"><span className='text-red-600'>Bio:</span>Hello there I am a professional developer.</h2>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
