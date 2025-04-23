const base = {
    get() {
        return {
            url : "http://localhost:8080/xiaoneiershousahngchengjiaoyi/",
            name: "xiaoneiershousahngchengjiaoyi",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xiaoneiershousahngchengjiaoyi/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校内二手商城交易系统"
        } 
    }
}
export default base
