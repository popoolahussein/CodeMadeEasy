export default async function getWikiResults(searchTerm: string) {
    const searchParams = new URLSearchParams({
        action: 'query',
        generator: 'search',
        gsrsearch: searchTerm,
        gsrlimit: '20',
        prop: 'pageimages|extracts',
        exchars: '100',
        exintro: 'true',
        explaintext: 'true',
        exlimit: 'max',
        format: 'json',
        origin: '*',
    });

    try {
        const response = await fetch('https://en.wikipedia.org/w/api.php?' + searchParams);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching Wikipedia results:', error);
        return null; // Handle errors by returning null or an empty object
    }
}
