
import React, { useState } from "react";


const Index = () => {
  const [latestPost, setLatestPost] = useState([]);

  const fetchComments = async () => {
    const response = await fetch("/api/Home");
    const data = await response.json();
    console.log("hey", data?.homePage?.latest);
    setLatestPost( data?.homePage?.latest);


  };
console.log("hi");
  return (
    <>
      <Header />
      <div className="container">
        <button onClick={fetchComments} className="btn btn-success">
          Get Latest Post
        </button>

        {latestPost.map((post) => {
          return <>{post.title}</>;
        })}
      </div>
      <Footer />
    </>
  );
};

export default Index;
