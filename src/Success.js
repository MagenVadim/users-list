import React from "react";

export const Success = () => {
    return(
<div className="success-block">
    <img src="/assets/success.svg" alt="Success" />
    <h3>Successfully!</h3>
    <p>An invitation has been sent to all 5 users.</p>
    <button className="send-invite-btn">Back</button>
</div>
)
}