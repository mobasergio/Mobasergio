import React from 'react';
import Folder from '../assets/folder.svg'
import Github from '../assets/github.svg'
import External from '../assets/external.svg'

const Work = (props) => {
  return (
    <section id="work">
      <h3>Some things I've built</h3>
      <div>

        {props.data.allMarkdownRemark.edges.map(({ node }, index) => (
          <div key={index}>
            <div>
              <div id="icons">
                <div>
                  <img src={Folder} alt="folder icon" />
                </div>
                <div>
                  <a href={node.frontmatter.github} target="_blank" rel="noopener noreferrer">
                    <img src={Github} alt="github icon" />
                  </a>
                  <a href={node.frontmatter.external} target="_blank" rel="noopener noreferrer">
                    <img src={External} alt="external link icon" />
                  </a>
                </div>
              </div>
              <h4>{node.frontmatter.title}</h4>
              <p>{node.excerpt}</p>
            </div>
            <div>
              <ul>
                {node.frontmatter.tech.map((tech, index) => <li key={index}>{tech}</li>)}
              </ul>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
 
export default Work;