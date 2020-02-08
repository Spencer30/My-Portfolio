import React from "react";
import TweetCard from "../twitter-Style/TweetCard";
import portfolioInfo from "../twitter-Style/portfolioInfo";

function createTweetCard(tweetCard){
    return (<TweetCard 
        key={tweetCard.id}
        title={tweetCard.title}
        subTitle={tweetCard.subTitle}
        img={tweetCard.img}
        info={tweetCard.info}
        isImg={tweetCard.isImg}    
    />)
}

function TweetDeck(props){
    return <div style={{display:props.display ? "block" : "none"}}className="tweetContainer">
        {portfolioInfo.map(createTweetCard)}
    </div>
}

export default TweetDeck;