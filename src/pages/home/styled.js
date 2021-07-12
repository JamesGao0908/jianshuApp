import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width:960px;
    margin: 0 auto;
    overflow: hidden;
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
                margin-right:10px;
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


export const LoadMoreArticleButton = styled.button`
`

export const HomeRight = styled.div`
    float:right;
    width : 240px;
`
