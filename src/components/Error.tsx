import React from 'react';

interface ErrorProps {
    error: string;

}

function Error({ error }: ErrorProps) {
    return (
        <p className='text-center text-red-600'>
            {error}
        </p>
    )
}

export default Error;