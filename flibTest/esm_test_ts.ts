import Flib from 'fang-flib';
import {data} from './trackData/wb_data'

var flib = new Flib({ajk: {androidNeedInit: false}}, data);
flib.adapter
flib.track.sendLog(flib.track.data.BODY_CLICK);
flib.track.data.BODY_CLICK