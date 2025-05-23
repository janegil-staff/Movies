import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

const Home = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`
  );

  const data = await res.json();
  console.log(data);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  
  const results = data.results;

  return (
    <div className="text-red-600">
      <Results results={results} />
    </div>
  );
};

export default Home;
