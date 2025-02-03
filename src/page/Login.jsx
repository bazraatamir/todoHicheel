import React, {useState} from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChage = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/user/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      //   console.log(data);
      localStorage.setItem("token", data.token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='email'
          value={formData.email}
          onChange={handleChage}
        />
        <input
          type='text'
          name='password'
          value={formData.password}
          onChange={handleChage}
        />
        <button type='submit'>нэвтрэх</button>
      </form>
    </div>
  );
};

export default Login;
