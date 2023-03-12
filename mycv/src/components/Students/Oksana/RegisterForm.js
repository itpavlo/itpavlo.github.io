import React from 'react';
import { Form, Button, Schema, FlexboxGrid, Notification, useToaster } from 'rsuite';
import { AppRoutes } from '../../../common/AppRoutes';
import { useNavigate } from 'react-router-dom';

const { StringType } = Schema.Types;

const model = Schema.Model({
  name: StringType().isRequired('This field is required.'),
  email: StringType()
    .isEmail('Please enter a valid email address.')
    .isRequired('This field is required.')
    .addRule((value, data) => {
      const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {}
      return user.email !== value
    },'User with this email already exist'),
  password: StringType().isRequired('This field is required.'),
  verifyPassword: StringType()
    .addRule((value, data) => {

      if (value !== data.password) {
        return false;
      }

      return true;
    }, 'The two passwords do not match')
    .isRequired('This field is required.')
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

const RegisterForm = () => {
  const navigate = useNavigate();
  const formRef = React.useRef();
  const [formError, setFormError] = React.useState({});
  const [formValue, setFormValue] = React.useState({
    name: '',
    email: '',
    password: '',
    verifyPassword: ''
  });

  const toaster = useToaster();

  const message = (
    <Notification type={'success'}  header={'Success'} closable>
      <div>Registration is successful</div>
    </Notification>
  );

  const handleSubmit = () => {
    if (!formRef.current.check()) {
      return;
    }
    localStorage.setItem('user', JSON.stringify(formValue))
    toaster.push(message, { placement: 'topEnd' })
    return navigate(AppRoutes.OKS + '/login')
  };

  return (
    <FlexboxGrid justify={'center'}>
      <FlexboxGrid.Item colspan={10}>
        <div style={{marginBottom: '10px'}}><h4>Register Form</h4></div>
        <Form
          ref={formRef}
          onChange={setFormValue}
          onCheck={setFormError}
          formValue={formValue}
          model={model}
        >
          <TextField name="name" label="Username" />
          <TextField name="email" label="Email" />
          <TextField name="password" label="Password" type="password" autoComplete="off" />
          <TextField
            name="verifyPassword"
            label="Verify password"
            type="password"
            autoComplete="off"
          />
            <Button appearance="primary" onClick={handleSubmit}>
              Register
            </Button>
        </Form>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
}

export default RegisterForm
