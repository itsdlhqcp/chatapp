import React, { memo } from 'react';
import { Button } from 'rsuite';
import TimeAgo from 'timeago-react';
import { useCurrentRoom } from '../../../context/current-room.context';
import { useHover, useMediaQuery } from '../../../misc/custom-hooks';
import { auth } from '../../../misc/firebase';
import PresenceDot from '../../PresenceDot';
import ProfileAvatar from '../../ProfileAvatar';
import IconBtnControl from './IconBtnControl';
import ProfileInfoBtnModal from './ProfileInfoBtnModal';
import ImgBtnModal from './ImgBtnModal';


const renderFileMessage = (file) => {


    if(file.contentType.includes('image')) {
  return (
     <div className="height-220 mw-100">
    <ImgBtnModal src={file.url} fileName={file.name} />
  </div>
  );
}



   if(file.contentType.includes('video')) {

  return ( 
        
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <video controls className='height-220 mw-100'>
    <source src={file.url} type="audio/mp3" />
    video element unsupported
  </video>
  
  );
}
  

if(file.contentType.includes('audio')) {
  // eslint-disable-next-line jsx-a11y/media-has-caption
  return ( <audio controls className='mw-100'>
    <source src={file.url} type="audio/mp3" />
    Audio element unsupported
  </audio>
  );
}

  return <a href={file.url}>Download {file.name} </a>;
};


const MessageItem = ({message, handleAdmin, handleLike,handleFire,handleDelete}) => {

    const { author, createdAt, text,file,likes,likeCount,fires,fireCount } = message;

    const [selfRef,isHovered]  = useHover();
    const isMobile = useMediaQuery(('(max-width: 992px)'));

    const isAdmin = useCurrentRoom(v => v.isAdmin);
    const admins = useCurrentRoom(v => v.admins);

    const isMsgAuthorAdmin = admins.includes(author.uid);
    const isAuthor = auth.currentUser.uid === author.uid;
    const canGrantAdmin = isAdmin && !isAuthor;

    const canShowIcons = isMobile || isHovered;
    const isLiked = likes && Object.keys(likes).includes(auth.currentUser.uid);
    const isFired = fires && Object.keys(fires).includes(auth.currentUser.uid);

    const timeLimit = 60000 * 20;
    const timeDifferenceMs = new Date().getTime() - new Date(message.createdAt).getTime();
    const cantDeleteAnymore = timeDifferenceMs <= timeLimit;




  return (
    
       <li className={  `padded mb-1px cursor-pointer ${isHovered ? 'bg-black-02' : ''}`} ref={selfRef}>
 <div className='msgbox'>
      <div className='msghead d-flex align-items-center  font-bolder mb-1'>
          <PresenceDot uid={author.uid} />

          <ProfileAvatar src={author.avatar}
           name={author.name} 
           className="m1-1" 
           size="xs"
            />

           

          <ProfileInfoBtnModal profile={author}
           appearance="link" className="p-0 ml-1 text-black"
          >

          {canGrantAdmin && (
        <Button block onClick={() => handleAdmin(author.uid)} color='blue'>

         {isMsgAuthorAdmin
          ? 'Dismiss as admin '
           : 'Take as group admin'}
          </Button>
          )}
          </ProfileInfoBtnModal>


      <TimeAgo 
      datetime={createdAt} 
      className="font-normal text-black-45 ml-2"
      size="xs"
      />

         <IconBtnControl
         {...(isLiked ? { color: 'red'} : {})}
         isVisible={canShowIcons}
         iconName="heart"
         tooltip="Like this message" 
         onclick={()=> handleLike(message.id)}
         size="xs"
         badgeContent={likeCount}
         />

         <IconBtnControl
         {...(isFired ? { color: 'orange'} : {})}
         isVisible={canShowIcons}
         iconName="fire"
         tooltip="Fire this message" 
         onclick={()=> handleFire(message.id)}
         size="xs"
         badgeContent={fireCount}
         />
         
         
         

        

         {cantDeleteAnymore && <div>

         { isAuthor && ( 
         <IconBtnControl
         isVisible={canShowIcons}
         iconName="close"
         tooltip="Delete this message" 
         onclick={()=> handleDelete(message.id, file)}
         size="xs"
         />


         )}
         </div>}




      </div>

      <div>{isAuthor ? <div className='authormessage'>
        {text && <span className='word-breal-all font-bolder text-black-200 rs-placeholder-paragraph-graph-circle placement-right'>{text}</span> }
          { file && renderFileMessage(file)}
      </div> : <div className='recevedmessage'>
        {text && <span className='word-breal-all font-bolder text-black-200 rs-placeholder-paragraph-graph-circle placement-right'>{text}</span> }
          { file && renderFileMessage(file)}
      </div>}</div>




      
      </div>
  </li>
  )
};

export default memo(MessageItem);
