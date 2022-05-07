import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';

const Home = () => {
    const [loading] = useAuthState(auth);

    // if(loading){
    //     return;
    // }
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
        </div>
    );
};

export default Home;