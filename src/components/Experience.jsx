import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactimg from "../assets/react.png";
// import nextjs from "../assets/nextjs.png";
// import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap2.png";
import mysql from "../assets/mysql.png";
import nodejs from "../assets/nodejs.png";
import express from "../assets/express.jpg";
const Experience = () => {

    const techs=[
         {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500',
         },
       
         {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500',
         },
         {
            id:3,
            src:javascript,
            title:'JAVASCRIPT',
            style:'shadow-yellow-500',
         },
         {
            id:4,
            src:reactimg,
            title:'REACT',
            style:'shadow-blue-500',
         },
         {
            id:5,
            src:bootstrap,
            title:'BOOTSTRAP',
            style:'shadow-purple-500',
         },
         {
            id:6,
            src:github,
            title:'GITHUB',
            style:'shadow-white',
         },
         {
            id:7,
            src:tailwind,
            title:'TAILWIND',
            style:'shadow-sky-500',
         },
         {
            id:8,
            src:mysql,
            title:'MYSQL',
            style:'shadow-orange-500',
         },
         {
            id:9,
            src:nodejs,
            title:'NODE JS',
            style:'shadow-green-500',
         },
         // {
         //    id:10,
         //    src:express,
         //    title:'EXPRESS JS',
         //    style:'shadow-gray-500',
         // },
    ];
   

  return (
    <div name="experience"
    class="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
        <div class="max-w-wcreen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
           <div>
           <p class="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
            <p class="py-6">These are the technologies i have worked with</p>
           </div>

        <div class="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
           {techs.map(({id,src,title,style}) =>(
            <div key={id}
            class={"shadow-md hover:scale-105 duration-500 py-2 rounded-lg" + " " + style}  >
                <img src={src}  class=" w-20 mx-auto"alt=""></img>
                <p class="mt-4">{title}</p>
            </div>
           ))}
        </div>

        </div>
    </div>
  )
}

export default Experience