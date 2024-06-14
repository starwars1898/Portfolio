import React from 'react'
import Head from 'next/head'

function Header(props) {
    const { title } = props

    return (
        <Head>
            <title>{title}</title>
        </Head>
    )
}

export default Header