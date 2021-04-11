import { useState, useEffect } from 'react';
import  { getGifts } from '../helpers/GetGifs';

export const  useFetchGifs = ( category) =>{

    const [state, setState] = useState({
        data: [],
        loading: true
    });

     useEffect( () => {

            getGifts( category )
            .then( img => {

                setState({
                    data:img,
                    loading: false
                });   
        
             })
            

       
  }, [category] )



    return state;

}