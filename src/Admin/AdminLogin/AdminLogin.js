import React from 'react'

const AdminLogin = () => {
  return (
    <div>
      <h1>Admin Login</h1>
      <form>
        <label htmlFor='username'>Username:</label>
        <input type="text" name="username" /><br/>
        <label htmlFor='pass'>Password</label>
        <input type='password' name='pass'></input><br/>
        <button>Login</button>
      </form>
    </div>
  )
}

export default AdminLogin
