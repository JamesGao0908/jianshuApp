import React from 'react';
import { connect } from 'react-redux';
import * as actionsCreator  from './store/actionsCreator.js';

import { HomeWrapper, HomeLeft, HomeRight, ArticleContainer, LoadMoreArticleButton,
    ArticleList, ArticleItem } from './styled';

class Home extends React.Component{

    componentDidMount(){
        this.props.handleFetchArticleInfo();
    }

    render(){
        return (
            <HomeWrapper className={this.props.fontDefault ? '':'active'}>
                <HomeLeft>
                    <ArticleContainer>
                        <ArticleList>
                        {
                            this.props.article_list.toJS().map( (item,index)=>{
                                return (
                                <ArticleItem key={index}>
                                    <a href='/#' className='wrap-img'><img src={item.imgURL} alt='120' className='img-blur-done'/></a>
                                    <div className='content'>
                                        <a href='/#' className='title' target='_blank' >{item.topic}</a>
                                        <p className='abstract'>{item.description}...</p>
                                        <div className='meta'>
                                            <span className="jsd-meta"><i className='iconfont'>&#xe622;</i>{item.diamond}</span>
                                            <a href='/#'>{item.author}</a>
                                            <span><i className='iconfont'>&#xe657;</i>{item.commit}</span>
                                            <span><i className='iconfont'>&#xe61e;</i>{item.like}</span>
                                            { 
                                                (item.money === '' || item.money ==='0' ) ? (''):(<span><i className='iconfont'>&#xe611;</i>{item.money}</span>)
                                            }
                                        </div>
                                    </div>
                                </ArticleItem>)
                            })
                        }
                        </ArticleList>
                    </ArticleContainer>
                    <LoadMoreArticleButton>加载更多</LoadMoreArticleButton>
                </HomeLeft>
                <HomeRight>
                    
                </HomeRight>
            </HomeWrapper>
        )
    }
}

const mapState = (state)=>{
    return{
        'fontDefault': state.get('header').get('fontDefault'),
        'article_list' : state.get('home').get('article_list'),
    }
}
const mapDispatch = (dispatch)=>{
    return{ 
            handleFetchArticleInfo(){
                dispatch(actionsCreator.fetchArticleInfo());
            },
    }
}

export default connect(mapState,mapDispatch)(Home);
