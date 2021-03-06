import React, {Component} from 'react';
import StudentRow from './student_row'
;

// console.log('student data: ', studentData);

class StudentTable extends Component {

    render(){

        const { col = 's12', list } = this.props;

        //const studentElements = students.map((item, index, originalArray)=> {
        const studentElements = list.map((student)=> {
            // return <StudentRow key={student.id} name={student.name} course={student.course} grade={student.grade} id={student.id}/>
            return <StudentRow delete={this.props.delete} key={student.id} {...student}/>
        });

        return (
            <div className={`col ${col}`}>
                <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                    <th>Action</th>
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