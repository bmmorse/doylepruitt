import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
  Link,
} from 'react-router-dom';

// Components
import images from './components/_images';
import { GlobalStyle, VAR } from './components/GlobalStyle';
import {
  Outer,
  HiddenMenu,
  Inner,
  Header,
  NamePhd,
  MenuButtonAnimation,
  MenuButton,
  HiddenMenuLinks,
  HiddenMenuLinksWrap,
  Text,
  IntroImages,
  Contact,
  ContactItem,
} from './components/Home';

// Menu
import SiteMenu from './components/Menu';

const ContactFunc = () => {
  return (
    <Contact>
      <ContactItem>
        <img src={images.phone} alt='' />
        <h3>585.314-0321</h3>
      </ContactItem>
      <ContactItem>
        <img src={images.mail} alt='' />
        <h3>contact@drdoylepruitt.com</h3>
      </ContactItem>
      <ContactItem>
        <img src={images.marker} alt='' />
        <h3>
          243 Center Street<br></br>Canandaigua, New York
        </h3>
      </ContactItem>
    </Contact>
  );
};

class App extends React.Component {
  state = {
    isHidden: true,
  };

  render() {
    function ScrollToTop() {
      const { pathname } = useLocation();

      useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);

      return null;
    }
    const handleClick = (e) => {
      this.setState({ isHidden: !this.state.isHidden });
    };

    const StyledApp = styled.div`
      position: relative;
      width: 100%;
      overflow: ${!this.state.isHidden ? 'hidden' : 'auto'};
      height: ${!this.state.isHidden ? '100vh' : 'auto'};
    `;

    return (
      <Router>
        <ScrollToTop />
        <GlobalStyle />
        <Switch>
          <StyledApp>
            <Outer>
              <SiteMenu></SiteMenu>
              <HiddenMenu isHidden={this.state.isHidden}>
                <HiddenMenuLinks>
                  <ul>
                    <Link to='/' onClick={handleClick}>
                      Home
                    </Link>
                    <Link to='/bio' onClick={handleClick}>
                      Bio
                    </Link>
                    <Link to='/services' onClick={handleClick}>
                      Services
                    </Link>
                    <Link to='/scholarship' onClick={handleClick}>
                      Scholarship
                    </Link>
                    <Link to='/blog' onClick={handleClick}>
                      Blog
                    </Link>
                    <Link to='/fees' onClick={handleClick}>
                      Fees
                    </Link>
                    <Link to='/contact' onClick={handleClick}>
                      Contact
                    </Link>
                  </ul>
                </HiddenMenuLinks>
              </HiddenMenu>
              <Inner>
                <MenuButton
                  onClick={(e) =>
                    this.setState({ isHidden: !this.state.isHidden })
                  }
                >
                  Menu
                </MenuButton>
                <Header>
                  <Link to='/'>
                    <img src={images.doyleCircle} alt='' />
                  </Link>
                  <NamePhd>
                    <h1>Doyle Pruitt</h1>
                    <span>Ph.D. LCSW-R</span>
                  </NamePhd>

                  {/* <div className='line'></div> */}
                </Header>
                <Route exact path='/'>
                  <Text>
                    <h2>Finger Lakes Therapy</h2>
                    <p>
                      I’m a trauma and child therapist with over 15 years of
                      clinical experience.
                    </p>
                    <p>
                      At my private practice in Canandaigua, NY, I work with
                      individuals of all ages who are facing trauma, adversity,
                      and loss, family systems navigating interpersonal stress
                      and changes, and folks seeking more fulfillment in their
                      lives.
                    </p>

                    <p>
                      I believe my clients are the experts of their own lives,
                      and my role is to partner with them to discover the
                      answers needed to begin healing.
                    </p>
                  </Text>
                  <IntroImages>
                    <img src={images.office} alt='' />
                    <img src={images.porter} alt='' />
                  </IntroImages>
                  <ContactFunc />
                </Route>
                <Route exact path='/bio'>
                  <Text>
                    <h2>Bio</h2>
                    <p>
                      In 2001 I earned a Bachelor of Science degree in both
                      Psychology and Social Work from Nazareth College. I
                      graduated from Syracuse University in 2002 with an MSW
                      degree. In 2012, I successfully passed New York State’s
                      licensing exams and met the criteria needed to earn the
                      coveted LCSW-R. In 2013, I earned a PhD from the
                      University at Buffalo.
                    </p>
                  </Text>
                </Route>
                <Route exact path='/services'>
                  <Text>
                    <h2>Services</h2>
                    <p>
                      While I primarily provide services to children and
                      families, I also have experience working with adults
                      coping with loss, trauma, anxiety, and relationship
                      strains. I am an expert in trauma therapy, treatment of
                      children and youth who cause sexual harm, and juvenile
                      delinquency.
                    </p>
                    <p>
                      My clinical practice has included work with individuals
                      coping with:
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
                          Family transitions (i.e. divorce, remarriage, moves,
                          additions to family composition)
                        </li>
                        <li>Attention Deficit Hyperactivity Disorder</li>
                        <li>
                          Oppositional Defiant Disorder and Conduct Disorder
                        </li>
                      </ul>
                    </p>

                    <p>
                      My approach is client-centered and humanistic. My
                      experience has shown that when we identify and resolve the
                      underlying cause of the “problem”, not only does current
                      functioning and well-being improve, but the change lasts
                      longer. I believe clients are the expert of their own
                      life. My role is to partner with you in discovering the
                      answers that help you heal and improve your life.
                    </p>

                    <p>I have helped clients:</p>
                    <p>
                      <ul>
                        <li>Heal from traumatic experiences</li>
                        <li>
                          Extinguish maladaptive and destructive behaviors
                        </li>
                        <li>
                          Navigate transitions in life and normal development
                        </li>
                        <li>Develop or enhance coping skills</li>
                        <li>
                          Establish and enforce boundaries in their personal and
                          professional relationships
                        </li>
                        <li>Improve communication skills</li>
                        <li>Develop more effective parenting practices</li>
                        <li>
                          Foster deeper, more meaningful relationships (and let
                          go of destructive ones)
                        </li>
                        <li>
                          Recognize their inner strength, potential, and worth
                        </li>
                      </ul>
                    </p>
                    <p>
                      All behavior serves a purpose. Only when we understand
                      what that purpose is can we work towards modifying or
                      extinguishing the behavior. This often requires the
                      circumstances or individuals contributing to the
                      development of the behavior to also change. That is why
                      family participation in treatment (especially with
                      children and adolescents) is critical.
                    </p>
                  </Text>
                </Route>
                <Route exact path='/scholarship'>
                  <Text>
                    <h2>Scholarship</h2>
                    <p>
                      Pruitt, D.K., & Kozik, P. Trauma, adversity, and the
                      classroom teacher: Systematically planning for safety and
                      resiliency. The Handbook of Trauma Informed Practices
                      (Accepted).
                    </p>

                    <p>
                      Wolf, M.R., & Pruitt, D.K. (2019). Grooming hurts too: The
                      effects of perpetrator grooming types on trauma symptoms
                      in adult survivors of child sexual abuse. Journal of Child
                      Sexual Abuse, 28(3), 345-359. Doi:
                      10.1080/10538712.2019.1579292.
                    </p>

                    <p>
                      Glennon, A., Pruitt, D.K., & Polmanteer, R.S.R. (2019).
                      Integrating self-care into clinical practice with trauma
                      clients. Journal of Human Behavior and Social Environment,
                      29(1), 48-56. Doi: 10.1080/10911359.2018.1473189
                    </p>

                    <p>
                      Wolf, M.R., Linn, B.K., & Pruitt, D.K. (2018). Grooming
                      child victims into sexual abuse: A psychometric analysis
                      of survivors’ experiences. Journal of Sexual Aggression,
                      24(2), 214-223. Doi:10.1080/13552600.2018.1504555
                    </p>

                    <p>
                      Pruitt, D.K., & Dulmus, C. (April 2016). Child sex
                      offenders. Encyclopedia of Gender and Sexuality Studies
                      (Invited).{' '}
                    </p>

                    <p>
                      O’Connor, V., & Pruitt, D.K. (2016). Experiential learning
                      through group work and theater. Social Work with Groups,
                      1-11.{' '}
                    </p>
                    <p>
                      Pruitt, D.K., & Silverman, E. (2015). Research Note-
                      Program evaluation: Enhancing academic quality and program
                      integrity during rapid off-site growth. Journal of Social
                      Work Education, 51(3), 595-603. doi:
                      10.1080/10437797.2015.1043206
                    </p>
                    <p>
                      Pruitt, D.K. (2013). An evaluation of a comprehensive and
                      restorative residential treatment program for youth who
                      cause sexual harm: Do family engagement and trauma-focused
                      interventions matter? (Doctoral dissertation).
                    </p>
                    <p>
                      Green, S., & Pruitt, D.K. (October 2013). Trauma-focused
                      cognitive behavioral therapy. Encyclopedia of Social Work
                      (online).
                    </p>
                    <p>
                      Episode 132 - Dr. Doyle Pruitt: Understanding and
                      Responding to Youth Who Engage in Sexual Harm. (2013,
                      November 25). inSocialWork Podcast Series. [Audio Podcast]
                      Retrieved from
                      http://www.socialwork.buffalo.edu/podcast/episode.asp?ep=132
                    </p>
                    <p>
                      Adler, H., & Pruitt, D.K. (2012). A paradigm shift: A
                      collaborative trauma informed approach to residential
                      treatment for youth who have engaged in sexual harm. In
                      B.K. Schwartz (Eds.), The Sex Offender, vol. 7, (pp.
                      23-1-23-20).{' '}
                    </p>
                    <p>
                      Pruitt, D.K. & Dulmus, C.N. (2010). School-based
                      interventions for sexually aggressive youth with
                      developmental disabilities. School Social Work Journal,
                      34(2), 56-70.
                    </p>
                    <p>
                      Pruitt, D.K. (2010). Demonizing youth: The implication of
                      sex offender policies on youth. Schlossplatz. Winter(9),
                      34-37.
                    </p>

                    <h2>Presentations</h2>

                    <p>
                      Pruitt, D.K., & Robinson-Elhausen, C. (2020, October).
                      Model: CAC and offender providers collaborating to improve
                      care. Paper session at the annual Association for the
                      Treatment of Sexual Abuse conference, San Antonio, Texas,
                      United States.
                    </p>
                    <p>
                      Pruitt, D.K. (2020, May). Child Advocacy Centers and sex
                      offender providers: Working together to build capacity and
                      comprehensive care in a rural community. [Conference
                      session]. NYS ATSA Conference, Saratoga Springs, NY,
                      United States. http://nysatsa.com/2019-joint-conference/
                      (Conference canceled).
                    </p>
                    <p>
                      Pruitt, D.K., Wolf, M.R., & Leet, T. (2020, May). Lessons
                      learned: Creation and testing of a scale for sex
                      offenders' perception of their grooming behaviors. [Paper
                      session]. NYS ATSA Conference, Saratoga Springs, NY,
                      United States. http://nysatsa.com/2019-joint-conference/
                      (Conference canceled due to COVID-19).{' '}
                    </p>
                    <p>
                      Pruitt, D.K. & Watkins, M. (2019, October). Youth
                      Development Services: Opportunities for Research,
                      Teaching, and BSW Field Practicum Experiences. Poster
                      presentation presented to Council of Social Work Education
                      Annual Program Conference, Denver, Colorado.
                    </p>
                    <p>
                      Pruitt, D.K., & Hanggi, M.A. (2019, July). Psychotropic
                      medication with youth who cause sexual harm: A valid
                      treatment method or chemical restraint? Paper session
                      presented at the International Academy of Law and Mental
                      Health Conference, Rome, Italy.
                    </p>
                    <p>
                      Pruitt, D.K., & Wolf, M.R. (2019, May). Grooming
                      behaviors: Findings on the impact on adult survivors of
                      child sexual abuse and implications for treatment.
                      Presentation at the New York State Association for the
                      Treatment of Sexual Abuse Conference, Saratoga Springs,
                      NY.
                    </p>
                    <p>
                      Pruitt, D.K. (2018, November). Therapeutic considerations
                      when a client is both victim and aggressor. Poster
                      presentation presented to Council of Social Work Education
                      Annual Program Conference, Orlando, Florida.
                    </p>
                    <p>
                      Glennon, A., O’Connor, V., & Pruitt, D.K. (2018, October).
                      Identification and Ethical Management of Student Mental
                      Health issues in the College Setting. Paper presentation
                      for the New York State Social Work Education Association,
                      Saratoga Springs, NY.
                    </p>
                    <p>
                      Wolf, M.R., & Pruitt, D.K. (2018, January). Grooming
                      children into child sexual abuse and its effects on adult
                      trauma symptoms. Oral presentation presented at Society
                      for Social Work and Research, Washington D.C.
                    </p>
                    <p>
                      Pruitt, D.K. (2017, October). Reducing Risk of Recidivism
                      by Fostering Resiliency: An Examination of the Impact a
                      Restorative Treatment Program Has on Juvenile Sex Offender
                      Outcomes. Paper session presented at the 10th European
                      Congress on Violence in Clinical Psychiatry, Dublin,
                      Ireland.
                    </p>
                    <p>
                      Pruitt, D.K. (2017, July). Trauma therapy as a means of
                      reducing post-traumatic symptomology in juvenile sex
                      offenders: Does it work? Paper session presented at the
                      International Academy of Law and Mental Health Conference,
                      Prague, Czech Republic.
                    </p>
                  </Text>
                </Route>
                <Route exact path='/blog'>
                  <Text>
                    <h2>Coming Soon!</h2>
                  </Text>
                </Route>
                <Route exact path='/fees'>
                  <Text>
                    <h2>Fees</h2>
                    <p>Individual therapy: $120/therapy hour</p>
                    <p>Court appearances: $400/hour minimum two hours</p>
                    <p>Clinical Supervision: $100/hour </p>
                  </Text>
                </Route>
                <Route exact path='/contact'>
                  <ContactFunc />
                </Route>
              </Inner>
            </Outer>
          </StyledApp>
        </Switch>
      </Router>
    );
  }
}

export default App;
