
function Profile({ name, email }) {
    return (
      <div className="bg-gray-100 p-4 rounded-md shadow-md">
        <h2 className="text-lg font-semibold">Profile</h2>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </div>
    );
  }
  
  export default Profile;