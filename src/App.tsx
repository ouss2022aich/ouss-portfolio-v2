
import './App.css'
import OussSection from './components/OussSection/OussSection'
import OussOutlineTags from './components/OussOutlineTags/OussOutlineTags'
import OussProject from './components/OussProject/OussProject'
import OussService from './components/OussService/OussService'
import { motion } from 'framer-motion'
import OussForm from './components/OussForm/OussForm'



// icons 
import backendIcon from './media/icons/backend.png'
import apiIcon from './media/icons/api_w.png'
import mobileIcon from './media/icons/mobile.png'
import graphicIcon from './media/icons/graphic.png'
import OussNav from './components/OussNav/OussNav'
import webIcon from './media/icons/web.png'
import frontendIcon from './media/icons/frontend.png'
import expIcon from './media/icons/exp.png'
import legitIcon from './media/icons/legit.png'
import champIcon from './media/icons/champion.png'

import compassIcon from './media/icons/compass.png'
import handIcon from './media/icons/hand.png'
import employeeIcon from './media/icons/employee.png'
import chatIcon from './media/icons/chat.png'
import profileIcon from './media/icons/profile.png'
import projectsIcon from './media/icons/projects.png'
import servicesIcon from './media/icons/services.png'
import hiIcon from './media/icons/hi.gif'


import linkedinIcon from './media/icons/linkedin.png'
import fiverrIcon from './media/icons/fiverr.png'
import gmailIcon from './media/icons/gmail.png'
import whatsappIcon from './media/icons/whatsapp.png'
import telegramIcon from './media/icons/telegram.png'
import githubIcon from './media/icons/filled-github.png'




// images 
import mypic from './media/images/mypic.png'

// videos 
import heroVid from './media/images/test2.mp4'
import { useEffect } from 'react'



function App() {

  useEffect(() => {


    window.onload = () => {
      const cursor : any = document.querySelector('.cursor');
      const compass = document.getElementById('compass');
      const hand = document.getElementById('hand');
      const employee = document.getElementById('employee');
      const chat = document.getElementById('chat');
      const profile = document.getElementById('profile');
      const projects = document.getElementById('projects');
      const services = document.getElementById('services');
      const hi = document.getElementById('hi');

      const cursorElements : any[]= [
        compass,
        hand,
        employee,
        chat,
        profile,
        projects,
        services,
        hi,


      ]

      function setActiveCursorElement(element : any, cursor : any) {

        cursorElements.forEach((cursorElement) => {
          if (cursorElement === element) {
            cursorElement.style.display = 'block'
            cursor.style.width = '120px'
            cursor.style.height = '120px'
          } else {
            cursorElement.style.display = 'none'
          }
        })

      }

      document.addEventListener('mousemove', (e : any) => {

        cursor.setAttribute("style", "top: " + (e.pageY - 40) + "px; left: " + (e.pageX - 40) + "px;")
        if (e.target.classList.contains('project-img')) {
          setActiveCursorElement(compass, cursor)
        } else if (e.target.classList.contains('resume-button')) {
          setActiveCursorElement(employee, cursor)
        } else if (e.target.classList.contains('logo')) {
          setActiveCursorElement(hi, cursor)
        } else if (e.target.classList.contains('ouss-nav-projects')) {
          setActiveCursorElement(projects, cursor)
        } else if (e.target.classList.contains('ouss-nav-about')) {
          setActiveCursorElement(profile, cursor)
        } else if (e.target.classList.contains('ouss-nav-contact')) {
          setActiveCursorElement(chat, cursor)
        } else if (e.target.classList.contains('ouss-nav-services')) {
          setActiveCursorElement(services, cursor)
        } else {
          cursorElements.forEach((cursorElement) => cursorElement.style.display = 'none')
        }

      })

      document.addEventListener('click', () => {
        cursor.classList.add("expand");
        setTimeout(() => {
          cursor.classList.remove("expand");
        }, 500);
      });
    }


  }, [])


  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Time between child animations
        delayChildren: 0.5, // Delay before the stagger starts

      },
    },
  };
  const childVariants = {
    hidden: { opacity: 0, y: 20 }, // Initial state: invisible and slightly below
    visible: { opacity: 1, y: 0 }, // Final state: visible and in place
  };

  return (
    <>
      <div className='cursor overflow-hidden'>
        <img src={compassIcon} alt="" id='compass' className='mix-blend-difference hidden' />
        <img src={handIcon} alt="" id='hand' className=' hidden' />
        <img src={employeeIcon} alt="" id='employee' className=' hidden' />
        <img src={chatIcon} alt="" id='chat' className=' hidden' width={60} />
        <img src={profileIcon} alt="" id='profile' className=' hidden' width={80} />
        <img src={projectsIcon} alt="" id='projects' className=' hidden' width={60} />
        <img src={servicesIcon} alt="" id='services' className=' hidden' width={60} />
        <img src={hiIcon} alt="" id='hi' className=' hidden' width={60} />
      </div>
      <div className="wrapper bg-black text-white p-3 xs:px-5 sm:px-5 md:px-16 lg:px-24 py-5 relative">

        <OussNav />
        <main>


          <section className='flex flex-col text-center py-5 gap-5 md:py-20 md:gap-20' >
            <video className='absolute opacity-20 left-0 top-0 w-[100%] h-[100vh] object-cover' src={heroVid} autoPlay={true} muted loop ></video>

            <div className='overflow-hidden flex flex-col  gap-20 relative z-50'>
              <motion.h1


                transition={{
                  duration: .6,
                }}

                initial="hidden"
                whileInView="visible"
                variants={parentVariants}

                className='font-karantina text-8xl md:text-9xl uppercase' >

                <motion.span className='inline-block' variants={childVariants}>Building</motion.span>
                <span> </span>
                <motion.span className='inline-block' variants={childVariants}>Digital</motion.span>
                <br />
                <motion.span className='inline-block' variants={childVariants}>Experiences.</motion.span>
              </motion.h1>
              <div className='hero-cards flex md:gap-0 md:flex-row flex-col gap-6  justify-evenly items-center text-lg'>
                <motion.div
                  initial={{
                    x: -50,
                    opacity: 0,

                  }}

                  whileInView={{
                    x: 0,
                    opacity: 1,

                  }}
                  transition={{
                    duration: 1,
                    ease: 'easeInOut'
                  }}
                  viewport={{
                    once: true
                  }}
                  className='hero-car flex-1  font-moderniz flex flex-col items-center'>
                  <img src={champIcon} alt="" width={150} height={150} />
                  <h3 className='my-2'> <span className='text-blue-600'>+15</span> PROJECTS</h3>
                </motion.div>

                <motion.div
                  initial={{
                    y: 50,
                    opacity: 0,

                  }}

                  whileInView={{
                    y: 0,
                    opacity: 1,

                  }}
                  transition={{
                    duration: 1,
                    ease: 'easeInOut'
                  }}
                  viewport={{
                    once: true
                  }}
                  className='hero-card flex-1 font-moderniz flex flex-col items-center  text-4xl'>
                  <img src={legitIcon} alt="" width={250} height={250} />
                  <h3 className='my-2'> <span className='text-green-600'>85%</span>  Client <br />Satisfaction</h3>
                </motion.div>

                <motion.div
                  initial={{
                    x: 50,
                    opacity: 0,

                  }}

                  whileInView={{
                    x: 0,
                    opacity: 1,

                  }}
                  transition={{
                    duration: 1,
                    ease: 'easeInOut'
                  }}
                  viewport={{
                    once: true
                  }}
                  className='hero-card flex-1 font-moderniz flex flex-col items-center '>
                  <img src={expIcon} alt="" width={150} height={150} />
                  <h3 className='my-2'> <span className='text-red-600'>+7 Y</span> Of Experience </h3>
                </motion.div>


              </div>

            </div>







          </section>

          <OussSection title='about' direction='v'>
            <div className='ouss-about-content flex xl:flex-row gap-6 flex-col justify-around items-center'>
              <motion.div
                initial={{
                  opacity: 0,
                  x: -50,

                }}
                whileInView={{
                  opacity: 1,
                  x: 0,

                }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                }} className='ouss-about-cotent-desc flex flex-col gap-10 flex-1 pr-10 max-w-[700px] justify-center'>
                <div className='flex flex-col gap-4'>
                  <h1 className='uppercase font-karantina text-8xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-white to-white'> I'm Aichaoui Oussama </h1>
                  <hr />
                </div>

                <div className='rounded-tags flex flex-wrap gap-5'>
                  <OussOutlineTags content='FullStack Dev' />
                  <OussOutlineTags content='Mobile Dev' />
                  <OussOutlineTags content='Native Dev' />
                  <OussOutlineTags content='Information System Admin' />
                </div>
                <p className='text-xl font-bigshoulderstext text-justify'>I’m 27 years old, based in Algiers, Algeria, and have
                  <span className='text-blue-500'> over 7 years of experience </span>
                  in the software development industry. My curiosity has always been driven by a desire to understand how things work, a passion I developed from childhood. </p>
                <p className='text-xl font-bigshoulderstext text-justify'>
                  Throughout my career, I have specialized in creating seamless, high-performance applications. My expertise spans both front-end and back-end development, allowing me to design and implement efficient systems and build intuitive, user-friendly interfaces.
                </p>
                <p className='text-xl font-bigshoulderstext text-justify'>
                  I am committed to clean, maintainable code and user-centric design, ensuring that each project I work on meets both technical and user requirements. My continuous desire to learn keeps me updated with the latest technologies and development practices, and I’m always looking for opportunities to grow professionally.
                </p>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  x: 50
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                }}
                className='ouss-about-cotent-picture flex-1 flex justify-end'>
                <img src={mypic} alt="" width={600} />
              </motion.div>

            </div>
          </OussSection>



          <OussSection direction='v' title='projects' className='gap-5'>
            <OussProject
              company='EURL Payd.'
              position='Full Stack Developer'
              employment='hybrid'
              from={new Date('2024-09-15')}
              to={new Date('2025-01-01')}
              name='click2secure'
              bg_from='#3243FF'
              bg_to='#002789'
              descParagraphs={
                [
                  "Click2Secure is a comprehensive project designed to automate assurance processes in the Emirates, enhancing workflow efficiency and security.",


                  "As a Full-Stack Developer on the IT team, I contributed to designing and implementing the Renewal Module, a key feature that streamlined and automated the renewal process for assurances. Leveraging the Filament PHP framework, I built a user-friendly and scalable solution, ensuring seamless integration with the existing system. I also utilized design patterns to enhance code maintainability and system reliability.",

                  "This project, ranging from average to complex in scope, expanded my expertise in modern frameworks, full-stack development, and collaborative problem-solving, marking a significant milestone in my career."
                ]

              }
              techs={['php', 'laravel', 'mysql', 'nginx', 'tailwind', 'html', 'css', 'js', 'api', 'docker', 'github']}
            />

            <OussProject
              company='British Insitute In Algiers.'
              position='Full Stack Developer'
              employment='freelance'
              from={new Date('2023-04-10')}
              to={new Date('2023-08-01')}
              name='british school app'
              bg_from='#9DFF89'
              bg_to='#5E9952'
              descParagraphs={[
                "The British School App is a comprehensive solution developed for a British institute in Algiers to streamline educational processes and improve operational efficiency.",

                "I developed this application entirely from scratch, handling both the front-end and back-end development while ensuring an intuitive and user-friendly interface. The app automates candidate registration, testing, and grading across all British English language levels. It also provides robust features for student follow-up, including course and exam management, session scheduling, attendance tracking, and more.",

                "This project showcased my ability to design and implement complex systems, combining functionality and usability to meet the specific needs of the institute."
              ]}
              techs={['html', 'css', 'js', 'tailwind', 'php', 'bootstrap', 'apache']}
              textColor='black'
            />
            <OussProject
              company='Zimou Group.'
              position='Full Stack Developer'
              employment='remote'
              from={new Date('2023-06-02')}
              to={new Date('2023-07-02')}
              name='cimaflix'
              bg_from='#7E53FF'
              bg_to='#4C3299'
              descParagraphs={[
                "Cimaflix is an API-based application developed for Zimou Group, serving as an information platform for series and movies, similar to IMDb.",

                "I contributed to the development of this platform, which allows users to create accounts, log in, and browse a catalog of series and movies with detailed information. Users can bookmark or mark their favorite movies/series and also access the top 5 most popular or highly reviewed titles.",

                "This project allowed me to focus on API integration and the creation of an intuitive user experience while ensuring the smooth operation of various features, making it easy for users to explore entertainment content."


              ]}
              techs={['php', 'laravel', 'docker', 'api', 'github']}
            />

            <OussProject
              company='ETPB Chemrine.'
              position='Full Stack Developer'
              employment='freelance'
              from={new Date('2020-05-20')}
              to={new Date('2022-03-01')}
              name='galaxybenef'
              bg_from='#FF5F6D'
              bg_to='#FFC371'
              textColor='black'
              descParagraphs={[
                "GalaxyBenef is a large-scale application composed of three interconnected platforms, designed to offer unique services that enhance user engagement and rewards.",

                "- Galaxy: A network marketing platform based on pyramid referral systems. Users advance through levels by inviting new members, earning bigger rewards as they grow their network.",
                "- Achat: A platform for providers to showcase their products. Providers can buy promotional placement to appear at the top, similar to sponsoring, increasing visibility.",
                "- Partage: A gamified platform where users share referral links to bring others on board, working towards filling a gauge that unlocks rewards.",
                "I developed this entire application from scratch using pure PHP, without frameworks, ensuring custom solutions tailored to the specific needs of each platform. The project allowed me to dive deep into backend development, system architecture, and user engagement strategies, while ensuring scalability and performance across all three platforms."

              ]}
              techs={['html', 'css', 'js', 'php', 'mysql', 'bootstrap', 'jquery', 'api', 'sass']}
            />
          </OussSection>

          <OussSection direction='h' title='services' className='flex flex-row gap-20 flex-wrap justify-center xl:justify-between py-10'>

            <OussService imgIndex={1} icon={webIcon} title='web application development' content='Crafting modern, responsive, and high-performance web applications tailored to your needs.' />
            <OussService imgIndex={2} icon={frontendIcon} title='Front-End Development' content='Building intuitive and visually appealing user interfaces using the latest frameworks and technologies.' />
            <OussService imgIndex={3} icon={backendIcon} title='Back-End Development' content='Developing robust, secure, and scalable server-side solutions to power your applications.' />
            <OussService imgIndex={4} icon={apiIcon} title='API Development' content='Creating RESTful and GraphQL APIs for seamless integration with third-party services and systems.' />
            <OussService imgIndex={5} icon={mobileIcon} title='Mobile Application Development' content='Delivering cross-platform mobile applications with sleek designs and smooth functionality using frameworks like Flutter or React Native.' />
            <OussService imgIndex={6} icon={graphicIcon} title='Graphic Designer & Video Editor' content='creating reels, posters, logos, and short videos and more in order to bring creative ideas to life and engage your audience.' />


          </OussSection>

          <OussSection direction='v' title='contact' >

            <div className=' bg-gradient-to-b from-[#FFFFFF] to-[#999999] rounded-3xl px-8 py-10 text-black font-productsans flex flex-col gap-6'>
              <div className='footer-header text-5xl leading-normal'>
                Got Ideas? We have <span className='relative after:absolute after:left-0 after:bottom-0 after:w-full after:z-[0] after:h-[25%] z-[99] after:bg-green-500 after:mix-blend-hue'>The solution,</span>  <br /> Let’s work together.
              </div>
              <div className='footer-content'>
                <OussForm />
              </div>
              <div className='footer-footer flex flex-col gap-4 text-gray-800'>
                <hr className='border-gray-600' />
                <div className='flex flex-col gap-4 md:flex-row justify-around items-center'>
                  <div className='flex-1'>
                    <p className='text-xl'>Call me : +213 792 333 216</p>
                  </div>
                  <div className='flex justify-end flex-1 gap-6' >
                    <a href="https://www.linkedin.com/in/oussama-aichaoui/">
                      <img className='hover:scale-110 transition-all duration-150 cursor-pointer' src={linkedinIcon} alt="" width={40} />
                    </a>
                    <a href="">
                      <img className='hover:scale-110 transition-all duration-150 cursor-pointer' src={fiverrIcon} alt="" width={40} />
                    </a>
                    <a href="mailto:ouss.aich2022@gmail.com">
                      <img className='hover:scale-110 transition-all duration-150 cursor-pointer' src={gmailIcon} alt="" width={40} />
                    </a>
                    <a href="https://wa.me/213792333216">
                      <img className='hover:scale-110 transition-all duration-150 cursor-pointer' src={whatsappIcon} alt="" width={40} />
                    </a>
                    <a href="https://t.me/+213792333216">
                      <img className='hover:scale-110 transition-all duration-150 cursor-pointer' src={telegramIcon} alt="" width={40} />
                    </a>
                    <a href="https://github.com/ouss2022aich">
                      <img className='hover:scale-110 transition-all duration-150 cursor-pointer' src={githubIcon} alt="" width={40} />
                    </a>
                  </div>

                </div>

              </div>
            </div>

          </OussSection>



        </main>

      </div >
    </>
  )
}

export default App
