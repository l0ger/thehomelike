import React from 'react';
import {Row, Col} from 'antd';
import {IssueList} from "../IssueList";
import s from './index.module.scss';
import HomeLikeLogo from '../../assets/images/homelike_1024x30.png';

export const TheHomeLike: React.FC = () => {
    return (
        <Row className={s.theHomeLike} align="middle" justify="center">
           <Col>
              <Row align="middle" justify="center">
                  <img src={HomeLikeLogo} alt={"homelike"} className={s.logo}/>
              </Row>
               <IssueList/>
           </Col>
        </Row>
    );
}

export default TheHomeLike;
