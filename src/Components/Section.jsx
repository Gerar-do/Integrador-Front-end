
import React, { useState } from 'react';

import Temperatura from '../assets/Img/4005831.png'; 
import velocidadViento from '../assets/Img/4005831.png';
import Humedad from '../assets/Img/4005831.png';


export default function Section(){
 

    return(
        <>
        
        
        
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 justify-center  text-center ">
  <div className=" p-4  justify-center text-center"></div>
  <div className=" p-4">{/*Columna sin uso */}</div>
  <div className=" p-4 "> 
   <br></br>
<main className="py-8 bg-zinc-800 rounded shadow-2xl  shadow-indigo-500/50">
       
       <div className=" px-4 sm:px-6 lg:px-8 ">
         <div className="text-center">
         
           <div className="max-w-md mx-auto bg-white rounded overflow-hidden shadow-xl">
          
             <img
               className="h-10 w-auto mx-auto mt-4"
               src={Temperatura}
               alt="Temperatura"
             />
             <div className="px-4 py-4">
               <div className="font-bold text-xl mb-2">Temperatura</div>
               <p className="text-gray-700 text-base">cragando</p>
             </div>
             <br/>
           </div>
           <br></br>

           <div className="max-w-md mx-auto bg-white rounded overflow-hidden shadow-xl">
             <img
               className="h-10 w-auto mx-auto mt-4"
               src={velocidadViento}
               alt="Velocidad del viento"
             />
             <div className="px-4 py-4">
               <div className="font-bold text-xl mb-2">Velocidad del viento</div>
               <p className="text-gray-700 text-base">cragando</p>
             </div>
             <br/>
           </div>
           <br></br>

           <div className="max-w-md mx-auto bg-white rounded overflow-hidden shadow-xl">
             <img
               className="h-10 w-auto mx-auto mt-4"
               src={Humedad}
               alt="Humedad"
             />
             <div className="px-4 py-4">
               <div className="font-bold text-xl mb-2">Humedad</div>
               <p className="text-gray-700 text-base">cragando</p>
             </div>
             <br></br>
           </div>
         </div>
       </div>
     </main>
  
  
  </div>


  {/* Agrega más elementos según sea necesario */}
</div>
        </>
       
    )
}