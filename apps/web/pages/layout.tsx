import React from 'react';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <header>
                <h1>ZARA</h1>
                <nav>
                    <Link href="/web"/>
                    <Link href="/docs"/>
                </nav>
            </header>
            {children}
        </div>
    );
}
