// import axios from 'axios'

// export const getMatches = () => {

    // const url = 'https://cricapi.com/api/matches?apikey=${API_KEY}'

    //  const API_KEY = FVi9KyJvFyTZCGHx7MPbQ3oXGI33

    // axios.get('https://cricapi.com/api/matches?apikey=FVi9KyJvFyTZCGHx7MPbQ3oXGI33').then(
    //     (res) => {
    //         return console.log(res.data);
    //     }
    // )
// }

export const getMatches = () => {
    const url = `https://cricapi.com/api/matches?apikey=FVi9KyJvFyTZCGHx7MPbQ3oXGI33`
    console.log("URL", url);
    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log("ERROR ", error);
      });
  };



