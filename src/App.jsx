function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif", maxWidth: "1100px", margin: "0 auto" }}>
      <header style={{ marginBottom: "40px" }}>
        <h1 style={{ color: "#1f3c88", marginBottom: "10px" }}>Real Estate Predictive Analytics</h1>
        <p style={{ fontSize: "18px", color: "#444" }}>
          A capstone project focused on predicting housing prices, analyzing market trends, and supporting smarter real estate decisions.
        </p>
      </header>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        <div style={{ background: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
          <h2>Price Prediction</h2>
          <p>Forecast property values using historical housing data and market indicators.</p>
        </div>

        <div style={{ background: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
          <h2>Market Trends</h2>
          <p>Visualize housing market movement, price changes, and neighborhood patterns.</p>
        </div>

        <div style={{ background: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
          <h2>Investment Insights</h2>
          <p>Help buyers and investors evaluate opportunities, risk, and return potential.</p>
        </div>
      </section>

      <section style={{ marginTop: "40px", background: "#fff", padding: "25px", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
        <h2>Project Objective</h2>
        <p>
          This platform is designed to support decision making in real estate by combining predictive analytics,
          data visualization, and user-friendly dashboard features. It serves as a prototype for a larger analytics system.
        </p>
      </section>
    </div>
  );
}

export default App;
