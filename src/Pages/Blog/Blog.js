import React from 'react';
import { Accordion} from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <h1 className='text-center mt-3 bg-success text-light'>QUESTION ANSWER</h1>
            <Accordion className='container mt-3'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h3 className='text-danger'>What's the Difference between javascript and nodejs??</h3></Accordion.Header>
                    <Accordion.Body>
                        <img src="https://i.ibb.co/gmdwzMG/javascript-vs-nodejs.png" alt="" />
                        <br />
                        <h5>JavaScript is a complete client side language. When a user runs JavaScript on a web page, it will be executed only in that browser. No communication with server. That means no user information will reach the server. As soon as the web page is reloaded, it will be lost. In JavaScript we work with DOM or DOM objects
                            On the other hand, NodeJS can be called the runtime of JavaScript. This means that due to NodeJS, JavaScript is no longer limited to browsers. It can be run directly on the PC with the help of the command line. In NodeJS  we can not work with DOM or DOM objects</h5>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h3 className='text-danger'>When should you use NODEJS and when should you use MONGODB??</h3></Accordion.Header>
                    <Accordion.Body>
                        <img className='w-100' src="https://i.ibb.co/fpYJ1bK/node-Mongo-1.png" alt="" />
                        <h5>•MONGODB: MongoDB is the Document Oriented Database. MongoDB stores a lot of data in JSON format. MongoDB's performance is much faster than any RDBMS. MongoDB is designed to work with Large Scale Data. MongoDB can work on multiple servers. mongoDB can handle large number of access request easily.
                            <br />
                            •NODEJS: There are 2 design patterns in programming. One is asynchronous programming and the other is synchronous programming. Node JS by default follows the Asynchronous pattern. That is, it does not wait for a task to be completed. In the meantime NodeJS started another job. That’s why we use nodeJS.</h5>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h3 className='text-danger'>Write the Differences between SQL and NOSQL databases.</h3></Accordion.Header>
                    <Accordion.Body>
                        <img className='w-100' src="https://i.ibb.co/jRDWjDX/sql-vs-nosql.jpg" alt="" />
                        <h5>• NoSQL database is process the information faster. But SQL database is little bit slow.
                            <br />
                            <br />
                            • Due to the simplicity of the data model, the speed of  NoSQL database is higher.The data model of SQL database is complex.
                            <br />
                            <br />
                            • Being flexible allows developers to run applications as they see fit. Due to the complexity, developers are not able to run the applications they need in the SQL database.</h5>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;