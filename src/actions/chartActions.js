import * as types from './actionTypes';
import chartApi from '../api/mockChartApi';

export function loadChartSuccess(charts) {
  return { type: types.LOAD_CHARTS_SUCCESS, charts};
}

export function loadChartData() {
  return function(dispatch) {
    return chartApi.getChartData().then(posts => {
        // console.log(posts, 'postspostspostsposts')
      dispatch(loadChartSuccess(posts));
    }).catch(error => {
      throw(error);
    });
  };
}
