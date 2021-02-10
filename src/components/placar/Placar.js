import {Container} from "./style";
import { FaUserAlt, FaVrCardboard } from "react-icons/fa";

const Placar = (props) => {


  return (
    <Container>
        <div>
          <FaUserAlt className='icon' />
          <p>Player</p>
          <p>{props.playerWin}</p>
        </div>
        <div>
          <FaVrCardboard className='icon' />
          <p>Robô</p>
          <p>{props.roboWin}</p>
        </div> 
    </Container>
  );
};
export default Placar;
