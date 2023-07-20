import {Accordion, AccordionSummary, Typography, AccordionDetails } from '@mui/material/';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AcordionSimples = ({ titulo, children, estilos, icon }) => {
  return (
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id={`id-acordio-${titulo}`}
        >
          <Typography color="primary" style={{ marginRight: "10px"}}>{ titulo }</Typography>
          { icon }
        </AccordionSummary>
        <AccordionDetails className={estilos} style={{ background: "gra"}}>
          { children }
        </AccordionDetails>
      </Accordion>
  )
};

export default AcordionSimples;

