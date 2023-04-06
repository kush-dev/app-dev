const edit = async (e) => {
  e.preventDefault(); 
  try {
    await axios.put(`http://localhost:4000/api/user/change/${user._id}`, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    }, {headers: {
        'authorization':`bearer ${Cookies.get('jwt')}`
      }});
    navigate('/main');          
  } catch (error){
    console.log(JSON.stringify(error));
  }
};
