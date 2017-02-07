import React from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import App from 'Components/layout/App';
import PartOne from 'Components/part1';
import PartTwo from 'Components/part2';
import PartThree from 'Components/part3';
import PartFour from 'Components/part4';
import Home from 'Components/Home';


const routes = (
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRedirect to="home" />
      <Route path="home" component={Home} />
      <Route path="codes" component={App}>
        <Route path="part-one">
          <Route path="chapter-one" component={PartOne} />
          <Route path="chapter-two" component={PartOne} />
          <Route path="chapter-three" component={PartOne} />
          <Route path="chapter-four" component={PartOne} />
          <Route path="chapter-five" component={PartOne} />
          <Route path="chapter-six" component={PartOne} />
          <Route path="chapter-seven" component={PartOne} />
          <Route path="chapter-eight" component={PartOne} />
          <Route path="chapter-nine" component={PartOne} />
        </Route>
        <Route path="part-two">
          <Route path="chapter-ten" component={PartTwo} />
          <Route path="chapter-eleven" component={PartTwo} />
          <Route path="chapter-twelte" component={PartTwo} />
          <Route path="chapter-thirteen" component={PartTwo} />
          <Route path="chapter-fourteen" component={PartTwo} />
          <Route path="chapter-fifteen" component={PartTwo} />
          <Route path="chapter-sixteen" component={PartTwo} />
          <Route path="chapter-seventeen" component={PartTwo} />
          <Route path="chapter-eighteen" component={PartTwo} />
        </Route>
        <Route path="part-three">
          <Route path="chapter-nineteen" component={PartThree} />
          <Route path="chapter-twenty" component={PartThree} />
          <Route path="chapter-twenty-one" component={PartThree} />
          <Route path="chapter-twenty-two" component={PartThree} />
        </Route>
        <Route path="part-four">
          <Route path="chapter-twenty-three" component={PartFour} />
          <Route path="chapter-twenty-four" component={PartFour} />
          <Route path="chapter-twenty-five" component={PartFour} />
          <Route path="chapter-twenty-six" component={PartFour} />
          <Route path="chapter-twenty-seven" component={PartFour} />
          <Route path="chapter-twenty-eight" component={PartFour} />
        </Route>
      </Route>
    </Route>
  </Router>
);

export default routes;
