import React, { useEffect, useState } from 'react'
import axios from 'axios';
import NewsDesign from './NewsDesign';
function News(props) {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        getApiData();
    }, []);

    const getApiData = () => {
        const apiKey = "b35739c7bfe94f6aba5aafe7ac8c73a0";
        axios.get(`https://newsapi.org/v2/top-headlines?pagesize=${12}&category=${props.category}&country=us&apiKey=${apiKey}`)
            .then((res) => {
                if (res && res.data && res.data.articles)
                    setApiData(res.data.articles);
            })
            .catch((err) => console.log("err===>", err));

    };

    return (
        <div className='testy'>
            <NewsDesign
                apiData={apiData}
            />
        </div>
    )
}

export default News;
