function dateFormat(date, fmt) {
    let dateEntity = new Date(date);
    let o = {
        "M+": dateEntity.getMonth() + 1, //月份
        "d+": dateEntity.getDate(), //日
        "h+": dateEntity.getHours(), //小时
        "m+": dateEntity.getMinutes(), //分
        "s+": dateEntity.getSeconds(), //秒
        "q+": Math.floor((dateEntity.getMonth() + 3) / 3), //季度
        "S": dateEntity.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (dateEntity.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

export {
    dateFormat
}
