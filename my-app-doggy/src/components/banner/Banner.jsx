import classes from './Banner.module.css'

export const Banner = () => {
    return (
      <div style={{background: '#F3DED7', height:'50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <p className={classes.paragraphStyle}>
          Get 20% OFF When You Book A Spa Day For Your Animal Today!
        </p>
      </div>
    );
   
}