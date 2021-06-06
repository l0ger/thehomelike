import React from 'react';
import {List, Badge,Row} from 'antd';
import {Issue} from "../../../../types/issue.types";
import s from './index.module.scss';

interface IssueListItemProps {
    item: Issue
}

export const IssueListItem: React.FC<IssueListItemProps> = (props) => {
    const {
        item
    } = props;
    return (
        <List.Item key={item.title} className={s.issueItemList}>
            <a href={item.url}>{item.title}</a>
            <Row>
            {
                item.labels?.edges.map((label, i) =>
                    <Badge
                        key={i+label.node.name}
                        count={`${label.node.name}`}
                        style={{backgroundColor: `#${label.node.color}`,marginRight:4}}
                    />
                )
            }
            </Row>
        </List.Item>
    )
}