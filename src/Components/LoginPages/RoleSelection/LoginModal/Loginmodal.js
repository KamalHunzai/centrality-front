import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './Loginmodal.css'
import Sucess from '../../../images/WhatsApp_Image_2024-01-11_at_7.31.10_PM-removebg-preview.png'
import { MdErrorOutline } from "react-icons/md";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Loginmodal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} className='LoginButton'>Continue</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='LogModal'
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='Loginmdl-main'>
            <img src={Sucess} alt='#'/>
            <p>COMPLETED <MdErrorOutline /></p>
            <h3>Successfully complete!</h3>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}