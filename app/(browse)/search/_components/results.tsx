import { getSearch } from "@/lib/search-service";
import { ResultCard, ResultCardSkeleton } from "./result-card";
import { Skeleton } from "@/components/ui/skeleton";

interface ResultsProps {
  term: string;
}

export const Results = async ({ term }: ResultsProps) => {
  const data = await getSearch(term);
  return (
    <div className="w-full h-full">
      {data.length === 0 ? (
        <div className="text-muted-foreground text-center text-sm w-full h-full flex flex-col items-center justify-center">
          <p className="text-6xl">😿</p>
          <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-2xl">
            No results found for &apos;{term}&apos;
          </h1>
          <p className="mt-4 text-base leading-7">
            Try searching for something else.
          </p>
        </div>
      ) : (
        <h2 className="text-lg font-semibold mb-4">
          Search results for &apos;{term}&apos;
        </h2>
      )}

      <div className="flex flex-col gap-y-4">
        {data.map((result) => (
          <ResultCard key={result.id} data={result} />
        ))}
      </div>
    </div>
  );
};

export const ResultsSkeleton = () => {
  return (
    <div>
      <Skeleton className="w-[290px] h-8 mb-4" />
      <div className="flex flex-col gap-y-4">
        {[...Array(4)].map((_, i) => (
          <ResultCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};
