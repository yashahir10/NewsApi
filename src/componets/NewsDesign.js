import React from 'react';
import Loader from "react-js-loader";
import "./News.css";

const NewsDesign = (props) => {

    console.log(props.apiData, '...apiData');
    return (
        <>
          <div className="mainDiv">
      {props.apiData.map((val) => {
        return (
          <>
            <div class="card" style={{ width: "438px" }}>
              <img class="card-img-top snip1577 hover" src={val.urlToImage == null ? "https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg":val.urlToImage} alt="Card image cap" />  
              <div className='main_author'><p className='author'>{val.author == null ? "breaking news" :val.author} </p></div>
              <div class="card-body">
                <h5 class="card-title">{val.title}</h5>
                <p class="card-text">
                  {val.description == null ? "This is a breaking news and for more information about this news, you can visit the reliable website. For more information, click Read More." :val.description}
                </p>
              </div>
               <p className="publishedAt">publishedAt:-{val.publishedAt}</p>
              <a className="btn btn-primary" href={val.url} target="_blank">read more</a>
            </div>
          </>
        );
    })}
    </div>
    </>
  );
};
export default NewsDesign;