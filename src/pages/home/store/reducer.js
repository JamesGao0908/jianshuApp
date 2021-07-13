import { fromJS } from 'immutable';

const defaultState = fromJS({
    article_list: [],
});

export default function reducer(state = defaultState, action ){
    switch (action.type) {
        case 'load_article_info':{
            return state.set('article_list',fromJS(action.value));
        }
        default :
            return state;
    }
}