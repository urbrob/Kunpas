import React, {Component} from 'react';
import UserSidePanel from '../components/MainAppComponents/UserSidePanel'
import AppTitleBar from "../components/MainAppComponents/AppTitleBar";


export class Task extends Component {
    render() {
        return (
            <React.Fragment>
                <AppTitleBar name={'Task'}/>
                <UserSidePanel/>
            </React.Fragment>
        );
    }
}
export default Task;