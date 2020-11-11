import React from 'react';

import Banner from '../_page/_banner';
import PageText from '../_page/_text';
import List from '../_page/_List';

const feeList = [
  {
    title: 'Individual / Family therapy',
    rate: '$120/therapy hour',
  },
  {
    title: 'Court appearances',
    rate: '$400/hour minimum, two hours',
  },
  {
    title: 'Clinical Supervision',
    rate: '$100/hour',
  },
  {
    title: 'Evaluations',
    rate: 'Contact me for pricing',
  },
  {
    title: 'Group Therapy',
    rate: 'Contact me for active groups and pricing',
  },
];

const Fees = () => {
  return (
    <>
      <Banner>Fees</Banner>
      <PageText>
        <h2>Fees</h2>
        <List.color>
          {feeList.map((e) => {
            return (
              <li>
                <span>{e.title}</span>
                <span>{e.rate}</span>
              </li>
            );
          })}
        </List.color>
        <h2>Insurance</h2>
        <p>
          I accept Excellus Blue Cross Blue Shied, MVP, Fidelis, and Independent
          Health insurance.
        </p>

        <p>
          Please contact your insurance company directly to ensure I am an
          in-network provider for them.
        </p>
      </PageText>
    </>
  );
};

export default Fees;
