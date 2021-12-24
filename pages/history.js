import { useTranslation } from 'react-i18next';
import HeadPage from '../components/layouts/headPage';
import MainLayout from '../components/layouts/mainLayout';

import {absoluteUrl, getAppCookies, verifyToken } from '../middleware/utils';

const History = (props) => {

  const [t] = useTranslation('history')

  return (
    <MainLayout props={props} className={"isfixed"} >

      <HeadPage
        title={t('ourHistory')}
        subtitle={t('since')}
        className="history-page"
      />

      <div className="container__history-content">
        <h2>1979</h2>
        <div className="history-text">
          <p> Beer, valais, mountains, sensations, good products? Hm... probably... But what really brings us together is passion! Yes, the WhiteFrontier team is a group of young explorers, passionate about life. That Why, the production, the office or the taproom team make WhiteFrontier grow. </p> 
          <p> Beer, valais, mountains, sensations, good products? Hm... probably... But what really brings us together is passion! Yes, the WhiteFrontier team is a group of young explorers, passionate about life. taproom team make WhiteFrontier grow.</p> 
          <p> But what really brings us together is passion! Yes, the WhiteFrontier team is a group of young explorers, passionate about life. That Why, the production, the office or the taproom team make WhiteFrontier grow. </p>
          <p> Yes, the WhiteFrontier team is a group of young explorers, passionate about life. That Why, the production, the office or the taproom team make WhiteFrontier grow. </p>
        </div>

        <h2>1981</h2>
        <div className="history-text">
          <p> Yes, the WhiteFrontier team is a group of young explorers, passionate about life. That Why, the production, the office or the taproom team make WhiteFrontier grow. </p>
          <p> Beer, valais, mountains, sensations, good products? Hm... probably... But what really brings us together is passion! Yes, the WhiteFrontier team is a group of young explorers, passionate about life. That Why, the production, the office or the taproom team make WhiteFrontier grow. </p> 
          <p> Beer, valais, mountains, sensations, good products? Hm... probably... But what really brings us together is passion! Yes, the WhiteFrontier team is a group of young explorers, passionate about life. taproom team make WhiteFrontier grow.</p> 
          <p> But what really brings us together is passion! Yes, the WhiteFrontier team is a group of young explorers, passionate about life. That Why, the production, the office or the taproom team make WhiteFrontier grow. </p>
        </div>

        <h2>1986</h2>
        <div className="history-text">
          <p> Beer, valais, mountains, sensations, good products? Hm... probably... But what really brings us together is passion! Yes, the WhiteFrontier team is a group of young explorers, passionate about life. That Why, the production, the office or the taproom team make WhiteFrontier grow. </p> 
          <p> But what really brings us together is passion! Yes, the WhiteFrontier team is a group of young explorers, passionate about life. That Why, the production, the office or the taproom team make WhiteFrontier grow. </p>
          <p> Beer, valais, mountains, sensations, good products? Hm... probably... But what really brings us together is passion! Yes, the WhiteFrontier team is a group of young explorers, passionate about life. taproom team make WhiteFrontier grow.</p> 
          <p> Yes, the WhiteFrontier team is a group of young explorers, passionate about life. That Why, the production, the office or the taproom team make WhiteFrontier grow. </p>
        </div>

        <h2>1990</h2>
        <div className="history-text">
          <p> Beer, valais, mountains, sensations, good products? Hm... probably... But what really brings us together is passion! Yes, the WhiteFrontier team is a group of young explorers, passionate about life. That Why, the production, the office or the taproom team make WhiteFrontier grow. </p> 
          <p> Beer, valais, mountains, sensations, good products? Hm... probably... But what really brings us together is passion! Yes, the WhiteFrontier team is a group of young explorers, passionate about life. taproom team make WhiteFrontier grow.</p> 
          <p> Yes, the WhiteFrontier team is a group of young explorers, passionate about life. That Why, the production, the office or the taproom team make WhiteFrontier grow. </p>
          <p> But what really brings us together is passion! Yes, the WhiteFrontier team is a group of young explorers, passionate about life. That Why, the production, the office or the taproom team make WhiteFrontier grow. </p>
        </div>

        <div className="history-containter-img"></div>

      </div>

    </MainLayout>
  );
};

export default History;

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