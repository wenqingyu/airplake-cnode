# airplake-cnode
CNodejs Restful API Adaptor, detail about Cnodejs.org API, please check https://cnodejs.org/api.

### Progress

**Topic**
- [X] Create
- [X] Open
- [X] Update
- [ ] Get Topic List

**Topic Collect**
- [ ] Collect Topic
- [ ] Cancel Topic
- [ ] List All Collect

**Topic Comment**
- [ ] New Replies
- [ ] New Ups

**User**
- [ ] Login Name
- [ ] Access Token Check

**Message**
- [ ] Unread Count
- [ ] Get read/unread Messages
- [ ] Mark all read






### Install
```
npm i airplake-cnode
```

### Example

#### Setup for CNode Access Token
```
process.env.CNODE_TOKEN='Fill Your CNODE Access Token Here'
```

#### Topic.open
```
var Cnode = require('airplake-cnode');

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

```

#### Topic.create
```
var Cnode = require('airplake-cnode');

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
```

#### Topic.update
```
var Cnode = require('airplake-cnode');

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

```



