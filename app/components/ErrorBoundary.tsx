// Import necessary modules from React
import { Component, ErrorInfo, ReactNode } from "react";

// Define the props for the ErrorBoundary component
interface Props {
  children: ReactNode; // The children components that this boundary will wrap
}

// Define the state structure for the ErrorBoundary component
interface State {
  hasError: boolean; // Indicates whether an error has occurred
}

// ErrorBoundary component to catch JavaScript errors in its child component tree
class ErrorBoundary extends Component<Props, State> {
  // Initialize the state with hasError set to false
  public state: State = {
    hasError: false,
  };

  // Lifecycle method to update state when an error is caught
  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true }; // Set hasError to true when an error occurs
  }

  // Lifecycle method to log error information
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
    // Example: logErrorToMyService(error, errorInfo);
  }

  // Render method to display fallback UI or children components
  public render() {
    // Check if an error has occurred
    if (this.state.hasError) {
      // Display fallback UI when an error is caught
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Something went wrong
            </h2>
            <p className="text-gray-400 mb-4">
              We encountered an unexpected error. Please try again later.
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => this.setState({ hasError: false })} // Reset error state on button click
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    // Render the children components if no error has occurred
    return this.props.children;
  }
}

// Export the ErrorBoundary component for use in other parts of the application
export default ErrorBoundary;
