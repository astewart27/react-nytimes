import React from 'react';
import uuid from "uuid";

const Story = props => (
    <div className="wrapper">
        <div className="stories">
            { props.stories.map((story) => {
                const thumbnail = story.multimedia.find(url => {
                    if (url.format === "superJumbo") {
                        return true;
                    } else if (url.format === "mediumThreeByTwo210") {
                        return true;
                    }                  
                    return false;
                });

                const caption = story.multimedia.find(caption => {
                    if (caption.caption){
                        return true;
                    }
                    return false;
                });
                console.log(story,thumbnail);
                return (
                    <div key={uuid.v4()} className="story">
                        <h3>{story.title}</h3>
                        <h5>{story.abstract}</h5>
                        <a href={story.url} target="_blank" rel="noopener noreferrer">
                        {
                            thumbnail ? <img src={thumbnail.url} alt={thumbnail.title}/> : <img src="https://placeimg.com/640/480/nature" alt="Placeholder"/>
                        }
                        </a>
                        {
                            caption && <p>{caption.caption}</p>
                        }
                    </div>
                );
            }) }
        </div>
    </div>
);

export default Story;