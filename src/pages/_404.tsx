import { ErrorPage } from "@/components/errors/ErrorPage";

export default function NotFoundPage() {
    return (
        <ErrorPage
            statusCode={404}
            message="The page you're looking for has been moved or doesn't exist"
        />
    );
}
