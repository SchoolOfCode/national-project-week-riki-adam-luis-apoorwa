import React from 'react';
import Username from './Username';
import Password from './Password';

const LoginPage = () => {
  return (
    <div className="Login_Container">
      <div>
        <p>onePlace</p>
      </div>
      <div>
        <Username />
        <Password />
      </div>
      <div>
        <p>New to onePlace?</p>
        <p>Create a profile here</p>
      </div>
    </div>
  );
};

export default LoginPage;
