process.env.CNODE_TOKEN='Fill Your CNODE Access Token Here'

var Cnode = require('./../index.js');

var main = async () => {

    var post = {
        title: '这是一个测试',
        tab: 'share',
        content: '这是一个测试文章，如果打扰请见谅，稍后会马上删除。'
    }
    var result = await Cnode.topic.create(post);
    result = JSON.parse(result.body);
    if(result.success){
        console.log(result);
        // TODO
    }
}






main();