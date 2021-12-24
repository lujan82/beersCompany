import Link from 'next/link'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import MainLayout from '../components/layouts/mainLayout';
import { absoluteUrl, getAppCookies, verifyToken } from '../middleware/utils';


const Wt = (props) => {
  const [t] = useTranslation('wt')

  const [playVideo, setPlayVideo] = useState(false)
  
  return (
    <MainLayout props={props}>
      <div className="container-wt" >
        <div className="wt-ambassadors" onClick={() => setPlayVideo(true) }>
          {t('ambassadors')}
          <p>{t('openVideo')}</p>
        </div>

        <Link href="/team">
          <a className="wt-team">{t('team')}</a>
        </Link>

        <Link href="/blog">
          <a className="wt-blog">Blog</a>
        </Link>
      </div>

      {playVideo &&
        <div className="wt-iframe" onClick={() => setPlayVideo(!playVideo) }>
          <iframe className="iframe" src="https://player.vimeo.com/video/554698946?h=fb60587b95" autoPlay="true" width="640" height="360"  ></iframe>
        </div>
      }

    </MainLayout>
  );
};

export default Wt;

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