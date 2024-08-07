import React from 'react'
import { FaLinkedin,FaGithub } from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
const SocialMedia = () => {

const links=[
    {
        id:1,
        child:(
            <>
                 LinkedIn
                        <FaLinkedin size={30}></FaLinkedin> 
            </>
        ),
        href:'https://www.linkedin.com/in/surya-venkat-k',
        style:'rounded-tr-md'
    },
    {
        id:2,
        child:(
            <>
                 GitHub
                        <FaGithub size={30}></FaGithub>
            </>
        ),
        href:'https://github.com/suryavenkat1824',
    },
    // {
    //     id:3,
    //     child:(
    //         <>
    //              Mail
    //                     <HiOutlineMail size={30}></HiOutlineMail> 
    //         </>
    //     ),
    //     href:'mail to:foo@gamil.com',
         
    // },
    {
        id:3,
        child:(
            <>
                 Resume
                        <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
            </>
        ),
        href:'/KESARAPU_SURYA_VENKAT_RESUME.pdf',
        style:'rounded-br-md',
        download:true,
    },
];

  return (
    <div class="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul >
        
        {links.map(({id,child,href,style,download}) => (
            <li  key={id}
             class={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500"
              + " " + 
              style }>
                <a href={href} 
                class="flex justify-between items-center w-full text-white"
                download={download}
                 target='_blank'
                 rel="noreferrer"
                 >
        
                        {child}
                </a>
            </li>
        ))}

        </ul>
    </div>
  )
}

export default SocialMedia
