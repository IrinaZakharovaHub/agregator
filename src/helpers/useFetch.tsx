import { useState, useEffect } from 'react';

type Response = [Object[], boolean, number];

export const useFetch = (page: number, url: string):Response => {
    const [newItems, setNewItems] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [totalItems, setTotal] = useState(0);
    const [isFirst, setFirst] = useState(true);
    async function fetchUrl() {
        setLoading(true);
        const response = await fetch(`${url}&page=${page}`);
        const json = await response.json();
        setNewItems(json.result);
        setLoading(false);
        isFirst && setTotal(json._meta.totalCount);
        setFirst(false);
    }
    useEffect(() => {
        fetchUrl();
    }, [page]);

    return [newItems, isLoading, totalItems];
};

