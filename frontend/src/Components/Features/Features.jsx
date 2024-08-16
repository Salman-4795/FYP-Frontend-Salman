import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <center>
      <ol className="features container">
      <li>
        <h2>Profiles</h2>
        <p>
          Manage detailed profiles for each artist, including their portfolio,
          biography, and achievements.
        </p>
      </li>
      <li>
        <h2>Event Management</h2>
        <p>
          Efficiently schedule and manage events, gigs, and tours for your
          artists.
        </p>
      </li>
      <li>
        <h2>Contract Management</h2>
        <p>
          Easily handle contracts and agreements with integrated tools and
          templates.
        </p>
      </li>
      <li>
        <h2>Financial Tracking</h2>
        <p>
          Keep track of earnings, expenses, and royalties with comprehensive
          financial management features.
        </p>
      </li>
      <li>
        <h2>Communication</h2>
        <p>
          Facilitate communication and collaboration between artists, managers,
          and stakeholders.
        </p>
      </li>
    </ol>
    </center>
  );
};

export default Features;
