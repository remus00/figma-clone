import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import { Room } from './Room';
import './globals.css';

const workSans = Work_Sans({
    subsets: ['latin'],
    variable: '--font-work-sans',
    weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
    title: 'Figma Clone',
    description: 'A minimalist figma clone with fabric.js',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn('bg-primary-grey-200', workSans.className)}>
                <Room>{children}</Room>
            </body>
        </html>
    );
}
