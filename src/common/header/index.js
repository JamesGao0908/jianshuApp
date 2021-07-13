import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import * as actionsCreator  from './store/actionsCreator';

import { HeaderWrapper, Logo, Nav, NavItem, NavItemAa, NavSearch , SearchWrapper ,Addition, 
        Button, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem,
        SearchInfoList} from './style';

class Header extends React.Component {

    render(){
        const pageList = [];
        const newList = this.props.list.toJS();
        for( let i = (this.props.page * 10 ); i < (this.props.page+1) * 10; i ++ ){
            pageList.push( <SearchInfoItem key={i}>{newList[i]}</SearchInfoItem> );
        }

        return (
            <HeaderWrapper>
                <Logo href='/'/>
                <Nav >
                    <NavItem className='left active'><i className='iconfont'>&#xe695;</i>首页</NavItem>
                    <NavItem className='left'><i className='iconfont'>&#xe736;</i>下载App</NavItem>
                    <NavItem className='right'>登陆</NavItem>
                    <NavItem className='right'>
                        <i className='iconfont' onClick={this.props.handleWidgetPopup}>&#xe636;</i>
                        <NavItemAa className={this.props.AaMouseIn ? 'focused' : ''} onMouseOver={this.props.handleMouseEnterAa} onMouseLeave={this.props.handleMouseLeaveAa}  >
                            <div className = 'meta'>
                                <i className='iconfont'>&#xe612;</i>
                                <span>夜间模式</span>
                            </div>
                            <div className='switch day-night-group'>
                                <a href='#/' className={this.props.nightMode ? 'switch-btn active' : 'switch-btn'} onClick={()=>{ this.props.handleNightModeChange(); document.body.className = 'reader-night-mode';}}>On</a>
                                <a href='#/' className={this.props.nightMode ? 'switch-btn' : 'switch-btn active'} onClick={()=>{ this.props.handleNightModeChange(); document.body.className = ''; }}>Off</a>
                            </div>
                            <hr/>
                            <div className='switch font-family-group'>
                                <a href='#/' className={this.props.fontDefault ? 'switch-btn font-song active': 'switch-btn font-song'} onClick={ ()=>{this.props.handleChangeDefaultFont() }}>字体-宋体</a>
                                <a href='#/' className={this.props.fontDefault ? 'switch-btn font-hei': 'switch-btn font-hei active'} onClick={()=>{this.props.handleChangeDefaultFont() }}>字体-黑体</a>
                            </div>
                        </NavItemAa>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in = {this.props.focused}
                            timeout = {200}
                            classNames = 'slide'>
                                <NavSearch 
                                    className = {this.props.focused ? 'focused':'' }
                                    onFocus = {()=>this.props.handleFocus(this.props.list)}
                                    onBlur = {this.props.handleBlur} />
                        </CSSTransition>
                        <i className={this.props.focused ? 'focused iconfont':'iconfont' }>&#xe60f;</i>
                        <SearchInfo className = { (this.props.focused || this.props.mouseIn) ? 'focused':''} onMouseOver={this.props.handleMouseEnter} onMouseLeave={this.props.handleMouseLeave} >
                            <SearchInfoTitle>热门搜索
                                <SearchInfoSwitch onClick={()=>this.props.handleUpdateList(this.props.page) }> <i className='iconfont'>&#xe606;</i>换一换</SearchInfoSwitch>
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
        nightMode : state.get('header').get('nightMode'),
        fontDefault : state.get('header').get('fontDefault'),
        AaMouseIn : state.get('header').get('AaMouseIn'),
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
        handleFocus(list){
            if(list.size === 0)
                dispatch(actionsCreator.getList());
            
            dispatch(actionsCreator.searchFocus());
        },
        handleBlur(){
            dispatch(actionsCreator.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionsCreator.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionsCreator.mouseLeave());
        },
        handleUpdateList(e){
            dispatch(actionsCreator.updateList(e));
        },
        handleNightModeChange(){
            dispatch(actionsCreator.changeNightMode());
        },
        handleChangeDefaultFont(){
            dispatch(actionsCreator.changeDefaultFont());
        },
        handleWidgetPopup(){
            dispatch(actionsCreator.changeWidgetPopup());
        },
        handleMouseEnterAa(){
            dispatch(actionsCreator.mouseEnterAa());
        },
        handleMouseLeaveAa(){
            dispatch(actionsCreator.mouseLeaveAa());
        },

    }
}

export default connect( mapStateToProps, mapDispathToProps)(Header);