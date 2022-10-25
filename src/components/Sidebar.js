import React, { useEffect, useState, useRef } from 'react';
import { Divider } from 'rsuite';
import CreateRoomBtnModal from './dashboard/CreateRoomBtnModal';
import DashboardToggle from './dashboard/DashboardToogle';
import ChatRoomList from './rooms/ChatRoomList';


const Sidebar = () => {
    const topSidebarRef = useRef();
    const [height, setHeight] = useState(0);

    useEffect(() =>{
        if (topSidebarRef.current){
            setHeight(topSidebarRef.current.scrollHeight);
        }
    }, [topSidebarRef]);
    return (
        <div className="h-100 pt-2" color='white'>

            <div ref={topSidebarRef}>
               <DashboardToggle />
               <CreateRoomBtnModal />
               <Divider className='joinconv'>Join Conversation</Divider>
            </div>
        
            <ChatRoomList aboveElHeight={height} />
            
        </div>
        
    );
};

export default Sidebar;
