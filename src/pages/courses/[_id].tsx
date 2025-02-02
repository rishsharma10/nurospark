import CommonLayout from '@/components/common/CommonLayout'
import { Breadcrumb, Button, Col, Flex, Row, Tag } from '@/lib/AntRegistry'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import courseImage from '@/assets/images/course-03.webp'
import userImage from '@/assets/images/Artboard-11.png'
import userImage2 from '@/assets/images/user2.jpg'
import { StarFilled, CaretRightOutlined, DesktopOutlined, CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons'

const CourseDetails = () => {
  return (
    <>
      <section className="course-list-section bg-light">
        <div className="container">
          <Row gutter={[20, 20]} justify={'space-between'} align={'middle'}>
            <Col span={24} md={12} lg={11} xl={11} xxl={11}>
              <div className="course-search-container p-4">
                <Breadcrumb className='mb-4'
                  items={[
                    {
                      title: <Link href={'/'}>Home</Link>,
                    },
                    {
                      title: <Link href={'/courses'}>Course List</Link>,
                    },
                    {
                      title: 'Course Detail',
                    },
                  ]}
                />

                <Flex gap={12} className="mb-3">
                  <Tag color="blue">Development</Tag>
                  <div className="rating d-flex align-items-center gap-1">
                    <StarFilled className="text-warning" />
                    <span className="fw-bold">4.5</span>
                  </div>
                </Flex>
                <h1 className='mb-3 fw-bolder'>Introduction to User Experience Design</h1>
                <p className='mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore nemo velit aut autem laborum et ipsam omnis? Pariatur alias optio velit nihil.</p>
                <Flex align='center' gap={50} justify='space-between' className='rounded-4 p-3 get-course'>
                  <h2 className='fs-1 text-primary '>$20.99</h2>
                  <Button type='primary' size='large' className='btn btn-dark px-5'>Get Course</Button>
                </Flex>
              </div>
            </Col>
            <Col span={24} md={12} lg={11} xl={11} xxl={11}>
              <div className="course-detail-image">
                <img src={courseImage.src} alt="error" className='img-fluid' />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="course-learn-info">
        <div className="container">
          <Row gutter={[40, 40]}>
            <Col span={24} lg={11} xl={11} xxl={11}>
              <ul className='list-unstyled '>
                <h2 className='fw-bolder mb-5'>What you will Learn</h2>
                <li className='fs-6 mb-3 d-flex align-items-center gap-2'>
                  <CaretRightOutlined className='text-primary fs-5' />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consequatur eos dolore iure velit? Iste eligendi deserunt cupiditate.
                </li>
                <li className='fs-6 mb-3 d-flex align-items-center gap-2'>
                  <CaretRightOutlined className='text-primary fs-5' />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consequatur eos dolore iure velit? Iste eligendi deserunt cupiditate.
                </li>
                <li className='fs-6 mb-3 d-flex align-items-center gap-2'>
                  <CaretRightOutlined className='text-primary fs-5' />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consequatur eos dolore iure velit? Iste eligendi deserunt cupiditate.
                </li>

              </ul>
            </Col>
            <Col span={24} lg={13} xl={13} xxl={13}>
              <Row gutter={[20, 20]}>
                <Col span={24} lg={12}>
                  <div className="course-info-card">
                    <DesktopOutlined className='fs-1 mb-4' />
                    <h4 className='mb-4'>Course Format</h4>
                    <ul className='list-unstyled '>
                      <li className='fs-6 mb-3 d-flex align-items-center gap-2'>
                        <CaretRightOutlined className='text-primary fs-5' />
                        Lorem ipsum dolor.
                      </li>
                      <li className='fs-6 mb-3 d-flex align-items-center gap-2'>
                        <CaretRightOutlined className='text-primary fs-5' />
                        sit amet consectetur
                      </li>
                      <li className='fs-6 mb-3 d-flex align-items-center gap-2'>
                        <CaretRightOutlined className='text-primary fs-5' />
                        eligendi deserunt cupiditate.
                      </li>

                    </ul>
                  </div>
                </Col>
                <Col span={24} lg={12}>
                  <div className="course-info-card">
                    <CalendarOutlined className='fs-1 mb-4' />
                    <h4 className='mb-4'>Course Duration</h4>
                    <ul className='list-unstyled '>
                      <li className='fs-6 mb-3 d-flex align-items-center gap-2'>
                        <CaretRightOutlined className='text-primary fs-5' />
                        120 min
                      </li>
                      <li className='fs-6 mb-3 d-flex align-items-center gap-2'>
                        <CaretRightOutlined className='text-primary fs-5' />
                        5 Weeks
                      </li>
                      <li className='fs-6 mb-3 d-flex align-items-center gap-2'>
                        <CaretRightOutlined className='text-primary fs-5' />
                        1.5 Hours Webinar
                      </li>
                      <li className='fs-6 mb-3 d-flex align-items-center gap-2'>
                        <CaretRightOutlined className='text-primary fs-5' />
                        3 Hours of Consultations
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </section>

      <section className="course-info-section">
        <div className="container">
          <Row gutter={[20, 20]}>
            <Col span={24}>
              <h2 className='fs-1 fw-bolder text-center'>Course Content</h2>
            </Col>
            <Col span={24}>
              <div className="course-title">
                Section 1. Lorem ipsum dolor sit amet.
              </div>

              <div className="course-brief-container">
                <ul className='list-unstyled d-flex flex-column justify-content-between'>
                  <li className='mb-5'>
                    <Button type='text' className='fs-5 fw-bold active'>
                      1. Lorem ipsum dolor sit amet consectetur.
                    </Button>
                  </li>
                  <li className='mb-5'>
                    <Button type='text' className='fs-5 fw-bold'>
                      2. Lorem ipsum dolor sit amet consectetur.
                    </Button>
                  </li>
                  <li>
                    <Button type='text' className='fs-5 fw-bold'>
                      3. Lorem ipsum dolor sit amet consectetur.
                    </Button>
                  </li>
                </ul>
                <div className="brief-card">
                  <div className="brief-image mb-4">
                    <img src={courseImage.src} alt="error" className='img-fluid' />
                  </div>
                  <div className="brief-content">
                    <h6 className='fw-bold fs-5 mb-3'>1. Lorem ipsum dolor sit amet consectetur.</h6>
                    <p className='mb-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, eum! Illo asperiores, corporis ea non eos laboriosam, sequi ipsa beatae quisquam maiores quam repudiandae? Quos dignissimos mollitia similique neque laborum?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, eum! Illo asperiores, corporis ea non eos laboriosam, sequi ipsa beatae quisquam maiores quam repudiandae? Quos dignissimos mollitia similique neque laborum?</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="course-instructure">
        <div className="container">
          <Row gutter={[24, 24]} justify={'space-between'}>
            <Col span={24} lg={10} xl={10} xxl={10}>
              <div className="instructure-image">
                <img src={userImage.src} alt="error" className='img-fluid' />
              </div>
            </Col>
            <Col span={24} lg={13} xl={13} xxl={13}>
              <div className="instructure-details">
                <h2 className='fs-1 mb-3'>Course Instructure</h2>
                <h3 className='mb-3'>Alex Edwards</h3>
                <p className='fw-semibold'>Fullstack developer / Mentor</p>

                <Flex align='center' className='mt-3 mb-4' gap={32}>
                  <p className='d-flex align-items-center gap-2'><ClockCircleOutlined className='text-primary fs-5' /> 120 hours</p>
                  <p className='d-flex align-items-center gap-2'><StarFilled className='text-primary fs-5' /> 4.9</p>
                </Flex>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos tempore esse dolorum doloremque optio sequi quos, ipsum quod exercitationem animi vero doloribus assumenda! Laudantium ad alias eos animi earum iure?</p>

                <Flex align='center' className='instructor-stats mt-4' gap={12}>
                  <div className='w-100'>
                    <h4 className='mb-2'>45+</h4>
                    <p>Person Mentored</p>
                  </div>
                  <div className='w-100'>
                    <h4 className='mb-2'>10+</h4>
                    <p>Workshops Attended</p>
                  </div>
                  <div className='w-100'>
                    <h4 className='mb-2'>8</h4>
                    <p>Coaching Certificates</p>
                  </div>
                </Flex>
              </div>
            </Col>

            {[...Array(3)].map((index) => <Col key={index} span={24} md={12} lg={8} xl={8} xxl={6} className='mt-5'>
              <div className="more-instructor">
                <div className="image">
                  <img src={userImage2.src} alt="error" className='img-fluid' />
                </div>
                <div className="content mt-4 text-center">
                  <h4 className='fw-bold'>Christine Nelson</h4>
                  <p>Mentor</p>

                  <Flex align='center' justify='center' className='mt-2' gap={20}>
                    <p className='d-flex align-items-center gap-2'><ClockCircleOutlined className='text-primary fs-5' /> 120 hours</p>
                    <p className='d-flex align-items-center gap-2'><StarFilled className='text-primary fs-5' /> 4.9</p>
                  </Flex>
                </div>
              </div>
            </Col>)}
          </Row>
        </div>
      </section>
    </>
  )
}
CourseDetails.getLayout = function getLayout(page: ReactElement) {
  return (
    <CommonLayout>
      {page}
    </CommonLayout>
  )
}
export default CourseDetails