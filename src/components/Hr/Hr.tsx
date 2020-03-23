/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import * as styles from './styles';
import { base } from './styles';
import { ExternalStyles } from '@src/utils/utils';

export interface HrProps {
    styles?: ExternalStyles<typeof styles>;
    className?: string;
    testId?: string;
}

const Hr: FC<HrProps> = props => {
    const { children, testId, className, styles: extenalStyles = {} } = props;

    function getBaseStyle() {
        return [base, extenalStyles.base];
    }

    return (
        <div css={getBaseStyle()} data-test={testId} className={className}>
            {children}
        </div>
    );
};

Hr.defaultProps = {
    testId: 'hr'
};

export default Hr;
