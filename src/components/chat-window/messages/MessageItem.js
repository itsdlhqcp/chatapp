import React from 'react';
import TimeAgo from 'timeago-react';
import PresenceDot from '../../PresenceDot';
import ProfileAvatar from '../../ProfileAvatar';
import ProfileInfoBtnModal from './ProfileInfoBtnModal';

const MessageItem = ({message}) => {

    const { author, createdAt, text } = message;

  return <li className='padded mb-1px'>

      <div className='d-flex align-items-center  font-bolder mb-1px'>
          <PresenceDot uid={author.uid} />
          <ProfileAvatar src={author.avatar} name={author.name} className="m1-1" size="xs" />
          <span className='ml-2'>{author.name}</span>
          <ProfileInfoBtnModal profile={author} appearance="btn " />
           <TimeAgo 
      datetime={createdAt} 
      className="font-normal text-black-45 ml-2"
      />

      </div>

      <div>
          <span className='word-breal-all'>{text}</span>
      </div>
  </li>
};

export default MessageItem;
