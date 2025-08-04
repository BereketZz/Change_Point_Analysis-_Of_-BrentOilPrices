<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Task 1: Foundation for Analysis</title>
</head>
<body>
  <h1>Task 1: Laying the Foundation for Analysis</h1>

  <h2>1. Defining the Data Analysis Workflow</h2>
  <p>The main objective of this project is to identify and quantify how significant global events have influenced the price of Brent crude oil. The analysis focuses on time series change point detection using Bayesian statistical modeling.</p>
  
  <h3>Workflow Steps:</h3>
  <ol>
    <li><strong>Data Ingestion:</strong> Load and clean historical Brent oil price data from May 1987 to September 2022.</li>
    <li><strong>Event Research:</strong> Collect and annotate geopolitical, economic, and OPEC-related events likely to affect oil prices.</li>
    <li><strong>Exploratory Data Analysis:</strong> Analyze raw price trends and volatility to inform model selection.</li>
    <li><strong>Preprocessing:</strong> Convert price series to log returns to stabilize variance and induce stationarity.</li>
    <li><strong>Model Building:</strong> Implement Bayesian Change Point Detection using <code>PyMC3</code>.</li>
    <li><strong>Insight Generation:</strong> Identify probable change points, associate them with global events, and quantify impacts.</li>
    <li><strong>Communication:</strong> Present results in a clear, stakeholder-friendly report with charts and annotated findings.</li>
  </ol>

  <h3>Assumptions and Limitations:</h3>
  <ul>
    <li>The analysis assumes a structural change manifests as a change in mean or variance in returns.</li>
    <li>Causality cannot be proven; we detect correlation between events and statistical shifts.</li>
    <li>Only known, documented events are considered — unreported factors may affect the signal.</li>
  </ul>

  <h3>Event Dataset:</h3>
  <p>A custom dataset was compiled of 12 major global events likely affecting Brent oil prices. Events include:</p>
  <ul>
    <li>2008 Global Financial Crisis</li>
    <li>2014 OPEC Decision to Maintain Output</li>
    <li>2016 OPEC Production Cut Agreement</li>
    <li>COVID-19 Global Lockdowns (March 2020)</li>
    <li>Russia-Ukraine War (Feb 2022)</li>
  </ul>

  <h3>Stakeholder Communication Channels:</h3>
  <ul>
    <li>Interactive dashboard for exploratory insights (e.g., Streamlit or Tableau)</li>
    <li>Formal written report or blog post for policymakers and analysts</li>
    <li>Github repository with clear documentation and visual outputs</li>
  </ul>

  <h2>2. Understanding the Model and Data</h2>
  <p>The dataset includes daily Brent oil prices in USD/barrel from 1987 to 2022. Prior to modeling, the price series was examined for:</p>
  <ul>
    <li><strong>Trend:</strong> Strong upward and downward trends corresponding to global crises and economic cycles.</li>
    <li><strong>Volatility Clustering:</strong> Periods of heightened volatility followed by calm intervals — typical in financial series.</li>
    <li><strong>Non-stationarity:</strong> The raw price series is non-stationary, so returns are used.</li>
  </ul>

  <h3>Why Change Point Models?</h3>
  <p>Change point models allow us to identify structural breaks in a time series. In this project, we apply Bayesian models to detect unknown switch points where the statistical properties (mean, variance) change, without pre-defining dates.</p>

  <h3>Expected Model Outputs:</h3>
  <ul>
    <li>Estimated date of change points (posterior distribution over <code>tau</code>).</li>
    <li>Mean returns before and after each change point (<code>mu1</code>, <code>mu2</code>).</li>
    <li>Associated uncertainty of the parameter estimates.</li>
  </ul>

  <h3>Model Limitations:</h3>
  <ul>
    <li>Single change point models may miss multi-phase structural shifts unless extended.</li>
    <li>High-frequency noise can affect sensitivity to small changes.</li>
    <li>Results depend on prior choices and convergence quality of the MCMC sampler.</li>
  </ul>
</body>
</html>
