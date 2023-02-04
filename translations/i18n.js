import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import nav_en from "./en/components/nav.json"
import pages_en from "./en/pages/pages.json"
//components
import nav_es from "./es/components/nav.json"
// pages
import pages_es from "./es/pages/pages.json"

i18n
	.use(initReactI18next)
// init i18next
// for all options read: https://www.i18next.com/overview/configuration-options
	.init({
		fallbackLng: "es",
		lng: "en",
		debug: false,
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
		transSupportBasicHtmlNodes: true,
		resources: {
			es: {
				nav: nav_es,
				home: pages_es.home,
				shop: pages_es.shop,
				history: pages_es.history,
				contact: pages_es.contact,
				jobs: pages_es.jobs,
				wt: pages_es.wt,
			},
			en: {
				nav: nav_en,
				home: pages_en.home,
				shop: pages_en.shop,
				history: pages_en.history,
				contact: pages_en.contact,
				jobs: pages_en.jobs,
				wt: pages_en.wt,
			},
		},
	})

export default i18n
