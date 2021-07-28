import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { ButtonDefault } from '../../components/ButtonDefault';
import { Spinner } from '../../components/UI/Spinner';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { authPlayer } from '../../store/slices/authSlice';
import {
  Container,
  LeftContainer,
  RightContainer,
  Description,
  OnlyPlayer,
  Form,
  Logo,
  Input,
  Error,
} from './styles';

export const SignIn: React.FC = () => {
  const [emailEntered, setEmailEntered] = useState('');
  const [passwordEntered, setPasswordEntered] = useState('');

  const isAuth = useAppSelector(state => state.auth.isLogged);
  const isLoading = useAppSelector(state => state.auth.isLoading);
  const msgError = useAppSelector(state => state.auth.msgError);

  const dispatch = useAppDispatch();
  const history = useHistory();

  const handleEmailEntered = (event: React.FormEvent<HTMLInputElement>) => {
    setEmailEntered(event.currentTarget.value);
  };

  const handlePasswordEntered = (event: React.FormEvent<HTMLInputElement>) => {
    setPasswordEntered(event.currentTarget.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(authPlayer({ email: emailEntered, password: passwordEntered }));
  };

  useEffect(() => {
    if (isAuth) history.push('/dashboard');
  }, [isAuth, history]);

  return (
    <Container>
      <LeftContainer>
        <Description>
          <h1>Where am I?</h1>
          <p>
            Looking for <strong>team inspiration</strong> to blow your mind or
            understand how an amateur esport team works, please click the button
            below
          </p>
        </Description>
        <ButtonDefault main>I'm new here</ButtonDefault>
      </LeftContainer>
      <Logo />
      <RightContainer>
        <OnlyPlayer>
          <h1>Only players</h1>
        </OnlyPlayer>
        <Form onSubmit={handleSubmit}>
          <Input
            onChange={handleEmailEntered}
            value={emailEntered}
            placeholder='Email'
          />
          <Input
            onChange={handlePasswordEntered}
            value={passwordEntered}
            placeholder='Password'
            type='password'
          />
          {msgError.length > 0 && <Error>{msgError}</Error>}
          <ButtonDefault secondary>
            {isLoading ? <Spinner secondary small /> : 'Log In'}
          </ButtonDefault>
        </Form>
      </RightContainer>
    </Container>
  );
};
