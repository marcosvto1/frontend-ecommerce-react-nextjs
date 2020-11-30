import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { memo, useEffect, useState } from 'react';
import { AccordionContainer, ContainerTitle, Details } from './styles';

interface CardCollapseProps {
  title: string;
  body: any;
  expanded?: boolean; 
  resetExpend?: any; 
}

const CardCollapse: React.FC<CardCollapseProps> = ({ title, body, expanded, resetExpend }) => {
  const [expand, setExpand] = useState(expanded);
  useEffect(() => {
    setExpand(expanded);
  }, [resetExpend]);

  const handleChange = () => setExpand(!expand);

  return (
    <>
      <AccordionContainer expanded={expand} onChange={() => handleChange()}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ContainerTitle>{title}</ContainerTitle>
        </AccordionSummary>
        {/* <Divider /> */}
        <Details>{body}</Details>
      </AccordionContainer>
    </>
  );
};

export default memo(CardCollapse);
