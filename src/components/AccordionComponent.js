import React, { useEffect, useState } from "react";

import { Accordion } from "semantic-ui-react";
import { jsonData } from "../assets/Data";
import { accordionNesting } from "./AccordionNesting";

const AccordionComponent = () => {

  const [accordionData, setAccordionData] = useState(null);

  useEffect(() => {

    accordionNesting(jsonData, 0);
    setAccordionData(jsonData);

  }, []);

  return (

    accordionData && (
      <Accordion defaultActiveIndex={0} panels={accordionData} styled />
    )

  );
};

export default AccordionComponent;
