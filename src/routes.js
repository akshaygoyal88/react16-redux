import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import NotFound from './components/NotFound';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import Chart from './components/chart/Chart';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="about" component={AboutPage} />
    <Route path="chart" component={Chart} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="*" component={NotFound} />
  </Route>
);
