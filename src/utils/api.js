const URL = 'https://cdn.rawgit.com/abbassiddiqi/airbnb-api/bbd1300a/flats.json';

const getAppartaments = async () => {
    try {
      const response = await fetch(URL);
      if(response.status === 200) {
        return await response.json()
      }
    } catch (error) {
      console.log(error);
    }
  }
    export {
        getAppartaments
    }