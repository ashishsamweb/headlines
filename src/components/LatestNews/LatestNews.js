import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../redux/action";


import "./LatestNews.css";


export const LatestNews = () => {

  const { posts,  loading } = useSelector((state) => ({ ...state.data }));
  const dispatch = useDispatch();

  

  return (
    <section className="latest-news-outer">
      <div className="container">
        <div className="row">
          <div className="latest-news-title col-md-12">
            <h1>Latest Newses</h1>
          </div>
          
          <div className="latest-news-title col-md-12">
            <div className="row">
            {posts? posts.slice(0, 12).map((items) => (
              <div className="latest-news-img col-md-3">
                <img src={items.thumbnailUrl} />
                <h6>Elcon</h6>
                <h5>{items.title}</h5>
              </div>
              )) : ""}
            </div>
          </div>
          

          <div className="latest-news-button">
            <a href="#">See all Latest news</a>
          </div>
        </div>
      </div>
    </section>
  );
};
