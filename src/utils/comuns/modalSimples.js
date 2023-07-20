import { useState } from 'react';
import { observer } from 'mobx-react';
import { Modal, Box } from '@mui/material';
import modelAlerta from '../../models/alerta';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '1px solid #FF5075',
  boxShadow: 24,
  p: 4,
  borderRadius: '4px'
};

export default observer(function ModalBasica({ children }) {
  return (
    <div className={style}>
      <Modal
        open={modelAlerta.estadoModal}
        onClose={() => modelAlerta.fecharModal()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {
            children
          }
        </Box>
      </Modal>
    </div>
  );
})