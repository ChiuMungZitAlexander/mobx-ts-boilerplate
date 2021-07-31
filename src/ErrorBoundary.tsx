import * as React from 'react';

type ErrorBoundaryProps = {
  children: JSX.Element;
};

/**
 * 错误页面
 */
class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  static getDerivedStateFromError(): { hasError: boolean } {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  state = { hasError: false };

  // componentDidCatch(error, errorInfo) {
  // You can also log the error to an error reporting service
  // }

  render(): JSX.Element {
    const { children } = this.props;

    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <h1>
          页面出错了。请刷新页面。<a href={location.host}>刷新</a>
        </h1>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
