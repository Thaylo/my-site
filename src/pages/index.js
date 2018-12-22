import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa"
import styled from 'styled-components'

import Layout from '../components/layout'
import Content from '../components/content'
import Wrapper from '../components/wrapper'
import Hero from '../components/hero'
import SEO from '../components/SEO'
import Disqus from '../components/disqus'
import SkillBar from '../components/skill-bar'
import Timeline from '../components/timeline'
import Repositories from '../components/repositories'
import { Text, Title } from '../components/commons'

const profile = {
  firstName: "Francisco",
  lastName: "Santos",
  occupation: "Frontend Developer",
  bio: ``,
  social: {
    twitter: "https://twitter.com/_franciscodf",
    linkedin: "https://www.linkedin.com/in/santos-francisco",
    github: "https://github.com/santosfrancisco",
    email: "yoshi.df@gmail.com"
  },
  skills: [
    {
      name: 'HTML',
      level: 70
    },
    {
      name: 'CSS',
      level: 60
    },
    {
      name: 'Javascript',
      level: 50
    },
    {
      name: 'NodeJs',
      level: 40
    },
    {
      name: 'React',
      level: 60
    },
    {
      name: 'Git',
      level: 70
    }
  ]
}

const Separator = styled.hr`
  margin-top: 24px;
  margin-bottom: 16px;
`

class Home extends React.Component {
  render() {
    const page = {
      title: 'Hello! I\'m Francisco!',
      cover: {
        publicURL: 'https://images.unsplash.com/photo-1533892743580-890e5b193113?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
      }

    }

    return (
      <Layout location={this.props.location}>
        <SEO
          title={page.title}
          path='/'
          cover={page.cover && page.cover.publicURL}
        />

        <Hero
          heroImg={page.cover && page.cover.publicURL}
          title={page.title}
        />

        <Wrapper className={this.props.className} >
            <Container className="page-content" fluid>
          <Row>
            <Col xs={4} className='avatar'>
              <img 
                className='avatar__image'
                src='https://avatars1.githubusercontent.com/u/15852005?s=460&v=4' alt=''
              />
              <div className="social">
                {profile.social.github && <a className="social-link github" href={profile.social.github}>
                  <FaGithub className="social-icon" size="32" />
                </a>}
                {profile.social.linkedin && <a className="social-link linkedin" href={profile.social.linkedin}>
                  <FaLinkedin className="social-icon" size="32" />
                </a>}
                {profile.social.twitter && <a className="social-link twitter" href={profile.social.twitter}>
                  <FaTwitter className="social-icon" size="32" />
                </a>}
                {profile.social.email && <a className="social-link email" href={`mailto:${profile.social.email}`}>
                  <FaEnvelope className="social-icon" size="32" />
                </a>}
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={4} sm={4}>
              <div>
                <Title>Sobre</Title>
                {/* <p>{profile.bio && profile.bio}</p> */}
                <Text>
                  Desenvolvedor, apaixonado pelo que faço. Sempre interessado em como os sites foram feitos, comecei a estudar HTML por hobby.
                </Text>
                <Text>
                  Em 2012 comecei a trabalhar como técnico de suporte e me aproximei dos desenvolvedores.
                  Em 2015, comecei a estudar C# e comecei a contribuir com a equipe dando manutenção em uma aplicação em C# e .NET.
                </Text>
                <Text>
                  Atualmente atuo como desenvolvedor frontend e trabalho principalmente com <strong>Javascript, NodeJS e React.</strong>
                </Text>
              </div>
            </Col>
            <Col xs={4} sm={4}>
              <div>
                <Title>Skills</Title>
                {profile.skills.map(skill => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}

              </div>
            </Col>
          </Row>
          <Separator />
          <Timeline />
          <Separator />
          <Repositories />
        </Container>
        </Wrapper>

        {false && (
          <Wrapper>
            <Disqus
              slug={page.slug}
              title={page.title}
            />
          </Wrapper>
        )}
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
  }

  .avatar__image {
    box-shadow: 3px 3px 15px 0px rgba(0,0,0,0.75);
    max-width: 200px;
    border-radius: 100px;
    margin: 0 auto;
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
    color: #0077B5;
  }

  a.social-link.email:hover {
    color: #c23a2b;
  }
`