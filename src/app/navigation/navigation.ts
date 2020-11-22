import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        icon     : 'apps',
        children : [
            {
                id       : 'dashboards',
                title    : 'Dashboards',
                translate: 'NAV.DASHBOARDS',
                type: 'item',
                icon     : 'dashboard',
                url  : '/apps/dashboards/analytics'
            },
            {
                id       : 'agencies',
                title    : 'Agencies',
                translate: 'NAV.CALENDAR',
                type     : 'item',
                icon     : 'today',
                url      : '/agencies'
            },
            {
                id       : 'agents',
                title    : 'Agents',
                translate: 'NAV.CALENDAR',
                type     : 'item',
                icon     : 'today',
                url      : '/agents'
            },
            {
                id       : 'properties',
                title    : 'Properties',
                translate: 'NAV.CALENDAR',
                type     : 'item',
                icon     : 'today',
                url      : '/properties'
            },
          
        ]
    }
];
