import LayOut from "../Layout/Layout";
import BlogList from "../Components/BlogList.jsx";
import {useEffect, useState} from "react";
import {postLatest} from "../API/APIRequest.jsx";

const HomePage = () => {

    let [list, SetList] = useState([]);

    useEffect(() => {
        (async () => {
            let res = await postLatest();
            SetList(res);
        })()

    }, []);


    return (
        <LayOut>
            <BlogList list={list}/>
        </LayOut>
    );
};

export default HomePage;


