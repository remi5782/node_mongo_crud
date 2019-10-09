var pageInfos = require('./pageInfos.dao');
exports.createPageInfo = function (req, res, next) {
    var pageInfo ={
        name: req.body.name,
        title: req.body.title,
        description: req.body.description
    };

    pageInfos.create(pageInfo, function(err, pageInfo){
        if(err){
            res.json({
                error: err
            })
        }
        res.json({
            message: 'pageInfo created succesfully'
        })
    })
}

exports.getPageInfos = function(req, res, next){
    pageInfos.get({}, function(err, pageInfos){
        if(err){
            res.json({
                error: err
            })
        }
        res.json({
            pageInfos: pageInfos
        })
    })
}
exports.updatePageInfo = function(req, res, next) {
    var pageInfo= {
        name: req.body.name,
        title: req.body.title,
        description: req.body.description
    }
    pageInfos.update({_id: req.params.id}, pageINfos, function(err, pageInfo){
        if(err){
            res.json({
                error: err
            })
        }
        res.json({
            message: "Page Ifno Updated Succesfully"
        })
    })
}

exports.removePageInfo = function(req, res, next){
    pageInfos.delete({_id: req.params.id}, function(err,pageInfo){
        if(err){
            res.json({
                error: err
            })
        }
        res.json({
            message: 'PageINfo removed Succesfully'
        })
    })
}