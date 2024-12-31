import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllUsersDetails } from "../context/actions/allUsersActions";
import { getAllUsers } from "../api";
import { Avatar } from "../assesets";
import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from "@mui/material";

const AllUsers = () => {
  const allUsers = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();
  const defalutMaterialTheme = createTheme();
  const [data, setdata] = useState([]);
  // console.log(allUsers[0]);
  // console.log(allUsers[0]);

  useEffect(() => {
    if (!allUsers) {
      console.log("in users");
      try {
        getAllUsers().then((data) => {
          // console.log("fetching users");

          console.log(`user data `, data);
          dispatch(setAllUsersDetails(data));
          setdata(data.slice(0, 10));
        });
      } catch (error) {
        console.log("error while fetching the data", error);
      }
    }
  }, []);

  const tableHeaderStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    backgroundColor: "#f4f4f4",
    textAlign: "left",
  };

  const tableCellStyle = {
    border: "1px solid #ddd",
    padding: "8px",
  };

  return (
    <div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Profile Photo</th>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Email</th>
            <th style={tableHeaderStyle}>Last Signed In</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.uid}>
              {/* Profile Photo */}
              <td style={tableCellStyle}>
                <img
                  src={user.photoURL || Avatar}
                  alt={user.name}
                  style={{ width: "50px", borderRadius: "50%" }}
                />
              </td>
              {/* Name */}
              <td style={tableCellStyle}>{user.displayName}</td>
              {/* Email */}
              <td style={tableCellStyle}>{user.email}</td>
              {/* Last Signed In */}
              <td style={tableCellStyle}>{user.metadata.lastSignInTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
