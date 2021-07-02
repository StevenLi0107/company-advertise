import React, { Suspense } from 'react';
import { Paper } from '@material-ui/core';

import Portfolios from '../../components/Portfolios';
import VerticalTabs from '../../components/VerticalTabs';
import People from '../../components/People';
import Logos from '../../components/Logos';

const configureTab = () => [
  {
    label: 'Portfolios',
    link: `/admin/portfolios`,
    component: <Portfolios />,
  },
  {
    label: 'People',
    link: `/admin/people`,
    component: <People />,
  },
  {
    label: 'Logos',
    link: `/admin/logos`,
    component: <Logos />,
  },
  {
    label: 'Log out',
    link: `/login`,
    component: <></>,
  },
];

const AdminDetails = () => {
  return (
    <Paper elevation={0} square>
      <Suspense fallback={<></>}>
        <VerticalTabs tabs={configureTab()} />
      </Suspense>
    </Paper>
  );
};

export default AdminDetails;
