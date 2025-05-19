import React, { useContext } from 'react';
import { Search, Settings } from 'lucide-react';
import { AppContext } from '../../AppContextsAndData/ContextData';

export default function Topbar() {
    const { user } = useContext(AppContext);

    return (
        <div className="flex items-center justify-between p-2 border-b border-gray-200">
            <div className="flex items-center gap-1.5">
                <h2>Welcome, </h2>
                <span>
                    <code>
                        <i>
                            <b>{user}</b>
                        </i>
                    </code>
                </span>
            </div>
            <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-md w-1/2 text-center">
                app.example.com
            </div>
            <div className="flex items-center gap-2">
                <Search className="h-4 w-4 text-gray-400" />
                <Settings className="h-4 w-4 text-gray-400" />
            </div>
        </div>
    );
}
