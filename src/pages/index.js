import React from 'react'
// import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'

import Layout from '../components/layout'
import Wrapper from '../components/wrapper'
import Hero from '../components/hero'
import SEO from '../components/SEO'
import SkillBar from '../components/skill-bar'
import Timeline from '../components/timeline'
import Repositories from '../components/repositories'
import { Text, Title } from '../components/commons'

const profile = {
  firstName: 'Thaylo',
  lastName: 'Freitas',
  occupation: 'Computer Engineer and Software Developer',
  bio: `An auspicious engineer looking for a deeper understanding of social and technological transformations.`,
  social: {
    twitter: 'https://twitter.com/_Thaylo_',
    linkedin: 'https://www.linkedin.com/in/thaylo-freitas/en',
    github: 'https://github.com/thaylo',
    email: 'thayloxavier@gmail.com',
  },
  skills: [
    {
      name: 'Calculus',
      level: 90,
    },
    {
      name: 'C/C++',
      level: 85,
    },
    {
      name: 'Robotics and Automation',
      level: 80,
    },
    {
      name: 'MATLAB',
      level: 80,
    },
    {
      name: 'Git',
      level: 75,
    },
    {
      name: 'Python',
      level: 60,
    },
    {
      name: 'Java',
      level: 50,
    },
    {
      name: 'SQL',
      level: 50,
    },

    {
      name: 'Docker',
      level: 50,
    },
    {
      name: 'Google Kubernetes Engine',
      level: 40,
    },
  ],
}

const Separator = styled.hr`
  margin-top: 24px;
  margin-bottom: 16px;
`

class Home extends React.Component {
  render() {
    const page = {
      title: "Hello! I'm Thaylo!",
      cover: {
        publicURL: '/images/home.jpeg',
      },
    }

    return (
      <Layout location={this.props.location}>
        <SEO
          title={page.title}
          path="/"
          cover={page.cover && page.cover.publicURL}
        />

        <Hero heroImg={page.cover && page.cover.publicURL} title={page.title} />

        <Wrapper className={this.props.className}>
          <Container className="page-content" fluid>
            <Row>
              <Col xs={4} className="avatar">
                <img
                  className="avatar__image"
                  src="https://avatars2.githubusercontent.com/u/567822?s=460&v=4"
                  alt=""
                />
                <div className="social">
                  {profile.social.github && (
                    <a
                      className="social-link github"
                      href={profile.social.github}
                    >
                      <FaGithub className="social-icon" size="32" />
                    </a>
                  )}
                  {profile.social.linkedin && (
                    <a
                      className="social-link linkedin"
                      href={profile.social.linkedin}
                    >
                      <FaLinkedin className="social-icon" size="32" />
                    </a>
                  )}
                  {profile.social.twitter && (
                    <a
                      className="social-link twitter"
                      href={profile.social.twitter}
                    >
                      <FaTwitter className="social-icon" size="32" />
                    </a>
                  )}
                  {profile.social.email && (
                    <a
                      className="social-link email"
                      href={`mailto:${profile.social.email}`}
                    >
                      <FaEnvelope className="social-icon" size="32" />
                    </a>
                  )}
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={4} sm={4}>
                <Title>About</Title>
                {profile.bio && (
                  <Text dangerouslySetInnerHTML={{ __html: profile.bio }} />
                )}
              </Col>
              <Col xs={4} sm={4}>
                <Title>Skills</Title>
                {profile.skills.map(skill => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </Col>
            </Row>
            <Separator />
            <Timeline />
            <Separator />
            <Repositories />
          </Container>
        </Wrapper>
      </Layout>
    )
  }
}

export default styled(Home)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

  .avatar {
    align-items: center;
    margin-bottom: 24px;
  }

  .avatar__image {
    box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.75);
    max-width: 200px;
    border-radius: 100px;
    margin: 0 auto 24px;
  }

  .social {
    margin-top: 12px;
    margin-bottom: 12px;
  }

  .social-link {
    padding: 8px;
    color: #555;
  }

  a.social-link.twitter:hover {
    color: #1da1f2;
  }

  a.social-link.github:hover {
    color: #24292e;
  }

  a.social-link.linkedin:hover {
    color: #0077b5;
  }

  a.social-link.email:hover {
    color: #c23a2b;
  }
`
