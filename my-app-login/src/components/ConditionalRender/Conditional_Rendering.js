import React from 'react'
import AdminPanel from './AdminPanel';
import LoginForm
 from './LoginForm';
const Conditional_Rendering = () => {
  let content;
  let isLoggedIn = false;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
  return (
      <div>
    {content}
  </div>
  )
}

export default Conditional_Rendering
