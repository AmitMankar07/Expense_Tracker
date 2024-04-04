

document.addEventListener('DOMContentLoaded', () => {
  function clearFields() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    console.log("field clear");
  }

  document.getElementById('email').addEventListener('input', () => {
    const errorMessage = document.querySelector('#signup-form p');
    if (errorMessage) {
        errorMessage.remove();
    }
  });

  document.getElementById('password').addEventListener('input', () => {
    const errorMessage = document.querySelector('#signup-form p');
    if (errorMessage) {
        errorMessage.remove();
    }
  });

  document.getElementById('signup-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email= document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log("name,email,password:", { name, email, password });
     try {
        const response = await axios.post('/users/signup', { name, email, password });
        console.log(response.data);
        
        clearFields();
        console.log("function");
    } catch (error) {
        console.error(error.response.data);
                // Create an error message element
                const errorMessage = document.createElement('p');
                errorMessage.textContent = error.response.data.message;
                errorMessage.style.color = 'red';
        
                // Append the error message element to the signup form
                document.getElementById('signup-form').appendChild(errorMessage);
            
    }

  });

  document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;

   console.log("email,password:",{email,password});

   try{
    const response = await axios.post('/users/login', {
        email, password
      });
  
      console.log(response.data);
    // const response=axios.post('/users/login',{email,password});
    // console.log(response.data);

    // If the login is successful, redirect the user to the home page
    if (response.status === 200) {
        window.location.href = '/';
      }

  // Clear the email and password fields
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';

   }catch(error){
    console.log("error:",error);
    
   }

  });

});