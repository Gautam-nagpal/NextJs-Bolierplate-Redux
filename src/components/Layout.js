import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getData } from '@utils';
import cn from 'classnames';

import { AccessTokenId } from '@constants';

function Layout({ children, authRequired = false, isLoading = false }) {
    const router = useRouter();

    const [hasAccess, setAccess] = useState(false);

    useEffect(() => {

        if (!getData(AccessTokenId) && authRequired) {
            // router.push('/shop')
        } else {
            setAccess(true);
        }

    }, [])


    //While loading & checking auth show this fallback/loading UI.
    if (authRequired && !hasAccess) {
        return <div className="loading-wrapper-custom">
            <div className="loader">
                Loader...
                {/* <CircularProgress color="inherit" />
                <img src="/images/loader.gif" /> */}
            </div>
        </div>
    }

    return (
        <>
            <div className="__app_container__">
                <div className={cn("__global_loader__", { 'showing': !isLoading })}>
                    <div>
                        Loader...
                        {/* <CircularProgress color="inherit" />
                        <img src="/images/loader.gif" /> */}
                    </div>
                </div>
                <div className={cn({ 'blur': isLoading })}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout