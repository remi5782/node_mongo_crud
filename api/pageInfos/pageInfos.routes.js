var pageInfos = require('./pageInfos.controller');
module.exports = function(router){
    router.post('/create', pageInfos.createPageInfo);
    router.get('/get', pageInfos.getPageInfos);
    router.get('/get/:name', pageInfos.getPageInfos);
    router.put('/update/:id', pageInfos.updatePageInfo);
    router.delete('/remove/:id', pageInfos.removePageInfo);
}