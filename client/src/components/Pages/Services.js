import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import VAR from '../VAR';
import layout from '../_layout';

import Banner from '../_page/_banner';
import PageText from '../_page/_text';

const Services = () => {
  return (
    <>
      <Banner>Services</Banner>
      <PageText>
        <h2>Services</h2>
        <p>
          While I primarily provide services to children and families, I also
          have experience working with adults coping with loss, trauma, anxiety,
          and relationship strains. I am an expert in trauma therapy, treatment
          of children and youth who cause sexual harm, and juvenile delinquency.
        </p>
        <p>
          My clinical practice has included work with individuals coping with:
        </p>

        <p>
          <ul>
            <li>Trauma</li>
            <li>Adverse life experiences</li>
            <li>Anxiety</li>
            <li>Depression</li>
            <li>Grief and loss</li>
            <li>Academic struggles and performance anxiety</li>
            <li>
              Family transitions (i.e. divorce, remarriage, moves, additions to
              family composition)
            </li>
            <li>Attention Deficit Hyperactivity Disorder</li>
            <li>Oppositional Defiant Disorder and Conduct Disorder</li>
          </ul>
        </p>

        <p>
          My approach is client-centered and humanistic. My experience has shown
          that when we identify and resolve the underlying cause of the
          “problem”, not only does current functioning and well-being improve,
          but the change lasts longer. I believe clients are the expert of their
          own life. My role is to partner with you in discovering the answers
          that help you heal and improve your life.
        </p>

        <p>I have helped clients:</p>
        <p>
          <ul>
            <li>Heal from traumatic experiences</li>
            <li>Extinguish maladaptive and destructive behaviors</li>
            <li>Navigate transitions in life and normal development</li>
            <li>Develop or enhance coping skills</li>
            <li>
              Establish and enforce boundaries in their personal and
              professional relationships
            </li>
            <li>Improve communication skills</li>
            <li>Develop more effective parenting practices</li>
            <li>
              Foster deeper, more meaningful relationships (and let go of
              destructive ones)
            </li>
            <li>Recognize their inner strength, potential, and worth</li>
          </ul>
        </p>
        <p>
          All behavior serves a purpose. Only when we understand what that
          purpose is can we work towards modifying or extinguishing the
          behavior. This often requires the circumstances or individuals
          contributing to the development of the behavior to also change. That
          is why family participation in treatment (especially with children and
          adolescents) is critical.
        </p>
      </PageText>
    </>
  );
};

export default Services;
