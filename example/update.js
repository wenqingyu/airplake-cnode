process.env.CNODE_TOKEN='cf2a89ec-0c26-48fc-a2cc-4c4ea980bf09'

var Cnode = require('./../index.js');

var main = async () => {

    var topicId = '58e208b7ccbecc24201d9513';

    var newPost = {
        topic_id: topicId,
        title: '这是一篇测试主题，如有打扰请谅解，稍后会尽快删除！',
        tab: 'share', //ask, share, job,
        content: '这是测试的内容，如有打扰请谅解 ' + new Date().toISOString()
    }


    var result = await Cnode.topic.update(newPost);
    result = JSON.parse(result.body);
    if(result.success){
        console.log(result);
        // TODO
    }
}






main();