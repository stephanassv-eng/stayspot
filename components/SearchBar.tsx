"use client"


export default function SearchBar({query}: {query: string}) {

    return (
        <form action="/" method="GET">
            <input
                type="text"
                placeholder="Search stays..."
                name="q"
                defaultValue={query}
            />
        </form>
    );
}