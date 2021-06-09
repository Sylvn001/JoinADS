require('./bootstrap');

// Import modules...
import {  createApp, h } from 'vue';
import { App as InertiaApp, plugin as InertiaPlugin } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRocket, faUser, faCog, faSignOutAlt, faPlus, faEraser, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import Vuelidate from 'vuelidate'

library.add(faRocket, faUser, faCog, faSignOutAlt, faPlus, faPencilAlt, faEraser)

const el = document.getElementById('app');

createApp({
    render: () =>
        h(InertiaApp, {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: (name) => require(`./Pages/${name}`).default,
        }),
})
    .component("font-awesome-icon", FontAwesomeIcon)
    // .component("vuelidate", Vuelidate)
    .mixin({ methods: { route } })
    .use(InertiaPlugin)
    .mount(el);

InertiaProgress.init({ color: '#4B5563' });
