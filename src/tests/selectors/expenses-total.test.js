import selectTotalExpenses from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses given', () => {
    const total = selectTotalExpenses([]);
    expect(total).toBe(0);
})
test('should calculate total of one expense', ()=>{
    const total = selectTotalExpenses([expenses[0]]);
    expect(total).toBe(195);
})
test('should calculate total of all expenses', ()=>{
    const total = selectTotalExpenses(expenses);
    expect(total).toBe(114195);
})

