import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';

import * as Style from './style';

import * as AuthAPI from 'graphql/mutation/auth';

import Logo from 'components/Logo';

import { getToken, setToken } from 'service/TokenManager';

const Login = ({ history }) => {
    if (getToken()) history.push('/main');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [joinUser, { data, loading, error }] = useMutation(AuthAPI.JOIN_USER);

    useEffect(() => {
        if (data) {
            setToken(data.joinUser);
            history.push('/main');
        }
        if (loading) console.log('로그인 중');
        if (error) alert('입력란을 다시 한번 확인해주세요');
    }, [data, loading, error]);

    const join = () => joinUser({ variables: { email, password } });

    return (
        <Style.Main>
            <Logo />
            <Style.InputField>
                <input id="email" type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                />
            </Style.InputField>
            <Style.LoginButtonWrapper>
                <button onClick={join}>로그인</button>
                <button onClick={() => history.push('/user/register')}>회원가입</button>
            </Style.LoginButtonWrapper>
        </Style.Main>
    );
};

export default Login;
