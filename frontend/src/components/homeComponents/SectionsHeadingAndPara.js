import React from 'react'

export default function SectionsHeadingAndPara({ title, para }) {
    return (
        <div className="mx-auto text-center w-50 d-flex-cc flex-column">
            <h2 className="text-k-primary text-k-clr-primary"> {title} </h2>
            <p className="text-k-text" style={{width: "500px"}}>
                {para}
            </p>
        </div>
    )
}


