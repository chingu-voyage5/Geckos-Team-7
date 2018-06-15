import React , {Component} from 'react';

import {Modal,Form, FormControl, FormGroup, ControlLabel, HelpBlock, Button} from 'react-bootstrap/lib';


function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}
export class AddPicModal extends Component{
    
   
    render(){
        if(!this.props.isOpen){
            return null;
        }
        return(
            <div className="static-modal">
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Add New Picture</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <FieldGroup
                                id="title"
                                type="text"
                                placeholder="Enter a title"/>
                            <FieldGroup
                                id="url"
                                type="URL"
                                placeholder="Enter a URL"
                            />
                             
    
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                    <Button onClick={this.props.onClose}>Close</Button>
                    <Button  className="btn btn-primary">Add</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
            );
    }
        
    
}

