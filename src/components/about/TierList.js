// TierList.js
import React from 'react';
import './TierList.css';

const TierList = () => {
  return (
    <div className="tier-list">
      <div className='tier' id='S'>
        <p>S</p>
        <div className='tech-stack-icons'>
            <img src='/TechStackIcons/c.svg' alt='C Programming Language' />
            <img src='/TechStackIcons/java.svg' alt='Java Programming Language' />
            <img src='/TechStackIcons/swift.svg' alt='Swift Programming Language' />
            <img src='/TechStackIcons/spring.svg' alt='Spring Framework' />
        </div>
      </div>
      <div className='tier' id='A'>
        <p>A</p>
        <div className='tech-stack-icons'>
            <img src='/TechStackIcons/react.svg' alt='React JavaScript Library' />
            <img src='/TechStackIcons/html-5.svg' alt='HTML5' />
            <img src='/TechStackIcons/css-3.svg' alt='CSS3' />
            <img src='/TechStackIcons/python.svg' alt='Python Programming Language' />
            <img src='/TechStackIcons/mysql.svg' alt='MySQL Database' />
        </div>    
      </div>
      <div className='tier' id='B'>
        <p>B</p>
        <div className='tech-stack-icons'>
            <img src='/TechStackIcons/openshift.svg' alt='OpenShift Container Platform' />
            <img src='/TechStackIcons/javascript.svg' alt='JavaScript' />
            <img src='/TechStackIcons/mongodb-icon.svg' alt='MongoDB Database' />
            <img src='/TechStackIcons/kafka-icon.svg' alt='Apache Kafka' />
        </div>
      </div>
      <div className='tier' id='C'>
        <p>C</p>
        <div className='tech-stack-icons'>
            <img src='/TechStackIcons/ruby.svg' alt='Ruby Programming Language' />
            <img src='/TechStackIcons/tensorflow.svg' alt='TensorFlow Library' />
            <img src='/TechStackIcons/flask.svg' alt='Flask Web Framework' />
            <img src='/TechStackIcons/php.svg' alt='PHP Programming Language' />
        </div>
      </div>
    </div>
  );
};

export default TierList;
