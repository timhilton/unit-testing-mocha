import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
    let component;

    beforeEach(() => {
        const props = { comments: ['New Comment', 'Other New Comment', 'Third Comment']};
        component = renderComponent(CommentList, null, props);
    });

    it('shows <li> for each comment', () => {
        expect(component.find('li').length).to.equal(3);
    });

    it('shows all comments', () => {
        expect(component).to.contain('New Comment');
        expect(component).to.contain('Other New Comment');
        expect(component).to.contain('Third Comment');
    });
})
