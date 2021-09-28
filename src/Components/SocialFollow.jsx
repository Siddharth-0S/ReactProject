import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
      <h3>Social Follow</h3>
      <a href="https://www.linkedin.com/in/siddharth-maheshwari-85697b202?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BIBMNKIYAQzKyyIklynDG2g%3D%3D"
  className="Linkdin social">
  <FontAwesomeIcon icon={faLinkedin} size="2x" />
</a>
    </div>

  );
}