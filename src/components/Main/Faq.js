import React from 'react'
import {
  Accordion,
  Box,
  Text,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,

} from "@chakra-ui/react"
import Faqs from "./faq.json"

function Faq({index, setIndex}) {
  return (
    <div className='faq'>
      <Accordion allowToggle index={index}>
        {Faqs.map(post => (
          <AccordionItem key={post.id}>
            <AccordionButton onClick={() => setIndex( post.id - 1 )}>
              <Box flex={1} textAlign="left">
                <Text fontWeight="semibold">{post.question}</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          <AccordionPanel pb={4}>{post.ans}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default Faq