import {tracklogs} from '../../../src/tracklog/interfaces/dataInterface'

const data: tracklogs = {
    /*一个埋点*/
    "WB_WMDA_CLICK_TEST": {
        "desc": "提交点击",  /*埋点描述，选填，测试埋点页展示为按钮名称*/
        /*wb云窗埋点设置*/
        "wb": {
            "actionType": "200000001772000100000010", /*埋点actionType，必填*/
            "params": [], /*老版app参数配置（数组格式），后续由json字段取代*/
            "json": {}  /*app 19年2月新增自定义参数配置字段（json格式）*/
        },
        /*wmda埋点设置*/
        "wmda": {
            "event_id": "2151", /*埋点event_id，必填*/
            "params": {} /*自定义参数（json格式）*/
        },
        "soj": {
            "activity": "by_jjr_more",  /*埋点activity，必填*/
            "params": {} /*自定义参数（json格式）*/
        }
    }
}