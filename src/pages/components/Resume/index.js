import ResumeItem from '../ResumeIten';
import './styles.css';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

function Resume({entrada, saida}) {
    return(
        <div className='resume'>
            <ResumeItem title={"Entradas"} Icon={ArrowCircleDownIcon} value={entrada} />
            <ResumeItem title={"Saídas"} Icon={ArrowCircleUpIcon} value={saida} />
        </div>
    );
}

export default Resume;