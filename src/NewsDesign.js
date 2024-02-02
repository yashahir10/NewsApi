import React from 'react';
import Loader from "react-js-loader";
import "./News.css";

const NewsDesign = (props) => {

    console.log(props.apiData, '...apiData');
    return (
        <div>
            {props.apiData && props.apiData.length > 0 ?
                props.apiData.map((val, i) => {
                    return (
                        <div key={i} className='container'>
                            <div className='main_toimage'><img className='toimage' src={val.urlToImage} /></div>
                            <div className='main_author'><p className='author'>{val.author} </p></div>
                            <div className='main_title'><p className='title'>{val.title} </p></div>
                            <div className='main_description'><p className='description'>{val.description} </p></div>
                            <div className='main_publishedAt'><p className='publishedAt'>{val.publishedAt} </p></div>
                            <a class="btn btn-primary btn-lg" href={val.url} target='_blank'>Read More</a>
                        </div>
                    );
                })
                 :
              <Loader type="spinner-circle" bgColor={'black'} color={'black'} title={"Loading..."} size={100} />
        }
        </div>
    )
}
export default NewsDesign;
