

export default {
    name:'daybook',
    component: () => import(/* webpackChunkName: "daybokk" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "daybokkNoEntry" */ '@/modules/daybook/views/NoEntrySelected.vue'), 
        },
        {
            path: ':id',
            name: 'entry',
            component: () => import(/* webpackChunkName: "daybookEntry" */ '@/modules/daybook/views/EntryView.vue'), 
        }
    ]
}