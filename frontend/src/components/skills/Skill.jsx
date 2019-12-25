import React from 'react';

function Star(){
    return <img className='star' src={require("../../images/star.png")} alt='star' />
}

function returnStar(props) {
    if (props.stars === 5) {
        return <div>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </div>
    }
    if (props.stars === 4) {
        return <div>
                <Star />
                <Star />
                <Star />
                <Star />
            </div>
    }
    if (props.stars === 3) {
        return <div>
                <Star />
                <Star />
                <Star />
            </div>
    }
    if (props.stars === 2) {
        return <div>
                <Star />
                <Star />
            </div>
    }
    if (props.stars === 1) {
        return <div>
                <Star />
            </div>
    }
}

function Skill(props) {
    return <div>
        <span>
            <h2 className='skillType'>
                {props.name}
            </h2>   
            {returnStar(props)}
                </span>
        </div>
}

export default Skill;