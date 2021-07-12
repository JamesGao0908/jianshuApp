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

    display:block;

    &.focused{
        display:block;
        z-index: 1;
    }
`

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`;

export const SearchInfoSwitch = styled.a`
    float:right;
    font-size:13px;

    .iconfont{
        float:left;
        position: relative;
    }

`;

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