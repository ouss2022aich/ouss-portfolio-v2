import React from "react"

type OussServiceProps = {
    icon: string,
    title: string,
    content: string,
    imgIndex : number
}

import serviceImg1 from '/src/media/images/abstract1.jpg'
import serviceImg2 from '/src/media/images/abstract2.jpg'
import serviceImg3 from '/src/media/images/abstract3.jpg'
import serviceImg4 from '/src/media/images/abstract4.jpg'
import serviceImg5 from '/src/media/images/abstract5.jpg'
import serviceImg6 from '/src/media/images/abstract6.jpg'


const serviceImgs = [
    serviceImg1,
    serviceImg2,
    serviceImg3,
    serviceImg4,
    serviceImg5,
    serviceImg6
]

const OussService: React.FC<OussServiceProps> = ({ icon, title, content , imgIndex = 1  }) => {

    return (
        <div className="group ouss-service flex flex-col p-10 w-[450px]  gap-14 border-4 border-white rounded-3xl hover:shadow-violet-400 hover:shadow-xl transition-all ease-in-out duration-300 hover:scale-105 bg-transparent bg-no-repeat z-50 relative overflow-hidden" >
            <img src={ serviceImgs[imgIndex-1] } className="absolute left-0 top-0 -z-10 opacity-0 group-hover:opacity-80 transition-all ease-in-out duration-300" alt="" />
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