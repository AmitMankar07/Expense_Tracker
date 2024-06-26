const handleSubmit = async (e) => {
    e.preventDefault();
    const newData = {
        email: document.getElementById("email").value,
        // pass:document.getElementById('pass').value,
    };

    console.log(newData);

    await axios.post("http://16.171.220.37:3000/password/forgotpassword", newData)
        .then((res) => {
            console.log(res);
            if (res.data.success) {
                alert(res.data.message);
            } else {
                alert("Failed to send email. Please try again later.");
            }
        }).catch((err) => {
            console.log(err)
        });
        

    document.getElementById("email").value = "";
    // document.getElementById("pass").value = ""; 
};

document.querySelector(".form").addEventListener("submit", handleSubmit);