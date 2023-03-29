import Navbar from "../../components/Navbar/Navbar";
import React, { useEffect, useRef, useState } from "react";
import { Button, ButtonToolbar, Form, Schema } from "rsuite";


const TextField = React.forwardRef((props, ref) => {
    const { name, label, accepter, ...rest } = props;
    return (
        <Form.Group controlId={`${name}-4`} ref={ref}>
            <Form.ControlLabel>{label} </Form.ControlLabel>
            <Form.Control name={name} accepter={accepter} {...rest} />
        </Form.Group>
    );
});

const { StringType, NumberType } = Schema.Types;

const model = Schema.Model({
    name: StringType().isRequired('This field is required.'),
    email: StringType()
        .isEmail('Please enter a valid email address.')
        .isRequired('This field is required.'),
    age: NumberType('Please enter a valid number.').range(
        18,
        30,
        'Please enter a number from 18 to 30'
    ),
    password: StringType().isRequired('This field is required.'),
    verifyPassword: StringType()
        .addRule((value, data) => {
            console.log(data);

            if (value !== data.password) {
                return false;
            }

            return true;
        }, 'The two passwords do not match')
        .isRequired('This field is required.')
});

const Mentor = ({users, handleDelete}) => {
    const [formValues, setFormValues] = useState({
        name: '',
        password: '',
        email: ''
    })
    //
    // const handleSubmit =()=>{
    //     console.log("SUBMIT", formValues)
    //     setFormValues({
    //         name: '',
    //         password: '',
    //         email: ''
    //     })
    // }
    //
    // const handleChange = (e, key) =>{
    //     setFormValues({ ...formValues, [key]: e.target.value})
    // }
    //
    // const handleSubmit1 =()=>{
    //     console.log("SUBMIT1", {
    //         name: nameInputRef.current.value,
    //         password: passwordInputRef.current.value,
    //         email: emailInputRef.current.value,
    //     })
    //     nameInputRef.current.value = ''
    //     passwordInputRef.current.value = ''
    //     emailInputRef.current.value = ''
    // }
    // const nameInputRef = useRef();
    // const passwordInputRef = useRef();
    // const emailInputRef = useRef();

    // const { StringType } = Schema.Types;
    // const model = Schema.Model({
    //     name: StringType().isRequired('This field is required.'),
    //     email: StringType()
    //         .isEmail('Please enter a valid email address.')
    //         .isRequired('This field is required.')
    // });
    // const formRef = React.useRef();
    // const TextField =(props) => {
    //     const { name, label, accepter, ...rest } = props;
    //     return (
    //         <Form.Group controlId={`${name}-3`}>
    //             <Form.ControlLabel>{label} </Form.ControlLabel>
    //             <Form.Control name={name} accepter={accepter} {...rest} />
    //         </Form.Group>
    //     );
    // }


    const formRef = React.useRef();
    const [formError, setFormError] = React.useState({});
    const [formValue, setFormValue] = React.useState({
        name: '',
        email: '',
        age: '',
        password: '',
        verifyPassword: ''
    });

    const handleSubmit = () => {
        if (!formRef.current.check()) {
            console.error('Form Error');
            return;
        }
        console.log(formValue, 'Form Value');
    };

    const handleCheckEmail = () => {
        formRef.current.checkForField('email', checkResult => {
            console.log(checkResult);
        });
    };

     return (
        <div>
            <Navbar />
            <Form
                ref={formRef}
                onChange={setFormValue}
                onCheck={setFormError}
                formValue={formValue}
                model={model}
            >
                <TextField name="name" label="Username" />
                <TextField name="email" label="Email" />
                <TextField name="age" label="Age" />
                <TextField name="password" label="Password" type="password" autoComplete="off" />
                <TextField
                    name="verifyPassword"
                    label="Verify password"
                    type="password"
                    autoComplete="off"
                />

                <ButtonToolbar>
                    <Button appearance="primary" onClick={handleSubmit}>
                        Submit
                    </Button>

                    <Button onClick={handleCheckEmail}>Check Email</Button>
                </ButtonToolbar>
            </Form>
            {/*<Form*/}
            {/*    model={model}*/}
            {/*    // formValue={formValues}*/}
            {/*    // onChange={setFormValues}*/}
            {/*    ref={formRef}*/}
            {/*>*/}
            {/*    <TextField name="name" label="Username" />*/}
            {/*    <TextField name="password" label="Password" />*/}
            {/*    <TextField name="email" label="Email" />*/}
            {/*    <ButtonToolbar>*/}
            {/*        <Button appearance="primary" type="submit">*/}
            {/*            Submit*/}
            {/*        </Button>*/}
            {/*    </ButtonToolbar>*/}
            {/*</Form>*/}
{/*            <form action="" >*/}
{/*                <input type="text" value={formValues.name} onChange={(e)=> handleChange(e, 'name')}/>*/}
{/*                <label htmlFor="">name</label>*/}
{/*                <br/>*/}
{/*                <input type="password" value={formValues.password} onChange={(e)=>handleChange(e, 'password')}/>*/}
{/*                <label htmlFor="">password</label>*/}
{/*                <br/>*/}
{/*                <input type="email" value={formValues.email} onChange={(e)=>handleChange(e, 'email')}/>*/}
{/*                <label htmlFor="">email</label>*/}
{/*                <br/>*/}
{/*                /!*<input type="submit" value="Підтвердити" />*!/*/}
{/*                <button type='button' onClick={handleSubmit}>ПідтвердитиПідтвердити</button>*/}
{/*            </form>*/}
{/*<hr/>*/}
{/*            <form action="" >*/}
{/*                <input type="text" ref={nameInputRef}/>*/}
{/*                <label htmlFor="">name</label>*/}
{/*                <br/>*/}
{/*                <input type="password" ref={passwordInputRef}/>*/}
{/*                <label htmlFor="">password</label>*/}
{/*                <br/>*/}
{/*                <input type="email" ref={emailInputRef}/>*/}
{/*                <label htmlFor="">email</label>*/}
{/*                <br/>*/}
{/*                /!*<input type="submit" value="Підтвердити" />*!/*/}
{/*                <button type='button' onClick={handleSubmit1}>ПідтвердитиПідтвердити</button>*/}
{/*            </form>*/}

            {/*{users?.map((user, index) =>*/}
            {/*    <User*/}
            {/*        user={user}*/}
            {/*        index={index}*/}
            {/*        key={user.id}*/}
            {/*        handleDelete={handleDelete}*/}
            {/*    />*/}
            {/*)}*/}
        </div>
    )
}

export default Mentor
