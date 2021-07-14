import styled from "styled-components";

export const BoardDiv = styled.div`
    margin-top: -4px;
    padding-bottom: 4px;
    min-height: 228px;

    padding-top:45px;

    a{
        cursor: pointer;

        img{
            width: 100%;
            min-height: 50px;
            margin-bottom: 6px;
            border-radius: 4px;
        }
    }

`
export const QrCode = styled.a`

    margin-bottom: 30px;
    padding: 10px 22px;
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;

    
    float: left;
    box-sizing: unset;

    img{
        width: 60px;
        height: 60px;
        opacity: .85;
    }

    div.info{
        display: inline-block;
        vertical-align: middle;
        margin-left: 7px;
        
        div.title{
            font-size: 15px;
            color: #333;
        }

        div.description{
            margin-top: 4px;
            font-size: 13px;
            color: #999;
        }

    }
    
`
export const RecommendedAuthorWrap = styled.div`
    display:block;

    .recommended-authors{
        margin-bottom: 20px;
        padding-top: 0;
        font-size: 13px;
        text-align: center;
    }
`
export const Title = styled.div`
    text-align: left;

    span{
        font-size: 14px;
        color: #969696;
    }

    a.page-change{
        float: right;
        display: inline-block;
        font-size: 14px;
        color: #969696;

        .iconfont{
            display: inline-block;
            line-height: 1;
            transition: .5s ease;

            transform: rotate(0deg);
        }     
    }
`;

export const List = styled.ul`

    margin: 0 0 20px;
    text-align: left;
    list-style: none;
    padding-left: 0;

    li{
        margin-top: 15px;
        line-height: 20px;
        display: list-item;
        text-align: -webkit-match-parent;
        a{
            cursor: pointer;

            img{
                width: 100%;
                height: 100%;
                border: 1px solid #ddd;
                border-radius: 50%;
            }
        }

        a.avatar{
            float: left;
            width: 48px;
            height: 48px;
            margin-right: 10px;
        }

        a.follow{
            float: right;
            margin-top: 5px;
            padding: 0;
            font-size: 13px;
            color: #42c02e;

            .iconfont{
                position: inherit;
                width: inherit;
                height: inherit;
                font-size: 13px;
            }
        }

        a.name{
            padding-top: 5px;
            margin-right: 60px;
            font-size: 14px;
            display: block;
        }

        p{
            margin-top: 2px;
            font-size: 12px;
            color: #969696;
            margin: 0 0 10px;
        }
    }
    
`;
