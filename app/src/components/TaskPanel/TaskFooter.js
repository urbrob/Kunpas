import React, {Component} from 'react';
import {Button, Icon} from 'react-materialize'

export class TaskFooter extends Component {
  handleSubmit = event => {
      event.preventDefault();
      const id = this.props.data.id
      this.props.mutate({
          variables: {taskId: this.props.data.id}
      }).then(function(data) {
          window.location.href = '/app/task?objectId=' + id;
      })
  }

    render() {
        return (
            <div style={{paddingLeft: '40%', paddingTop: '4%'}}>
                <Button onClick ={() => window.location.href = '/app/task/edit?objectId=' + this.props.data.id} waves="light" style={{marginRight: '50px'}}>
                   Edit
                    <Icon left>
                        edit
                    </Icon>
                </Button>
                <Button waves="light" style={{marginRight: '50px'}} onClick={this.handleSubmit}>
                    Mark as done
                    <Icon left>
                        check
                    </Icon>
                </Button>
                <Button waves="light" style={{marginRight: '50px'}}>
                    Send email
                    <Icon left>
                        mail
                    </Icon>
                </Button>
                <Button waves="light" style={{marginRight: '50px'}}>
                    Send SMS
                    <Icon left>
                        textsms
                    </Icon>
                </Button>
            </div>

        );
    }
}
export default TaskFooter;
