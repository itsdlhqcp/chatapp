import React from 'react';
import { useRouteMatch } from 'react-router';
import {Route, Switch} from "react-router-dom";
import { Grid,Col, Row } from 'rsuite';
import Sidebar from '../../components/Sidebar';
import { RoomsProvider } from '../../context/rooms.context';
import { useMediaQuery } from '../../misc/custom-hooks';
import Chat from './Chat';

const Home = () => {
const isDesktop = useMediaQuery('(min-width: 992px)');
const { isExact } = useRouteMatch();

const canRenderSidebar = isDesktop || isExact;




    return (
     <RoomsProvider> 
    <Grid fluid className="h-100">
        
        <Row className="h-100">
            {canRenderSidebar &&
            <Col xs={24} md={8} className="h-100">
            <Sidebar />
             </Col>
             }
            

          <Switch>
              <Route exact path="/chat/:chatId">
                  <Col xs={24} md={16} className="h-100">
                  <Chat />
                  </Col>

              </Route>
              <Route>
                  {isDesktop && (

                   <Col xs={24} md={16} className="h-100">
                      <h6 className="test-center mt-page">Please select the chat</h6>
                  </Col>
                  )}
              </Route>
             </Switch>
         </Row>
    </Grid>
    </RoomsProvider>  
   )
}

export default Home;
