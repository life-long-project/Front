import React from 'react'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Stack,
} from "@chakra-ui/react";


export default function FilterAccordation({filterTitle, filterItems}) {
  return (
    <>
          <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" className='fw-bold'>
                {filterTitle}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack mt={1} spacing={1}>
              {filterItems.map((item, index) => {
                return (
                  <Checkbox className="mb-2" key={index}>{item}</Checkbox>
                )
              })}
            </Stack>

          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  )
}
