import React, { useState,useCallback } from 'react';
import { Alert, Icon, InputGroup } from 'rsuite';
import { ReactMic } from 'react-mic';
import { useParams } from 'react-router';
import { storage } from '../../../misc/firebase';

const AudioMsgBtn = ({afterUpload}) => {

    const {chatId} = useParams();
    const [isRecording, setIsRecording] = useState(false);
    const [isUploading, setIsUploading] = useState(false);

const onClick = useCallback(() => {
    setIsRecording(P => !P);
}, [])




const onUpload = useCallback(async(data) => {
 setIsUploading(true)
    try {

        const snap = await storage
            .ref(`/chat/${chatId}`)
            .child(`audio_${Date.now()}.mp3`)
            .put(data.blob,
              { cacheControl: `public, max-age=${ 3600 * 24 * 3 }`,
          });

          const file = {
            
                contentType: snap.metadata.contentType,
                name: snap.metadata.name,
                url: await snap.ref.getDownloadURL(),
              
          };
          setIsUploading(false)
          afterUpload([file])

    } catch (error){
        setIsUploading(false)
        Alert.error(error.message)
    }

}, [afterUpload, chatId]);





    
  return (  <InputGroup.Button onClick={onClick} disabled={isUploading} className={isRecording ? 'animate-blink' : ''}>
    <Icon icon="microphone"/>
    <ReactMic
          record={isRecording}
          className="d-none"
          mimeType='audio/mp3'
          strokeColor="#000000"
          backgroundColor="#FF4081"
          onStop={onUpload}
           />
    </InputGroup.Button>
    
    
    );
  
};

export default AudioMsgBtn;
