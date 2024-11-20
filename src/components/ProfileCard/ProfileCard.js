import React from 'react';
import './ProfileCard.css';
import guruImage from '../../assets/guru.jpg';

const ProfileCard = () => {
    // Social media profiles - Add your actual social media URLs
    const socialLinks = {
        linkedin: "https://linkedin.com/in/guruabinaya2003",
        twitter: "https://twitter.com/guruabinaya",
        github: "https://github.com/Guruabinaya31"
    };

    // Handle social media clicks
    const handleSocialClick = (platform) => {
        window.open(socialLinks[platform], '_blank');
    };

    // Handle contact button click
    const handleContact = () => {
        window.location.href = "mailto:your.email@example.com";
    };

    return (
        <div className="profile-card">
            {/* Profile Header Section */}
            <div className="profile-header">
                <div className="profile-img-container">
                    <img 
                        src={guruImage}
                        alt="Guruabinaya" 
                        className="profile-img"
                    />
                </div>
            </div>

            {/* Profile Info Section */}
            <div className="profile-info">
                <h1 className="profile-name">Guruabinaya</h1>
                <h2 className="profile-role">Java Developer</h2>
                
                {/* Skills Tags */}
                <div className="skill-tags">
                    <span className="skill-tag">Java</span>
                    <span className="skill-tag">Spring Boot</span>
                    <span className="skill-tag">MySQL</span>
                    <span className="skill-tag">REST API</span>
                </div>

                {/* Profile Description */}
                <p className="profile-description">
                    Passionate Java developer with expertise in building robust and 
                    scalable applications. Committed to writing clean, maintainable code 
                    and staying current with industry best practices.
                </p>

                {/* Contact Button */}
                <button 
                    className="contact-btn"
                    onClick={handleContact}
                >
                    Contact Me
                </button>

                {/* Social Links */}
                <div className="social-links">
                    <button 
                        className="social-btn linkedin"
                        onClick={() => handleSocialClick('linkedin')}
                        aria-label="LinkedIn Profile"
                    >
                        <span>in</span>
                    </button>
                    <button 
                        className="social-btn twitter"
                        onClick={() => handleSocialClick('twitter')}
                        aria-label="Twitter Profile"
                    >
                        <span>𝕏</span>
                    </button>
                    <button 
                        className="social-btn github"
                        onClick={() => handleSocialClick('github')}
                        aria-label="GitHub Profile"
                    >
                        <span>gh</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;