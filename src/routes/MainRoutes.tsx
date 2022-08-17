import { lazy } from 'react';

// project import
import Loadable from '../components/Loadable';
import MainLayout from '../layout/MainLayout';
import PaymentInfo from "../pages/paymentInfo/PaymentInfo";
import PayInfo from "../pages/paymentInfo";
import SinglePayInfo from "../pages/paymentInfo/SinglePayInfo";
import RecurringInfo from "../pages/recurringInfo";
import SingleRecurring from "../pages/recurringInfo/SingleRecurring";
import DemoPayment from "../pages/demo payment/demoPayment";
import CompletePayment from "../pages/demo payment/CompletePayment";
import DemoSchedule from "../pages/demoSchedule/DemoSchedule";

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('../pages/dashboard')));


const MainRoutes = {
    path: '/' ,
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'payment-info',
            element: <PayInfo/>,
        },

        {
            path: 'payment-info/:id',
            element: <SinglePayInfo/>
        },
        {
            path: 'recurring-payment-info',
            element: <RecurringInfo/>
        },
        {
            path: 'recurring-info/:id',
            element: <SingleRecurring/>
        },
        {
            path: 'demo-payment',
            element: <DemoPayment/>
        },
        {
            path: 'demo-schedule-payment',
            element: <DemoSchedule/>
        },
        {
            path: 'complete-payment/:id',
            element: <CompletePayment/>
        },
    ]
};

export default MainRoutes;
