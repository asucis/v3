import React from "react";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import getSiteInformation from "../hooks/get-site-information";
import Content from "../components/Content";
import getEventData from "../hooks/get-event-data";

const IndexPage = () => {
  const siteinfo = getSiteInformation();
  const events = getEventData();
  return (
    <Layout>
      <SEO title="Home" />
      <Content title="About CIS">{siteinfo.description}</Content>
      <Content title="Past Events">
        <Image />
      </Content>
      <Content title="Upcoming Events">
        {events.map(event => (
          <div key={event.id}>
            <p>{event.description}</p>
            <p>{event.date}</p>
          </div>
        ))}
      </Content>
    </Layout>
  );
};

export default IndexPage;
