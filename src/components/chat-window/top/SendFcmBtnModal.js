import React, { useCallback, useState,useRef} from 'react';
import { useParams } from 'react-router';
import { Button, ControlLabel, FormControl, FormGroup, Icon, Modal,Form, Schema, Alert } from 'rsuite';
import { useModalState } from '../../../misc/custom-hooks';
import { functions } from '../../../misc/firebase';




const { StringType} = Schema.Types;

const model = Schema.Model({
    title: StringType().isRequired('Title is required'),
    message: StringType().isRequired('Message is required'),
})

const INITIAL_FORM = {
    title: '',
    message:''
}

const SendFcmBtnModal = () => {
    const {chatId} = useParams();
    const { isOpen, open,close} = useModalState();
    const [formValue, setFormvalue] = useState(INITIAL_FORM);
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef();

    const onFormChange = useCallback(value =>{
        setFormvalue(value);
    }, []);

    const onSubmit = async () => {
      if(!formRef.current.check()){
          return;
      }

      setIsLoading(true);

      try{
          const sendFcm = functions.httpsCallable('sendFcm');
          await sendFcm({chatId, ...formValue});

          setIsLoading(false);
          setFormvalue(INITIAL_FORM);
          close();

          Alert.info('Notification sented', 7000);

      } catch (error) {
          Alert.error(error.message, 7000);

      }

     

      
    };
  return <>
    <Button appearance='primary' size='xs' onClick={open}>
        <Icon icon="podcast" /> Broadcast message
    </Button>
      
    <Modal show={isOpen} onHide={close}>
        <Modal.Header>
            <Modal.Title>Send notification to room users</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form fluid onChange={onFormChange} 
            formValue={formValue}
             model={model} ref={formRef}>

               <FormGroup>
                   <ControlLabel>Title</ControlLabel>
                   <FormControl name="title" placeholder="Enter message title..."/>
               </FormGroup>
               <FormGroup>
               <ControlLabel>Message</ControlLabel>
               <FormControl componentClass="textarea" rows={5} name="message"
                placeholder="Enter notification message..."/>
               </FormGroup>

            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button block appearance="primary" onClick={onSubmit} disabled={isLoading}>
                Publish message alert
            </Button>
        </Modal.Footer>

    </Modal>




  </>;
};
export default SendFcmBtnModal;
