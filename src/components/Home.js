import React from 'react';
import CustomHookMain from './hook/customHook/CustomHookMain';

const Home = () => {

    let imgStyle = {
        marginTop: 50,
        width: 500,
        textAlign: 'center'
    };

    return(
        <div>
            Home
            <CustomHookMain />
        </div>
    );
};

export default Home;