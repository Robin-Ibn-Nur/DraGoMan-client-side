import React from 'react';

const LeftSideData = () => {
    return (

        <aside className="w-full p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100">
            <nav className="space-y-8 text-sm">
                <div className="space-y-2">
                    <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Getting Started</h2>
                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="#">Installation</a>
                        <a rel="noopener noreferrer" href="#">Plugins</a>
                        <a rel="noopener noreferrer" href="#">Migrations</a>
                        <a rel="noopener noreferrer" href="#">Appearance</a>
                        <a rel="noopener noreferrer" href="#">Mamba UI</a>
                    </div>
                </div>
            </nav>
        </aside>
    );
};

export default LeftSideData;