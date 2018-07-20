import React from 'react';
import { connect } from 'react-redux';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';
import {DateRangePicker} from 'react-dates';

export class ExpenseListFilters extends React.Component {
    state={
        calendarFocused: null
    }

    onDatesChange = ({startDate, endDate})=>{
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusChange = (calendarFocused)=>{
        this.setState(() =>({calendarFocused}))
    }
    onTextFilterChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }
    onSortByFilterChange = (e) => {
        if (e.target.value === 'date'){
            this.props.sortByDate();
        } else  if (e.target.value === 'amount'){
            this.props.sortByAmount();
        }
    }
    render(){
        return (
            <div>
                <span>
                Filter:
                <input
                    type='text'
                    value={this.props.filters.text}
                    onChange={this.onTextFilterChange}/>
                </span>
                <span>
                SortBy:
                <select 
                    value={this.props.filters.sortBy}
                    onChange={this.onSortByFilterChange}>
                    <option value='date' >Date</option>
                    <option value='amount' >Amount</option>
                </select>
                </span>
                <span>
                DateRange:
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={()=>{false}}
                    />
                </span>
            </div>
        )
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setStartDate: (startDate)=>(dispatch(setStartDate(startDate))),
        setEndDate: (endDate)=>(dispatch(setEndDate(endDate))),
        setTextFilter: (text)=>(dispatch(setTextFilter(text))),
        sortByDate: ()=>(dispatch(sortByDate())),
        sortByAmount: ()=>(dispatch(sortByAmount()))
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters);