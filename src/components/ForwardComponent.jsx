import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

export default function ForwardComponent({ open, setOpen, handleSubmit, userList }) {
  const [user, setUser] = useState();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        className="fixed inset-0 flex items-center justify-center z-50"
      >
        <DialogContent className="bg-white w-80 rounded-lg p-4">
          <Autocomplete
            multiple={false}
            options={userList}
            getOptionLabel={(option) => option.name}
            onChange={(event, newValue) => setUser(newValue)}
            renderInput={(params) => (
              <TextField {...params} label="User" className="w-full" variant="outlined" />
            )}
          />
        </DialogContent>
        <DialogActions className="bg-gray-100 px-4 py-2 rounded-b-lg">
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded border border-yellow-500 hover:shadow-md"
            onClick={handleClose}
          >
            CANCEL
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded border border-yellow-500 hover:shadow-md ml-2"
            onClick={() => {
              handleSubmit(user);
              handleClose();
            }}
          >
            FORWARD
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
}