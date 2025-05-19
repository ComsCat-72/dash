import React, { useState } from 'react';
import { ArrowRight, Home, Inbox, BarChart2, MessageSquare, Settings, Search, Filter, ChevronDown, Plus, List, Columns, Calendar, Clipboard, Users, MoreHorizontal, GripVertical, Paperclip, MessageCircle, CheckSquare } from 'lucide-react';
import { AppContext, ContextProvider } from '../AppContextsAndData/ContextData';
import { useContext } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Topbar from '../components/topbar/Topbar';
import ContentHeader from '../components/secondHeader/ContentHeader';
import Body from '../components/body/Body';

export default function App() {
    const {user} = useContext(AppContext);
    console.log(user)
    return (
       
            <div className="h-screen w-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 relative flex items-center justify-center font-['Inter',_sans-serif]">
                <div className="bg-white rounded-xl shadow-2xl p-2  w-[90%] h-[90%]">
                    <Topbar />
                    <div className="flex h-[90%]">
                        <Sidebar />
                        <div className="flex-1 p-4 overflow-y-auto">
                            <ContentHeader />
                            <Body />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                        </div>
                    </div>
                </div>
            </div>

       
    );
}
