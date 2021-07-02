import React from 'react';
import { Button } from '@material-ui/core';
import { useStyles } from './styles';
import { mock } from './mock';
import { CardDnd } from '../CardDnd';
import LogoCard from './LogoCard';
import { useDispatch, useSelector } from 'react-redux';
import { changeStatusOfLogosSection } from '../../redux/actions/adminAction';

export default function Logos() {
  const [formState, setFormState] = React.useState(mock);
  const isActiveLogosSection = useSelector(
    (state) => state.adminReducer.isActiveLogosSection,
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleDeleteCompany = React.useCallback(
    (id) => {
      const newCompanyList = formState.filter((user) => user.id !== id);
      setFormState(newCompanyList);
    },
    [formState],
  );

  const moveCard = React.useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = formState[dragIndex];

      const coppiedStateArray = [...formState];

      const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragCard);

      coppiedStateArray.splice(dragIndex, 1, prevItem[0]);

      setFormState(coppiedStateArray);
    },
    [formState],
  );

  const handleStatusLogosSection = () => {
    dispatch(changeStatusOfLogosSection(!isActiveLogosSection));
  };

  return (
    <>
      <Button
        onClick={handleStatusLogosSection}
        variant="contained"
        color="primary">
        {isActiveLogosSection ? 'Off Logos Section' : 'On Logos Section'}
      </Button>
      <hr />
      {formState.map((company, index) => (
        <CardDnd
          key={company.id + company.companyName}
          id={company.id}
          index={index}
          moveCard={moveCard}>
          <LogoCard
            company={company}
            handleDeleteCompany={handleDeleteCompany}
          />
        </CardDnd>
      ))}
    </>
  );
}
