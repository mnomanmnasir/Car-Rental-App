import React, { useEffect } from 'react'
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap';
import { useParams } from 'react-router-dom'
import blogData from '../assests/data/blogData.js';
import Helmet from '../components/Helmet/Helmet';
import commentImg from '../assests/all-images/ava-1.jpg'
import '../styles/blog-details.css'
import { Link } from 'react-router-dom'


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

                                        <span className="replay d-flex align-items-center gap-1">
                                            <i className="ri-reply-line"></i>Replay
                                        </span>
                                    </div>
                                </div>

                                <div className="leave_comment-form mt-5">
                                    <h4>Leave a Comment</h4>
                                    <p className="section_description">
                                        You must sign-in to make or comment a post
                                    </p>

                                    <Form>
                                        <FormGroup className='d-flex gap-3'>
                                            <Input type="text" placeholder='Full Name' />
                                            <Input type="email" placeholder='Email' />
                                        </FormGroup>

                                        <FormGroup>
                                            <textarea rows="5" className='w-100 py-2 px-3 ' placeholder='Comment ....'></textarea>
                                        </FormGroup>
                                        <button className="btn mt-3">Post a comment</button>
                                    </Form>
                                </div>
                            </div>
                        </Col>

                        <Col lg='4' md='4'>
                        <div className="recent_post mb-4">
                            <h5 className="fw-bold">
                                Recent Posts
                            </h5>
                        </div>
                            {
                                blogData.map((item) => (
                                    <div className="recent_blog-post mb-4" key={item.id}>
                                        <div className="recent_blog-item d-flex gap-3">
                                            <img src={item.imgUrl} alt="" className='w-25 rounded-2' />
                                            <h6><Link to={`/blog/${item.title}`}>{blog.title}</Link></h6>
                                        </div>
                                    </div>
                                ))
                            }

                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}


export default BlogDetails; 