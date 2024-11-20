import React from 'react';
import ProfileCard from './components/ProfileCard/ProfileCard';
import './App.css';


function App() {
    return (
        <div className="app-container">
            {/* Main Content Area */}
            <main className="main-content">
                {/* Profile Card Component */}
                <ProfileCard />
            </main>

            {/* Background Animation Elements */}
            <div className="bg-animation">
                <div className="shape-1"></div>
                <div className="shape-2"></div>
                <div className="shape-3"></div>
            </div>
        </div>
    );
}

export default App;