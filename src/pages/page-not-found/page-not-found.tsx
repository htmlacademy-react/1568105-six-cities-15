import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer';

export default function PageNotFound() {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>404 | Page not found</title>
      </Helmet>
      <main className="page__main">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="">404<br/>Page not found</h1>
            <Link to='/' className="favorites__status">back to Main Page</Link>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
