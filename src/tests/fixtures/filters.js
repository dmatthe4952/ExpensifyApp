import moment from 'moment';
const filters =
    {
        text: "",
        sortBy: "date",
        startDate: undefined,
        endDate: undefined
    };

const altFilters = 
    {
        text: "bill",
        sortBy:"amount",
        startDate: moment("2018-06-30"),
        endDate: moment('2018-07-30')
    };

export {filters, altFilters};