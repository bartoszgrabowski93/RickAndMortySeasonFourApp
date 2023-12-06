import { useEffect, useState } from 'react'
import './Style.css'
import { useQuery} from "@apollo/client";
import { GET_EPISODES } from "./gql/Query"



function Episodes() {
  // const [episodes, setEpisodes] = useState(0);
  const { data, loading, error } = useQuery(GET_EPISODES);
  console.log(data);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
    <>
      <section Id='mainsection'> 
      {data.episodes.results.map((episode) => (
        <p key={episode.id}>{episode.name}</p>
        ))}                  
      </section>
     
    </>
  )
}

export default Episodes


{/* <div className='verticalline'></div>
        <div className='episodeidbracket'>
          <p className="episodeid">{episode.Id}</p>
          <div class='episodedescription'>
            <p className="enameblue">{episode.Name}</p>
            <p className="emisiondate">{episode.Air_Date}</p>
          </div>          
        </div> */}