import { AntForm, Button, Col, Divider, FormItem, Input, Row } from '@/lib/AntRegistry'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import logo from '@/assets/images/logo.jpeg';
import CrumbIcons from '../CrumbIcons';
import { FacebookOutlined, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';
import crumbApi from '@/utils/crumbApis';
import { GlobalContext } from '@/context/Provider';
import { Form } from 'antd';
const FooterPage = () => {
    const [form] = Form.useForm()
    const { Toast } = useContext(GlobalContext)
    const [loading, setLoading] = useState(false)
    const handleSubmit = async (values: any) => {
        try {
            setLoading(true)
            let apiRes = await crumbApi.Auth.newsletter(values)
            form.resetFields()
            Toast.success("Success! You're now subscribed to our newsletter.")
        } catch (error) {
            Toast.error(error)
        } finally {
            setLoading(false)
        }
    }


    return (
        <>
            <footer className="footer-section footer">
                <div className="container">
                    <Row justify={"space-between"} gutter={[20, 20]}>
                        <Col span={24} md={20} lg={8} xl={9} xxl={9}>
                            <div className="about-content">
                                <div className="logo mb-4">
                                    <img src={logo.src} alt="error" height={50} width={160} />
                                </div>
                                {/* <p className="fs-6 mb-5">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor

incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,

nostrud exercitation ullamco laboris.”</p> */}


                                <AntForm className='mb-4' onFinish={handleSubmit}>
                                    <h4 className="mb-3">Stay in the Loop with Nuro Spark!</h4>
                                    <FormItem name={`email`} rules={[{ required: true, message: 'Please enter email' }]}>
                                        <Input className="border border-light py-0 pe-0" placeholder="Your E-mail Address..." suffix={<Button htmlType='submit' loading={loading} className="bg-white py-3 h-100 px-4"><CrumbIcons.Email /></Button>} />
                                    </FormItem>
                                </AntForm>
                            </div>
                        </Col>

                        <Col span={24} md={20} lg={18} xl={5} xxl={5}>
                            <div className="about-content">
                                <h4 className="mb-3">Contact</h4>
                                <ul className="list-unstyled mb-5 p-0">
                                    {/* <li className='text-uppercase'>Copper & crumb</li> */}
                                    {/* <li>GST NO. 062400171112TRN</li> */}
                                    <li>+91 7701825246</li>
                                    <li>BLW PAHARI VAIDAYI NAGER COLLONY 42, Varanasi, India, 221004</li>
                                    <li>info@nurospark.com</li>
                                </ul>
                            </div>
                        </Col>
                        <Col span={24} md={20} lg={18} xl={5} xxl={5}>
                            <div className="about-content">
                                <h4 className='mb-3'>POLICIES</h4>
                                <ul className="list-unstyled m-0 p-0 gap-4">
                                    <li> <div className="line"></div> <Link href={'#'}>Privacy policy</Link></li>
                                    {/* <li> <div className="line"></div> <Link href={'/pages/privacy-policy'}>Privacy policy</Link></li> */}
                                    {/* <li><div className="line"></div><Link href={'/pages/return-policy'}>Return policy</Link></li> */}
                                    <li><div className="line"></div><Link href={'#'}>Terms & Conditions</Link></li>
                                    {/* <li><div className="line"></div><Link href={'/pages/terms-and-conditions'}>Terms & Conditions</Link></li> */}
                                    <li><div className="line"></div><Link href={'#'}>Contact Us</Link></li>
                                    {/* <li><div className="line"></div><Link href={'/pages/contact-us'}>Contact Us</Link></li> */}
                                </ul>
                            </div>
                        </Col>
                        <Col span={24}>
                            <Divider className='border-light my-2 w-100' />
                        </Col>
                        <Col span={24} >
                            <div className="about-content d-flex align-items-center justify-content-between gap-4">
                                <p className="m-0">© Copyright ©2025 NuroSpark.
                                </p>
                                <ul className="list-unstyled m-0 p-0 d-flex align-items-center gap-4">
                                    <li><Link href={'/'}><FacebookOutlined /></Link></li>
                                    <li><Link href={'/'}><InstagramOutlined /></Link></li>
                                    <li><Link href={'/'}><WhatsAppOutlined /></Link></li>
                                </ul>

                            </div>
                        </Col>
                    </Row>
                </div>
            </footer>
        </>
    )
}

export default FooterPage