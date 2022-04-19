import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";


import './MostPopular.css'

export const MostPopular = () => {

    const { posts,  loading } = useSelector((state) => ({ ...state.data }));
    const dispatch = useDispatch();

  
    if(loading) {
      return <h2>Loading....</h2>
    }
  return (
    <section className='most-popular-outer'>
        <div className='container-fluid'>
            <div className='row'>
                <div className="most-popular-title col-md-12">
                    <h2>Most popular stories today</h2>
                </div>
                <div className='most-popular-grid col-md-12'>
                    <div className='row'>
                    {posts? posts.slice(0, 4).map((items) => (
                        <div className='most-popular-img col-md-3'>
                        <img src={items.thumbnailUrl} />
                        <h5>{items.title}</h5>
                        </div>
                    )) : ""}    
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
