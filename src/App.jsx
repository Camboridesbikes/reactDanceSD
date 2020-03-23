import React, { Component } from 'react';
import logo from './logo.svg';
import { Container, Jumbotron, Table} from 'reactstrap';

import DanceCell from './components/DanceCell';


class App extends Component {
  constructor(){
    super();
    this.state = {
        dances : [
          {
            name: 'Tuesday Dance Jam',
            weekly: true,
            
            day: 'tuesdays',
            startTime: '8:30p',
            endTime: '10:30p',
            where: 'internet',
            link: 'www.dance',
            donation: true,
            cost: 10
          },
          {
            name: 'SD Ecstatic Dance',
            weekly: false,
            day: 'friday',
            startTime: '8:30p',
            endTime: '10:30p',
            where: 'internet',
            link: 'www.dance',
            donation: true,
            cost: 10
          }
        ],
    }
  }



  render(){
    return (
      <Container fluid>
        <Jumbotron>
          <h2 className="display-3">
            San Diego Dance Community
          </h2>
        </Jumbotron>
        <Container>
          <Table striped>
            <thead>
              <tr>
                <DanceCell dances={this.state.dances}/>
              </tr>
            </thead>
          </Table>
        </Container>
      </Container>
    );
  }  
}


export default App;
