process.env.CNODE_TOKEN='cf2a89ec-0c26-48fc-a2cc-4c4ea980bf09'

var Cnode = require('./../index.js');

var main = async () => {

    var topicId = '58e208b7ccbecc24201d9513';
    var result = await Cnode.topic.open(topicId);
    result = JSON.parse(result.body);
    if(result.success){
        console.log(result);
        let post = result.data
        // TODO
    }
}






main();