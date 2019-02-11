import fetch from 'node-fetch';
// function fetchPostsWithRedux() {
//     return (dispatch) => {
//     dispatch(fetchPostsRequest());
//     return fetchPosts().then(([response, json]) =>{
//         if(response.status === 200){
//         dispatch(fetchPostsSuccess(json))
//       }
//       else{
//         dispatch(fetchPostsError())
//       }
//     })
//   }
// }


class ChartApi {
    static getChartData() {
      const URL = "https://jsonplaceholder.typicode.com/posts";
      return fetch(URL, { method: 'GET'})
          .then( response => Promise.all([response, response.json()]));
    }
}

export default ChartApi