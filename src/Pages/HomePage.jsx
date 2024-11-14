import LayOut from "../Layout/Layout";
import BlogList from "../Components/BlogList.jsx";
import {useEffect, useState} from "react";
import {postLatest} from "../API/APIRequest.jsx";
import Loader from "../Components/Loader.jsx";

const HomePage = () => {

    let [list, SetList] = useState(null);

    useEffect(() => {
        (async () => {
            let res = await postLatest();
            SetList(res);
        })()

    }, []);


    return (
        <LayOut>
            {list === null ? <Loader/> : <BlogList list={list}/>}
        </LayOut>
    );
};

export default HomePage;


