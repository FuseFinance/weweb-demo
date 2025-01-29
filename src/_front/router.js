import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"c81793bc-7d64-4ff6-b806-68e0e49c988a","homePageId":"fd7ca952-e065-47b1-b1fc-295034b5d356","authPluginId":"e93a2dfd-9b19-473e-b445-c666fed4e14a","baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":true}],"background":{},"workflows":[],"pages":[{"id":"5a5f5746-6faf-4a62-bf21-9121b1be7718","linkId":"5a5f5746-6faf-4a62-bf21-9121b1be7718","name":"decision","folder":null,"paths":{"en":"decision","default":"decision"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"63ef6d07-81be-43b6-89a6-3977a5be36ed","sectionTitle":"Sidemenu","linkId":"2b6c532b-5e51-43f7-92a1-c3f245c5f5a0"},{"uid":"bae8471a-93e3-432e-a4e4-b2e3ae6164d3","sectionTitle":"Page Content","linkId":"e89ee304-9d55-4326-8c56-0d4e4db27f3a"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"33edbd87-0598-45cc-9422-4584643fb0bf","linkId":"33edbd87-0598-45cc-9422-4584643fb0bf","name":"App Details","folder":null,"paths":{"en":"app-details","default":"app-details"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"1aa830a5-05ac-4d2d-a3c3-d19b8e2f5c8d","sectionTitle":"Page Content","linkId":"4c34f88e-e476-4c69-bf1e-8a9c02b545fa"},{"uid":"63ef6d07-81be-43b6-89a6-3977a5be36ed","sectionTitle":"Sidemenu","linkId":"2b6c532b-5e51-43f7-92a1-c3f245c5f5a0"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"8a1c3e81-036a-4a0e-af0f-d3888dee24e9","linkId":"8a1c3e81-036a-4a0e-af0f-d3888dee24e9","name":"containers2","folder":null,"paths":{"en":"containers2","default":"containers2"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"63ef6d07-81be-43b6-89a6-3977a5be36ed","sectionTitle":"Sidemenu","linkId":"2b6c532b-5e51-43f7-92a1-c3f245c5f5a0"},{"uid":"2420ce80-888f-488e-9b80-58fe71c52cc6","sectionTitle":"Page Content","linkId":"1cde932a-87d4-42e7-827f-3346632a76a9"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"9a79f3f1-2008-4a99-8f9b-752f6c2f303a","linkId":"9a79f3f1-2008-4a99-8f9b-752f6c2f303a","name":"containers","folder":null,"paths":{"en":"containers1","default":"containers1"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"63ef6d07-81be-43b6-89a6-3977a5be36ed","sectionTitle":"Sidemenu","linkId":"2b6c532b-5e51-43f7-92a1-c3f245c5f5a0"},{"uid":"4cc1a510-c0bd-43ef-92a3-8e4ab3f9a076","sectionTitle":"Page Content","linkId":"88dea879-1d34-40de-a159-b129b8eca7af"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"6de5fda0-42ca-4631-aed3-23c5b19a119e","linkId":"6de5fda0-42ca-4631-aed3-23c5b19a119e","name":"login","folder":null,"paths":{"en":"login","default":"login"},"langs":["en"],"cmsDataSetPath":null,"sections":[],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"fd7ca952-e065-47b1-b1fc-295034b5d356","linkId":"fd7ca952-e065-47b1-b1fc-295034b5d356","name":"Home","folder":null,"paths":{"en":"home","default":"home"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"63ef6d07-81be-43b6-89a6-3977a5be36ed","sectionTitle":"Sidemenu","linkId":"2b6c532b-5e51-43f7-92a1-c3f245c5f5a0"},{"uid":"59d2a1fe-2d53-4713-bbd2-65a5696ab387","sectionTitle":"Container","linkId":"cb798e85-01d2-4bf9-9df3-40d5ad3e1b5a"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"e93a2dfd-9b19-473e-b445-c666fed4e14a","name":"Auth0","namespace":"auth0"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 50;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        '-staging.' + (process.env.WW_ENV === 'staging' ? process.env.VUE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(process.env.VUE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
