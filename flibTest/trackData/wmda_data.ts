import {tracklogs} from '../../../src/tracklog/interfaces/dataInterface'

const data: tracklogs = {
    /*一个埋点*/
    "WMDA_CLICK_TEST": {
        "desc": "提交点击",  /*埋点描述，选填，测试埋点页展示为按钮名称*/
        "event_id": 2151, /*埋点event_id，必填*/
        "params": {} /*自定义参数（json格式）*/
    }
}