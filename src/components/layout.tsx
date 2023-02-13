import React from 'react'
import Header from './header'
import Footer from './footer'

function Layout({ children }: any) {
    return (
        <main>
            <Header />
            <div id="main" className="">
                {children}
            </div>
            <Footer />
        </main>
    )
}

export default Layout