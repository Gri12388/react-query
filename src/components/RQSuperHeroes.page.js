import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => axios.get("http://localhost:4000/superheroes1");

export default function RQSuperHeroes() {
  
  const {
    data, 
    error, 
    isError, 
    isLoading
  } = useQuery("super-heroes", fetchSuperHeroes);

  // console.log('data:', data);

  if(isLoading) {
    return <h2>Loading...</h2>
  }

  if(isError){
    return <h2>{error.message}</h2>
  }

  return (
    <>
      <h2>RQ Super Heroes</h2>
      {
        data?.data.map(item => {
          return <div key={item.name}>{item.name}</div>
        })
      }
    </>
  );
}
