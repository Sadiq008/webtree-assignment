import { useEffect, useState } from "react";
import ProfileUsers from "../Profile/ProfileUsers";
import "./Users.css";

const Users = () => {
  const [userResults, setUserResults] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://randomuser.me/api/?page=1&results=1&seed=abc"
      );
      const data = await response.json();
      if (data && data.results && data.results.length > 0) {
        setUserResults(data.results[0]);
        console.log("User Results: ", data.results);
      } else {
        console.log("No data found");
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {userResults ? (
        <ProfileUsers
          imageLarge={userResults.picture.large}
          firstName={userResults.name.first}
          lastName={userResults.name.last}
          phoneNumber={userResults.phone}
          gender={userResults.gender}
        />
      ) : (
        <div className="loading">Loading user data...</div>
      )}
    </div>
  );
};

export default Users;
