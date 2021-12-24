import { useTranslation } from 'react-i18next';
import HeadPage from '../components/layouts/headPage';

import MainLayout from '../components/layouts/mainLayout';
import {absoluteUrl, getAppCookies, verifyToken} from '../middleware/utils';

const Jobs = (props) => {
  
  const [t] = useTranslation('jobs')

  return (
    <MainLayout props={props}  className={"isfixed"} >

      <HeadPage
        title={t('title')}
        subtitle={t('subTitle')}
        className="jobs-page"
      />

      <div className="container__jobs-content">
        <h2>{t('ourPhilosophy')}</h2>

        <p> Beer, valais, mountains, sensations, good products? Hm... probably... But what really brings us together is passion! Yes, the WhiteFrontier team is a group of young explorers, passionate about life. That Why, the production, the office or the taproom team make WhiteFrontier grow. </p> 
        <p> Are you funny, rigorous, curious, hard worker ? </p> 
        <p> If the answer is yes, look at our job offers. </p>

        <a href="mailto:example@email.com">
          <button>Apply</button>
        </a>
      </div>

    </MainLayout>
  );
};

export default Jobs;

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