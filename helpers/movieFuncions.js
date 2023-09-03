const API_KEY = process.env.TMDB_KEY;

export const getMovies = async (type) => {
  const URL = `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}`;
  const res = await fetch(URL);
  //? next.js ile fetch api çekilen verileri default olarak cache'ler. bu özelliği option objesi ile değiştirebiliriz
  // const res = await fetch(URL, { cache: "force-cache" }); default
  // const res = await fetch(URL, { cache: "no-store" }); cache'leme
  //   const res = await fetch(URL, { next: { revalidate: 10 } }); belirli aralıklarla veriyi tekrar çek tekrar
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const { results } = await res.json();
  return results;
};