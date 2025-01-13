import React from "react"
import {motion} from 'framer-motion'

type OussSectionProps = {
    children: React.ReactNode,
    title : string,
    className? : string,
    direction : 'h' | 'v' 
}

const OussSection: React.FC<OussSectionProps> = ({ title, children , direction = 'v' , className = '' }) => {

    return (
        <motion.div 
           id={ 'ouss-'+title }
           className={`overflow-hidden ouss-section-wrapper  py-2 px-4  xl:py-10 xl:px-20 flex flex-col gap-10`}
           initial= {{
              opacity : 0,
              x : -50,
              y : -50
           }}
           transition={{
              duration : 1,
              ease : 'easeInOut'
           }}
           whileInView={{
              opacity : 1 ,
              x : 0,
              y : 0
           }}
           viewport={ {
            once : true,
           }}

           >
            <h1 className="text-9xl font-karantina uppercase"> {title}. </h1>
            <div className={`ouss-section-cotent flex ${ direction == 'v' ? 'flex-col' : 'flex-row' }  ${className}   `}>
              {children}
            </div>
        </motion.div>
    )
}

export default OussSection;