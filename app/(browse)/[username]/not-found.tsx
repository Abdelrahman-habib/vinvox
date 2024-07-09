import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="h-full flex flex-col space-y-4 items-center justify-center text-muted-foreground">
      <p className="text-base font-semibold">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
        User not found
      </h1>
      <p className="mt-6 text-base leading-7">
        Sorry, we couldn&apos;t find the user you&apos;re looking for.
      </p>
      <Button variant="shimmer" asChild>
        <Link href="/">Go Back Home</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
