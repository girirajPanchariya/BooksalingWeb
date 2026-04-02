import React, { useEffect } from "react";
import axios from "axios";
import { useAuth } from "../UserContext/AuthContext";

const UserProfile = () => {
  const { user, userProfile } = useAuth();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/user/profile",
          { withCredentials: true }
        );

        console.log(res.data);
        
        userProfile(res.data.userProfile);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user?.Name}</p>
      <p>Email: {user?.email}</p>
      <p>Address: {user?.address}</p>
      <p>Phone: {user?.phoneNo}</p>
    </div>
  );
};

export default UserProfile;