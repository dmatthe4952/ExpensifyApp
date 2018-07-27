import moment from 'moment';
export default [
    {
        id: '1',
        description: "Gum",
        amount: 195,
        createdAt: moment(0).valueOf(),
        note: "note 1"
    },
    {
        id: '2',
        description: "Rent",
        amount: 109500,
        createdAt: moment(0).subtract(1,'day').valueOf(),
        note: "February Rent"
    },
    {
        id: '3',
        description: "Credit Card",
        amount: 4500,
        createdAt: moment(0).add(1,'day').valueOf(),
        note: "note 3"
    }
];
