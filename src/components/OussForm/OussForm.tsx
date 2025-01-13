import { faTelegram } from "@fortawesome/free-brands-svg-icons/faTelegram"
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export default function OussForm() {
    
    const [ loading , setLoading ] = useState( false )

    return(
        <form onSubmit={ () => setLoading(true) } action='https://formsubmit.co/ouss.aich2022@gmail.com' method='POST' className="footer-form flex flex-col gap-6 sm:max-w-[660px] max-w-[320px]">
                  <div className='flex flex-col justify-start gap-4 lg:flex-row '>
                    <div className='flex flex-col gap-2 flex-1'>
                      <label htmlFor="name" className='form-label'>Your Name </label>
                      <input type="text" name="name" id="name" placeholder='Your Name' className='form-input w-full' required />
                    </div>

                    <div className='flex flex-col gap-2 flex-1'>
                      <label htmlFor="email" className='form-label'>Your Email </label>
                      <input type="email" name="emai" id="emai" placeholder='Your Email' className='form-input w-full' required />
                    </div>



                  </div>
                  <div className='flex justify-start flex-1'>
                    <div className='flex flex-col gap-2 flex-1'>
                      <label htmlFor="desc" className='form-label'> Tell us about your project </label>
                      <textarea name="desc" id="desc" className='form-input form-textarea w-full' rows={5} minLength={50} maxLength={255} placeholder='...' required />
                    </div>
                  </div>
                  <div className='flex justify-start gap-4 flex-wrap '>
                    <button className={` ${ loading ? 'bg-gray-700 pointer-events-none' : 'bg-gradient-to-b from-[#3243FF] to-[#0030A8]'} flex gap-4 items-center justify-between px-4 py-2  text-white rounded-2xl h-14 w-64 focus:ring-4 focus:ring-blue-400 focus:scale-105 transition-all duration-300 text-lg`}>
                       
                       {loading ? <FontAwesomeIcon className='flex-1 animate-spin' icon={faSpinner} fontSize={25} />  :  <FontAwesomeIcon className='flex-1' icon={faTelegram} fontSize={25} /> } 
                     
                      <span className='flex-1'>Send</span>
                      <span className='flex-1'></span>
                    </button>
                  </div>
                </form>
    )
}