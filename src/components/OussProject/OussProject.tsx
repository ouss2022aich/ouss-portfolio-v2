import { useState } from "react"
import { icons } from "../../globals"
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import arrowDown from '/src/media/icons/arrow-down.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"

// projects images 
import galaxybenef1 from '../../media/images/galaxybenef1.jpg'
import galaxybenef2 from '../../media/images/galaxybenef2.jpg'
import galaxybenef3 from '../../media/images/galaxybenef3.jpg'


import click2secure1 from '../../media/images/click2secure1.jpg'
import click2secure2 from '../../media/images/click2secure2.jpg'
import click2secure3 from '../../media/images/click2secure3.jpg'


import british_school1 from '../../media/images/british school app1.jpg'
import british_school2 from '../../media/images/british school app2.jpg'
import british_school3 from '../../media/images/british school app3.jpg'


import cimaflix1 from '../../media/images/cimaflix1.jpg'
import cimaflix2 from '../../media/images/cimaflix2.jpg'
import cimaflix3 from '../../media/images/cimaflix3.jpg'

const projectImgGroup = [

     {
        name : 'galaxybenef',
        images : [
            galaxybenef1,galaxybenef2,galaxybenef3
        ]
     },
     {
        name : 'click2secure',
        images : [
            click2secure1,click2secure2,click2secure3
        ]
     },
     {
        name : 'cimaflix',
        images : [
            cimaflix1,cimaflix2,cimaflix3
        ]
     },
     {
        name : 'british school app',
        images : [
            british_school1,british_school2,british_school3
        ]
     },


]


const formatDate = (date: Date) => {


    // Extract day, month, and year
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' }); // e.g., "Aug"
    const year = date.getFullYear();

    // Format the date
    return `${day} ${month} ${year}`;
};


export type OussProjectProps = {
    name: string,
    bg_from: string,
    bg_to: string,
    position: string,
    employment: 'on-site' | 'freelance' | 'hybrid' | 'remote',
    company: string,
    from: Date,
    to: Date,
    descParagraphs: string[],
    techs: string[],
    textColor?: 'black' | 'white'
}

const OussProject: React.FC<OussProjectProps> = ({ name, descParagraphs, from, to, bg_from, bg_to, techs, position, company, employment, textColor = 'white' }) => {

    const [expand, setExpand] = useState(false)
    const [modalImg, setModalImg] = useState('')

    const projectImages : any = projectImgGroup.find( (el) => el.name === name )?.images

    return (
        <div id={name} className={`ouss-project px-8 py-10 flex flex-col gap-4 relative overflow-hidden transition-all duration-700 ${expand ? 'h-full' : 'h-28'} `} style={{ borderRadius: 35, background: `linear-gradient(to right, ${bg_from}, ${bg_to})` }}>

            <div className="uppercase -mt-2 flex justify-between items-center font-moderniz text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">
                <h1 className="text-black flex-1"> {name}. </h1>
                <a className="justify-self-center flex-1" href={`#${name}`}>
                    <motion.img
                        srcSet={arrowDown}
                        onClick={() => setExpand(!expand)}

                        initial={{
                            scale: 1,
                            opacity: .75
                        }}
                        whileHover={{
                            scale: 1.1,
                            opacity: 1,

                        }}
                        animate={{
                            rotate: expand ? '180deg' : '0deg',
                            transition: {
                                duration: .3,
                                ease: 'linear'
                            }
                        }}
                        whileTap={{
                            scale: 1.2,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeInOut'
                        }}


                        src="/src/media/icons/arrow-down.png"
                        className={`self-center rounded-full hover:border-2 hover:p-2 transition-all duration-300 m-auto`} width={50} height={50} />
                </a>

                <h1 className="text-white text-right text-sm md:text-xl flex-1">
                    From {from.getFullYear()}
                    <br />
                    To {to.getFullYear()}
                </h1>

            </div>
            <hr className="border-black border-2 mt-2" />
            <div className={`project-content flex flex-col gap-6 items-center xl:flex-row xl:items-start py-16 ${'text-' + textColor}`}>

                <div className="flex flex-col gap-4 flex-1">
                    <h3 className="font-moderniz text-lg uppercase"> Details </h3>
                    <div className="flex flex-col gap-2 font-productsans text-md uppercase">

                        <div className="flex justify-between">
                            <p><span className="font-bold"> company : </span> <span> {company} </span></p>
                            <p><span className="font-bold"> employment : </span> <span> {employment} </span></p>
                        </div>
                        <div className="flex justify-between">
                            <p><span className="font-bold"> position : </span> <span> {position} </span></p>
                            <p><span className="font-bold"> from  : </span> <span> {formatDate(from)} </span></p>
                        </div>
                        <div className="flex justify-between">

                            <p><span className="font-bold"> to : </span> <span> {formatDate(to)} </span></p>
                        </div>



                    </div>
                    <h3 className="font-moderniz text-lg uppercase"> Tech Used </h3>
                    <div className="techs flex gap-4 flex flex-wrap">
                        {
                            techs.map((tech, index) => {
                                return <img key={index} src={icons[tech].icon} alt="" width={70} height={70} title={icons[tech].name} className="hover:scale-125 hover:opacity-100 transition-all duration-300 opacity-50" />
                            })
                        }

                    </div>



                    <h3 className="font-moderniz text-xl uppercase"> Description </h3>
                    {
                        descParagraphs.map((descP, i) => <p key={i} className="text-md font-productsans text-lg text-justify"> {descP} </p>)
                    }

                </div>

                <motion.div
                    initial={{
                        scale: 0,
                        opacity: 0
                    }}
                    animate={{
                        scale: modalImg ? 1 : 0,
                        opacity: modalImg ? 1 : 0,
                        transition: {
                            ease: 'easeInOut',
                            duration: .3,
                        }
                    }}
                    onClick={() => setModalImg('')}

                    className={`absolute overflow-y-scroll left-0 top-0  backdrop-blur-xl w-50 h-50 p-10 z-50  transition-all duration-300 ${modalImg ? 'scale-100 opacity-100' : 'hidden scale-0 opacity-0'} h-full w-full flex flex-col gap-6`}



                >
                    <div className="modal-header self-end">
                        <span className="right-0 self-end inline-block bg-gradient-to-b from-white to-gray-400 rounded-full hover:animate-spin" onClick={() => setModalImg('')}>
                            <FontAwesomeIcon icon={faCircleXmark} fontSize={50} color={'red'} className="bg-white rounded-full p-2 cursor-pointer" />
                        </span>
                    </div>
                    <div className="modal-body">
                        <img src={modalImg} alt="" className="transition-colors rounded-2xl overflow-scroll" />
                    </div>

                </motion.div>

                <div className="flex-1 flex flex-col justify-center items-center gap-6 peer relative z-20 group">

                    {
                        Array(3).fill(0).map((el, i) => {
                            return (
                                <Tilt key={i} data-el={el} glareEnable={true} glareColor={bg_from} glareMaxOpacity={0.5} >
                                    <img onClick={() => setModalImg( projectImages[i] ) } src={projectImages[i] } className="project-img peer cursor-pointer rounded-2xl  transition-all duration-200 blur-sm  group-hover:blur-0 hover:scale-125 hover:z-[99] relative" alt="" width={500} />
                                </Tilt>)
                        })
                    }


                </div>
                <div className="absolute w-[100%] h-[100%] left-0 top-0 bg-transparent hidden peer-hover:block peer-hover:backdrop-blur-md  transition-all duration-300"></div>

            </div>


        </div >
    )
}

export default OussProject
