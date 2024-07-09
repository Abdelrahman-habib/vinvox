"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ErrordPage = () => {
  return (
    <div className="h-full flex flex-col space-y-4 items-center justify-center text-muted-foreground">
      <p>Oh no! Something went wrong!</p>
      <Button variant="shimmer" asChild>
        <Link href="/">Go Back Home</Link>
      </Button>
    </div>
  );
};

export default ErrordPage;
