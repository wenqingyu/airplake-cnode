/**
 * Progress:
 * Topic
 * - Open: Open exist topic by topic_id
 * - Create: Create a new topic
 * - Update: Upadte a exist topic by topic_id
 */

var Topic = require('./lib/topic.js');

if (!process.env.CNODE_API) {
  process.env.CNODE_API = 'https://cnodejs.org/api/v1'
}

if (!process.env.CNODE_TOKEN) {
  return console.log('please set env CNODE_TOKEN')
}

console.log(process.env.CNODE_API)
console.log(process.env.CNODE_TOKEN);

module.exports = {
    topic: Topic
}
