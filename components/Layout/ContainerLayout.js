import React from 'react'

function ContainerLayout({ children }) {
    const classes = {
        ContainerLayoutBody: `w-full h-full lg:w-[90%] max-w-[1500px] bg-green-200`
    }

    return (
        <div className={classes.ContainerLayoutBody}>
            {children}
        </div>
    )
}

export default ContainerLayout