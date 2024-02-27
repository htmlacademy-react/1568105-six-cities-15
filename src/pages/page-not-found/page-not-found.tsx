import { Link } from 'react-router-dom';
import Footer from '../../components/footer';

export default function PageNotFound() {
  return (
    <div className="page page--gray page--main">
      <main className="page__main">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="">404<br/>Page not found</h1>
            <Link to='/' className="favorites__status">back to Main Page</Link>
            {/* <b className="favorites__status">back to Main Page</b> */}
            {/* <p className="favorites__status-description">return to Main Page</p> */}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
