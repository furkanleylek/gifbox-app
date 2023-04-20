import React from "react";
import Head from 'next/head'

const Meta = ({ title, description }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta description={description} />
            </Head>
        </div>
    )
}

Meta.defaultProps = ["DefaultTitle", "DefaultDescription"]

export default Meta