
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import popcross from '../assets/images/cross.png';
import questioning from '../assets/images/question-img.png';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
  },
  
}));

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
   

export default function CustomSeparator() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const body = (
    <div className="question-pop align-center justify-center align-item-center">
      <div className="question-pop-inner">
        <div style={modalStyle} className={classes.paper}>
          <img src={popcross} alt="" className="pop-close" onClick={handleClose}/>
          <img src={questioning} alt="" />
          <h4 id="simple-modal-title" className="text-black text-uppercase">Why are we asking?</h4>
          <p id="simple-modal-description" className="font-18 text-grey">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem ipsum has been the industry's standard dummy text ever since the 1500s. When a unknown printer took a gallary of types & scambled it to make a type specimen book.
          </p>
        </div>
      </div> 
    </div>   
  );
  
  
return (
  <div className={classes.root}>
     <div className="question1 align-center justify-center align-item-center">
       <p className="text-grey">Building Your Custom Workspace</p>
       <h2 className="m-0 brandon-bold">How many employees do you have ?</h2>
       <button type="button" className="brandon-black why-asking-btn text-uppercase font-14 text-red mt-10" onClick={handleOpen} >
           WHY ARE WE ASKING?
       </button> 
     </div>
     <div className="question-input d-flex justify-center">
     </div>

      
     <Modal
       open={open}
       onClose={handleClose}
       aria-labelledby="simple-modal-title"
       aria-describedby="simple-modal-description">
      {body}
     </Modal>
    </div>

  );
}