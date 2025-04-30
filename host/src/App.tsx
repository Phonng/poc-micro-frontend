import { Component, Suspense, lazy } from "react";

// Lazy load the remote components
const MFE1App = lazy(() => import("mfe1/App"));
const MFE2App = lazy(() => import("mfe2/App"));

class ErrorBoundary extends Component<{
  fallback: React.ReactNode;
  children: React.ReactNode;
}> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Micro Frontend Demo</h1>
      <p>
        This demo shows how React and React DOM are shared between micro
        frontends
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <ErrorBoundary fallback={<div>MFE1 không tìm thấy (hoặc “lỗi”)</div>}>
          <Suspense fallback={<div>Loading MFE1…</div>}>
            <MFE1App />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary fallback={<div>MFE2 không tìm thấy (hoặc “lỗi”)</div>}>
          <Suspense fallback={<div>Loading MFE2…</div>}>
            <MFE2App />
          </Suspense>
        </ErrorBoundary>
      </div>

      <div
        style={{
          marginTop: "20px",
          padding: "10px",
        }}
      >
        <h3>How to verify shared React:</h3>
        <ol>
          <li>Open browser dev tools</li>
          <li>Go to Network tab</li>
          <li>Filter by "JS"</li>
          <li>
            You should see only one copy of React and React DOM being loaded
          </li>
        </ol>
      </div>
    </div>
  );
}

export default App;
