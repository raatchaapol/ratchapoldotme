"use client";

import { Component, type ReactNode } from "react";
import { ErrorPage } from "./ErrorPage";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("Error Boundary caught an error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <ErrorPage
                    error={this.state.error}
                    reset={() =>
                        this.setState({ hasError: false, error: null })
                    }
                />
            );
        }

        return this.props.children;
    }
}
