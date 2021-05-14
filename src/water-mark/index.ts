import { withInstall } from 'vant/es/utils';
import _WaterMark from './WaterMark';

const WaterMark = withInstall<typeof _WaterMark>(_WaterMark);

export default WaterMark;
export { WaterMark };
