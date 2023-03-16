import React from 'react'

const SVGIcon = (props) => {
    const type = props.type
    return (
        <>
            {
                type === 'online' &&
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#74C041" />
                </svg>
            }
            {
                type === 'offline' &&
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#FF1A2E" />
                </svg>
            }
        </>
    )
}

export default SVGIcon