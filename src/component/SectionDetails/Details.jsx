import React, { useContext, useState } from 'react'

import {EarthQuakerContext} from '../Context/EarthquakesContext';

import AccordionPanel from './Accordion'
import Pagination from '../Pagination/Pagination';
import Loading from '../Loading/Loading';

function Details() {
    const {seismology} = useContext(EarthQuakerContext);
    
    const {data, loading:load} = seismology;
    
   // ==============PAGINATE===================
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    
    const currentPosts =  data.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
   // ==========================================

    

    return (
        <>
            <div className="d-flex justify-content-center">
                {!load && <Loading />}
            </div>
                        
            <AccordionPanel 
                post = { currentPosts }
            />

            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={data.length}
                paginate={paginate}
            />
        </>
    )
}

export default Details
