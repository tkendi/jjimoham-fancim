import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import { useForm } from 'react-hook-form';

//components
import { Container } from 'components/Container';
import { Title, Text } from 'components/Typography';

const LoginContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const onError = (error: any) => {
    console.log(error);
  };

  //watch 사용시 나오는 Values 확인
  // React.useEffect(() => {
  //   const subscription = watch((value, { name, type, }) =>
  //     console.log(value, name, type),
  //   );
  //   return () => subscription.unsubscribe();
  // }, [watch]);

  // console.log(errors)

  return (
    <ThemeConsumer>
      {(theme) => (
        <CustomContainer>
          <LoginWrap onSubmit={handleSubmit(onSubmit, onError)}>
            <Title style={{ marginBottom: '25px' }}>Login</Title>
            <LoginInputWrap>
              <label>
                <Text>Email</Text>
              </label>
              <LoginInput
                autoComplete="off"
                placeholder="Input your email"
                {...register('email', {
                  required: true,
                  pattern: {
                    value:
                      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                    message: '이메일을 확인해 주세요',
                  },
                })}
              />
              <Text color={theme.color.WARNING} style={{ marginTop: '15px' }}>
                {errors.email?.message}
              </Text>
            </LoginInputWrap>
            <LoginInputWrap>
              <label>
                <Text>Password</Text>
              </label>
              <LoginInput
                type="password"
                autoComplete="off"
                placeholder="Input your password"
                {...register('password', {
                  required: true,
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
                    message: '비밀번호 입력을 확인해 주세요',
                  },
                })}
              />
              <Text color={theme.color.WARNING} style={{ marginTop: '15px' }}>
                {errors.password?.message}
              </Text>
            </LoginInputWrap>
            <Footer>
              <SubmitButton>
                <Text style={{ fontWeight: 'bold' }}>Login</Text>
              </SubmitButton>
              <Divider />
              <Text style={{ textAlign: 'center', cursor: 'pointer' }}>
                Create Account
              </Text>
            </Footer>
          </LoginWrap>
        </CustomContainer>
      )}
    </ThemeConsumer>
  );
};

export default LoginContainer;

const CustomContainer = styled(Container)`
  min-height: calc(100vh - 180px);
`;

const LoginWrap = styled.form`
  width: 100%;
  height: 100%;
  max-width: 410px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
  padding: 30px;
  border: 1px solid ${(props) => props.theme.color.GRAY4};
  border-radius: 10px;

  > div:nth-of-type(2) {
    margin-top: 15px;
  }
`;

const LoginInputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  > label {
    padding: 15px 5px;
  }
`;

const LoginInput = styled.input`
  width: 100%;
  padding: 13px 15px;
  color: #fff;
  border: 0px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.color.GRAY2};
  background: transparent;
  outline: none;

  :focus {
    color: #fff;
  }
`;

const Footer = styled.div`
  width: 100%;
  margin-top: 50px;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  background: ${(props) => props.theme.color.GRAY5};
  border: 0px;
  outline: none;
  border-radius: 10px;
  cursor: pointer;
`;

const Divider = styled.div`
  width: 100%;
  position: relative;
  margin: 30px 0px;
  border: 1px solid ${(props) => props.theme.color.GRAY1};

  :after {
    content: 'OR';
    position: absolute;
    top: -8px;
    left: 45%;
    font-size: 16px;
    color: ${(props) => props.theme.color.GRAY2};
    background: ${(props) => props.theme.color.PRIMARY};
    z-index: 3;
  }
`;
