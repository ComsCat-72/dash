import React from 'react';
import { Users, Plus, List, Columns, Calendar, Clipboard, MoreHorizontal } from 'lucide-react';

export default function ContentHeader() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center text-sm text-gray-600">
                    <span className="font-medium text-green-600">Marketing</span>
                    <span className="mx-1.5">/</span>
                    <span className="font-medium">Campaigns</span>
                    <span className="mx-1.5">/</span>
                    <span className="font-medium">Task</span>
                </div>
                <div className="flex items-center gap-2">
                    <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-md flex items-center">
                        Share <Users className="ml-1.5 h-3.5 w-3.5" />
                    </button>
                    <button className="text-xs bg-purple-600 hover:bg-purple-700 text-white px-3 py-1.5 rounded-md flex items-center">
                        New Task <Plus className="ml-1.5 h-3.5 w-3.5" />
                    </button>
                </div>
            </div>
            <div className="flex items-center gap-1 border-b border-gray-200">
                {['List', 'Board', 'Calendar', 'Whiteboard', 'Dashboard', 'Table'].map((view) => (
                    <button
                        key={view}
                        className={`px-3 py-2 text-sm font-medium rounded-t-md ${
                            view === 'List'
                                ? 'border-b-2 border-purple-600 text-purple-600'
                                : 'text-gray-500 hover:bg-gray-100'
                        }`}
                    >
                        {view === 'List' && <List className="inline mr-1.5 h-4 w-4" />}
                        {view === 'Board' && <Columns className="inline mr-1.5 h-4 w-4" />}
                        {view === 'Calendar' && <Calendar className="inline mr-1.5 h-4 w-4" />}
                        {view === 'Whiteboard' && <Clipboard className="inline mr-1.5 h-4 w-4" />}
                        {view}
                    </button>
                ))}
                <MoreHorizontal className="h-5 w-5 text-gray-400 ml-auto cursor-pointer" />
            </div>
        </div>
    );
}
