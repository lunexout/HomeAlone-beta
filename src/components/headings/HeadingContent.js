import React from 'react'

export const HeadingContent = ({f1,f2,desc,img}) => {

    return(
        <>
            <div className="header-content">
            <p className="hd">
            {f1}
            <br />
            {f2}
            </p>
            <p style={{ width: "auto", maxWidth: 900 }}>
            {desc}
            </p>
            <div className="boxx-1">
            <div className="btn btn-one">
                <span>READ MORE</span>
            </div>
            </div>
        </div>
        <div style={{ marginTop: 10,marginBottom: 40 }}>
            <img
            style={{ maxWidth: '100%',
                height: 'auto'}}
            src={img}
            alt=""
            />
        </div>
        </>
    )
}