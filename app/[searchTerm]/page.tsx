import getWikiResults from "../lib/getWikiResults";
import Item from "../components/item";

type Props = {
    params: {
        searchTerm: string;
    };
};

export async function generateMetadata({ params: { searchTerm } }: Props) {
    const data = await getWikiResults(searchTerm);
    const displayTerm = searchTerm.replaceAll('%20', ' ');

    if (!data?.query?.pages) {
        return {
            title: `${displayTerm} Not Found`,
        };
    }

    return {
        title: displayTerm,
        description: `Search results for ${displayTerm}`,
    };
}

export default async function SearchResults({ params: { searchTerm } }: Props) {
    const data = await getWikiResults(searchTerm);

    // Handle fetch error by checking if the data is null
    if (!data) {
        return (
            <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
                <h2 className="p-2 text-xl">Error fetching results for &quot;{searchTerm}&quot;. Please try again later.</h2>
            </main>
        );
    }

    const results: Result[] | undefined = data?.query?.pages;

    const content = (
        <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
            {results ? (
                Object.values(results).map((result) => <Item key={result.pageid} result={result} />)
            ) : (
                <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
            )}
        </main>
    );
    return content;
}
