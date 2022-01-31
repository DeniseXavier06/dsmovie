

import '../Pagination/estilos.css';

import {ReactComponent as Arrow} from '../../assets/img/arrow.svg';

function Pagination(){
    return(
<div className="dsmovie-pagination-container">
    <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" disabled={true} >
            <Arrow />
        </button>
        <p>{`${1} de ${5}`}</p>
        <button className="dsmovie-pagination-button" disabled={false} >
            <Arrow className="dsmovie-flip-horizontal" />
        </button>
    </div>
</div>

    );
}

export default Pagination;
