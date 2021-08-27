import React from "react";
import { useParams, useRouteMatch } from "react-router-dom"
import api from "../api";
import useQuery from "../hooks/useQuery"

export default function Search (props) {
    const query = useQuery().get("query");
    const [books, setBooks] = React.useState([]);
    React.useEffect(async () => {
        let { success, response } = await api.get(`/books/search?query=${query}`);
        
        if (success) {
            if (response.status === 200) {
                return setBooks(response.data);
            } else {
                return console.log(response.statusText);
            }
        } else {
            return console.log(response.statusText);
        }
    }, [query, api])
    console.log(query);
    return (
        <>
            {
                books.map(book => (
                    <h1>{book.name}</h1>
                ))
            }
        </>
    )
}