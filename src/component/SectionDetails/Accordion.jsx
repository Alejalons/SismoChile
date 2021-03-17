import React, { useContext, useState } from 'react'

import {EarthQuakerContext} from '../Context/EarthquakesContext';

// =====Accordion===
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStyles } from './AccordionStyles';
// =================

function AccordionPanel({post}) {

     // =====Accordion===
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
     // ==================

    
    // const {seismology} = useContext(EarthQuakerContext);
    
    // const {data} = seismology;

    console.log(post);

    
    const accordionExpanded = () => {
        let ticket = [];
        for (let n = 0; n < post.length; n++) 
        {
            ticket.push(<Accordion expanded={expanded === `panel${n}`} onChange={handleChange(`panel${n}`)} key={n}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panel${n}bh-content`}
                                id={`panel${n}bh-header`}
                            >
                                <Typography className={classes.heading}>{post[n].Fecha}</Typography>
                                <Typography className={classes.secondaryHeading}>{post[n].RefGeografica}</Typography>
                                <Typography className={classes.secondaryHeading}>&nbsp; &nbsp;({post[n].Magnitud})</Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography>
                                    <p>Fecha: {post[n].Fecha}</p>
                                    <p>Fecha Actualizada: {post[n].FechaUpdate}</p>
                                    <p>Lugar: {post[n].RefGeografica}</p>
                                    <p>Magnitud: {post[n].Magnitud}</p>
                                    <p>Profundidad: {post[n].Profundidad}</p>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>)
        }
        return ticket
    }


    return (
        <div className={classes.root}>
            {
                accordionExpanded()
            }
        </div>
        
    )
}

export default AccordionPanel
