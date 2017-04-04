"use strict"

const request = require('async-request');

module.exports = {

    /**
     * Open a exist topic
     */
    open: async (topicId) => {
        try {

            return await request(process.env.CNODE_API + '/topic/' + topicId, {
                method: 'GET',
                data: {
                    mdrender: false,
                    accesstoken: process.env.CNODE_TOKEN
                }

            });
        } catch (e) {
            return e;
        }

    },

    /**
     * Create a new topic
     */
    create: async (post, accesstoken) => {
        try {
            return await request(process.env.CNODE_API + '/topics', {
                method: 'POST',
                data: {
                    title: post.title,
                    tab: post.tab,
                    content: post.content,
                    accesstoken: process.env.CNODE_TOKEN
                }
            });
        } catch (e) {
            return e;
        }

    },

    /**
     * Update a exist topic
     */
    update: async (post, accesstoken) => {
        if(!post.topic_id){
            return 'topic_id not found'
        }
        try {
            return await request(process.env.CNODE_API + '/topics/update', {
                method: 'POST',
                data: {
                    topic_id: post.topic_id,
                    title: post.title,
                    tab: post.tab,
                    content: post.content,
                    accesstoken: process.env.CNODE_TOKEN
                }
            });
        } catch (e) {
            return e;
        }

    }


}