import React from 'react';
import { Route, Switch, HashRouter as Router } from "react-router-dom";

import HomePage from './pages/Home';
import SendAssetPage from './pages/SendAsset';
import AssetsPage from './pages/Assets';

const App = () => {
  return (
		<Router>
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/send/:token_id" exact component={SendAssetPage} />
				<Route path="/assets" exact component={AssetsPage} />
      </Switch>
    </Router>
  );
}

export default App;
