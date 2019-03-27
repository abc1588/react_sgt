import React, {Component} from 'react';
import studentData from '../dummy_data/student_list';

// console.log('student data: ', studentData);

class StudentTable extends Component {

    // update component state with the student data - to avoid error, set default state to the object
    state = {
        students: []
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

    render(){

        //const students = this.state.students; can be abbreviated as in next stmt:
        const {students} = this.state;

        //const studentElements = students.map((item, index, originalArray)=> {
        const studentElements = students.map((student)=> {
            return (
                <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.course}</td>
                    <td>{student.grade}</td>
                </tr>
            )
        });

        return (
            <div className="col s12 m8">
                <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
                </thead>
                    <tbody>
                        {studentElements}
                    </tbody>
                </table>

            </div>
        );
    }
}

export default StudentTable;