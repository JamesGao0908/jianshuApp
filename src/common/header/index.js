import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import * as actionCreators  from './store/actionCreators';

import { HeaderWrapper, Logo, Nav, NavItem, NavSearch , SearchWrapper ,Addition, 
        Button, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem,
        SearchInfoList} from './style';

class Header extends React.Component {

    render(){
        const pageList = [];
        const newList = this.props.list.toJS();
        for( let i = (this.props.page * 10 ); i < (this.props.page+1) * 10; i ++ ){
            pageList.push( <SearchInfoItem key={i}>{newList[i]}</SearchInfoItem> );
        }
        console.log(this.props.page);
        console.log(pageList);

        return (
            <HeaderWrapper>
                <Logo href='/'/>
                <Nav >
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登陆</NavItem>
                    <NavItem className='right'>
                        <i className='iconfont'>&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in = {this.props.focused}
                            timeout = {200}
                            classNames = 'slide'>
                                <NavSearch 
                                    className = {this.props.focused ? 'focused':'' }
                                    onFocus = {this.props.handleFocus}
                                    onBlur = {this.props.handleBlur} />
                        </CSSTransition>
                        <i className={this.props.focused ? 'focused iconfont':'iconfont' }>&#xe60f;</i>
                        <SearchInfo className = { (this.props.focused || this.props.mouseIn) ? 'focused':''} onMouseOver={this.props.handleMouseEnter} onMouseLeave={this.props.handleMouseLeave} >
                            <SearchInfoTitle>热门搜索
                                <SearchInfoSwitch onClick={()=>this.props.handleUpdateList(this.props.page) }>换一换</SearchInfoSwitch>
                            </SearchInfoTitle>
                            <SearchInfoList>
                                {pageList}
                            </SearchInfoList>
                        </SearchInfo>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writing'>
                        <i className='iconfont'>&#xe6e5;</i>写文章
                    </Button>
                    <Button className='reg' >注册</Button>   
                </Addition>
            </HeaderWrapper>
            );
    }
}
/* 
    神奇方法  
    1. 把主reudcer的state传给小弟via props，
    2. state参就是主reducer的State
*/            
const mapStateToProps = (state) => {
    return {
        focused : state.get('header').get('focused'),
        mouseIn : state.get('header').get('mouseIn'),
        list : state.get('header').get('list'),
        page: state.get('header').get('page'),
        totalPage : state.get('header').get('totalPage'),
    }
}

/* 
    神奇方法  
    1. store的派发方法
    2. 先创建action 然后用 dispatch参直接派发 不要问为什么
    3. 派发后去store，reducer匹配了自动返还新的value
*/ 
const mapDispathToProps = (dispatch) => {
    return {
        handleFocus(){
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleUpdateList(e){
            dispatch(actionCreators.updateList(e));
        },
    }
}

export default connect( mapStateToProps, mapDispathToProps)(Header);