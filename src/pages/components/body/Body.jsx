import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Body() {
    return (
        <div className="overflow-y-auto flex-1 space-y-4 bg-black w-full">
           <Outlet />
        </div>
    );
}
