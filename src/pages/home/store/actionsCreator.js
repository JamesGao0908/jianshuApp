import axios from "axios"
import { fromJS } from 'immutable';

export const fetchArticleInfo = ()=>{
    return (dispatch)=>{
        axios.get('./apis/articleslist.json')
            .then((res)=>{
                dispatch(loadArticleInfo(res.data.data));
            })
            .catch((err)=>{
                console.log(err);
            });
    }
}

const loadArticleInfo = (e)=>({
    type:'load_article_info',
    value:fromJS(e)
});