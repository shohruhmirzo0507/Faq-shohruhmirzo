import React, { useEffect, useState, useRef } from 'react'
import Faq from './Faq'
import "./Faq.css"
import alanBtn from "@alan-ai/alan-sdk-web";
import { ChakraProvider } from "@chakra-ui/react"

function Header() {

  const alanBtnInstance = useRef(null)
  const [index, setIndex] = useState(null)

  useEffect(() => {
    if(!alanBtnInstance.current){
      alanBtnInstance.current = alanBtn({
        key: 'c98349b1b2346df9d31e051b9dc891bf2e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: (commandData) => {
          if (commandData.command === 'gotoFaq') {
            setIndex( commandData.faqId - 1 )
          }
        }
      });
    }
  }, []);

  return (
    <div className='container__main'>
      <h2 className='header'>Faq about Uzbekistan shohruhmirzo</h2>
      <Faq />
      <div className="color">
      <ChakraProvider>
        <Faq index={index}  setIndex={setIndex} />
      </ChakraProvider>
      </div>
     


    </div>
  )
}

export default Header