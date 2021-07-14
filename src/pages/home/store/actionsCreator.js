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

export const fetchWriterList = ()=>{
    return (dispatch)=>{
        axios.get('./apis/writerList.json')
        .then((res)=>{
            dispatch(loadWriterList(res.data.list));
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

const loadWriterList = (e)=>({
    type: 'load_writer_list',
    value: e
})
