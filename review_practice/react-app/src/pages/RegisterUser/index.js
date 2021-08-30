import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';

import * as Style from './style';

import * as AuthAPI from 'graphql/mutation/auth';

import Logo from 'components/Logo';

import { setToken } from 'service/TokenManager';

export default ({ history }) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [registerUser, { data, loading, error }] = useMutation(AuthAPI.REGISTER_USER);

    useEffect(() => {
        if (data) {
            setToken(data.registerUser);
            alert('회원가입에 성공했습니다');
            history.push('/main');
        }
        if (loading) console.log('회원가입 중');
        if (error) alert('입력란을 다시 한번 확인해주세요');
    }, [data, loading, error]);

    const register = () => {
        registerUser({ variables: { data: { email, password, name } } });
    };

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
                <input id="name" type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
            </Style.InputField>
            <Style.RegisterButton onClick={register}>회원가입</Style.RegisterButton>
        </Style.Main>
    );
};
