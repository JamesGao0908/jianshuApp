import React from 'react';
import imgQ1 from '../../../statics/imgs/Q1.png';
import imgQ2 from '../../../statics/imgs/Q2.png';
import imgQ3 from '../../../statics/imgs/Q3.png';
import imgQ4 from '../../../statics/imgs/Q4.png';
import qrImg from '../../../statics/imgs/qrcode.png';

import { BoardDiv, QrCode } from './components.js';

class Board extends React.Component{

    render(){
        return (
        <>
        <BoardDiv>
            <a target="_blank" href='/#'><img src={imgQ1} alt='Banner s daily'/></a>
            <a target="_blank" href='/#'><img src={imgQ2} alt='Banner s daily'/></a>
            <a target="_blank" href='/#'><img src={imgQ3} alt='Banner s daily'/></a>
            <a target="_blank" href='/#'><img src={imgQ4} alt='Banner s daily'/></a>
        </BoardDiv>
        <QrCode>
            <img src={qrImg} alt='qrcode'/>
            <div className="info">
                <div className="title">下载简书手机App<i className="iconfont ic-link"></i></div>
                <div className="description">随时随地发现和创作内容</div>
            </div>
        </QrCode>
        </>
        )
    }
}
export default Board;