import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import CollapsePage from './pages/flights';
import FormPage from "./pages/form";
import OneWayFromsPage from "./pages/oneway";
import MultiCityFormsPage from "./pages/multicity";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/FormPage/OneWayFormsPage/MultiCityFormPage' component={CollapsePage} />
        <Route path='/navigation/breadcrumb' component={BreadcrumbPage} />
        <Route path='/navigation/navs' component={NavsPage} />
        <Route path='/navigation/footer' component={FooterPage} />
        <Route path='/tables/table' component={TablePage} />
        <Route path='/tables/table-responsive' component={TableResponsivePage} />
        <Route path='/tables/table-scroll' component={TableScrollPage} />
        <Route path='/tables/table-styles' component={TableStylesPage} />
        <Route path='/tables/datatable-api' component={DatatableApiPage} />
        <Route path='/tables/datatable' component={DatatablePage} />

        
        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }} 
        />
      </Switch>
    );
  }
}

export default Routes;
