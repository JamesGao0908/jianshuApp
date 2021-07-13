import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width:960px;
    margin: 0 auto;
    overflow: hidden;
    
    &.active{
        a, p{
            font-family: cursive;
        }
    }
`
export const HomeLeft = styled.div`
    display:flex;
    flex-direction: column;
    float:left;
    width: 650px;
    margin-left:15px;
    padding-top:30px;
`
export const ArticleContainer = styled.div`
    margin-top:15px;
`

export const ArticleList = styled.ul`
`

export const ArticleItem = styled.li`
    position:relative;
    width:100%;
    min-height:140px;
    margin: 0 0 15px;
    padding: 15px 2px 2px 0;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
    box-sizing: border-box;

    .wrap-img{
        position:absolute;
        top:50%;
        margin-top:-60px;
        right:0;
        height:100px;
        width:150px;

        .img-blur-done{
            width:100%;
            height:100%;
            border-raduis:4px;
            border: 1px soild #f0f0f0;
            vertical-aligin: middle;
        }
    }

    .content{
        padding-right: 165px;
        box-sizing: border-box;

        .title{
            display:inherit;
            margin: -7px 0 4px;
            font-size:18px;
            font-weight: 700;
            line-height:1.5;
            text-decoration:none;
        }

        .abstract{
            margin:0 0 8px;
            font-size:13px;
            line-height:24px;
            color:#999;
        }

        div.meta{
            padding-right:0!important;
            font-size:12px;
            font-weight:400;
            line-height:20px;

            box-sizing:border-box;

            span{
                box-sizing: border-box;
                margin-right: 10px;
                font-size: 12px;
                font-weight: 400;
                line-height: 20px;
                color:#b4b4b4;

                .iconfont{
                    font-family: iconfont!important;
                    font-size: inherit;
                    font-style: normal;
                    font-weight: 400!important;
                    -webkit-font-smoothing: antialiased;
                    box-sizing: border-box;
                }
            }
            a{
                margin-right:10px;
                color: #b4b4b4;
                cursor:pointer;
                text-decoration:none;
            }
            .jsd-meta{
                color:#ea6f5a !important;
            }
        }
    }
`

export const LoadMoreArticleButton = styled.a`
    display: block;
    cursor: pointer;
    width: 100%;
    margin: 30px auto 60px;
    padding: 10px 15px;
    text-align: center;
    font-size: 15px;
    border-radius: 20px;
    color: #fff;
    background-color: #a5a5a5;
`

export const HomeRight = styled.div`
    float:right;
    width : 240px;
`
