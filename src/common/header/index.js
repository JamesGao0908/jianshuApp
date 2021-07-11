import React from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch , SearchWrapper ,Addition, Button} from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import * as actionCreators  from './store/actionCreators';

const Header = (props) => {
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
                        in = {props.focused}
                        timeout = {200}
                        classNames = 'slide'>
                            <NavSearch 
                                className = {props.focused ? 'focused':'' }
                                onFocus = {props.handleFocus}
                                onBlur = {props.handleBlur} />
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont':'iconfont' }>&#xe60f;</i>
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
/* 
    神奇方法  
    1. 把主reudcer的state传给小弟via props，
    2. state参就是主reducer的State 
*/            
const mapStateToProps = (state) => {
    console.log(state);
    return {
        focused : state.header.focused,
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
            dispatch(actionCreators.searchFocus());
        },
        handleBlur(){
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect( mapStateToProps, mapDispathToProps)(Header);