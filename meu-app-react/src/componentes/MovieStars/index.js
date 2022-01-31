import {ReactComponent as StarFull} from '../../assets/img/estrela_cheia.svg';
import {ReactComponent as StarHalf} from '../../assets/img/estrela_metade.svg';
import {ReactComponent as StarEmpty} from '../../assets/img/estrela_vazia.svg';

import '../MovieStars/estilos.css';

function MovieStars(){
    return(
        <div className="dsmovie-stars-container">
  <StarFull />
  <StarFull />
  <StarFull />
  <StarHalf />
  <StarEmpty />
</div>
    );


}
export default MovieStars;