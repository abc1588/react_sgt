import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import React, { Component } from 'react';
import AddStudent from './add_student';
import StudentTable from './students_table';
import studentData from '../dummy_data/student_list';


let id = 100;

class App extends Component {

    // update component state with the student data - to avoid error, set default state to the object
    state = {
        students: []
    }

    addStudent = (student) => {

        student.id = id++;

        this.setState({
            students: [...this.state.students, student]
        });
    }

    componentDidMount() {
        this.getStudentData();
    }

    getStudentData() {
        // call server here to get data
        this.setState({
            students: studentData
        });
    }

    render() {
        return (
            <div>
                <h1 className="center">React SGT</h1>
                <div className="row">
                    <StudentTable col="s12 m8" list={this.state.students}/>
                    <AddStudent col="s12 m4" add={this.addStudent}/>
                </div>
            </div>
        );
    }
}

export default App;
