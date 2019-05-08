import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import App from './App';
configure({ adapter: new Adapter() });

describe('App', () => {
    it('should render title', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.type()).to.equal('div'); 
    })
})