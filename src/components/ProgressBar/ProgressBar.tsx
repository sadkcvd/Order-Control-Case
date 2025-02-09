import { Progress } from 'antd';
import { calculatePercentage } from '../../helpers';

const ProgressBar: React.FC<{ completedOrder?: string }> = ({ completedOrder }) => {
    return (
        <div className='progress-bar'>
            <div className="progress-title">
                <h5>TAMAMLANAN SİPARİŞ {completedOrder || "0"}</h5>
            </div>
            <Progress
                percent={calculatePercentage(completedOrder)}
                percentPosition={{ align: 'end', type: 'inner' }}
                size={{ height: 35 }}
                strokeColor="#688965"
                trailColor='#ab6d6b'
            />
        </div>
    )
}

export default ProgressBar