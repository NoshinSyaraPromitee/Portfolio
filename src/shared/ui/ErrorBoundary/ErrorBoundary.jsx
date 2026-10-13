import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Route failed to load:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "120px 8%", textAlign: "center" }}>
          <h2>Something went wrong loading this page.</h2>
          <p style={{ margin: "12px 0", color: "#7B6A55" }}>
            This can happen after a new update - try reloading.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: "10px 24px",
              borderRadius: "30px",
              border: "1px solid #C9A84C",
              background: "transparent",
              cursor: "pointer"
            }}
          >
            Reload
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
