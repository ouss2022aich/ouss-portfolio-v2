import { faBars, faCloudArrowDown } from '@fortawesome/free-solid-svg-icons'
import OussNavbar from '../../components/OussNavbar/OussNavbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { useState } from 'react'
import resumeDoc from '../../docs/cv_oussama_2025_en.pdf'

export default function OussNav() {

  const [isOpen, setisOpen] = useState(false)
  

  return (
    <motion.div
      initial={{
        y: -50
      }}
      transition={{
        duration: .5,
        ease: 'easeInOut'
      }}
      whileInView={{
        y: 0
      }}
    >
      <nav className='header py-4 px-4 flex justify-between items-center relative backdrop-blur-md rounded-3xl' style={{ zIndex: 99 }}>
        <a href="" className='flex-1'><div id='logo' className='cursor-pointer logo font-zendots text-3xl flex-1'>C<span className='m-0 p-0 text-green-400'>X</span> </div>
        </a>
        <OussNavbar items={[
          { content: 'about', link: '', icon: null },
          { content: 'projects', link: '', icon: null },
          { content: 'contact', link: '', icon: null },
          { content: 'services', link: '', icon: null },
        ]}
          isOpen={isOpen}
          setIsOpen={ setisOpen }


        />

        <div className='flex flex-1 justify-end items-center gap-5'>
          <a href={resumeDoc} download={true}>
            <button className='resume-button group flex justify-evenly border-4 rounded-2xl py-4 px-4 w-40 hover:text-black hover:bg-white transition-all duration-500  font-bakbakone text-sm uppercase  gap-4 '>
              <FontAwesomeIcon icon={faCloudArrowDown} fontSize={20} className='opacity-0 hidden group-hover:opacity-100 group-hover:inline transition-all duration-200 fa-bounce' flip='horizontal' />
              <span>Resume</span>
            </button>
          </a>
          <motion.span className='inline-block' initial={{ scale : 1 }} whileTap={{scale : 1.2 , transition : {duration : .4 , ease : 'easeInOut' }  }} >
            <FontAwesomeIcon onClick={() => setisOpen(!isOpen)} icon={faBars} className={` 2xl:hidden p-2 rounded-xl transition-all ease-out duration-200 cursor-pointer ${isOpen ? 'bg-white text-black' : 'text-white'}`} fontSize={30} />
          </motion.span>
        </div>


      </nav>
    </motion.div>
  )
}