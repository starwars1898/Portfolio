import React from 'react'
import Header from '@/components/Header'
import Layout from '@/components/Layout'
import HomeContainer from '@/containers/home'

function HomePage() {
    return (
        <Layout>
            <Header title='Home' />
            <HomeContainer />
        </Layout>
    )
}

export default HomePage