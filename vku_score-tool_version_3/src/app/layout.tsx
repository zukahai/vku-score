import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import ThemeProviderWrapper from '@/core/ThemeProviderWrapper';
import Header from '@/core/layout/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';

const roboto = Roboto({
    weight: '400',
    subsets: ['vietnamese'],
});

export const metadata: Metadata = {
    title: 'VKU Score',
    description: 'Hỗ trợ tính điểm GPA và gợi ý học cải thiện cho sinh viên VKU',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <html lang='en'>
        <body className={`${roboto.className} bg-gray-100`}>
        <ThemeProviderWrapper>
            <Header />
            <main className='p-4'>
                {children}
                <ToastContainer />
            </main>
        </ThemeProviderWrapper>
        </body>
        </html>
    );
};

export default RootLayout;
