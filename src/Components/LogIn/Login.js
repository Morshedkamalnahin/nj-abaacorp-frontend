
import Button from 'react-bootstrap/esm/Button'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'

import React, { useRef, useState } from 'react';
import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [logInEmail, setLogInEmail] = useState('')
    const [logInPassword, setLogInPassword] = useState('')
    const [justifyActive, setJustifyActive] = useState('tab1');;
    const { googleSignIn, logUp, error, logIn } = useAuth();

    const location = useLocation();
    const navigate = useNavigate()
    const from = location?.state?.from.pathname || '/dash-board'

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };
    const handleSignUp = () => {

        logUp(email, password, name)
        console.log(error)
        console.log(email, password, name)
    }
    const handleLogIn = () => {
        logIn(logInEmail, logInPassword).then(res => {

            navigate(from, { replace: true })
            console.log(res.user)
        })

    }



    const hanldeGoogleSignIn = () => {
        googleSignIn().then(res => {
            console.log(res)
            navigate(from, { replace: true })
        })
        // console.log(error)
    }

    return (
        <div className='container mt-2'>

            <div className="empl mx-2">





                <h5>{error}</h5>
                <MDBContainer className="p-3 my-4 d-flex flex-column col-lg-6 col-sm-6 col-md-9  ">

                    <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                                Login
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                                Register
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>

                    <MDBTabsContent>

                        <MDBTabsPane show={justifyActive === 'tab1'}>

                            <div className="text-center mb-3">

                                <br />
                                <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                                    <br />
                                    <p>Login With   <MDBBtn onClick={hanldeGoogleSignIn} tag='a' className='mx-3' color='none' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='google' size="lg" />
                                    </MDBBtn></p>



                                </div>

                                <p className="text-center mt-3">or:</p>
                            </div>

                            <MDBInput wrapperClass='mb-4' onChange={(e) => setLogInEmail(e.target.value)} label='Email address' id='form1' type='email' />
                            <MDBInput wrapperClass='mb-4' onChange={(e) => setLogInPassword(e.target.value)} label='Password' id='form2' type='password' />

                            <div className="d-flex justify-content-between mx-4 mb-4">
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                                <a href="!#">Forgot password?</a>
                            </div>

                            <MDBBtn className="mb-4 w-100" onClick={handleLogIn}>Sign in</MDBBtn>
                            <p className="text-center">Not a member? <a href="#!">Register</a></p>

                        </MDBTabsPane>

                        <MDBTabsPane show={justifyActive === 'tab2'}>

                            <div className="text-center mb-3">


                                {/* <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='facebook-f' size="sm" />
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='twitter' size="sm" />
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='google' size="sm" />
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='github' size="sm" />
                                    </MDBBtn>
                                </div>

                                <p className="text-center mt-3">or:</p> */}
                            </div>

                            <MDBInput wrapperClass='mb-4' label='Name' onChange={(e) => setName(e.target.value)} id='form1' type='text' />
                            <MDBInput wrapperClass='mb-4' onChange={(e) => setEmail(e.target.value)} label='Email' id='form1' type='email' />
                            <MDBInput wrapperClass='mb-4' onChange={(e) => setPassword(e.target.value)} label='Password' id='form1' type='password' />

                            <div className='d-flex justify-content-center mb-4'>
                                <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
                            </div>

                            <MDBBtn className="mb-4 w-100" onClick={handleSignUp}>Sign up</MDBBtn>

                        </MDBTabsPane>

                    </MDBTabsContent>

                </MDBContainer>


            </div>

            {/* 
            <div className="col m-auto p-2 w-25">
                <h4 className='t-center '> Login In</h4> <br />
                <form className=''>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example1">Email address</label>
                        <input type="email" id="form2Example1" class="form-control" />

                    </div>


                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Password</label>
                        <input type="password" id="form2Example2" class="form-control" />

                    </div>


                    <div class="row mb-4">
                        <div class="col d-flex justify-content-center">

                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                                <label class="form-check-label" for="form2Example31"> Remember me </label>
                            </div>
                        </div>

                        <div class="col">

                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>


                    <button type="button" class="btn btn-primary btn-block mb-4">Log in</button>


                    <div class="text-center">
                        <p>Not a member? <Link to={'/signup'} href="#!">Register</Link></p>
                        <p> sign up with:    <button type="button" class="btn btn-link fs-50% btn-floating mx-1">
                            <i class="fab fa-google" onClick={hanldeGoogleSignIn}></i>
                        </button>
                        </p>


                    </div>
                </form>
            </div> */}



            {/* <Button onClick={hanldeGoogleSignIn}> google sign-in</Button> */}

        </div>
    )
}

export default Login