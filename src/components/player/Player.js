import {FaHandRock, FaHandPaper, FaHandPeace} from 'react-icons/fa'
import {Options, ContainerPlayer} from './style'

const Player = (props) => {
    return(
        <ContainerPlayer>
            <div>
                <Options onClick={props.pedra} >
                    <FaHandRock className='pedra'/>
                </Options>
                
            </div>
            <div>
                <Options onClick={props.papel}>
                    <FaHandPaper className='papel'/>
                </Options>
            </div>
            <div>
                <Options onClick={props.tesoura}>
                    <FaHandPeace className='tesoura'/>
                </Options>
            </div>
        </ContainerPlayer>
    )
}
export default Player