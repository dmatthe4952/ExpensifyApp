import moment from 'moment';
export default [
    {
        id: 1,
        description: "First expense",
        amount: 10000,
        createdAt: moment(0),
        note: "note 1"
    },
    {
        id: 2,
        description: "Second expense bill",
        amount: 20000,
        createdAt: moment(0).subtract(1,'day').valueOf(),
        note: "note 2"
    },
    {
        id: 3,
        description: "Third expense bill",
        amount: 30000,
        createdAt: moment(0).add(1,'day').valueOf(),
        note: "note 3"
    }
];
