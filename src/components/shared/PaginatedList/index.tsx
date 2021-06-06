import React from 'react';
import {List, ListProps} from 'antd';
import s from "./index.module.scss";

export interface PaginatedListProps<T> extends ListProps<T> {
}

const PaginatedList: React.FC<PaginatedListProps<any>> = (props) => {
    return (
        <List
            className={s.list}
            {...props}
        />
    );
}

export default PaginatedList;