import React from 'react';
import CreateRoomBtnModal from './dashboard/CreateRoomBtnModal';
import DashboardToggle from './dashboard/DashboardToogle';
import ChatRoomList from './rooms/ChatRoomList';

const Sidebar = () => {
    return (
        <div className="h-100 pt-2">

            <div>
               <DashboardToggle />
               <CreateRoomBtnModal />
            </div>

            <ChatRoomList />

        </div>
    );
};

export default Sidebar
