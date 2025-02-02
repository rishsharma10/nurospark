import { Button, Flex, Tag } from '@/lib/AntRegistry'
import React from 'react';
import { StarFilled, ArrowRightOutlined } from '@ant-design/icons'
import Link from 'next/link';

const CoursesCard2 = (res: any) => {
    console.log(res, 'ressss');

    return (
        <div className="course-card bg-white shadow-sm d-flex h-100 p-3 rounded-2 border align-items-center gap-3">
            <div className="course-image course-image-2">
                <img src={res?.res?.image} alt="error" className="img-fluid" />
            </div>
            <div>
                <div className="course-content d-flex flex-column ">
                    <Flex justify="space-between" gap={12} className="mb-3">
                        <Tag color="blue">Development</Tag>
                        <div className="rating d-flex align-items-center gap-1">
                            <StarFilled className="text-warning" />
                            <span className="fw-bold">4.5<span className="fw-semibold text-secondary">(25)</span></span>
                        </div>
                    </Flex>
                    <h5 className="fw-semibold">{res?.res?.title}</h5>
                    <p className="mt-3 mb-3">{res?.res?.subTitle}</p>
                </div>
                <Flex align="center" justify="space-between" gap={12} className="mt-auto">
                    <h4 className="price text-primary m-0">
                        $45.5 <span className="fw-normal text-secondary fs-5" style={{ textDecoration: 'line-through' }}>$65.55</span>
                    </h4>
                    <Link href={`/courses/1`}>
                        <Button type="primary" size="small" className="px-3 border-0 rounded-3" icon={<ArrowRightOutlined />} iconPosition='end'>View Course</Button>
                    </Link>
                </Flex>
            </div>
            {/* <Link href={'#'}>Read More</Link> */}
            
        </div>
    )
}

export default CoursesCard2