import React from 'react';
import { HomepageCallout } from 'gatsby-theme-carbon';
import { Grid, Row, Column } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink, bannerColumn, bannerRow, bannerGrid, rightList } from './Homepage.module.scss';

import Carbon from './carbon.jpg';

const FirstLeftText = () => (
  <div>
    <p>Jam-in-a-Box</p>    
    <p><strong>IBM</strong> Cloud Pak for Integration</p>
    <p>→ </p>
  </div>
);

const FirstRightText = () => (
  <p>
      Hands-on learning for <strong>IBM</strong> Cloud Pak for Integration
      <ul className={rightList}>
        <li>Reserve a <strong>CP4I</strong> lab environment on demand and use our step-by-step guides</li>
        <li>Learn <strong>CP4I</strong> capabilities from video presentations
        </li>
      </ul>
      <a
        className={calloutLink}
        href="https://ibm.box.com/s/e6n92kczuxphlhp4jl123t44if7bca23">
        Watch our presentation
      </a>
  </p>
);

/*const SecondLeftText = () => <p>Callout component</p>;

const SecondRightText = () => (
  <p>
    You can also not use these components at all by not providing the callout
    props to the template or writing your own template.
    <a
      className={calloutLink}
      href="https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/example/src/gatsby-theme-carbon/templates/Homepage.js">
      Homepage source →
    </a>
  </p>
);*/

const HomepageBanner = ({ image, position, renderText }) => (
  <Grid
    style={{
      maxWidth: '100%',
      overflow: 'hidden',
      backgroundImage: `url(${image})`,
      backgroundPosition: position || 'center',
    }}
    className={bannerGrid}
    position={position}>
    <Row className={bannerRow}>
      <Column className={bannerColumn}>{renderText()}</Column>
    </Row>
  </Grid>
);

const BannerText = () => <h1>IBM Integration Automation Jam-in-a-Box</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#0043ce"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
 /* SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),*/
};

// spreading the original props gives us props.children (mdx content)
//function ShadowedHomepage(props) {
//  return <HomepageTemplate {...props} {...customProps} />;
//}

export default ShadowedHomepage;
