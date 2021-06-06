import React, {useState, useEffect} from 'react';
import FilterSelect from "../shared/FilterSelect";
import PaginatedList from "../shared/PaginatedList";
import {useIssuesService} from "../../services/issue/useIssueList.service";
import {useSelector} from "react-redux";
import {AppState} from "../../types/appState.types";
import {IssueState} from "../../types/issue.types";
import {Row, Col, message } from 'antd';
import {usePagination} from "../../utils/pagination.utils";
import {graphPageSize} from "../../constants/apollo.constants";
import s from './index.module.scss';
import {issuesStatusFilters} from "../../constants/issues.constants";
import {IssueListItem} from "./components/IssueListItem";

export const IssueList: React.FC = () => {
    const defaultIssueFilter = ["OPEN"];
    const issues = useSelector<AppState, IssueState>(state => state.issues);
    const {fetch} = useIssuesService();
    const {
        current,
        total,
        onChange,
        after,
    } = usePagination({
        pageSize:graphPageSize,
        pageInfo:issues.pageInfo,
        loadedItemsCount:issues.data?.length
    });

    const [issueStatusFilter, setIssueStatusFilter] = useState<Array<string>>(defaultIssueFilter);
    const onFilterChange=(value:Array<string>)=>{
        setIssueStatusFilter(value);
    }

    useEffect(()=>{
            fetch({after, issueStates:issueStatusFilter,first:graphPageSize},false);
    },[issueStatusFilter]);
    useEffect(()=>{
        fetch({after, issueStates:issueStatusFilter,first:graphPageSize},true);
    },[after]);
    useEffect(()=>{
        if(issues.error){
            message.error(issues.error);
        }
    },[issues.error]);

    return (
        <Row align="middle" justify="center" style={{paddingTop: '5%'}} className={s.issueList}>
            <Col>
               <FilterSelect
                   selectStyle={{width:'100%'}}
                   onChange={onFilterChange}
                   defaultSelectValue={defaultIssueFilter}
                   filterOptions={issuesStatusFilters}
               />
                <PaginatedList
                    header={<div className={s.listHeader} >Git issues</div>}
                    style={{width: "85vw",minWidth:745, height:500}}
                    itemLayout="horizontal"
                    size="small"
                    pagination={{
                        onChange,
                        pageSize:graphPageSize,
                        total,
                        current,
                        showSizeChanger: false,
                        showQuickJumper: false,
                        simple: true,
                    }}
                    dataSource={issues.loading? []:issues?.data}
                    loading={issues.loading}
                    bordered={true}
                    renderItem={item=><IssueListItem item={item} />}
                />
            </Col>
        </Row>


    );
}