import React, {useRef} from "react"
import './OussNavbar.css'
import {motion} from 'framer-motion'
import hoverSound from '../../media/sounds/hover_sound.wav'


type OussNavbarItem = {
    content : string,
    link: string,
    icon: string | null,

}

type OussNavbarProps = {
    items: OussNavbarItem[],
    isOpen : boolean,
    setIsOpen : any
}

const OussNavbar: React.FC<OussNavbarProps> = ({ items , isOpen , setIsOpen }) => {
    
    const hs = useRef<HTMLAudioElement>(new Audio(hoverSound))

    function handleClick () {
        hs.current.play()
        hs.current.volume = .2;
        setIsOpen( isOpen ? !isOpen : isOpen  ) 
    }
    return (
        <motion.ul className={`absolute backdrop-blur-3xl px-4 py-6 overflow-hidden rounded-3xl 2xl:p-0 left-0  top-[100px] 2xl:h-full 2xl:rounded-none 2xl:w-full 2xl:opacity-100  2xl:overflow-visible 2xl:top-0 z-50 2xl:relative navigation-img flex flex-col 2xl:flex-row justify-evenly flex-1 gap-8 2xl:gap-16 font-bakbakone text-xl uppercase list-none transition-all ease-in-out duration-300 w-full ${ isOpen ?  'h-[250px] py-6 opacity-100 bg-gradient-to-b from-[#FFFFFF] to-[#999999] text-black' : 'h-[0px] py-0 opacity-0' } 2xl:bg-transparent`}>
            {
                 items.map( (item, index) =>  <li onClick={ () => handleClick() }  key={index} className={`ouss-nav-item hover:text-blue-500 transition-all`}><a className={`ouss-nav-${item.content}`} href={'#ouss-'+item.content}> {item.content} </a>  </li> )
            }
        </motion.ul>
    )
}

export default OussNavbar