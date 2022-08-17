// assets
import {
    AppstoreAddOutlined,
    AntDesignOutlined,
    BarcodeOutlined,
    BgColorsOutlined,
    FontSizeOutlined,
    LoadingOutlined
} from '@ant-design/icons';

// icons
const icons = {
    FontSizeOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    AntDesignOutlined,
    LoadingOutlined,
    AppstoreAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Payments',
    type: 'group',
    children: [
        {
            id: 'payment',
            title: 'Payment Info',
            type: 'item',
            url: '/payment-info',
            icon: icons.FontSizeOutlined
        },
        {
            id: 'recurring',
            title: 'Payment Schedule',
            type: 'item',
            url: '/recurring-payment-info',
            icon: icons.BarcodeOutlined
        },
        {
            id: 'ant-icons',
            title: 'Utility',
            type: 'item',
            url: '/icons/ant',
            icon: icons.AntDesignOutlined,
            breadcrumbs: false
        },
        {
            id: 'Demo',
            title: 'Demo Payment',
            type: 'item',
            url: '/demo-payment',
            icon: icons.BgColorsOutlined
        },
        {
            id: 'recurring',
            title: 'Demo Schedule Payment',
            type: 'item',
            url: '/demo-schedule-payment',
            icon: icons.BgColorsOutlined
        },
    ]
};

export default utilities;
