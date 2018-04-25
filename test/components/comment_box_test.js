import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

// chai-jquery - google this
describe('CommentBox', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(CommentBox);
    });

    it('has correct class', () => {
        expect(component).to.have.class('comment-box');
    });

    it('has text area', () => {
        expect(component.find('textarea')).to.exist;
    });

    it('has button', () => {
        expect(component.find('button')).to.exist;
    });

    describe('textarea functionality', () => {
        beforeEach(() => {
            component.find('textarea').simulate('change', 'new comment');
        });

        it('shows entered text', () => {
            expect(component.find('textarea')).to.have.value('new comment');
        });

        it('clears input on submit', () => {
            component.simulate('submit');
            expect(component.find('textarea')).to.have.value('');
        });
    });
});
