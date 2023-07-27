import React from "react";
import ReuseableHeading from "./ReuseableHeading";

const Multiples = () => {
  return (
    <div className="flex">
      <ReuseableHeading
        heading="Duck, Duck, Goose!"
        discount="-40%"
        desc="How do you choose the person to delegate a task to? Do you call for volunteers? Or, do you play a round of “Duck, Duck, Goose!” and assign the task at random? 
Effective delegation involves choosing the right person for the job. Choosing the wrong person could set them up for failure. Choosing the right person can lead to success—for you and them. 
But how can you tell who the right person or wrong person is to handle a task? What factors should you consider in your decision? Learn the answers to these questions throughout the following lesson. "
      />
      <ReuseableHeading
        heading="Consider This"
  
        desc="Imagine that you need to visit a doctor. Would you choose a dermatologist? Or, what about a neurologist, a psychologist, or a pediatrician? Would you go to an orthopedist or a primary care doctor? The answer will depend on your needs. While all of these people are doctors and may be equally qualified for their jobs, they specialize in different things. Likewise, remember that every person on your team will have different strengths and specialties that make them better suited for some tasks over others. 
Just like you may decide to skip seeing your primary care doctor and go straight to the emergency room if time is an issue, you might assign time-sensitive tasks to a particular team member who is known to be exceptionally efficient and punctual. "
      />
    </div>
  );
};

export default Multiples;


