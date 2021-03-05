import { configure } from 'enzyme';
// To mount works in React 17.
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });