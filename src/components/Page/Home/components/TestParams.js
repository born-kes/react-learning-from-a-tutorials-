import React from "react";
import { useParams } from "react-router-dom";

const TestParams = () => {
    let { topicId, category } = useParams();
console.log(useParams())
    return (
        <div>
            { category && <div>Category: {category}</div> }
        <h3>
            Requested topic ID: {topicId}
        </h3>
        </div>
    );
}


export default TestParams;