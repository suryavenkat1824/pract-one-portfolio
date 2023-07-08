import React from 'react'

const Contacts = () => {
  return (
   <div name="contact"
   class="w-full h-auto bg-gradient-to-b from-black to-gray-800 p-4 text-white">
   <div class=" flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
    <div class="pb-8">
        <p class="text-4xl font-bold inline border-b-4 border-gary-500">
         Contact</p>
        <p class="py-6">Submit the form below to get in touch with me</p>
    </div>
    <div class="flex justify-center items-center">
        <form action="https://getform.io/f/6c66e74e-a65e-461c-8d32-2c101e2bf995" 
        method="POST"
        class="flex flex-col w-full md:w-1/2">
            <input
             type="text"
              name="name" 
              placeholder="Enter Your Name" 
            class="p-2 bg-transparent border-2 rounded-md  text-white focus:outline-none">
            </input>
              <input type="text" name="name" placeholder="Enter Your Email" 
            class=" my-4 p-2 bg-transparent border-2 rounded-md  text-white focus:outline-none"></input>
              <textarea
               name='message' rows="10" 
               placeholder='Enter Your Message'
               class="p-2 bg-transparent border-2 rounded-md  text-white focus:outline-none"
              >
              </textarea>
              <button 
              class=" text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx:auto flex items-center rounded-md hover:scale-105 duration-300">
               Lets talk</button>
        </form>
    </div>
   </div>
   </div>
  )
}

export default Contacts