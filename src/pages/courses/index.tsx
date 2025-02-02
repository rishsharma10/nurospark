import CommonLayout from '@/components/common/CommonLayout'
import { AntForm, Breadcrumb, Button, Col, Flex, FormItem, Input, Row, Select, Tabs } from '@/lib/AntRegistry'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import listImage from '@/assets/images/course-03.webp'
import { TabsProps } from 'antd'
import CoursesCard from '@/components/CoursesCard'
import courseImage from '@/assets/images/course-03.webp'
import CoursesCard2 from '@/components/CourseCard2'
import { StarFilled, CaretRightOutlined } from '@ant-design/icons'

const CoursesList = () => {

  const itemData = [
    {
      image: courseImage.src,
      title: `WordPress Development Course for Plugins and Themes`,
      subTitle: `Each creation tells a story of tradition reimagined. Our viennoiserie marries French technique
      with Indian inspiration.`,
    },
    {
      image: courseImage.src,
      title: `WordPress Development Course for Plugins and Themes`,
      subTitle: `In partnership with Beanrove Coffee Roasters, we bring you ethically sourced beans roasted to
      perfection.`,
    },
    {
      image: courseImage.src,
      title: `WordPress Development Course for Plugins and Themes`,
      subTitle: `Our roots run deep in the local community. We work directly with farmers to source heritage
      wheat varieties and seasonal fruits.
      `,
    },
    // {
    //   image: offerItem.src,
    //   title: 'Coffee To Go',
    //   subTitle: 'Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos commodo',
    // },
  ]

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Data Science',
      children: <Row gutter={[20, 20]}>
        {itemData.map((res, index) => <Col key={index} span={24}>
          <CoursesCard2 res={res} />
        </Col>)}
      </Row>,
    },
    {
      key: '2',
      label: 'Design',
      children: <Row gutter={[20, 20]}>
        {itemData.map((res, index) => <Col key={index} span={24}>
          <CoursesCard2 res={res} />
        </Col>)}
      </Row>,
    },
    {
      key: '3',
      label: 'Development',
      children: <Row gutter={[20, 20]}>
        {itemData.map((res, index) => <Col key={index} span={24}>
          <CoursesCard2 res={res} />
        </Col>)}
      </Row>,
    },
    {
      key: '4',
      label: 'Graphics',
      children: <Row gutter={[20, 20]}>
        {itemData.map((res, index) => <Col key={index} span={24}>
          <CoursesCard res={res} />
        </Col>)}
      </Row>,
    },
  ];
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
                      title: 'Courses List',
                    },
                  ]}
                />
                <h1 className='mb-3'>Courses List</h1>
                <p className='mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore nemo velit aut autem laborum et ipsam omnis? Pariatur alias optio velit nihil magnam suscipit consequuntur? Deleniti officia ullam iusto totam.</p>

                <AntForm size='large'>
                  <FormItem>
                    <Flex align='center' gap={8}>
                      <Input placeholder='Search...' />
                      <Button type='primary' className='px-5'>Search</Button>
                    </Flex>
                  </FormItem>
                </AntForm>
              </div>
            </Col>
            <Col span={24} md={12} lg={11} xl={11} xxl={11}>
              <div className="list-image rounded-4">
                <img src={listImage.src} alt="error" className='img-fluid rounded-4' />
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section>
        <div className="container">
          <Row gutter={[60, 24]} justify={'space-between'} className='pb-5'>
            <Col span={6} className='border-end'>
              <div className="course-filter ">
                <ul className='list-unstyled mb-4'>
                  <li className='fw-bold fs-4'>Category</li>
                  <li><CaretRightOutlined className='text-primary' />Data Science</li>
                  <li><CaretRightOutlined className='text-primary' />Development</li>
                  <li><CaretRightOutlined className='text-primary' />Graphics</li>
                  <li><CaretRightOutlined className='text-primary' />Design</li>
                </ul>
                <ul className='list-unstyled mb-4'>
                  <li className='fw-bold fs-4'>Level</li>
                  <li><CaretRightOutlined className='text-primary' />All Course</li>
                  <li><CaretRightOutlined className='text-primary' />Beginner</li>
                  <li><CaretRightOutlined className='text-primary' />Intermediate</li>
                  <li><CaretRightOutlined className='text-primary' />Expert</li>
                </ul>
                <ul className='list-unstyled m-0'>
                  <li className='fw-bold fs-4'>Price</li>
                  <li><CaretRightOutlined className='text-primary' />All</li>
                  <li><CaretRightOutlined className='text-primary' />Free</li>
                  <li><CaretRightOutlined className='text-primary' />Paid</li>
                </ul>
              </div>
            </Col>
            <Col span={18}>
              <div className="courses-cate w-100">
                {/* <Tabs defaultActiveKey="1" items={items} prefixCls='courseList' /> */}
                <Row gutter={[20, 20]}>
                  {itemData.map((res, index) => <Col key={index} span={24}>
                    <CoursesCard2 res={res} />
                  </Col>)}
                </Row>
              </div>
            </Col>
          </Row>
          <hr className='mt-5' />
          <Row gutter={[20, 20]} className=' pt-5'>
            <Col span={24} className='mb-2'>
              <h2>New Arrival</h2>
            </Col>
            {itemData.map((res, index) => <Col key={index} span={24} md={12} lg={8} xl={8} xxl={6}>
              <CoursesCard res={res} />
            </Col>)}
          </Row>
        </div>
      </section>

      <section className="contact-section">
        <div className="container cta-section py-5">
          <Row justify={"center"}>
            <Col span={24} lg={18} xl={16} xxl={14}>
              <div className="contact-text text-center p-sm-4">
                <h1 className="mb-4">Subscribe Now Forget 20% Discount Every Courses</h1>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, doloremque. Possimus iure repellat sit autem, illum voluptatum, minus ad architecto error eum cupiditate enim quibusdam repudiandae soluta animi, aliquam eos!</p>
                <AntForm size='large'>
                  <FormItem>
                    <Flex align='center' gap={8}>
                      <Input placeholder='Your Email' />
                      <Button type='primary' className='px-5'>Subscribe</Button>
                    </Flex>
                  </FormItem>
                </AntForm>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  )
}
CoursesList.getLayout = function getLayout(page: ReactElement) {
  return (
    <CommonLayout>
      {page}
    </CommonLayout>
  )
}
export default CoursesList