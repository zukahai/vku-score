import React, { useCallback, useEffect, useState } from 'react';
import { TextField, TextFieldProps } from '@mui/material';

interface DebouncedInputProps extends Omit<TextFieldProps, 'onChange'> {
    debounce?: number;
    onChange: (value: string) => void;
}

const DebouncedInputCustom: React.FC<DebouncedInputProps> = ({ debounce = 300, onChange, value: initialValue, ...props }) => {
    const [value, setValue] = useState<string>(initialValue as string);

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }, []);

    useEffect(() => {
        const handler = setTimeout(() => {
            onChange(value);
        }, debounce);

        return () => {
            clearTimeout(handler);
        };
    }, [value, debounce, onChange]);

    useEffect(() => {
        setValue(initialValue as string);
    }, [initialValue]);

    return <TextField {...props} value={value} onChange={handleChange} />;
};

export default DebouncedInputCustom;
