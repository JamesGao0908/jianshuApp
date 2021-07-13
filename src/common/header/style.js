import styled from 'styled-components';
import logoPath from '../../statics/nav-logo.png';

export const HeaderWrapper = styled.div`
    position:relative;

    height:56px;
    border-bottom : 1px solid #f0f0f0;
`

export const Logo = styled.a` 
    position: absolute;
    top 0;
    left 0;
    display : block;
    height : 58px;
    width: 100px;
    background : url(${logoPath});
    background-size: contain;
`
export const Nav = styled.div`
    width:960px;
    height:100%;
    padding-right:70px;
    box-sizing:border-box;
    margin: 0 auto;
`
export const NavItem = styled.div`
    line-height:56px;
    padding: 0 15px;
    color:#333;
    font-size:17px;

    &.left{
        float:left;
    }

    &.right{
        float:right;
        color:#969696;
    }

    &.active{
        color:#ea6f5a;
    }

    .iconfont{
        cursor:pointer;
    }
`
export const NavItemAa = styled.div`
    position: absolute;
    top: 56px;
    z-index: 1;
    padding: 20px 20px 20px 24px;
    margin-left: -80px;
    min-width: 235px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    filter: drop-shadow(0 0 8px rgba(0,0,0,.1));
    -webkit-filter: drop-shadow(0 0 8px rgba(0,0,0,.1));
    box-sizing: border-box;

    display:none;
    &.focused{
        display:block;
    }

    // 夜间模式的标签
    div.meta{
        padding-left: 4px;
        margin-right: 16px;
        font-size: 14px;
        color: #969696;
        line-height: 40px;
        vertical-align: middle;
        display: inline-block;
        box-sizing:border-box;

        .iconfont{
            position: relative;
            top: 2px;
            margin-right: 5px;
            font-size: 17px;
            font-family: iconfont!important;
            font-size: inherit;
            font-style: normal;
            font-weight: 400!important;
            -webkit-font-smoothing: antialiased;
        }
        span{
            vertical-align: middle;
        }
    }

    div.switch{
        font-size: 0;
        letter-spacing: -4px;
    }

    div.day-night-group{
        width: auto;
        vertical-align: middle;
        display: inline-block;
    }

    div.font-family-group {
        margin-bottom: 10px;
        
    }

    a.switch-btn{
        width: 49%;
        text-align: center;
        font-size: 14px;
        -webkit-letter-spacing: 0!important;
        -moz-letter-spacing: 0!important;
        -ms-letter-spacing: 0!important;
        letter-spacing: 0!important;
        color: #969696;
        border: 1px solid #e5e5e5;
        vertical-align: middle;
        cursor: pointer;
        -webkit-text-decoration: none;
        text-decoration: none;
        background-color: transparent;
        display:inline;

        &.active{
            color: #fff;
            background-color: #6dacf4;
            border-color: #6dacf4;
            box-shadow: inset 0 0 6px rgb(0 0 0 / 10%);
        }
    }
    a.switch-btn:first-child{
        padding: 10px 13px 10px 17px;
        border-radius: 20px 0 0 20px;
        border-right: none;
    }
    a.switch-btn:last-child{
        padding: 10px 17px 10px 13px;
        border-radius: 0 20px 20px 0;
        border-left: none;
    }
    a.font-song{
        font-family: Georgia,Times New Roman,Times,Songti SC,serif;
    }
    a.font-hei{
        font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    }
`
export const SearchWrapper = styled.div`
    position:relative;
    float:left;

    .iconfont{
        position:absolute;
        right : 5px;
        bottom : 5px;
        width:30px;
        border-radius:15px;
        line-height: 30px;
        text-align:center;

        &.focused{
            background:# 777;
            color: #fff;
        }
    }
    
    .slide-enter{
        transition:all .4s ease-out;
    }
    .slide-enter-active{
        width: 280px;
    }
    .slide-exit{
        transition:all .4s ease-out;
    }
    .slide-enter-active{
        width: 160px;
    }

`
export const NavSearch = styled.input.attrs({ placeholder : '搜索' })`
    width:160px;
    height:38px;
    box-sizing:border-box;
    padding: 0 30px 0 20px;
    border:none;
    border-radius:19px;
    outline:none;
    margin-top:9px;
    margin-left:20px;
    background:#eee;
    font-size: 14px;

    color : #666;

    &::placeholder {
        color:#999;
    }

    &.focused{
        width:280px;
    }
`
export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:50px;
`
export const Button = styled.button`
    float:right;
    margin-top:9px;
    margin-right : 20px;
    padding 0 20px;
    line-height:38px;
    border-radius:19px;
    border: 1px solid #ec6149;

    &.reg{
        color:#ec6149;
        background:white;
    }
    &.writing{
        color:#fff;
        background:#ec6149;
    }
`
export const SearchInfo = styled.div`
    position:absolute;
    left:0;
    top:56px;
    width: 240px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    padding: 0 20px;
    margin-left: 20px;

    display:none;

    &.focused{
        display:block;
        z-index: 1;
        background:white;
    }
`
export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`
export const SearchInfoSwitch = styled.a`
    float:right;
    font-size:13px;
    cursor: pointer;
    
    .iconfont{
        float:left;
        position: relative;
    }

`
export const SearchInfoItem  = styled.a`
    display:block;
    float:left;
    line-height:20px;
    padding:0 5px;
    font-size:12px;
    border:1px solid #ddd;
    color:#787878;
    border-radius:2px;
    margin-right:10px;
    margin-bottom:10px;
`
export const SearchInfoList = styled.div`
    overflow:hidden;
`