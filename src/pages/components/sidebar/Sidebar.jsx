import React from 'react';
import { Home, Inbox, BarChart2, MessageSquare } from 'lucide-react';

export default function Sidebar() {
    return (
        <div className="w-16 bg-slate-50 p-3 flex flex-col items-center gap-4 border-r border-gray-200">
            <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                <Home className="h-5 w-5" />
            </div>
            <Inbox className="h-5 w-5 text-gray-500 hover:text-purple-600 cursor-pointer" />
            <BarChart2 className="h-5 w-5 text-gray-500 hover:text-purple-600 cursor-pointer" />
            <MessageSquare className="h-5 w-5 text-gray-500 hover:text-purple-600 cursor-pointer" />
            <div className="mt-auto">
                <img
                    src="https://placehold.co/32x32/E0E0E0/B0B0B0?text=AV"
                    alt="User Avatar"
                    className="rounded-full"
                    onError={(e) =>
                        (e.target.src = 'https://placehold.co/32x32/E0E0E0/B0B0B0?text=AV')
                    }
                />
            </div>
        </div>
    );
}
