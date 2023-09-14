import React, { useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom'
import blogData from '../assests/data/blogData.js';
import Helmet from '../components/Helmet/Helmet';
import commentImg from '../assests/all-images/ava-1.jpg'
import '../styles/blog-details.css'

const BlogDetails = () => {

    const { slug } = useParams();
    const blog = blogData.find(blog => blog.title === slug)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [blog])

    return (
        <Helmet title={blog.title}>
            <section>
                <Container>
                    <Row>
                        <Col lg='8' md='8'>
                            <div className="blog_details">
                                <img src={blog.imgUrl} alt="" className='w-100' />
                                <h2 className="section_title mt-4">{blog.title}</h2>
                                <div className="blog_publisher d-flex align-items-center gap-4 mb-4">
                                    <span className="blog_author">
                                        <i className="ri-user-line"></i>{blog.author}
                                    </span>
                                    <span className="d-flex align-items-center gap-1 section_description">
                                        <i className="ri-calendar-line"></i>{blog.date}
                                    </span>
                                    <span className="d-flex align-items-center gap-1 section_description">
                                        <i className="ri-time-line"></i>{blog.time}
                                    </span>
                                </div>
                                <p className="section_description">{blog.description}</p>

                                <h6 className="ps-5 fw-normal">
                                    <blockquote className='fs-4'>{blog.quote}</blockquote>
                                </h6>
                                <p className="section_description">{blog.description}</p>
                            </div>
                            <div className="comment_list mt-5">
                                <h4 className="mb-5">3 Comments</h4>

                                <div className="single_comment d-flex gap-3">
                                    <img src={commentImg} alt="" />
                                    <div className="comment_content">
                                        <h6 className='fw-bold'>Noman Nasir</h6>
                                        <p className="section_description mb-0">14 Sep, 2023</p>
                                        <p className="section_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sequi delectus esse nam, ex, similique dicta repellendus saepe odit suscipit aperiam unde explicabo nulla ipsa enim quos hic ratione totam.</p>
                                    </div>
                                </div>

                                <span className="replay d-flex align-items-center gap-1">
                                    <i className="ri-reply-line"></i>Replay
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}


export default BlogDetails; 