import Flib from 'fang-flib';
import {data} from './trackData/wb_data_js'

var flib = new Flib({ajk: {androidNeedInit: false}}, data);
flib.track.data.BODY_CLICK
flib.track.sendLog(flib.track.data.X1);

