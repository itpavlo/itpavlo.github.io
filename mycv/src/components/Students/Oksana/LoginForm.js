import React from 'react';
import { Form, Button, Schema, FlexboxGrid, useToaster, Notification } from 'rsuite';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../common/AppRoutes';

const { StringType } = Schema.Types;

const model = Schema.Model({
  email: StringType()
    .isEmail('Please enter a valid email address.')
    .isRequired('This field is required.'),
  password: StringType().isRequired('This field is required.'),
});

const TextField = React.forwardRef((props, ref) => {
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group controlId={`${name}-4`} ref={ref}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
});

const LoginForm = () => {
  const formRef = React.useRef();
  const navigate = useNavigate ()
  const [formError, setFormError] = React.useState({});
  const [formValue, setFormValue] = React.useState({
    email: '',
    password: '',
  });

  const toaster = useToaster();

  const errorMessage = (
    <Notification type={'warning'}  header={'Error'} closable>
      <div>Invalid email or password</div>
    </Notification>
  );

  const successMessage = (user) => (
    <Notification type={'success'}  header={'Success'} closable>
      <div>Welcome {user.name}</div>
    </Notification>
  );

  const handleSubmit = () => {
    if (!formRef.current.check()) {
      return;
    }
    const user =  localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {}
    if (user.email === formValue.email && user.password === formValue.password) {
      toaster.push(successMessage(user), { placement: 'topEnd' })
        return navigate(AppRoutes.OKS + '/task_one')
    }
    toaster.push(errorMessage, { placement: 'topEnd' })
  };

  return (
    <FlexboxGrid justify={'center'}>
      <FlexboxGrid.Item colspan={10}>
        <div style={{marginBottom: '10px'}}><h4>Login Form</h4></div>
        <Form
          ref={formRef}
          onChange={setFormValue}
          onCheck={setFormError}
          formValue={formValue}
          model={model}
        >
          <TextField name="email" label="Email" />
          <TextField name="password" label="Password" type="password" autoComplete="off" />
            <Button appearance="primary" onClick={handleSubmit}>
              Login
            </Button>
        </Form>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
}

export default LoginForm
