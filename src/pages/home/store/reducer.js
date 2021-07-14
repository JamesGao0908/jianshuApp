import { fromJS } from 'immutable';

const defaultState = fromJS({
    article_list: [],
    writer_list: [],
});

export default function reducer(state = defaultState, action ){
    switch (action.type) {
        case 'load_article_info':{
            return state.set('article_list',fromJS(action.value));
        }
        case 'load_writer_list': {
            return state.set('writer_list',fromJS(action.value));
        }
        default :
            return state;
    }
}

