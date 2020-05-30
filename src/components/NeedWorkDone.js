import React, { Component } from 'react';

class NeedWorkDone extends Component {
    render () {
        return (
            <div className="work-done text-center">
                <h2>Need work done?</h2>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img src="/images/work/job.svg" alt="Job"/>
                            <h3>Post a job</h3>
                            <p>It's easy. Simply post a job you need completed and receive competitive bids from freelancers within minutes.</p>
                        </div>
                        <div className="col">
                            <img src="/images/work/freelancer.svg" alt="Freelancer"/>
                            <h3>Choose freelancers</h3>
                            <p>Whatever your needs, there will be a freelancer to get it done: from web design, mobile app development, virtual assistants, product manufacturing, and graphic design (and a whole lot more).</p>
                        </div>
                        <div className="col">
                            <img src="/images/work/safely.svg" alt="Safely"/>   
                            <h3>Pay safely</h3>
                            <p>With secure payments and thousands of reviewed professionals to choose from, Freelancer.com is the simplest and safest way to get work done online.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NeedWorkDone;