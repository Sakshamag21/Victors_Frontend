import * as React from 'react';

function TeacherDashboard({teacherData}){
  if (!teacherData) {
      // Render a loading message or component when studentData is not available
      return <div>Loading...</div>;
  }
    return (<div class="info" style={{width:"30vw",display:"flex",flexDirection:"column",alignItems:"center",marginTop:"-30vh"}}>
    <div>
      <img src="../static/profile_photo.png" id="dashboard_photo"/>
    </div>

    <table style={{width:"150%"}} className='dashboard_table'>

    <tr>
    <td><strong>Name</strong></td>
    <td>{teacherData.name}</td>

  </tr>

  <tr>
    <td><strong>Age(in years)</strong></td>
    <td>30</td>

  </tr>
  <tr>
    <td><strong>Email</strong></td>
    <td>{teacherData.email}</td>
  </tr>

  <tr>
    <td><strong>Gender</strong></td>
    <td>Female</td>

  </tr>
  <tr>
    <td><strong>Classes you teach</strong></td>
    <td>6th, 7th, 8th, 9th, 10th</td>

  </tr>

  <tr>
    <td><strong>Mobile No.</strong></td>
    <td>{teacherData.mobile}</td>

  </tr>

    </table>
  </div>)
}

export default TeacherDashboard;
