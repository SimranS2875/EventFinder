import React from 'react';

const Profile = () => {
  // Example user data (replace with actual data from your backend or state)
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    profilePic: "https://via.placeholder.com/150", // Replace with actual profile picture URL
    lastLogin: "May 5, 2025, 10:30 AM", // Example last login time
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Profile</h1>
      <div style={{ marginTop: '20px' }}>
        {/* Profile Picture */}
        <img
          src={user.profilePic}
          alt="Profile"
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '20px',
          }}
        />
        {/* User Details */}
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Last Login:</strong> {user.lastLogin}</p>
      </div>
    </div>
  );
};

export default Profile;