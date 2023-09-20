import { useDispatch, useSelector } from 'react-redux'
import './Logic.css'
import { useState } from 'react';
import { addLink } from '../../ntr/Slices/Slice.js';
import { Link } from 'react-router-dom';
import axios from 'axios';

export function Adding() {
    const LinkRedux = useSelector(state => state.Links);
    const dispatch = useDispatch();
    const [Links, setLinks] = useState();
    let LinkRedux2 = []
    const [Main_Links, setMain_Links] = useState([])
    const Fetching = () => {
        LinkRedux.forEach(async (element) => {
            let FetchData = await axios.post(`https://api.shrtco.de/v2/shorten?url= ${element}`);
            if (element !== undefined) {
                LinkRedux2.push({ Main_Url: element, Shorten_Url: FetchData.data.result.full_short_link })
                setMain_Links(LinkRedux2);
            }
        })
    }
    const AddingLink = () => {
        dispatch(addLink(Links));
        Fetching();
    }
    const CopyLink = () => {
        console.log("Copied");
        navigator.clipboard.writeText(document.querySelector(".Main_List_links_Answers_buttons a").innerHTML);
    }
    console.log(Main_Links);
    return (
        <div className='Main_List'>
            <div className='Main_List_inputs'>
                <input type='text' onChange={(e) => {
                    if (e.target.value === undefined || e.target.value === '') {
                        return
                    } else {
                        setLinks(e.target.value);
                    }
                }} placeholder='Please press 2 clicks'></input>
                <button className='btn btn-primary' onClick={AddingLink}>Shorten it</button>
            </div>
            <div className='Main_List_links'>
                {!Main_Links ? console.log("Wait") : Main_Links.map((e) => {
                    return <div className="Main_List_links_Answers">
                        <p>{e.Main_Url}</p>
                        <div className='Main_List_links_Answers_buttons'>
                            <Link to={e.Main_Url}>{e.Shorten_Url}</Link>
                            <button className='btn btn-primary' onClick={CopyLink}>Copy</button>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}