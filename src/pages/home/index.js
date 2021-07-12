import React, {Component} from 'react';
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
            <HomeWrapper>
                <HomeLeft>
                    <ArticleContainer>
                        <ArticleList>
                        {
                            this.props.article_list.toJS().map( (item,index)=>{
                                return (
                                <ArticleItem>
                                    <a className="wrap-img" href=""><img src={item.URL} alt="120" className="img-blur-done"/></a>
                                    <div className="content">
                                        <a className="title" target="_blank" href="" >{item.topic}</a>
                                        <p className="abstract">{item.description}</p>
                                        <div className="meta">
                                            <span className="jsd-meta"/>
                                            <a>{item.author}</a>
                                            <span/>
                                            <span/>
                                            <span/>
                                        </div>
                                    </div>
                                </ArticleItem>)
                            } )
                        }
                        </ArticleList>
                    </ArticleContainer>
                    <LoadMoreArticleButton />
                </HomeLeft>
                <HomeRight />
            </HomeWrapper>
        )
    }
}

const mapState = (state)=>{
    return {
        'article_list' : state.get('home').get('article_list'),
    }
}
const mapDispatch = (dispatch)=>{
    return { 
        handleFetchArticleInfo(){
            dispatch(actionsCreator.fetchArticleInfo());
        }
    }
}

export default connect(mapState,mapDispatch)(Home);
