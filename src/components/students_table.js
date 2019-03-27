import React, {Component} from 'react';


// console.log('student data: ', studentData);

class StudentTable extends Component {

    render(){

        const { col = 's12', list } = this.props;

        //const studentElements = students.map((item, index, originalArray)=> {
        const studentElements = list.map((student)=> {
            return (
                <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.course}</td>
                    <td>{student.grade}</td>
                </tr>
            );
        });

        return (
            <div className={`col ${col}`}>
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