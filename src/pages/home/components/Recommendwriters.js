import React from 'react';

import { connect } from 'react-redux';
import * as actionsCreator  from '../store/actionsCreator.js';

import { RecommendedAuthorWrap, Title,  List} from './components.js';

class Recommendwriters extends React.Component{

    componentDidMount(){
        this.props.handleFetchWriterList();
    }

    render(){
        return (
        <RecommendedAuthorWrap>
            <div className="recommended-authors">
                <Title><span>推荐作者</span><a href='/#' className='page-change'><i className='iconfont'>&#xe606;</i>换一换</a></Title>
                <List>
                    {

                        this.props.writerList.toJS().map( (item,index)=>{
                            return (<li key={index} >
                                <a href='/#' className ='avatar'><img src={item.URL} alt='writer_icon'/></a>
                                <a href='/#'className ='follow'><i className='iconfont'>&#xe600;</i>关注</a>
                                <a href='/#'className = 'name'> {item.writer} </a>
                                <p>写了{item.words}字，{item.likes}喜欢</p>
                            </li>)
                        })
                    }
                </List>
                <a href='/#'>查看全部<i></i></a>
            </div>
        </RecommendedAuthorWrap>)
    }
}

const mapState = (props)=>{
    return {
        writerList: props.get('home').get('writer_list'),

    }
}

const mapDispatch = (dispatch)=> {
    return {
        handleFetchWriterList(){
            dispatch(actionsCreator.fetchWriterList());
        }
    }
}

export default connect(mapState,mapDispatch)(Recommendwriters);