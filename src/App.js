import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import HelloMessage from './components/HelloMessage';
import FunctionPage from './components/FunctionPage';
import ClassPage from './components/ClassPage';
import FormExample from './components/FormExample';
import ShowList from './components/ShowList';

const NoMatch = ({ location }) => (
	<div>
		<strong>Error!</strong> No route found matching:
		<div>
			<code>{location.pathname}</code>
		</div>
	</div>
);

function App() {
	// this is a test comment from sjchae branch

	return (
		<div className="App">
			<div>ㄹㅇ 개빡치네</div>
			<HelloMessage name="Everyonennnnnnnnnnn   TESTING" />
			<HelloMessage name="There" />
			<br />
			<Switch>
				<Route path="/shows" component={ShowList} />
			</Switch>
		</div>
	);
  <div>
    <strong>Error!</strong> No route found matching:
    <div>
      <strong>
        ErrorERRORORRORORROROROROROOR에라ㅔㅇ라ㅔ아레아레ㅏ에랑레아레ㅏ!
      </strong>{" "}
      No route found matching:
      <div>
        <code>{location.pathname}</code>
      </div>
      <code>{location.pathname}</code>
    </div>
  </div>
);


export default App;
