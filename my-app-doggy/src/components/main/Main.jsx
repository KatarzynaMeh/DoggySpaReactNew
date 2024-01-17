import classes from './Main.module.css'
import imgDog from './images/big_img_dog.png'

export const Main = () => {
    return (
      <div style={{ display: "flex", position: 'relative'}}>
        <div className={classes.divContainerMain}></div>
        <div>
          <div>
            <p
              style={{ top: "120px", left: "100px" }}
              className={classes.paragOne}
            >
              Your dog running 
            </p>
            <p style={{top: '220px', left: '110px'}} className={classes.paragOne}>amok in the dirt?</p>
          </div>
          <div>
            <p style={{top: '360px', left: '130px'}} className={classes.paragTwo}>Book your doggy </p>
            <p style={{top: '460px', left: '220px'}} className={classes.paragTwo}>spa day!</p>
          </div>

          <button style={{bottom: '130px', left: '210px'}} className={classes.buttonBook}>Book Appointment</button>
        </div>
        <div>
          <img src={imgDog} alt="Dog" />
        </div>
      </div>
    );
}