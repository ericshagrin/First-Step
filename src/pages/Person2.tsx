import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Person2: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showReminder, setShowReminder] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');

    useEffect(() => {
        const now = new Date();
        const dayOfWeek = now.getUTCDay();
        const hours = now.getUTCHours() - 6; // Adjust for central time
        const isWeekday = dayOfWeek !== 0 && dayOfWeek !== 6; // 0 is Sunday, 6 is Saturday
        setIsOpen(isWeekday && hours >= 8 && hours < 17); // 8am-5pm central time
    }, []);

    return (
        <div className="container-resources">
            <h1 style={{ fontSize: '2em' }}>
                Let's call student wellness to set up an appointment!
            </h1>
            <h2>Operating Hours: 8 am - 5 pm</h2>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {isOpen ? (
                    <>
                        <button style={{ backgroundColor: '#528aae' }}>
                            Student Wellness is open right now! Call: 773.834.9355
                        </button>
                    </>
                ) : (
                    <>
                        <h3>Student Wellness is closed right now. Please call (773-702-3625) during operating hours.</h3>
                    </>
                )}
            </div>
        </div>
    );
};

export default Person2;
