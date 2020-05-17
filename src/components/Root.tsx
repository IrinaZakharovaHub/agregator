import * as React from 'react';
import {FunctionComponent, useState, useEffect, useRef} from "react";
import  './main.scss';
import Input from './Input';
import {MIN, MAX} from './../helpers/validate';
import InfiniteScroll from 'react-infinite-scroll-component';
import {useFetch} from '../helpers/useFetch';

const Root:FunctionComponent = () => {

    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);

    const [newItems, isLoading, totalItems] = useFetch(page, `https://gorest.co.in/public-api/users?_format=json&access-token=vC2dNal5suX3mH713R-NWFsySl9ms9QafdcG`)

    useEffect(()=>{
        loadFunc(true);
    },[]);

    useEffect(()=>{
        console.log(newItems);
        setItems(prevItems=>{
                return [...prevItems, ...newItems]
            });
    },[newItems])

    const loadFunc = (first = false) => {
        if (items.length < totalItems || first) {
            setPage(page + 1);
        }
    }

    return (
        <>
            <InfiniteScroll
                dataLength={items.length} 
                next={loadFunc}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{textAlign: 'center'}}>
                    <b>Yay! You have seen it all</b>
                    </p>
                }
                refreshFunction={loadFunc}
                pullDownToRefresh
                pullDownToRefreshContent={
                    <h3 style={{textAlign: 'center'}}>&#8595; Pull down to refresh</h3>
                }
                releaseToRefreshContent={
                    <h3 style={{textAlign: 'center'}}>&#8593; Release to refresh</h3>
                }>
                {
                    items.map((el,i)=>{
                        return (
                            <div className="big-block" key={el.id}>
                                {el.email}
                            </div>
                        )
                    })
                }
            </InfiniteScroll>
        </>
    );
}

export default Root;