import { useEffect, useState } from 'react'
import './Style.css'
import { useQuery} from "@apollo/client";
import { GET_EPISODES } from "./gql/Query"



function Episodes() {
  // const [episodes, setEpisodes] = useState(0);
  const { data, loading, error } = useQuery(GET_EPISODES);
  
  function episodeNumber(epNumber){
    if(epNumber<10){
      const numberString = epNumber.toString().padStart(2,'0');
      return numberString}
      else {return epNumber}
    }

  function episodeDetailsSite(episodeId){

  }

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  

  return (
    <>
      <section Id='mainsection'> 
        <div className='verticalline'></div>
          <div className='episodeidbracket'>
          {data.episodes.results.map((episode) => (    
          <div key={episode.id}>             
           <p className="episodeid">S04E{episodeNumber(episode.id)}</p>
              <div className='episodedescription'>
                <a href="#" className="enameblue">{episode.name}</a>
                <p className="emisiondate">{episode.air_date}</p>
              </div>  
          </div> ))} 
          </div>                 
                        
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

      //   <section Id='mainsection'> 
      // {data.episodes.results.map((episode) => (
      //   <p key={episode.id}>{episode.name}</p>
      //   ))}                  
      // </section>

      