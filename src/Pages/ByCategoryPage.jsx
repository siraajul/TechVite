import React, {useEffect, useState} from "react";
import LayOut from "../Layout/Layout";
import {useParams} from "react-router-dom";
import {postByCategory,} from "../API/APIRequest.jsx";
import Loader from "../Components/Loader.jsx";
import BlogList from "../Components/BlogList.jsx";

const ByCategoryPage = () => {
    let {categoryID} = useParams();

    let [list, SetList] = useState(null);

    useEffect(() => {
        (async () => {
            let res = await postByCategory();
            SetList(res);
        })()

    }, []);

    return (
        <LayOut>
            <div>
                {list === null ? <Loader/> : <BlogList list={list}/>}
            </div>
        </LayOut>
    );
};

export default ByCategoryPage;
