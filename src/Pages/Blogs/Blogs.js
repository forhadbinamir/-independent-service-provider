import React from 'react';
import { ModalDialog } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='mt-10'>
            <div className='container mb-3'>
                <h2 className='text-3xl rounded bg-red-200 p-5 '>Q1 Authentication vs. Authorization</h2>
                <p className='bg-gray-200 p-5 rounded'>So, what is the difference between authentication and authorization? Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. The first step is to confirm the identity of a passenger to make sure they are who they say they are. Once a passenger’s identity has been determined, the second step is verifying any special services the passenger has access to, whether it’s flying first-class or visiting the VIP lounge.
                    <br />
                    <br />
                    In the digital world, authentication and authorization accomplish these same goals. Authentication is used to verify that users really are who they represent themselves to be. Once this has been confirmed, authorization is then used to grant the user permission to access different levels of information and perform specific functions, depending on the rules established for different types of users.</p>
            </div>
            <div className='container mb-3'>
                <h2 className='text-3xl rounded bg-red-200 p-5 '>Q2 Why are you using firebase?</h2>
                <p className='bg-gray-200 p-5 rounded'>Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.
                    <br />
                    <br />
                    Tired of writing boring code for your backend, or can't even write it at all? Try Google Firebase. So what's Google Firebase, and why should you build your app around it?
                    <br />
                    <br />
                    <strong>What other options do you have to implement authentication?</strong>
                    <br />
                    <br />
                    <strong className='bg-yellow-400'> Back4App</strong>

                </p>
            </div>
            <div className='container mb-3'>
                <h2 className='text-3xl rounded bg-red-200 p-5 '>Q3 What other services does firebase provide other than authentication</h2>
                <p className='bg-gray-200 p-5 rounded'>
                    1/ Parse – Open Source Backend Platform;
                    <br />
                    <br />
                    2/ Back4app – Parse Hosting Platform;
                    <br />
                    <br />
                    3/ Kinvey – Mobile Backend as a Service (mBaaS) for the Enterprise;
                    <br />
                    <br />
                    4/ Backendless – Mobile Backend and API Services Platform;
                    <br />
                    <br />
                    5/ Kuzzle – Backend for web, hybrid, or native mobile apps and IoT projects;
                    <br />
                    <br />
                    6/ Pubnub – Real-time APIs and Global Messaging;
                    <br />
                    <br />
                    7/ Kumulos – App Performance Management;
                    <br />
                    <br />
                    8/ Game Sparks – Game Backend Platform;
                    <br />
                    <br />
                    9/ Hoodie – Generic backend with a client API for
                    Offline First applications;
                    <br />
                    <br />
                    10/ Appwrite – Open-Source backend for Flutter
                    developers
                    <br />
                    <br />
                    11/ Deployd – Simple core library, with a modular API for your application;
                    <br />
                    <br />
                    12/ NHost – Accelerates development and provides full control;
                    <br />
                    <br />
                    13/ Amplify JS – Open-source Javascript framework;
                    <br />
                    <br />
                    14/ Heroku – Platform as a service backed by Salesforce.</p>
            </div>
        </div>
    );
};

export default Blogs;