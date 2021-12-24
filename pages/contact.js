import { useTranslation } from 'react-i18next';

import MainLayout from '../components/layouts/mainLayout';
import { backgroundRandom } from '../utils/backgroundRandom';
import {absoluteUrl, getAppCookies, verifyToken} from '../middleware/utils';

const Contact = (props) => {
  
  const [t] = useTranslation('contact')

  const background = backgroundRandom()

  return (
    <MainLayout props={props} >
      <div className="contact-page">
        <div className="column" style={{ backgroundColor: background }}>
          <div>
            <div className="contact">
              <div className="contact__title">{t('comeUs')}</div>

              <div className="contact__container-adress">
                <p>Lorem ipsum 99 CP 99999</p>
                <p>ES - 46001 ipsum 1</p>
                <p>+36 123 456 789</p>
                <p><b>hi@demo.com</b></p>
              </div>

              <div className="contact__container-phones">
                <p><b>Brewery</b> +36 546 15 65</p>
                <p><b>Taproom</b> +36 546 15 66</p>
                <p><b>rrhh</b> +36 546 15 67</p>
              </div>

              <div className="contact__container-form">
                <form className="form">
                  <div className="row">
                    <input type="text" placeholder={t('firstName')} />
                    <input type="text" placeholder={t('lastName')} />
                  </div>
                  <div className="row">
                    <input type="text" placeholder={t('phone')} />
                    <input type="email" placeholder={t('email')} />
                  </div>

                  <textarea placeholder={t('yourQuestion')}></textarea>

                  <button onClick={e => e.preventDefault()} >{t('send')}</button>

                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="column"></div>
      </div>
    </MainLayout>
  );
};

export default Contact;

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