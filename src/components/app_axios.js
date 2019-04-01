import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import React, { Component } from 'react';
import axios from 'axios';
import AddStudent from './add_student';
import StudentTable from './students_table';
import studentData from '../dummy_data/student_list';  //after communicating w/ server, no need to use dummy data


let id = 100;

class App extends Component {

    // update component state with the student data - to avoid error, set default state to the object
    state = {
        students: [],
        error: ''
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

        axios.get('http://localhost:3001/api/grades').then((resp) => {
            console.log('1. Server Response:', resp);

            this.setState({
                students: resp.data.data   //database data returned from server
            });

        }).catch((err) => {
            console.log('Error getting student data:', err.message);

            this.setState({
                error: 'Error retrieving student data'
            });
        });


        console.log('2. After Axios Call');

        // this.setState({
        //     students: studentData   //dummy data
        // });
    }

    deleteStudent=(id)=>{
        const studentsCopy = this.state.students.slice();

        //const index = studentsCopy.indexOf(id);   //indexOf does not work for array of objects
        //console.log('Found Index: ', index);   // always return -1

        const index = studentsCopy.findIndex((student) => {
            return student.id === id;
        });

        if (index >= 0){
            studentsCopy.splice(index, 1);
            this.setState({
                students: [...studentsCopy]
            })
        }
    }

    render() {
        return (
            <div>
                <h1 className="center">React SGT</h1>
                <h5 className = "red-text text-darken-2">{this is}</h5>
                <div className="row">
                    <StudentTable col="s12 m8" delete={this.deleteStudent} list={this.state.students}/>
                    <AddStudent col="s12 m4" add={this.addStudent}/>
                </div>
            </div>
        );
    }
}

export default App;
