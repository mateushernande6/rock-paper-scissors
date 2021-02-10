import { FaHandRock, FaHandPaper, FaHandPeace } from "react-icons/fa";
import {ContainerShow} from './style'

const ShowPlay = (props) => {
  return (
    
        
    props.robo !== 0 &&
        <ContainerShow>

    <div>
        {props.player === 1 ? (
            <FaHandRock className='icons play'/>
            ) : props.player === 2 ? (
                <FaHandPaper className='icons play'/>
                ) : (
                    <FaHandPeace className='icons play' />
                    )}
        <p>Player</p>
      </div>

<div>
      {props.robo === 1 ? (
          <FaHandRock className='icons rob'/>
          ) : props.robo === 2 ? (
              <FaHandPaper className='icons rob'/>
              ) : (
                  <FaHandPeace className='icons rob'/>
                  )}
        <p>Robo</p>
      </div>
               
               </ContainerShow>
            
               );
};
export default ShowPlay;
