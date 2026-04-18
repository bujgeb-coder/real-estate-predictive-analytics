export default function App() {
  const summaryCards = [
    { title: "Predicted Price Change", value: "+6.8%", note: "Next 12 months" },
    { title: "Risk Score", value: "Moderate", note: "Market volatility level" },
    { title: "Confidence Range", value: "±2.1%", note: "Forecast interval" },
    { title: "Mortgage Impact", value: "-1.4%", note: "Rate pressure on prices" },
  ];

  const properties = [
    {
      city: "Salt Lake City, UT",
      current: "$524,000",
      predicted: "$559,600",
      trend: "+6.8%",
    },
    {
      city: "Lehi, UT",
      current: "$612,000",
      predicted: "$660,300",
      trend: "+7.9%",
    },
    {
      city: "West Valley City, UT",
      current: "$438,000",
      predicted: "$462,100",
      trend: "+5.5%",
    },
  ];

  const drivers = [
    { label: "Mortgage Rates", width: "82%" },
    { label: "Employment Growth", width: "65%" },
    { label: "Housing Supply", width: "58%" },
    { label: "Population Growth", width: "76%" },
  ];

  return (
    <div className="app-shell">
      <div className="container">
        <header className="hero">
          <div>
            <p className="eyebrow">Capstone Project</p>
            <h1>AI-Driven Predictive Analytics for Real Estate</h1>
            <p className="hero-text">
              A prototype platform for forecasting housing prices, analyzing market
              trends, and supporting smarter real estate decisions.
            </p>
          </div>

          <div className="hero-box">
            <p className="hero-box-label">Live Prototype Status</p>
            <h3>Frontend Deployed</h3>
            <p>Backend and predictive model integration in progress.</p>
          </div>
        </header>

        <section className="summary-grid">
          {summaryCards.map((card) => (
            <div className="card" key={card.title}>
              <p className="card-label">{card.title}</p>
              <h2>{card.value}</h2>
              <p className="card-note">{card.note}</p>
            </div>
          ))}
        </section>

        <section className="main-grid">
          <div className="panel large-panel">
            <div className="panel-header">
              <div>
                <h2>Market Forecast Overview</h2>
                <p>Projected housing trend for the next 12 months</p>
              </div>
            </div>

            <div className="chart-area">
              {[38, 45, 49, 55, 61, 68, 72, 78].map((height, index) => (
                <div className="bar-wrap" key={index}>
                  <div className="bar" style={{ height: `${height * 2}px` }} />
                  <span>Q{index + 1}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="panel">
            <h2>Key Market Drivers</h2>
            <p className="panel-subtitle">Variables influencing forecast results</p>

            <div className="driver-list">
              {drivers.map((driver) => (
                <div className="driver-item" key={driver.label}>
                  <div className="driver-top">
                    <span>{driver.label}</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: driver.width }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bottom-grid">
          <div className="panel table-panel">
            <h2>Property Comparison</h2>
            <p className="panel-subtitle">
              Sample market records with current and predicted values
            </p>

            <table>
              <thead>
                <tr>
                  <th>Location</th>
                  <th>Current Value</th>
                  <th>Predicted Value</th>
                  <th>Trend</th>
                </tr>
              </thead>
              <tbody>
                {properties.map((property) => (
                  <tr key={property.city}>
                    <td>{property.city}</td>
                    <td>{property.current}</td>
                    <td>{property.predicted}</td>
                    <td>{property.trend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="panel">
            <h2>Scenario Simulation</h2>
            <p className="panel-subtitle">
              Example impact of changing market conditions
            </p>

            <div className="scenario-group">
              <label>Mortgage Rate Change</label>
              <input type="range" min="0" max="100" defaultValue="58" />
              <span>+0.75%</span>
            </div>

            <div className="scenario-group">
              <label>Employment Growth</label>
              <input type="range" min="0" max="100" defaultValue="62" />
              <span>+1.8%</span>
            </div>

            <div className="scenario-result">
              <p>Simulated Forecast Result</p>
              <h2>+4.9%</h2>
              <span>Estimated annual appreciation under selected conditions</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
