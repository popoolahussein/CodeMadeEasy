type Result = {
    pageid: string,
    title: string,
    extract: string,
    thumbnail?: {
        source: string,
        width: number,
        heihgt: number,
    }
}

type SearchResult = {
    query?: {
        pages?: Result[],
    },
}