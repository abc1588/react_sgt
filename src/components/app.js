import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import React, { Component } from 'react';
import axios from 'axios';
import AddStudent from './add_student';
import StudentTable from './students_table';
import studentData from '../dummy_data/student_list';  //after communicating w/ server, no need to use dummy data

class App extends Component {

    // update component state with the student data - to avoid error, set default state to the object
    state = {
        students: [],
        error: ''
    }

    addStudent = async (student) => {
        await axios.post('/api/grades', student);
        this.getStudentData();
    }

    deleteStudent = async (id) => {
        await axios.delete(`/api/grades/${id}`);
        this.getStudentData();
    }

    componentDidMount() {
        this.getStudentData();
    }

    async getStudentData() {
        // call server here to get data
        try {
            // const resp = await axios.get('http://localhost:3001/api/grades');
            const resp = await axios.get('/api/grades');
            this.setState({
                students: resp.data.data
            });
        } catch(err){
            console.log('Error getting data:', err.message);
        }
    }

    render() {
        return (
            <div>
                <h1 className="center">React SGT</h1>
                <h5 className = "red-text text-darken-2"></h5>
                <div className="row">
                    <StudentTable col="s12 m8" delete={this.deleteStudent} list={this.state.students}/>
                    <AddStudent col="s12 m4" add={this.addStudent}/>
                </div>
            </div>
        );
    }
}

export default App;
