import MarkdownPreview from '@uiw/react-markdown-preview';
import { readme2 } from '@/common/data';

const Tutorial: React.FC = () => {
    return (
        <MarkdownPreview wrapperElement={{
            'data-color-mode': 'light',
        }} source={readme2} style={{ padding: 16 }} />
    );
};

export default Tutorial;