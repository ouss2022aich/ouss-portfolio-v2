import React from "react"

type OussServiceProps = {
    icon: string,
    title: string,
    content: string,
    imgIndex : number
}

const OussService: React.FC<OussServiceProps> = ({ icon, title, content , imgIndex = 1  }) => {

    return (
        <div className="group ouss-service flex flex-col p-10 w-[450px]  gap-14 border-4 border-white rounded-3xl hover:shadow-violet-400 hover:shadow-xl transition-all ease-in-out duration-300 hover:scale-105 bg-transparent bg-no-repeat z-50 relative overflow-hidden" >
            <img src={`/src/media/images/abstract${imgIndex}.jpg`} className="absolute left-0 top-0 -z-10 opacity-0 group-hover:opacity-80 transition-all ease-in-out duration-300" alt="" />
            <div className="ouss-service-img-wrapper flex flex-col justify-center items-left gap-10">
                <img src={icon} alt="" width={50} height={50} className=""/>
                <h3 className="font-moderniz text-xl  uppercase"> {title} </h3>
            </div>
            <div className="ouss-service-body flex flex-col gap-2">
                <p className="font-productsans text-lg "> {content} </p>
            </div>
        </div>
    )
}

export default OussService;