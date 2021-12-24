import BEER_PREMIUM from '../data/premiumBeers';
import BeersList from '../components/list/beersList';
import MainLayout from '../components/layouts/mainLayout';
import { absoluteUrl, getAppCookies, verifyToken } from '../middleware/utils';

const PremiumBeers = (props) => {

  return (
    <MainLayout props={props}>
      <div className="container-premium-beers">
        {BEER_PREMIUM.map((i, index) => (
          <BeersList i={i} key={index} isPremium/>
          ))}
      </div>
    </MainLayout>
  );
};

export default PremiumBeers;

export async function getServerSideProps(context) {
  const { req } = context;
  const { origin } = absoluteUrl(req);

  const baseApiUrl = `${origin}/api/about`;

  const { token } = getAppCookies(req);
  const profile = token ? verifyToken(token.split(' ')[1]) : '';

  return {
    props: {
      baseApiUrl,
      profile,
    },
  };
}