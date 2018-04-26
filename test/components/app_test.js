import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// use 'describe' to group together similar tests
describe('App', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(App);
    })

    it('shows correct text', () => {
        expect(component).to.contain('React simple starter');
    });

    it('shows comment box', () => {
        expect(component.find('.comment-box')).to.exist;
    })

    it('shows comment list', () => {
        expect(component.find('.comment-list')).to.exist;
    })
});
