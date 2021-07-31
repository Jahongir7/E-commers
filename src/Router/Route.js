import React from "react";
import { Route, Switch } from "react-router-dom";

import Cost1 from "../Components/Cost1";
import Cost from "../Components/Costs";

const Routes = (props) => {
  return (
    <Switch>
      <Route path="/costs" component={Cost} />
      <Route path="/costs1" component={Cost1} />
    </Switch>
  );
};

export default Routes;
