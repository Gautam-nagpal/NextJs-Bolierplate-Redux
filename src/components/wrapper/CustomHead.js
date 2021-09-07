import React from 'react';

import Head from 'next/head';
import { PROJECT_NAME_TEXT } from '@constants';

function CustomHead({ pageTitle = PROJECT_NAME_TEXT }) {
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    )
}

export default CustomHead