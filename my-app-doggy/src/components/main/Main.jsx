import classes from './Main.module.css'
import imgDog from './images/big_img_dog.png'

export const Main = () => {
    return (
      <div style={{ display: "flex" }}>
        <div className={classes.divContainerMain}></div>
        <div>
          <div style={{marginBottom: '40px'}}>
            <p className={classes.paragOne}>Your dog running </p>
            <p className={classes.paragOne}>amok in the dirt?</p>
          </div>
          <div style={{marginBottom: '70px'}}>
            <p className={classes.paragTwo}>Book your doggy </p>
            <p className={classes.paragTwo}>spa day!</p>
          </div>

          <button className={classes.buttonBook}>Book Appointment</button>
        </div>
        <div>
          <img src={imgDog} alt="Dog" />
        </div>
      </div>
    );
}