import { memo, useEffect, useState } from 'react';

import type { TextFieldProps } from '@mui/material';
import { TextField } from '@mui/material';

const DebouncedInput = ({
                            value: initialValue,
                            onChange,
                            debounce = 500,
                            ...props
                        }: {
    value: string | number
    onChange: (value: string | number) => void
    debounce?: number
} & Omit<TextFieldProps, 'onChange'>) => {
    // States
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value);
        }, debounce);

        return () => clearTimeout(timeout);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return <TextField {...props} value={value} onChange={e => setValue(e.target.value)} size='small' />;
};

export default memo(DebouncedInput);
