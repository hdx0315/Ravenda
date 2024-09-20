import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignOutModal() {

  // Sign out logic
  const handleSignOut = () => {
    console.log('User signed out');
    // Add your sign-out logic here, such as clearing tokens or redirecting
    window.location.href = '/auth/login';  // Redirect after sign-out
  };

  return (
    <>
      {/* Sign Out Trigger Button */}
      <button type="button" className="btn text-black font-semibold" data-bs-toggle="modal" data-bs-target="#signOutModal">
        Sign Out
      </button>

      {/* Sign-Out Modal */}
      <div className="modal fade" id="signOutModal" tabIndex="-1" aria-labelledby="signOutModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="signOutModalLabel">Confirm Sign Out</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Are you sure you want to sign out?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-danger" onClick={handleSignOut}>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignOutModal;
