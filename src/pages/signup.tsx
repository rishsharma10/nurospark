import { AntForm, Button, Col, FormItem, Input, InputPassword, Row, TypographyText } from '@/lib/AntRegistry'
import { Form } from 'antd'
import React, { useContext, useState } from 'react'
import logo from '@/assets/brand-guide/logo.png'
import Link from 'next/link'
import { useRouter } from 'next/router'
import crumbApi from '@/utils/crumbApis'
import { GlobalContext } from '@/context/Provider'
import { setCookie } from 'nookies'
import { COOKIES_USER_COPPER_CRUMB_ACCESS_TOKEN } from '@/context/actionTypes'
const SignupPage = () => {
    const router = useRouter()
    const { Toast,setUserInfo,userInfo } = useContext(GlobalContext)
    const [loading, setLoading] = useState(false)


    const handleSubmit = async (values: any) => {
        console.log(values, 'valuesssss');
        const payload = {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            phone: values.phone,
            password: values.password,
            password_confirmation:values?.confirm_password
        }

        try {
            setLoading(true)
            const apiRes = await crumbApi.Auth.signUp(payload);
            crumbApi.setToken(apiRes.token)
            const apiResUser = await crumbApi.Auth.profile();
            setUserInfo({
                ...apiResUser?.customer,
                access_token:apiRes.token
              });
              setCookie(this, COOKIES_USER_COPPER_CRUMB_ACCESS_TOKEN, apiRes?.token, {
                path: "/",
              });
            router.replace(`/`)
        } catch (error: any) {
            Toast.error(error.message)
            setLoading(false)
        } finally {
        }

    }
    return (
        <section>
            <div className="container">
                <Row align={'middle'} justify={'center'}>
                    <Col span={24} md={20} lg={18} xl={18} xxl={18}>
                        <div className="d-flex align-items-center w-100 auth-page p-0">
                            <div className="auth-banner w-100 d-none d-md-block">
                            </div>
                            <div className="p-4 w-100 h-100 bg-white">
                                <div className="logo text-center mb-5">
                                    <Link href={'/'}><img src={logo.src} alt="error" height={120} width={120} /></Link>
                                </div>
                                <Form layout='vertical' size='large' onFinish={handleSubmit}>
                                    <FormItem name='first_name' rules={[{ required: true, pattern: /^[a-zA-Z\s]+$/, message: "Please enter first name" }]} label={'First Name'}>
                                        <Input placeholder='Enter first name' />
                                    </FormItem>
                                    <FormItem name='last_name' rules={[{ required: true, pattern: /^[a-zA-Z\s]+$/, message: "Please enter last name" }]} label={'Last Name'}>
                                        <Input placeholder='Enter last name' />
                                    </FormItem>
                                    <FormItem name={`email`} label={'Email'} rules={[
                                        {
                                            required: true,
                                            message: "Please enter your email address",
                                        },
                                        {
                                            type: 'email',
                                            message: 'Please enter valid email address',
                                        },
                                    ]}>
                                        <Input placeholder='Enter Email' />
                                    </FormItem>
                                    <FormItem name='phone' rules={[{ required: true, message: "Please enter phone number" }]} label={'Phone number'}>
                                        <Input placeholder='Enter phone number' />
                                    </FormItem>
                                    <FormItem name={`password`} label={'Password'} rules={[{ required: true, message: "Please enter password" }]}>
                                        <InputPassword placeholder='Enter Password' />
                                    </FormItem>
                                    <FormItem name={`confirm_password`} label={'Confirm Password'} rules={[
                                        { required: true, message: "Please enter confirm password" },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue("password") === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(
                                                    new Error(
                                                        "The new password that you entered do not match"
                                                    )
                                                );
                                            },
                                        }),
                                    ]}>
                                        <InputPassword placeholder='Enter Confirm Password' />
                                    </FormItem>
                                    <Link href={`/login`}><TypographyText>Already have an account ? Login</TypographyText></Link>
                                    <div className="submit-btn text-center mt-2">
                                        <Button loading={loading} htmlType='submit' type='primary' className='px-5'>Sign Up</Button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default SignupPage