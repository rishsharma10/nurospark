import {
  Avatar,
  Button,
  Card,
  Col,
  Divider,
  Flex,
  FormItem,
  Input,
  Modal,
  Rate,
  Row,
  Space,
  Tag,
  TypographyText,
  TypographyTitle,
  Upload,
} from "@/lib/AntRegistry";
import { StarFilled, ArrowRightOutlined, SafetyCertificateOutlined, DribbbleCircleFilled, FacebookFilled, LinkedinFilled, InstagramFilled } from '@ant-design/icons'
import React, { useContext, useState } from 'react'
import HeroBanner from '@/assets/images/hero-banner.png'
import User from '@/assets/images/Artboard-11.png'
import leftQuote from '@/assets/icons/leftQuote.svg'
import rightQuote from '@/assets/icons/rightQuote.svg'
import blogImage from '@/assets/images/assortment-crispy-tartlet-with-filling.jpg'
import courseImage from '@/assets/images/course-03.webp'
import Link from "next/link";
import { Badge, Carousel, Form, Grid } from "antd";
import { ReactElement } from "react";
import CommonLayout from "@/components/common/CommonLayout";
import crumbApi from "@/utils/crumbApis";
import CoursesCard from "@/components/CoursesCard";
// import video1 from "@/assets/videos/cori"
const Home = () => {
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
  const featureData = [
    {
      image: <SafetyCertificateOutlined />,
      title: 'RCI Certified Trainers',
      subTitle: `Our courses are led by RCI-certified trainers, ensuring the highest standards of expertise and professionalism.`,
    },
    {
      image: <DribbbleCircleFilled />,
      title: 'Worldwide validity of course',
      subTitle: `Globally recognized courses with certification, opening international opportunities for career and personal growth.`,
    },
    {
      image: <SafetyCertificateOutlined />,
      title: 'Job support/ profile build',
      subTitle: `Comprehensive job support, tailored profile building, career guidance, and networking opportunities for professional success.`,
    },
    {
      image: <SafetyCertificateOutlined />,
      title: 'Networking & Exposure ',
      subTitle: `Connect with leading psychologists, HR professionals, and mental health experts through our community and events.`,
    },
    {
      image: <SafetyCertificateOutlined />,
      title: 'Corporate & Educational Roles',
      subTitle: `Get career opportunities in schools, universities, corporate wellness programs, NGOs, and healthcare settings.`,
    },
    {
      image: <SafetyCertificateOutlined />,
      title: 'Freelancing & Private Practice',
      subTitle: `Learn how to start your own counseling services, mental health coaching, or online therapy sessions.`,
    },
  ]
  
  const stateData = [
    {
      count: 250,
      title: 'Varieties of Coffee',
    },
    {
      count: 126,
      title: 'Hours of Testing',
    },
    {
      count: 320,
      title: 'Coffee Markets',
    },
    {
      count: 220,
      title: 'Coffee Brands',
    },
  ]
  const [state, setState] = useState({ data: [], count: 0 })
  const [popularProducts, setPopularProducts] = useState({ products: [], count: 0 })


  const initProductList = async () => {
    try {
      let apiRes = await crumbApi.Product.list()
      setState(apiRes)
    } catch (error) {

    }
  }
  const initProductListBestSelling = async () => {
    try {
      let apiRes = await crumbApi.Product.popular()
      setPopularProducts(apiRes)
    } catch (error) {

    }
  }
  console.log(state, 'statetttt');

  React.useEffect(() => {
    initProductList()
    initProductListBestSelling()
  }, [])

  const screens = Grid.useBreakpoint()

  const responsive = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
  const bannerArray = [
    {
      title: `Pastry Poetry. Coffee Canvas.`,
      desc: `Where French technique meets Indian heart, crafting tomorrow's classics today.
                  In our sunlit corner of Panchkula, a culinary revolution is taking shape. Here, antique copper
                  pots share space with gleaming espresso machines, while the aroma of Kerala vanilla beans
                  mingles with French butter. At Copper & Crumb, we're not just making pastries – we're crafting
                  experiences that bridge continents and generations.`,
      button: `Explore Our Menu`,
      link: `/products/search/all/1`,
      poster: HeroBanner.src,
      video: '/public/prelaunch-teaser-campaign-of-cafe-patisserie-copper.mp4'
    },
  ]

  return (
    <>

      <section className="hero-section py-0 bg-light">
        <div className="container h-100">
          <Row gutter={[24, 24]} className="h-100" align={"middle"} justify={'space-between'}>
            <Col span={24} lg={12} xl={12} xxl={12}>
              {/* <Carousel arrows={false} dots={false} autoplay={false}>
                {bannerArray.map((res, index) => <div key={index} className="position-relative">
                  <div className="hero-banner h-100">
                    <div className="hero-image h-100">
                      <img src={HeroBanner.src} alt="error" className="img-fluid" />
                      <video className="img-fluid" controls={false} loop muted autoPlay={true} >
                        <source src={'https://videos.pexels.com/video-files/4819598/4819598-sd_506_960_25fps.mp4'} type="video/mp4" />
                      </video>
                    </div>
                    <div className="hero-content position-absolute top-0 start-0 h-100 w-100 text-center d-flex flex-column align-items-center justify-content-center">
                      <Row justify={"center"}>
                        <Col span={24} lg={20} xl={16} xxl={14}>
                          <div className="hero-logo mb-3">
                            <img src={logo.src} alt="error" height={screens.sm ? 150 : 100} width={screens.sm ? 140 : 90} className="mx-auto" />
                          </div>
                          <h1 className="mb-5">Unlock the Science of Psychology. Transform Lives Today.</h1>
                          <img src={seperator.src} alt="error" className="mt-3 mb-4 mx-auto" />
                          <p className="mb-4 mb-sm-5">{res.desc}
                          </p>
                          <Flex align="center" justify="center" gap={10}>
                            <Link href={'/'}><Button size="large" type="primary" ghost className="rounded-0 border border-light text-uppercase py-3 h-auto px-5">Explore Courses</Button></Link>
                            <Link href={'/'}><Button size="large" type="primary" ghost className="rounded-0 border border-light text-uppercase py-3 h-auto px-5">Sign Up</Button></Link>
                          </Flex>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>)}
              </Carousel> */}
              <div className="hero-content">
                <h1 className="mb-3">Master the art and science  of psychology with practical online learning</h1>
                <p className="mb-4 fw-semibold"><i>Every step you take with us is a step toward a brighter, healthier future.
                Together, let’s spark a change in the world—one mind at a time.</i></p>

                <Flex align="center" gap={12}>
                  <Button type="primary" className="px-4">Explore Courses</Button>
                  <Button type="primary" className="px-5" ghost>Join now</Button>
                </Flex>
              </div>
            </Col>
            <Col span={24} lg={11} xl={10} xxl={10}>
              <div className="hero-image">
                <img src={HeroBanner.src} alt="not found" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="offer-section">
        <div className="container">
          <Row className="mb-5">
            <Col span={24}>
              <Flex justify="space-between" gap={20} align="start">
                <h2>Discover <br />
                  World's Best Courses</h2>

                {/* <Flex align="center" gap={24} className="courses-tab">
                  <Button type="text" className="p-0 fs-16 active">View all</Button>
                  <Button type="text" className="p-0 fs-16 ">Data Science</Button>
                  <Button type="text" className="p-0 fs-16">Development</Button>
                  <Button type="text" className="p-0 fs-16">Business</Button>
                  <Button type="text" className="p-0 fs-16">Development</Button>
                </Flex> */}
              </Flex>
            </Col>
          </Row>

          <Row gutter={[20, 20]}>
            {itemData.map((res, index) => <Col key={index} span={24} sm={12} md={12} lg={8} xl={8} xxl={8}>
              {/* <div className="course-card bg-white shadow-sm d-flex flex-column h-100">
                <div>
                  <div className="course-image">
                    <img src={res.image} alt="error" className="img-fluid" />
                  </div>
                  <div className="course-content px-3 mt-3 d-flex flex-column ">
                    <Flex justify="space-between" gap={12} className="mb-3">
                      <Tag color="blue">Development</Tag>
                      <div className="rating d-flex align-items-center gap-1">
                        <StarFilled className="text-warning" />
                        <span className="fw-bold">4.5<span className="fw-semibold text-secondary">(25)</span></span>
                      </div>
                    </Flex>
                    <h5 className="fw-semibold">{res.title}</h5>
                    <p className="mt-3 mb-3">{res.subTitle}</p>
                  </div>
                </div>
                <Flex align="center" justify="space-between" gap={12} className="mt-auto px-3 pb-3">
                  <h4 className="price text-primary m-0">
                    $45.5 <span className="fw-normal text-secondary fs-5" style={{ textDecoration: 'line-through' }}>$65.55</span>
                  </h4>
                  <Button type="primary" size="small" className="px-3 btn btn-success border-0 rounded-3">Buy now</Button>
                </Flex>
              </div> */}
              <CoursesCard res={res}/>
            </Col>)}

            <Col span={24} className="text-center mt-5">
              <Link href={'/courses'}>
              <Button size="large" className="px-5" icon={<ArrowRightOutlined />} iconPosition="end" type="primary" >Explore Courses</Button>
              </Link>
            </Col>
          </Row>
        </div>
      </section>
     
      <section className="feature-section">
        <div className="container">
          <Row gutter={[20, 20]} className="mb-5">
            <Col span={24}>
              <div className="title-header">
                <h2>Why Choose Us</h2>
                <p className="sub-title">EXPERT TRAINERS | GLOBAL RECOGNITION | FLEXIBLE LEARNING | PRACTICAL SKILLS | CAREER SUPPORT | PERSONALIZED GUIDANCE </p>
              </div>
            </Col>
          </Row>

          <Row gutter={[20, 20]}>
            {featureData.map((res, index) => <Col key={index} span={24} md={12} lg={8} xl={8} xxl={6}>
              <div className="feature-card">
                <div className="feature-icon fs-1 text-white">
                  {res.image}
                </div>
                <h4 className="mt-4 mb-3 pt-2">{res?.title}</h4>
                <p>{res.subTitle}</p>
              </div>
            </Col>)}
          </Row>
        </div>
      </section>

      <section className="provider-section bg-light">
        <div className="container">
          <Row>
            <Col span={24}>
              <Flex justify="space-between" gap={20}>
                <div className="title-header">
                  <p className="fw-semibold text-primary fs-16 mb-2">Our Provider</p>
                  <h2 className="mb-3">Learn from Industry-Leading Experts.</h2>
                  <p className="fs-16">Gain insights and skills from top professionals with real-world experience in psychology and mental health.</p>
                </div>
                <Button type="primary" className="px-4" size="middle" icon={<ArrowRightOutlined />} iconPosition="end">Send us a Message </Button>
              </Flex>
            </Col>

            <Col span={24} className="mt-5">

              <Carousel dots={false} autoplay slidesToShow={5} slidesToScroll={1} draggable={true} responsive={responsive}>
                {[...Array(6)].map((res, index) => <div key={index}>
                  <div className="our-teacher-card mx-2">
                    <div className="teacher-image position-relative">
                      <img src={User.src} alt="Not found" className="img-fluid" />
                      <div className="teacher-details">
                        <Button type="text" className="fs-3 text-white" shape="circle"><FacebookFilled /></Button>
                        <Button type="text" className="fs-3 text-white" shape="circle"><LinkedinFilled /></Button>
                        <Button type="text" className="fs-3 text-white" shape="circle"><InstagramFilled /></Button>
                      </div>
                    </div>
                    <div className="teacher-content mt-3 text-center">
                      <h5 className="fw-bold">William Smith</h5>
                      <p className="fs-16">Science Professor</p>
                    </div>
                  </div>
                </div>)}
              </Carousel>
            </Col>
          </Row>
        </div>
      </section>

      <section className="blog-section">
        <div className="container">
          <Row gutter={[20, 20]}>
            <Col span={24}>
              <div className="title-header">
                <h2 className="mb-3">Our Blogs</h2>
                <p className="fs-6">Explore insightful articles, expert tips, and industry trends on our blog to stay informed and inspired.</p>
              </div>
            </Col>
          </Row>
          <Row gutter={[20, 20]} className="mt-5">
            {[...Array(3)].map((index) => <Col key={index} span={24} md={12} lg={8} xl={8} xxl={6}>
              <div className="blog-card">
                <div className="blog-image">
                  <img src={blogImage.src} alt="Not Found" className="img-fluid" />
                </div>
                <div className="blog-content mt-3">
                  <h5 className="mb-3">The Power of Psychology: How Nuro Spark is Transforming Mental Health Education</h5>
                  <p className="mb-3">
                  Mental health education is more important than ever, and at Nuro Spark, we believe in making psychology accessible to everyone. Discover how our expert-led courses, practical learning approach, and global recognition are empowering individuals to create a positive impact in their lives and careers
                  </p>
                  <p className="text-primary">NuroSpark</p>
                </div>
              </div>
            </Col>)}
          </Row>
        </div>
      </section>
      {/* sadasdasd */}
      <section className="testimonial-section mb-5 pt-5">
        <div className="container">
          <Row justify={"center"}>
            <Col span={24} className="mb-5">
              <h1 className="text-center text-primary">Testimonial</h1>
            </Col>
            <Col span={24} lg={20} xl={18} xxl={18} className="pt-4">
              <Carousel arrows={false} dots={true} autoplay>
               {[...Array(4)].map((index)=><div key={index} className="testimonial-container">
                  <div className="testimonial-card shadow text-center">
                    <img src={leftQuote.src} alt="error" height={80} className="left-quote" />
                    <img src={rightQuote.src} alt="error" height={80} className="right-quote" />
                    <div className="testimonial-user mx-auto mb-4">
                      <img src={User.src} alt="error" className="img-fluid" />
                    </div>
                    <div className="testimonial-content mt-5">
                      <p className="fs-5">
                      "Before joining Nuro Spark, I struggled to understand my child’s emotions. Their Child Psychology course helped me become a better parent, and now I can communicate with my child more effectively. Highly recommended!"
                      </p>

                      <Flex className="mt-5" align="center" justify="space-between">
                        <div className="text-start">
                          <h5 className="fw-bold">Abhay Singh</h5>
                          <p>CEO, Company</p>
                        </div>
                        <Rate value={5} allowHalf />
                      </Flex>
                    </div>
                  </div>
                </div>)}
              </Carousel>
            </Col>
          </Row>
        </div>
      </section>

    

     

      {/* ---------------------------- contact-section ---------------- */}
      <section className="contact-section">
        <div className="container cta-section">
          <Row justify={"center"}>
            <Col span={24} lg={18} xl={16} xxl={14}>
              <div className="contact-text text-center p-sm-4">
                <h3 className="mb-4">"Got Questions or Need Guidance? Reach Out to Us — We're Here to Help You on Your Journey!"</h3>
                <Link href={`/pages/contact-us`}>
                  <Button size="large" type="primary" ghost className="rounded-0 border border-light text-uppercase py-3 h-auto px-5">Contact us</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </section>


    </>
  );
};
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <CommonLayout>
      {page}
    </CommonLayout>
  )
}
export default Home;
