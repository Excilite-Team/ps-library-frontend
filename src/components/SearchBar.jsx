import React from "react"

export default function SearchBar() {
    return (
        <form action="/search" method="GET">
            <input type="text" placeholder="Search..." name="query"/>
            <input type="submit" value="Search" />
        </form>
    )
}