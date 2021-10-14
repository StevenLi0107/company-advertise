import React, { Suspense } from "react";
import { Paper } from "@material-ui/core";

import Portfolios from "../../components/Portfolios";
import VerticalTabs from "../../components/VerticalTabs";
import People from "../../components/People";
import Logos from "../../components/Logos";
import { useDispatch } from "react-redux";
import {
  getClientsList,
  getPortfoliosList,
  getUserList,
} from "../../redux/actions/adminAction";

const configureTab = () => [
  {
    label: "Portfolios",
    link: `/admin/portfolios`,
    component: <Portfolios />,
  },
  {
    label: "People",
    link: `/admin/people`,
    component: <People />,
  },
  {
    label: "Logos",
    link: `/admin/logos`,
    component: <Logos />,
  },
  {
    label: "Log out",
    link: `/login`,
    component: <></>,
  },
];

const AdminDetails = () => {
  const dispatch = useDispatch();

  // const usersList = useSelector((state) => state.adminReducer.usersList);
  // const clientsList = useSelector((state) => state.adminReducer.clientsList);
  // const portfoliosList = useSelector(
  //   (state) => state.adminReducer.portfoliosList,
  // );

  React.useEffect(() => {
    dispatch(getUserList());
    dispatch(getPortfoliosList());
    dispatch(getClientsList());
  }, [dispatch]);

  return (
    <Paper elevation={0} square>
      <Suspense fallback={<></>}>
        <VerticalTabs tabs={configureTab()} />
      </Suspense>
    </Paper>
  );
};

export default AdminDetails;
