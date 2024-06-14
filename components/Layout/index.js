import React from 'react'

function Layout({ children }) {
    const classes = {
        htmlBody: `w-[100vw] h-[100vh] bg-red-200 flex justify-center`
    }

    return (
        <html className={classes.htmlBody}>
            {children}
        </html>
    )
}

export default Layout