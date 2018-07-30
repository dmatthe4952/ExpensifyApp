import authReducer from '../../reducers/auth';
import { login } from '../../actions/auth';

test('it should handle login request', () => {
    const action = {
        type: 'LOGIN',
        uid: 'abcdefg890'
    };
    const state = authReducer({}, action);
    expect(state).toEqual({uid:action.uid})
});

test('it should handle logout request', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({}, action);
    expect(state).toEqual({})
});