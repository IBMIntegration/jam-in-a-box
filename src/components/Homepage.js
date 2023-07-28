import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from './carbon.jpg';

const FirstLeftText = () => <p>Jam-in-a-Box</p>;

const FirstRightText = () => (
  <p>
      IBM WW Integration SWAT Team offers Jam-in-a-Box which will enable our tech sellers, 
      business partners to reserve a CP4I lab environment on demand ,learn and 
      execute cp4i capabilities from the video enabled presentations along with step-by-step 
      guide for labs. 
      <a href="https://ibm.box.com/s/e6n92kczuxphlhp4jl123t44if7bca23">Click here</a>
     to listen to the  the audio presenation of cp4i capabilities.{"\n\n\n"}
  

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


const BannerText = () => <h1>IBM Integration Automation Jam-in-a-Box </h1>;

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
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
