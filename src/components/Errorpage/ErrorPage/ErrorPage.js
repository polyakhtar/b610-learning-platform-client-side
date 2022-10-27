import React from 'react';

const ErrorPage = () => {
    return (
        <div className='flex flex-col min-h-[700px] justify-center items-center'>
          <h1 className='text-4xl font-semibold text-red-600 mb-4'>Ops! An Error Occured!</h1>  
          <h1 className='text-3xl font-semibold text-red-600'>Route Not Found</h1>
        </div>
    );
};

export default ErrorPage;