import React from 'react';
import './TransitionLeftSlide.css'
import Transition from 'react-addons-css-transition-group'

const TransitionLeftSlide = ({condition, component}) => {
    return (
        <Transition
            transitionName="transition"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={800}
        >
        {condition && component}
        </Transition>
    );
};

export default TransitionLeftSlide;