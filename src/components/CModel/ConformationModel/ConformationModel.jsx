import { useState } from 'react';
import {
  // ... existing imports ...
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

export default function Admin() {
  
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const handleOpenDeleteConfirmation = (row) => {
    setDeleteConfirmationOpen(true);
    setDeleteTarget(row);
  };

  // Function to handle closing the deletion confirmation modal
  const handleCloseDeleteConfirmation = () => {
    setDeleteConfirmationOpen(false);
    setDeleteTarget(null);
  };

  // Function to handle user deletion
  const handleDelete = () => {
    // Perform deletion logic here
    console.log('Deleting user:', deleteTarget);

    // Close the deletion confirmation modal
    handleCloseDeleteConfirmation();
  };
  return (
    <>
      <Dialog
        open={deleteConfirmationOpen}
        onClose={handleCloseDeleteConfirmation}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete the user?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteConfirmation} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
