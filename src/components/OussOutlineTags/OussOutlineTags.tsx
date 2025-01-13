import React from "react"

type OussOutlineTagsProps = {
    content : string
}

const OussOutlineTags : React.FC<OussOutlineTagsProps> = ( {content }) =>{
    return (
        <span className="rounded-full border-2 border-white uppercase font-karantina px-6 py-3 text-2xl">{content}</span>
    )
}

export default OussOutlineTags