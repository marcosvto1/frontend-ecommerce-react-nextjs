import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import styled from 'styled-components';
export const Container = styled.hr`
  #panel1a-header {
    height: 1rem;
  }
`;


export const Divider = styled.hr`
  color: #787878;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 0.5rem;
  height: 1px;
`;

export const AccordionContainer = styled(Accordion)`
  background: transparent !important;
  border: none;
  box-sizing: border-box;
  box-shadow: none !important;
  align-items: center;
  span {
    margin-top: 0 !important;
  }
  & svg {
    color: #5E5E5E;
    pointer-events: visible;
    font-size: 20px;
    
  }
  .MuiAccordionSummary-root {
    height: 1rem;
  }

  .MuiAccordionSummary-content.Mui-expanded {
    margin: 0 !important;
  }
  .MuiAccordionSummary-root {
    padding: 0 !important;
  }

  @media (max-width: 450px) {
    .MuiAccordionSummary-root {
    padding: 0 16px !important;
  }
  }
`;
export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 1rem;
`;

export const Details = styled(AccordionDetails)`
  background: #fff !important;
  padding: 0 1rem !important;
  padding-bottom: 1rem;
  flex-direction: column;
  font-size: 0.9rem;
  color: #5E5E5E;
`;
