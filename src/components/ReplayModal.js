import React from 'react';
import { Box, Modal } from '@material-ui/core';

const ReplayModal = ({ open, setOpen, reset }) => {
  const handleClose = () => setOpen(false);

  return(
    <div>
      <Modal aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" open={open} onClose={handleClose} data-cy="replay-modal">
        <Box className="style-box">
          <button onClick={reset} align="center" className="play-again-button">Play Again?</button>
        </Box>
      </Modal>
    </div>
  );
};

export default ReplayModal;