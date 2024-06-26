import React from 'react'
import { Alert, Button, Divider, Drawer } from 'rsuite';
import { useProfile } from '../../context/profile.context';
import { database } from '../../misc/firebase';
import EditableInput from '../EditableInput';
import AvatarUploadBtn from './AvatarUploadBtn';
import ProviderBlock from './ProviderBlock';
import { getUserUpdates } from '../../misc/helper';

const Dashboard = ({onSignOut}) => {

    const { profile } = useProfile();

    const onSave = async newData => {
        
        try{
             const updates = await getUserUpdates(profile.uid,
                 'name',
                  newData,
                  database
                  );

                 await database.ref().update(updates)

            Alert.success('Nickname has been updated', 4000);
        } catch (err) {
            Alert.error(err.message, 4000);
        }
    };

    return <>
    <Drawer.Header>
        <Drawer.Title>
           Dashboard
        </Drawer.Title>
    </Drawer.Header>

    <Drawer.Body>
       <h3>hey -{profile.name}</h3>
       <ProviderBlock />
       <Divider />
       <EditableInput
       name ="nickname"
       initialValue={profile.name}
       onSave={onSave}
       label={<h6 className='mb-2'>nickname</h6>}
        />
        <AvatarUploadBtn />
    </Drawer.Body>
    <Drawer.Footer>
        <Button oval className='bold' color='red' onClick={onSignOut} />
        Sign out
    </Drawer.Footer>
    </>
};

export default Dashboard;
