
export const data = {
    "SUBMIT_CLICK": {
        "desc": "提交点击",  /*埋点描述，选填，测试埋点页展示为按钮名称*/
        "actionType": "200000001772000100000010", /* 必选 埋点actionType*/
    },
    "BANNER_CLICK": {
        "desc": "点击banner",
        "actionType": "200000001772000100000010",
        "params": ['a1=8', 'a2=banner'], /*可选 老版app参数配置（数组格式），后续由json字段取代*/
    },
    "FOOTER_CLICK": {
        "desc": "提交点击",
        "actionType": "200000001772000100000010",
        "json": { /*可选 app 19年2月新增自定义参数配置字段（json格式）*/
            a3: 'xixi',
            from: 'footer'
        }
    },
    "BODY_CLICK": {
        "desc": "提交点击",
        "actionType": "200000001772000100000010",
        "params": ['type=body'],
        "json": {
            id: 4,
        }
    },
    X1: 3
}
export default data;