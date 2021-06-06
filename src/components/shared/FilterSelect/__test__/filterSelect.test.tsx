import React from 'react';
import { render, screen } from '@testing-library/react';
import FilterSelect from "../index";
const filterOptions = [
    {
        label:'filter item1',
        value:'FILTER1',
        key:'filter1'
    },
    {
        label:'filter item2',
        value:'FILTER2',
        key:'filter2'
    },
]

describe('FilterSelect', () => {
    it('should render all options passed', () => {
      render(<FilterSelect
            onChange={()=>{}}
            filterOptions={filterOptions}
         />);

         const filter1 = screen.queryAllByText("filter item1");
         const filter12 = screen.queryAllByText("filter item2");
         expect(filter1).toBeDefined();
         expect(filter12).toBeDefined();
    });
});
