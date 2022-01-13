import "@testing-library/jest-dom";
import Adapter from 'enzyme-adapter-react-17-updated';
import Enzyme from "enzyme";

Enzyme.configure({ adapter: new Adapter() });