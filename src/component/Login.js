import React from 'react';

function Login() {
    const handleLogin = async (event) => {
        event.preventDefault(); // Prevent form submission
        // Collect form data
        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;

        // Log form data
        console.log("Username:", username);
        console.log("Password:", password);

        try {
            const response = await fetch('http://localhost:8000/user/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ name: username, password: password })
            });
          
            if (response.ok) {
              const data = await response.json(); // Parse the JSON response
              // Access the data sent from the server
              console.log(data.name);
              console.log(data.role);
              console.log(data.id);
              if (data.role === 'student') {
                window.location.href = `./studentDashboard/${data.id}`; // Redirect to student zone

              }
              if (data.role === 'teacher') {
                window.location.href = `./teacherDashboard/${data.id}`; // Redirect to student zone

              }
              console.log('User Logged in successfully');
            } else {
              alert('Wrong Name and password');
            }
          } catch (error) {
            console.error('Error logging in:', error.message);
            alert('Something went wrong with server')
          }

        // You can perform any other login-related tasks here
    };

    return (
        <div className='login-signup' style={{height:"100vh"}}>
            <a href="./main" className="signup-home-button">Home</a>
            <div className="createbox">
                <form className="form" id="signin" onSubmit={handleLogin}>

                    <h1 className="form__title">Login</h1>

                    <div className="form__input-group">
                        <label ><strong>Full Name</strong></label>
                        <br/> 
                        <input type="text" className='takeinput' name="username" placeholder="Full Name"/>
                    </div>
                    <div className="form__input-group">
                        <label ><strong>Password</strong></label>
                        <br/>
                        <input type="password" className='takeinput' name="password" placeholder="Password"/>
                    </div>
                        
                    <button className="form__button" type="submit">Login</button>

                    <div className="form__link">
                        <a href="./Register">Don't have an account? <br/> Create account</a>
                    </div>

                </form>
                
            </div>
        </div>
    );
}

export default Login;
