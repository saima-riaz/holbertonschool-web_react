import holbertonLogo from "./assets/holberton-logo.jpg";
import { getCurrentYear, getFooterCopy } from "./utils";
import Notifications from "./Notifications";
import "./App.css";

function App() {
  return (
    <>
      <div className="root-Notifications">
        <Notifications />
      </div>
      <div className="App-header">
        <img src={holbertonLogo} alt="holberton logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>

        {/* Email input section */}
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your email" required />
        
        {/* Password input section */}
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="Enter your password" required />
        
        {/* Submit button */}
        <button type="submit">OK</button>
      </div>
      <div className="App-footer">
        <p>
          Copyright {getCurrentYear()} {getFooterCopy(true)}
        </p>
      </div>
    </>
  );
}

export default App;
