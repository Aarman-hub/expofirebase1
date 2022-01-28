import React from 'react';
import {AuthenticatedUserProvider} from '../navigations/UserAuthentication';
import AppNavigation from './AppNavigation';

const IndexNav = () =>{
    return(
        <AuthenticatedUserProvider>
            <AppNavigation />
        </AuthenticatedUserProvider>
    )
}

export default IndexNav;