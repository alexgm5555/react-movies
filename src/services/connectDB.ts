class connectDB {
  async get(url: string) {
    console.log(process.env);
    
    return await fetch(`http://192.168.0.8:3002/api/${url}`, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU1ZjZmMTJhLTMyNTktNGEwYi1iNTkyLTExNTMwYTBiMWJhNiIsImlhdCI6MTY5NDAxMjA0Nn0.d5qY9L-Bh1SrIbi8AfcY8gnJ65Sggaj8jCu8lH2Wb34',
      }
    })
   .then(resp => resp.json())
  }
}

export default connectDB;