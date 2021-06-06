import React from 'react';
import {Input, Select} from 'antd';
import {SelectOption} from "../../../types/app.types";
import {SearchOutlined} from "@ant-design/icons";

const {Option} = Select;

interface FilterSelectProps {
    selectStyle?: React.CSSProperties,
    defaultSelectValue?: Array<string>;
    onChange: Function,
    placeholder?: string;
    filterOptions: Array<SelectOption>
}


const FilterSelect: React.FC<FilterSelectProps> = (props) => {
    const {
        selectStyle,
        onChange,
        filterOptions,
        defaultSelectValue,
        placeholder,
    } = props;

    const onChangeHandler = (value: Array<string | number> | string) => {
        onChange(value);
    }
    return (
        <Input.Group style={{paddingBottom: 5}} compact>
            <Select
                placeholder={placeholder}
                mode="multiple"
                style={selectStyle}
                defaultValue={defaultSelectValue}
                suffixIcon={<SearchOutlined style={{color: 'gray',fontSize:12}}/>}
                showArrow={true}
                onChange={onChangeHandler}>
                {
                    filterOptions.map((option, i) =>
                        <Option key={option.key || i} value={option.value}>{option.label}</Option>
                    )
                }
            </Select>
        </Input.Group>
    );
}

export default FilterSelect;