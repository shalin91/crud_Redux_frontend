import React, { useContext, useEffect, useState } from "react";
import "./User.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllUsers,
  createUser,
  fetchUserbyId,
  updateUser,
  deleteUser,
} from "../../actions/userActions";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users) || [];
  const error = useSelector((state) => state.error);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [SelectedUser, setSelectedUser] = useState(null);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleAddUser = async () => {
    try {
      // Dispatch the createUser action with the newUser data
      await dispatch(createUser(newUser));

      dispatch(fetchAllUsers());
      // Clear the form fields
      setNewUser({
        name: "",
        email: "",
        password: "",
      });

      setShowAddModal(false);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const handleEditUserModal = async (user) => {
    try {
      setSelectedUser(user);

      await dispatch(fetchUserbyId(user.id));

      setNewUser({
        name: user.name,
        email: user.email,
        //   password: userDetails.password,
      });

      dispatch(fetchAllUsers());

      // Open the edit modal
      setShowEditModal(true);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const handleEditUser = async () => {
    try {
      await dispatch(updateUser(newUser, SelectedUser.id));

      setShowEditModal(false);
      setSelectedUser(null);
      dispatch(fetchAllUsers());
    } catch (error) {
      console.error("Error editing user:", error);
    }
  };

  const handleDeleteUser = (user) => {
    setSelectedUser(user);
    setShowDeleteModal(true);
  };

  const confirmDeleteUser = async () => {
    try {
      await dispatch(deleteUser(SelectedUser.id));
      setShowDeleteModal(false);
      dispatch(fetchAllUsers());
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <>
      <div>
        <h2>Users List</h2>
        <div>
          <button onClick={() => setShowAddModal(true)}>Add</button>
        </div>
        <div>
          <table className="user-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users && Array.isArray(users)
                ? users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.password}</td>
                      <td>
                        <button className="edit-button" onClick={() => handleEditUserModal(user)}>
                          Edit
                        </button>
                      </td>
                      <td>
                        <button className="delete-button" onClick={() => handleDeleteUser(user)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
      {showAddModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowAddModal(false)}>
              &times;
            </span>
            <h2>Add User</h2>
            <label>Name:</label>
            <input type="text" name="name" value={newUser.name} onChange={handleInputChange} />
            <label>Email:</label>
            <input type="email" name="email" value={newUser.email} onChange={handleInputChange} />
            <label>Password:</label>
            <input
              type="passowrd"
              name="password"
              value={newUser.password}
              onChange={handleInputChange}
            />
            <button onClick={handleAddUser}>Add User</button>
          </div>
        </div>
      )}
      {showEditModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowEditModal(false)}>
              &times;
            </span>
            <h2>Edit User</h2>
            <label>Name:</label>
            <input
              type="text"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            />
            <label>Email:</label>
            <input
              type="email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            />
            <button onClick={handleEditUser}>Edit User</button>
          </div>
        </div>
      )}

      {showDeleteModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Are you sure you want to delete this user?</p>
            <button onClick={() => setShowDeleteModal(false)}>Cancel</button>
            <button onClick={confirmDeleteUser}>Delete</button>
          </div>
        </div>
      )}
    </>
  );
};

// harsh.r@redsparkinfo.co.in

// dan@redsparkinfo.com

export default Users;
