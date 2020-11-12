import React from 'react';
import styled from 'styled-components';
import VAR from '../../helpers/VAR';

import Banner from '../_page/_banner';
import PageText from '../_page/_text';
import List from '../_page/_List';

const AdvancedTrainings = List.color;

const Bio = () => {
  return (
    <>
      <Banner>Bio</Banner>
      <PageText>
        <h2>Bio</h2>
        <section>
          <p style={{ margin: '0' }}>
            In 2001 I earned a Bachelor of Science degree in both Psychology and
            Social Work from Nazareth College. I graduated from Syracuse
            University in 2002 with an MSW degree. In 2012, I successfully
            passed New York State’s licensing exams and met the criteria needed
            to earn the LCSW-R. In 2013, I earned a PhD from the University at
            Buffalo.
          </p>
        </section>
        <section>
          <h3>Trauma Expert</h3>
        </section>
        <section>
          <p>
            My work with trauma survivors is grounded in Attachment Theory. In
            this perspective, the therapist-client relationship is understood to
            be a fundamental aspect of treatment. As each individual responds
            differently to trauma, the particular approach and methods used must
            be carefully chosen to fit their unique needs. I integrate a number
            of modalities: sensorimotor psychotherapy, EMDR, TF-CBT,
            psychodynamic psychotherapy, and play.
          </p>
          <p style={{ margin: '0' }}>
            My goal with the client is to first establish safety and
            stabilization. Once this is achieved we can move towards exploring
            and understanding their trauma. This does NOT mean clients must
            recall, in detail, what has happened to them. Resolving trauma can
            be achieved by recognizing and reducing the power of triggers,
            understanding symptoms in the context they developed, taking control
            of emotions, and developing mindfulness. This mind-body approach
            enables the client to develop more adaptive functioning, change
            their belief system, and take control over their life.
          </p>
        </section>
        <section>
          <h3>15+ years of clinical experience</h3>
        </section>

        <section>
          <h2>Advanced Trainings</h2>
          <AdvancedTrainings>
            <li>
              <span>FLASH Technique (2020)</span>
              <span>Dr. Philip Manfield & Dr. Lewis Engel</span>
            </li>
            <li>
              <span>Practice Fellow- Clinical Supervision (2018)</span>
              <span>Adelphi University</span>
            </li>
            <li>
              <span>
                Working with the Neurobiological Legacy of Trauma, Levels I, II,
                & III (2014-2016)
              </span>
              <span>Dr. Janina Fisher</span>
            </li>
            <li>
              <span>EMDR Trained- Basic (2013)</span>
              <span>
                EMDR International Association Approved- Child Trauma Institute
              </span>
            </li>
            <li>
              <span>
                Trauma-Focused Cognitive Behavioral Therapy Certified Therapist
                Training (2012)
              </span>
              <span>The National Child Traumatic Stress Network</span>
            </li>
            <li>
              <span>
                Trauma-Focused Crisis Intervention for Critical Incidents:
                Individual Crisis Intervention and Peer Support Certified (2012)
              </span>
              <span>International Critical Incident Stress Foundation</span>
            </li>
          </AdvancedTrainings>
        </section>
      </PageText>
    </>
  );
};

export default Bio;
