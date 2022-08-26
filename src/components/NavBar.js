import React from 'react';

import Select from 'react-select';

const options = [
  { value: 'All', label: 'All' },
  { value: 'Completed', label: 'Completed' },
  { value: 'Uncompleted', label: 'Uncompleted' },
];

const NavBar = ({ unCompletedTodos, selectedOption, onChange }) => {

    if(!unCompletedTodos) return <h2 className='setTodo'>set your today todos!</h2>;
    return ( 
        <header>
            <span>{unCompletedTodos}</span><h3>Left</h3>
            {/* <select onChange={onSelect} value={status}>
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="UnCompleted">UnCompleted</option>
            </select> */}
            <Select onChange={onChange} value={selectedOption} options={options} className="select" />
        </header>
     );
}
 
export default NavBar;