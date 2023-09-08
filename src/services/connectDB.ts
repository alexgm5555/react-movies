class connectDB {

  constructor() {}

  get(url: string) {
    return fetch(`${process.env.REACT_APP_BACK_URI}`, {
      headers: {
        Accept: 'application/json',
        Authentication: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU1ZjZmMTJhLTMyNTktNGEwYi1iNTkyLTExNTMwYTBiMWJhNiIsImlhdCI6MTY5NDAxMjA0Nn0.d5qY9L-Bh1SrIbi8AfcY8gnJ65Sggaj8jCu8lH2Wb34',
      }
    })
   .then(resp => resp.json())
   .then(json => console.log(JSON.stringify(json)))
  }
}

export default connectDB;