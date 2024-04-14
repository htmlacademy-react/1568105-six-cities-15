import Spinner from './spinner.svg';
import classes from './loader.module.css';

export default function Loader() {

  return (
    <div className={classes.loader}>
      <img className={classes.loaderIcon} src={Spinner} alt="" width="100" height="100" />
    </div>
  );
}
