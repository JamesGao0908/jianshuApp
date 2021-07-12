import { fromJS } from 'immutable';

const defaultState = fromJS({
    article_list: [
        {
        "id":"0006",
        "topic":"一拍两散",
        "description":"婆婆得了癌症，住院押金不够，我就想起闺蜜借我的100000元，于是，在电话里，我委婉地提出，没想到她把我一顿数落，我一气之下拉黑了她。 我和文静",
        "diamond":"32.1",
        "author":"流失的青春",
        "commit":"147",
        "like":"288",
        "money":"1",
        "URL":"https://jianshuapp.s3.ap-southeast-2.amazonaws.com/20760323-fa16d3cfa1cc678c.jpeg"
        }
    ],
             
});

export default (state = defaultState, action ) => {
    switch (action.type) {
        case 'fetch_article_info':{
            return state;
        }
        default :
            return state;
    }
}