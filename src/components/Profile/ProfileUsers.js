import { useEffect } from "react";
import { gsap } from "gsap";
import "./ProfileUsers.css";

const ProfileUsers = ({
  imageLarge,
  firstName,
  lastName,
  phoneNumber,
  gender,
}) => {
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline.fromTo(
      ".profile_layout",
      {
        opacity: 0,
        y: "100%",
        backgroundColor: "transparent",
      },
      {
        y: "0%",
        duration: 3,
        opacity: 1,
        backgroundColor: "rgb(255, 248, 220)",
        ease: "power4.out",
      }
    );
    timeline.fromTo(
      ".profile_left img",
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 1, ease: "power1.in" },
      "-=1"
    );
    timeline.fromTo(
      ".profile_right span, .profile_right_header2 p",
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, stagger: 0.15, duration: 1, ease: "power2.inOut" }
    );
  });

  if (!imageLarge || !firstName || !lastName || !phoneNumber || !gender) {
    return <div>No user data available</div>;
  }

  return (
    <div className="profile_layout">
      <div className="profile_left">
        <img src={imageLarge} alt={`${firstName} ${lastName}`} />
      </div>
      <div className="profile_right">
        <div className="profile_right_header1">
          <span>
            <span id="info1">First Name:</span>
            <span id="value1">{firstName}</span>
          </span>
          <span>
            <span id="info2">Last Name:</span>
            <span id="value2">{lastName}</span>
          </span>
        </div>
        <div className="profile_right_header2">
          <p>
            <span id="info3">Gender:</span>
            <span id="value3">{gender}</span>
          </p>
          <p>
            <span id="info4">Phone Number:</span>
            <span id="value4">{phoneNumber}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileUsers;
