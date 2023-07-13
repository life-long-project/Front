import React, { useState } from "react";
import "./FilterAccordation.css";
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

export default function FilterAccordation({
  filterTitle,
  filterItems,
  values,
  setValues,
  skills,
  setUrl,
  sort,
  search
}) {
  const addValue = (e) => {
    setValues((pre) => [...pre, e.target.value]);
  };
  const decreaseValue = (e) => {
    setValues((pre) => pre.filter((i) => i !== e.target.value));
  };

  return (
    <>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem className="filterBoxAccordation">
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" className="fw-bold text-capitalize">
                {filterTitle}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack mt={1} spacing={1}>
              {filterItems && filterItems.map((item, index) => {
                return (
                  <Checkbox
                    className="mb-2"
                    key={index}
                    onChange={(e) =>
                     { e.target.checked ? addValue(e) : decreaseValue(e)
                      // setUrl(`https://back-ph2h.onrender.com/jobs/?search=${search}&sort=${sort}&skills=${skills}`)
                    }
                    }
                    value={item}
                  >
                    {item}
                  </Checkbox>
                );
              })}
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
